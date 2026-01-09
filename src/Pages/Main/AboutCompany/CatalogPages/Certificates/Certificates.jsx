import "./certificates.scss"


export default function Certificates() {

    return (
        <div className="container">
            <div className="certificates">
                <h2 className="tlt">Сертификаты</h2>

                <div className="desc">
                    <p className="text__desc">Сертификаты и документы, подтверждающие наше качество
                    и профессионализм наших мастеров и менеджеров.</p>

                    <div className="q">
                        <p className="txt">Кому это надо?</p>
                        <img src="./src/assets/images/emoji.png" alt="" className="emoji" />
                    </div>
                </div>

                <div className="certificates-load">
                    <img src="./src/assets/images/certificate.png" alt="" className="certificate" />
                    <img src="./src/assets/images/certificate.png" alt="" className="certificate" />
                    <img src="./src/assets/images/certificate.png" alt="" className="certificate" />
                    <img src="./src/assets/images/certificate.png" alt="" className="certificate" />
                </div>

                {/* <div className="follow">
                    <h2 className="ttl">Получите квартиру своей
                    мечты уже через 2-3 месяца</h2>
                    <img src="./src/assets/icons/arrow-blue.svg" alt="" className="img" />
                </div> */}
            </div>
        </div>
      
    );

  }
