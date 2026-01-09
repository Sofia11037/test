import './slider.scss';

export default function Slider({ data }) {
    return (
        <div className='box__slider'>
            <div className="video">
            <iframe width="540" height="312" src={ data.video } title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h4 className="ttl">{data.title}</h4>
            <p className="txt">{data.subtitle}</p>
        </div>
    );
}
