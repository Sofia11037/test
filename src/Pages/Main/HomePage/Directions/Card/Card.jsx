import './card.scss'


export default function Card({data}) {
    return (
        <div className="card">
            <div className="img">
              <img src={data.img} alt={data.title} />
            </div>
            <h3 className="ttl">{data.title}</h3>
            <p className="price">{data.price}</p>
        </div>
    );
  }