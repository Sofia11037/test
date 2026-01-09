import './cards_of_project.scss'


export default function CardsOfProject({data}) {
    return (
        <div className="cards-of-project">
            <div className="img">
              <img src={data.img} alt={data.title} />
            </div>
            <div className="about-card">
              <h3 className="ttl">{data.title}</h3>

              <div className="details">
                <div className="left">
                  <div className="square info">
                    <p className="txt">Площадь</p>
                    <p className="detail">{data.square}</p>
                  </div>
                  <div className="term info">
                    <p className="txt">Срок</p>
                    <p className="detail">{data.term}</p>
                  </div>
                </div>

                <div className="right">                
                  <div className="for-materials info">
                    <p className="txt">На материалы</p>
                    <p className="detail">{data.forMaterials}</p>
                  </div>
                  <div className="for-work info">
                    <p className="txt">За работу</p>
                    <p className="detail">{data.forWork}</p>
                  </div>
                </div>
              </div>

              <button className="btn">Подробнее о проекте</button>
            </div>
           
        </div>
    );
  }