import { Route, Routes, Navigate } from 'react-router-dom'
import "./about_company.scss"
import "/src/assets/icons/arrow-path.svg"
import CatalogNav from "./CatalogNav/CatalogNav";

import Certificates from "./CatalogPages/Certificates/Certificates";
import CompanyPolicy from "./CatalogPages/CompanyPolicy/CompanyPolicy";
import Agreement from "./CatalogPages/Agreement/Agreement";
import Work from "./CatalogPages/Work/Work";
import Guarantees from "./CatalogPages/Guarantees/Guarantees";
import Vacancies from "./CatalogPages/Vacancies/Vacancies";


export default function AboutCompany() {
    return (
        <div className="container">
            <div className="about-company">
                <CatalogNav />
                <Routes>
                    <Route index element={<Navigate to="certificates" replace />} />
                    <Route path='certificates' element={<Certificates />} />
                    <Route path='companyPolicy' element={<CompanyPolicy />} />
                    <Route path='agreement' element={<Agreement />} />
                    <Route path='work' element={<Work />} />
                    <Route path='guarantees' element={<Guarantees />} />
                    <Route path='vacancies/*' element={<Vacancies />} />
                </Routes>
            </div>
        </div>
    );
}
