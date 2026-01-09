import './partners.scss'
import sbLogo from '/src/assets/icons/sbLogo.svg'

export default function Partners() {
    return (

        <div className="partners">
            <div className="container">
                <h2 className="ttl">Проверенные партнёры</h2>
                <div className="for-center">
                    <div className="logos">
                        <div className="img"><img src={sbLogo} alt="" className="img" /></div>
                        <div className="img"><img src={sbLogo} alt="" className="img" /></div>
                        <div className="img"><img src={sbLogo} alt="" className="img" /></div>
                        <div className="img"><img src={sbLogo} alt="" className="img" /></div>
                        <div className="img"><img src={sbLogo} alt="" className="img" /></div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
  }