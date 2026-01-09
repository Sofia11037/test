import './home.scss'
import Repair from './Repair/Repair'
import Directions from './Directions/Directions'
import Profit from './Profit/Profit'
import Projects from './Projects/Projects'
import blueArrow from '../../../assets/icons/arrow-blue.svg'
import ClientsAboutUs from './ClientsAboutUs/ClientsAboutUs'
import Instagram from '../../Local/Instagram/Instagram'
import Partners from './Partners/Partners'
import Characteristics from './Characteristics/Characteristics'



export default function HomePage() {
    return (
      <>
        <div className="container home_page">
          <h1 className="title">Честный ремонт квартир
          с полным сопровождением</h1>
          <p className="txt">—  Беспокоим один раз, когда пора заселяться. Гарантируем, что по ходу проекта цена в договоре не увеличится.</p>
          <Repair />
          <Directions />
        </div>  

        <Profit />

        <div className="container">
          <Projects />

          <div className="change">
            <h2 className="title">У вас уже есть смета от подрядчиков?</h2>
            <img src={blueArrow} alt="" className="img" />
          </div>
          <p className="text">Бесплатно сделаем аудит и проверим на «порядочность» будущих исполнителей.</p>
          <ClientsAboutUs />
        </div>

        <Instagram />
        <Partners />

        <div className="container">
          <Characteristics />
        </div>
      </>
    );
  }