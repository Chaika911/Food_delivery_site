import React, { useState } from "react";
import { logIn } from '../../redux/actinns'
import { useDispatch } from "react-redux";

const ModalAuth = ( {onClose}) => {

    const dispatch = useDispatch();


    const [loginData, setLoginData] = useState({
        login: '',
        password: ''
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target;

        setLoginData({
            ...loginData,
            [name]:value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logIn(loginData.login));
        onClose();
    }


    return(
        <div className="modal-auth" onClick={onClose}>
            <div className="modal-dialog modal-dialog-auth" onClick={e  => e.stopPropagation()}>
                <button className="close-auth" onClick={onClose}>&times;</button>
                <form onSubmit={handleSubmit}>
                    <fieldset className="modal-body">
                        <legend className="modal-title">Autorization</legend>

                        <label className="label-auth">
                            <span>login</span>
                            <input value={loginData.login} onChange={handleInputChange} type="text" name="login"/>
                        </label>

                        <label className="label-auth">
                            <span>password</span>
                            <input value={loginData.password} onChange={handleInputChange} type="password" name="password"/>
                        </label>
                    </fieldset>

                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className="button button-primary button-login">Sing In</button>

                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default ModalAuth;