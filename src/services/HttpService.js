import { ajax } from 'rxjs/ajax';

export default class HttpService {

    static appUrl = process.env.REACT_APP_BASE_URL;

    static backApiUrl = this.appUrl + '/api/v1';

    static getCategories() {
        return ajax.get(this.backApiUrl + '/categories');
    }
    static getCategoryById(id) {
        return ajax.get(this.backApiUrl + '/categories/' + id);
    }

    static getItemById(id) {
        return ajax.get(this.backApiUrl + '/shopItems/' + id);
    }

    static sendOfferEmail(name, email, message) {
        return ajax.post(
            this.backApiUrl + '/order/sendEmail',
            {
                name,
                email,
                message
            }
        )
    };
}