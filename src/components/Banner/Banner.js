import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }
    return (
        <div className="container-promo swiper" >
            <div className="swiper-wrapper">
                <Slider {...settings} >
                    <section  className="swiper-slide promo pizza">
                        <h2 className="promo-title">Онлайн сервіс <br/>доставки їжі додому</h2>
                        <p className="promo-text">Страву з улюбленого ресторану привезе курьєр в масці</p>

                    </section>
                    <section  className="swiper-slide promo kebab">
                        <h2 className="promo-title">Шашлики <br/>зі знижкою 30%</h2>
                        <p className="promo-text">Замовляйте шашлики в улюбленому ресторані</p>

                    </section>
                    <section  className="swiper-slide promo vegetables">
                        <h2 className="promo-title">Знижка на всі страви 20% <br/>по промокоду LOVE.JS</h2>
                        <p className="promo-text">Страву з улюбленого ресторану привезе курьєр в масціі</p>

                    </section>
                    <section  className="swiper-slide promo sushi">
                        <h2 className="promo-title">Сети зі знижкою 30% <br/>в ресторані</h2>
                        <p className="promo-text">Знижки на сети до 30-го травня</p>

                    </section>

                </Slider>
            </div>

        </div>
    )
}
export default Banner;