import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './header.scss'
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/MENU.svg";
import phone from "../../assets/icons/phone.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
    return (
      <>
      <nav className="nav">
        <div className="container nav__content">

          <NavLink to="/" className="img">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>

          <div className="catalog">
            <NavLink to="/RepairAndDecoration" className="txt opt">Ремонт и отделка</NavLink>
            <NavLink to="/aboutCompany" className="txt opt">О компании</NavLink>
            <NavLink to="#" className="txt opt">Наши работы</NavLink>
            <NavLink to="#" className="txt opt">Контакты</NavLink>
            <p className="txt-black">+7 495 150 24 93</p>
          </div>

          <div className="bar">
            <div className="icons">
              <img className="phone" src="/src/assets/icons/phone.svg" alt="" />
              <img onClick={toggleDropdown} src="/src/assets/icons/MENU.svg" alt="" />
            </div>

            {isOpen && (
              <div className="dropdown">
                <NavLink to="/RepairAndDecoration" className="txt opt">Ремонт и отделка</NavLink>
                <NavLink to="/aboutCompany" className="txt opt">О компании</NavLink>
                <NavLink to="#" className="txt opt">Наши работы</NavLink>
                <NavLink to="#" className="txt opt">Контакты</NavLink>
              </div>
            )}
          </div>               
        </div>
      </nav>
      </>
    );
  }