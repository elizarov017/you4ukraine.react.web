import React, { useRef, useState } from 'react'
import { Carousel, Container, Overlay, Tooltip } from 'react-bootstrap';
import AppButton from '../AppButton/AppButton';
import SizeTab from '../SizeTab/SizeTab';
import { TailSpin } from  'react-loader-spinner'
import ApplicationConstants from '../../ApplicationConstants'
import './ItemSection.scss'
import orderService from '../../services/OrderService';
import { toast } from 'react-toastify';
import AppInput from '../AppInput/AppInput';

export default function ItemSection({ item }) {
    const [show, setShow] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [price, setPrice] = useState('');
    const [priceFormValid, setPriceFormValid] = useState(true)
    const [sizeFormValid, setSizeFormValid] = useState(true)
    const target = useRef(null);

    function handlePriceChange(event) {
        setPrice(event.target.value)
        setPriceFormValid(true);
    }

    function handleSizeChange(size) {
        setSelectedSize(size);
        setSizeFormValid(true);
    }

    function handleSubmit() {
        let isValid = true;
        setPriceFormValid(true);
        let parsePrice = parseFloat(price, 10);

        if (isNaN(parsePrice) || parsePrice < item.price || parseFloat(parsePrice.toFixed(2)) !== parsePrice) {
            setPriceFormValid(false);
            isValid = false;
        }

        if (item?.sizes?.length && !selectedSize) {
            setSizeFormValid(false);
            isValid = false;
        }

        if (isValid) {
            toast('Item successfully added to cart');
            orderService.addStorageItem(item, parseFloat(parsePrice.toFixed(2)), selectedSize);
        }

    }



  return (
      <>
      <Container className='item-section-wrapper'>
        {
            !item ?
                <div className="loader-wrap">
                    <TailSpin color={ApplicationConstants.COLORS.PRIMARY} height={100} width={100} />
                </div>
            :
                <>
                    <div className="app-carousel">
                        <Carousel interval={null}>
                            {
                                item.imgPath.map((img, index) => (
                                <Carousel.Item key={index}>
                                <div className=" d-block image-wrap" style={{backgroundImage: `url('${img}')`}}>
                                </div>
                            </Carousel.Item>))
                            }
                        </Carousel>
                    </div>
                    <div className="content-wrap">
                        <div className="info-wrap">
                            <h3>{item.itemName}</h3>
                            {item.author && <span className='author-label'>by {item.author.join(', ')}</span>}
                        </div>
                        <div className="price-form">
                            <AppInput
                                preText={'$'}
                                type="number"
                                isValid={priceFormValid}
                                onFocus={() => setPriceFormValid(true)}
                                value={price}
                                onChange={handlePriceChange}
                                name={"price"}
                                placeholder={`enter your price`}
                                error={`price should be ${item.price} or higher and allowed only two digits after dot`}
                                min={item.price}
                            />
                            <div className="min-price-wrap">Minimum price: ${item.price}</div>
                        </div>
                        {
                            item?.sizes?.length ?
                                (<div className="size-form">
                                    <div className="label-wrap">
                                        <span>Size:</span>
                                        <div className="size-chart-wrap">
                                            <span ref={target} onClick={() => setShow(!show)}>
                                                Size chart
                                            </span>
                                            <Overlay placement='bottom-end' target={target} show={show}>
                                                {(props) => (
                                                <Tooltip id="overlay" {...props}>
                                                    <img src="/resources/size-chart.svg" alt="" />
                                                </Tooltip>
                                                )}
                                            </Overlay>
                                        </div>
                                    </div>
                                    <div className="size-tabs-form">
                                        {
                                            item.sizes.map((size, index) => <SizeTab sizeName={size} key={index} onClick={(e) => handleSizeChange(size)} isActive={selectedSize === size}/>)
                                        }
                                        <div
                                            style={{display: sizeFormValid ? 'none' : 'flex'}}
                                            className="error-text"
                                        >
                                            *you need to choose one size
                                        </div>
                                    </div>
                                </div>)
                            :
                            ""
                        }
                        <div className="button-wrap">
                            <AppButton text={'Add to cart'} action={() => {handleSubmit()}}></AppButton>
                        </div>
                    </div>
                </>
        }
        </Container>
      </>
  )
}
