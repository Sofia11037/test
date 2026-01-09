
import './Repair_and_decoration.scss'
import Instagram from '../../Local/Instagram/Instagram';
import { NavLink } from 'react-router-dom';


export default function RepairAndDecoration() {
    return (
        <div className="repair_and_decoration">
            <div className="container">

                <div className="path">
                    <NavLink to="/" className="path__main">Главная</NavLink>
                    <img src="/src/assets/icons/arrow-path.svg" alt="" className="arrow" />
                    <NavLink to="/RepairAndDecoration" className="path__about-company">Ремонт и отделка</NavLink>
                </div>

                <h2 className="title">Строим и ремонтируем всё, что представляет собою недвижимость</h2>
                <div className="txt">квартиры, коттеджи, таунхаусы, офисы, магазины, деревянные дома и т.д.</div>
            </div>

            <img src="/src/assets/images/company.png" alt="" className="img" />

            <div className="container">
                <div className="numerically">
                    <h3 className="ttl item">Liongroup в цифрах</h3>

                    <div className="item">
                        <div className="box">
                            <h4 className="ttl__box">14</h4>
                            <p className="txt_box">лет работы</p>
                        </div>

                        <p className="text__item">Наша компания на рынке ремонтных услуг с 2006 года.</p>
                    </div>

                    <div className="item">
                        <div className="box">
                            <h4 className="ttl__box">650</h4>
                            <p className="txt_box">объектов</p>
                        </div>

                        <p className="text__item">Создали более 650 объектов по Москве и всей Московской области.</p>
                    </div>

                    <div className="item">
                        <div className="box">
                            <h4 className="ttl__box">9.7</h4>
                            <p className="txt_box">оценка</p>
                        </div>

                        <p className="text__item">Средняя оценка качества выполненных нами работ — 9,7 из 10.</p>
                    </div>

                    <div className="item">
                        <div className="box">
                            <h4 className="ttl__box">8</h4>
                            <p className="txt_box">лет</p>
                        </div>

                        <p className="text__item">Cредний стаж профильных специалистов нашей компании.</p>
                    </div>
                </div>

                <div className="why-we">
                    <h3 className="ttl">Почему мы</h3>

                    <div className="boxes">
                        <div className="box">
                            <img src="/src/assets/images/emoji/watch.png" alt="" className="emoji" />
                            <h5 className="ttl__box">Cоблюдение сроков</h5>

                            <div className="texts">
                                <p className="more">2.5 месяца — средний срок выполнения работ.</p>
                                <p className="more">«Liongroup» несёт финансовую ответственность за задержку работ.</p>
                                <p className="more">Соблюдаем сроки, положенные по технологии.</p>
                            </div>
                        </div>

                        <div className="box">
                            <img src="/src/assets/images/emoji/money.png" alt="" className="emoji" />
                            <h5 className="ttl__box">Финансовый комфорт</h5>

                            <div className="texts">
                                <p className="more">Цена в смете — окончательная.</p>
                                <p className="more">Поэтапная оплата по мере выполнения работ.</p>
                                <p className="more">Бесплатное составление сметы на ремонт.</p>
                            </div>
                        </div>

                        <div className="box">
                            <img src="/src/assets/images/emoji/okay.png" alt="" className="emoji" />
                            <h5 className="ttl__box">Полноценные гарантии</h5>

                            <div className="texts">
                                <p className="more">2 года на все виды работ.</p>
                                <p className="more">10 лет на электрику и сантехнику.</p>
                                <p className="more">Устраняем недостатки на следующий день после обращения.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="apartment">
                    <h4 className="ttl-mini">Получите квартиру своей мечты уже через 2-3 месяца</h4>
                    <img src="/src/assets/icons/arrow-blue.svg" alt="" className="arrow" />
                </div>
                
                <Instagram />
            </div>
        </div>
    );
  }