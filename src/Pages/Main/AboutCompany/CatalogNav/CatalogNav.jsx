import { NavLink, useLocation } from "react-router-dom";
import Categories from "./categories.json"
import "./catalog-nav.scss"



export default function CatalogNav() {

    const location = useLocation();
    const currentCategory = Categories.find(cat => cat.to === location.pathname);
    return (
        <>
            <div className="path">
                <NavLink to="/" className="path__main">Главная</NavLink>
                <img src="./src/assets/icons/arrow-path.svg" alt="" className="arrow" />
                <NavLink to="/aboutCompany/certificates" className="path__about-company">О компании</NavLink>
                <img src="./src/assets/icons/arrow-path.svg" alt="" className="arrow" />
                <a to="/aboutCompany" className="path__category"> {currentCategory ? currentCategory.name : ""}</a>
            </div>

            <div className="catalog">
                {Categories.map((data) => (<NavLink to={data.to} key={data.id} className = {({ isActive }) => isActive ? "opt true" : "opt"}>{data.name}</NavLink>))}
            </div>
        </>
    );

  }
