import { useState } from 'react';

import st from './card.module.scss';
import './../../buttons.scss';

const Card = (props) => {
    const [show, setShow] = useState(false);
    return(
        <div className={st.container}>
            <header className={st.header}>
                <button className='button button__header' onClick = {props.onBack}>Back</button>
                <h2 className={st.title}>Title</h2>
                <div></div>
            </header>
            <section className={st.learn}>
                <div className={st.front}>
                    <div className={st.word}>WORD</div>
                    <div className={st.transcription}>[Transcription]</div>
                    {
                        show ? <div className={st.translation}
                                onClick={() => setShow(false)}>Translation</div> :
                        <div className={st.showBtn}
                            onClick={() => setShow(true)}>Проверить</div>
                    }
                    
                </div>
                <div className={st.buttons}>
                    <button className={st.buttons__back}>Назад</button>
                    <button className={st.buttons__go}>Вперед</button>
                </div>
            </section>

        </div>
    )
}

export default Card;