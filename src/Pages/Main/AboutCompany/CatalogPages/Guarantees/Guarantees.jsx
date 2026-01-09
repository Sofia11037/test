import "./guarantees.scss"


export default function Guarantees() {

    return (
        <div className="container">
            <div className="guarantees">
                <h2 className="ttl">Гарантии</h2>
                <div className="txt">Наш многолетний опыт позволяет решать даже самые сложные задачи по ремонту.</div>

                    <div className="years">
                        <div className="quantity">
                            <h3 className="num">2</h3>
                            <p className="text short">года на отделочные работы</p>
                        </div>

                        <div className="quantity">
                            <h3 className="num">10</h3>
                            <p className="text">лет на сантехнические работы</p>
                        </div>

                        <div className="quantity">
                            <h3 className="num">10</h3>
                            <p className="text">лет на электромонтажные работы</p>
                        </div>
                    </div>
                

                <h2 className="title">Даём гарантии, работает по ГОСТу</h2>

                <div className="information">
                    <div className="item">
                        <img src="/src/assets/images/emoji2.png" alt="" className="img" />
                        <h3 className="ttl-mini">Работает по ГОСТу</h3>
                        <p className="about">Наша компания гарантирует качественное выполнение всех работ согласно всем требованиям законодательства РФ , ГОСТа, СНИПа.</p>
                    </div>
                    <div className="item">
                        <img src="/src/assets/images/emoji3.png" alt="" className="img" />
                        <h3 className="ttl-mini">Гарантия до 10 лет</h3>
                        <p className="about">Распространяется на все работы, которые выполняли мы. На протяжении всего срока гарантийного обслуживания, вы можете обращаться по любым вопросам</p>
                    </div>
                    <div className="item">
                        <img src="/src/assets/images/emoji4.png" alt="" className="img" />
                        <h3 className="ttl-mini">Составляем договр</h3>
                        <p className="about">«Liongroup» несёт финансовую ответственность за задержку работ или порчу имущества</p>
                    </div>
                </div>

                <div className="apartment">
                    <h4 className="ttl-mini">Получите квартиру своей мечты уже через 2-3 месяца</h4>
                    <img src="/src/assets/icons/arrow-blue.svg" alt="" className="img" />
                </div>
            </div>
        </div>
      
    );
  }