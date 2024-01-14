import React from 'react';
import { Context } from "../index";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/header.css';
import { useNavigate } from "react-router";
import {observer} from 'mobx-react-lite'
import { REGISTRATION_ROUTE, HOME_ROUTE } from '../utils/consts';
import { withExtraArgument } from 'redux-thunk';


const Header = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut = ()=>{
        localStorage.clear()
        navigate(HOME_ROUTE)
   }
    return ( 
        <>
        

            <nav className="navbar navbar-expand-lg  header-container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Регистратура</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link " active aria-current="page" href="/">Главная</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/doctors">Врачи</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/schedule">График</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/rooms'>Кабинеты</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/questions'>Вопрос-Ответ</a>
                            </li>
                            {localStorage.isAuth?
                            <li className="nav-item">
                            <a className="nav-link" href='/profile'>Профиль</a>
                            </li> : <></>
                            }
                            {localStorage.isAuth ?
                                <button type="button" class="btn" onClick={()=>logOut()}>Выйти</button>
                                 :
                                <button type="button" class="btn" onClick={()=> navigate(REGISTRATION_ROUTE)}>Войти</button>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

             
        </>
        
     );
})
 
export default Header;