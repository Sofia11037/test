import "./work.scss"


export default function Work() {

    return (
        <div className="container">
            <div className="work">
                <h2 className="ttl">Где мы работаем</h2>
                <p className="txt">На этой странице мы постарались описать в каких районах Москвы и Подмосковья мы делаем ремонт. Если вашего района здесь нет, вы можете нам просто позвонить и мы вас проконсультируем по вопросам ремонта бесплатно. Мы стараемся расширять географию своей деятельности.</p>

                <div className="where">
                    <div className="towns">
                        <div className="town">
                            <div className="letter">A</div>
                            <p className="name">Андреевка</p>
                        </div>

                        <div className="town">
                            <div className="letter">Г</div>
                            <p className="name">Голубое</p>
                        </div>

                        <div className="town">
                            <div className="letter">Д</div>
                            <p className="name">Долгопрудный</p>
                        </div>

                        <div className="town">
                            <div className="letter">З</div>
                            <p className="name">Зеленоград</p>
                        </div>
                    </div>

                    <div className="towns long">
                        <div className="town few">
                            <div className="letter">К</div>
                            <div className="names">
                                <p className="name">Коммунарка</p>
                                <p className="name">Красногорск</p>
                                <p className="name">Крылатское</p>
                                <p className="name">Куркино</p>
                            </div>
                            
                        </div>

                        <div className="town">
                            <div className="letter">Л</div>
                            <p className="name">Лобня</p>
                        </div>

                        <div className="town few">
                            <div className="letter">М</div>
                            <div className="names">
                                <p className="name">МЖК</p>
                                <p className="name">Митино</p>
                                <p className="name">Московский</p>
                                <p className="name">Мытищи</p>
                            </div>
                        </div>
                    </div>

                    <div className="towns">
                        <div className="town">
                            <div className="letter">Н</div>
                            <p className="name">Нахабино</p>
                        </div>

                        <div className="town">
                            <div className="letter">О</div>
                            <p className="name">Опалиха</p>
                        </div>

                        <div className="town">
                            <div className="letter">Р</div>
                            <p className="name">Реутов</p>
                        </div>

                        <div className="town few">
                            <div className="letter">С</div>
                            <div className="names">
                                <p className="name">Солнечногорск</p>
                                <p className="name">Строгино</p>
                                <p className="name">Сходня</p>
                            </div>
                        </div>
                    </div>

                    <div className="towns">
                        <div className="town">
                            <div className="letter">Т</div>
                            <p className="name">Тушино</p>
                        </div>

                        <div className="town">
                            <div className="letter">Х</div>
                            <p className="name">Химки</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      
    );
  }