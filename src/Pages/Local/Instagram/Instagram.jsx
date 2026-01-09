import './instagram.scss'


export default function Instagram() {
    return (
        <div className="instagram">
            <div className="container">
                <div className="titles">
                    <h3 className="ttl">Наш Instagram</h3>
                    <p className="username">@remontlion</p>
                </div>
                <div className="for-center">
                <div className="photos">
                    <div className="photo first">
                        <img src="/src/assets/images/instagram/photo1.png" alt="" />
                        <img className='icon' src="/src/assets/images/instagram/iconInst.png" alt="" />
                    </div>
                    <div className="photo"><img src="/src/assets/images/instagram/photo2.png" alt="" /></div>
                    <div className="photo"><img src="/src/assets/images/instagram/photo3.png" alt="" /></div>
                    <div className="photo"><img src="/src/assets/images/instagram/photo4.png" alt="" /></div>
                </div>
                </div>

                
            </div>
        </div>
    );
  }