import './agreement.scss'


export default function Agreement() {

    return (
        <div className="container">
            <div className="agreement">
                <h2 className="ttl">Договор</h2>
                <div className="about__agreement">
                    <div className="texts">
                        <p className="txt">Мы предлагаем ознакомиться с нашим типовым договором. Хотим обратить внимание, что все работы, конечная стоимость ремонта и материалов прописывается в договоре. А так же мы всегда прописываем там график работ и гарантии. </p>
                        <p className="txt">Если у вас возникнут вопросы во время изучения договора или вы уже решили к нам обратиться, то позвоните по указанным номерам, либо заполните форму онлайн-заявки на ремонт.</p>
                    </div>
                    <div className="document">
                        <img src="/src/assets/images/emoji1.png" alt="" className="img" />
                        <h4 className="title">Договор на ремонтные работы</h4>
                        <p className="txt">Документ Microsoft Word</p>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }