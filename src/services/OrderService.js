import store from "store";

class OrderService {

    cartUpdateHandlers = [];

    setCartUpdateHandlers(callback) {
        this.cartUpdateHandlers.push(callback);
        this.callCartUpdateHandlers();
    }

    callCartUpdateHandlers() {
        this.cartUpdateHandlers.forEach(callback => callback());
    }

    getStorageCart() {
        let order = store.get('order');

        if (!order) {
            store.set('order', {items: [], fullPrice: 0, lastId: 0});
            order = {items: [], fullPrice: 0, lastId: 0};
        }
        return order;
    }

    getStorageLength() {
        let order = store.get('order');

        if (!order) {
            store.set('order', {items: [], fullPrice: 0, lastId: 0});
            return 0;
        }
        return order.items.length;
    }

    addStorageItem(item, price, size) {
        let order = store.get('order');
        let orderItem = Object.assign({}, item);

        if (!order) {
            store.set('order', {items: [], fullPrice: 0, lastId: 0});
            order = {items: [], fullPrice: 0, lastId: 0};
        }

        orderItem.price = price;
        orderItem.size = size;
        orderItem.cartId = order.lastId++;
        order.items.push(this.convertItemToOrder(orderItem));
        order.fullPrice += (Math.round(parseFloat(price) * 100)/100);

        store.set('order', order);
        this.callCartUpdateHandlers();
    }

    removeStorageItem(item) {
        console.log('asd');
        let order = store.get('order');
        let removeItem = Object.assign({}, item);

        if (!order) {
            store.set('order', {items: [], fullPrice: 0, lastId: 0});
            order = {items: [], fullPrice: 0, lastId: 0};
        }

        order.items = order.items.filter(element => element.cartId !== removeItem.cartId);
        order.fullPrice -= (Math.round(parseFloat(removeItem.price) * 100)/100);

        if (order.items.length === 0) order.lastId = 0;

        store.set('order', order);
        this.callCartUpdateHandlers();
    }

    convertItemToOrder(item) {
        return item;
    }
}

const orderService = new OrderService();

export default  orderService;