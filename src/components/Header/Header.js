import React, { useState } from "react";
import logo from '../../assets/img/icon/logo.svg'
import { Link } from "react-router-dom";
import Portal from "../Portal/Portal";
import ModalAuth from "../ModalAuth/ModalAuth";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actinns";
import ModalBasket from "../ModalBasket/ModalBasket";

const Header = () => {

    const [isLoginModal, setIsLoginModal] = useState(false)
    const [isBasketModal, setIsBasketModal] = useState(false)

    const login = useSelector(state => state.login);
    const dispatch = useDispatch();

    const toggleLoginModalOpen = () => {
        setIsLoginModal(!isLoginModal);
    };
    const toggleBasketModalOpen = () => {
        setIsBasketModal(!isBasketModal);
    };

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <header className="store-header">
            <div className="container">
                <div className="store-header__wrapper">
                    <Link to={'/'}>
                        <img src={logo} alt='logo'/>
                    </Link>
                    <label className="store-header__address">
                        <input type="text" className="input store-header__input-address" placeholder="адресса доставки"/>
                    </label>

                    <div className="store-header__buttons">
                        <span className="store-header__user-name">{login}</span>

                        {!!login
                            ? <>
                                <button className="button button-cart" onClick={toggleBasketModalOpen}>
                                    <span className="button-text">Корзина</span>
                                    <span className="button-cart-svg"></span>
                                </button>

                                <button onClick={handleLogOut} className="button button-primari button-out">
                                    <span className="button-text">Вийти</span>
                                    <span className="button-out-svg"></span>
                                </button>
                            </>
                            : (
                                <button onClick={toggleLoginModalOpen} className="button button-primary button-auth">
                                    <span className="button button-auth-svg"></span>
                                    <span className="button-text">Увійти</span>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

        {isLoginModal && <Portal><ModalAuth onClose={toggleLoginModalOpen} /></Portal>}
        {isBasketModal && <Portal><ModalBasket login={login} onClose={toggleBasketModalOpen} /></Portal>}
        </header>
    )
}

export default Header;