import "./footer.scss"

export default function Footer() {
    return (
      <div className="footer">
        <div className="container">
            <div className="footer-top">
                <div className="contact">
                    <p className="txt">Мы на связи ежедневно с 08:00 до 00:00 </p>
                    <h3 className="phone">+7 495 150-24-93</h3>
                </div>
                <button className="btn">Вызывать замерщика</button>
            </div>
            <div className="footer-bottom">
                <div className="address">
                    <p className="mail">hello@remontlion.ru</p>
                    <div className="texts">
                        <p className="txt">г. Зеленоград</p>
                        <p className="txt">проспект Алексея Генарлова, 1</p>
                        <p className="txt">строение 1, офис 215Б</p>
                    </div>
                    

                    <div className="design">Задизайнено в Simplexx.Agency</div>
                </div>

                <div className="about_company">
                    <div className="box-about">
                        <div className="opt ttl">О компании</div>
                        <div className="opt">Наши работы</div>
                        <div className="opt">Цены</div>
                        <div className="opt">Акции</div>
                        <div className="opt">Контакты</div>
                    </div>

                    <div className="box-about">
                        <div className="opt">Ремонт квартир</div>
                        <div className="opt">Ремонт домов</div>
                        <div className="opt">Коммерческий ремонт</div>
                        <div className="opt">Калькулятор ремонта</div>
                    </div>

                    <div className="box-about">
                        <div className="opt">Дизайн интерьера</div>
                        <div className="opt">Визуализация</div>
                        <div className="opt">Подбор материалов</div>
                        <div className="opt">Авторский надзор</div>
                    </div>
                </div>
            </div>
            <div className="about_company-phone">
                        <div className="opt ttl">О компании</div>
                        <div className="opt">Наши работы</div>
                        <div className="opt">Цены</div>
                        <div className="opt">Акции</div>
                        <div className="opt">Контакты</div>

                        <div className="opt">Ремонт квартир</div>
                        <div className="opt">Ремонт домов</div>
                        <div className="opt">Коммерческий ремонт</div>
                        <div className="opt">Калькулятор ремонта</div>

                        <div className="opt">Дизайн интерьера</div>
                        <div className="opt">Визуализация</div>
                        <div className="opt">Подбор материалов</div>
                        <div className="opt">Авторский надзор</div>
                </div>
        </div>
      </div>
    );
  }