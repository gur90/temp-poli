import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';
import logoza from './logoza.ru.png';
import style from './Header.module.css';

function Header(): JSX.Element {
    const navigate = useNavigate();
    function homeClick():void {
        navigate('/home');
    }
    function equipmentClick():void {
        navigate('/equipment');
    }
    function specialistsClick():void {
        navigate('/specialists');
    }
    function contactsClick():void {
        navigate('/contacts');
    }
    function logoClick():void {
        navigate('/');
    }
    return (
        <div className={style.header_container}>
           <a href="#" onClick={logoClick}><img src={logoza} alt="logo" className={style.logo} /></a>
           <button type="button" onClick={homeClick}>Главная</button>
           <button type="button" onClick={equipmentClick}>Оборудование</button>
           <button type="button" onClick={specialistsClick}>Специалисты</button>
           <button type="button" onClick={contactsClick}>Контакты</button>
        </div>
    );
}
export default Header;
