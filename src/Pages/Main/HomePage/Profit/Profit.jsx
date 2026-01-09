import './profit.scss'

export default function Profit() {
    return (
        <div className="profit">
            <div className="container">
                <h2 className="title__profit">При работе с нами вы получаете</h2>
                <div className="boxes">
                    <div className="box">
                        <h3 className="num">0</h3>
                        <h4 className="title">рублей свыше сметы</h4>
                        <p className="txt">Цена указывается в договоре
                        и НЕ изменяется в процессе.</p>
                    </div>

                    <div className="box">
                        <h3 className="num">12</h3>
                        <h4 className="title">дней просрочки</h4>
                        <p className="txt">Гарантируем соблюдение сроков, прописанных в договоре. Платим за просрочки.</p>
                    </div>

                    <div className="box">
                        <h3 className="num">253</h3>
                        <h4 className="title">потраченых нервов</h4>
                        <p className="txt">Мы согласовываем все вопросы с соседями, подрядчиками, БТИ или управляющими компаниями.</p>
                    </div>

                    <div className="box">
                        <h3 className="num">1214</h3>
                        <h4 className="title">проблем после ремонта</h4>
                        <p className="txt">10 лет гарантии на сантехнику и электрику, 2 года гарантии на отделку. В течение ремонта полная страховка квартиры.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }