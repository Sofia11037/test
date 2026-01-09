import './vacancies.scss'


export default function Vacancies() {

    return (
        <div className="container">
        
            <div className="vacancies">
                <h2 className="title">Вакансии</h2>
                <div className="txt">У нас открыто 3 вакансии.</div>

                <div className="professions">
                    <a href='https://hh.ru/vacancy/120579273?query=%D0%BF%D1%80%D0%BE%D1%80%D0%B0%D0%B1&hhtmFrom=vacancy_search_list'>
                        <div className="item">
                            <img src="/src/assets/images/professions/foreman.png" alt="" className="img" />
                            <h3 className="ttl">Прораб</h3>
                            <p className="info">Москва, офис</p>
                        </div>
                    </a>
                    
                    <a href='https://hh.ru/vacancy/119944180?utm_medium=cpc_hh&utm_source=clickmehhru&utm_campaign=905367&utm_local_campaign=1339227&utm_content=948027&utm_vacancy=119944180'>
                        <div className="item">
                            <img src="/src/assets/images/professions/plumber.png" alt="" className="img" />
                            <h3 className="ttl">Сантехник</h3>
                            <p className="info">Москва, полный рабочий день</p>
                        </div>
                    </a>

                    <a href='https://hh.ru/vacancy/119831015?utm_medium=cpc_hh&utm_source=clickmehhru&utm_campaign=902791&utm_local_campaign=1336196&utm_content=945392'>
                        <div className="item">
                            <img src="/src/assets/images/professions/accountant.png" alt="" className="img" />
                            <h3 className="ttl">Бухгалтер</h3>
                            <p className="info">Москва, удалённо</p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
      
    );
  }