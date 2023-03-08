import { useState } from 'react';

import st from './card.module.scss';
import './../../buttons.scss';

const Card = (props) => {
    const {word, transcription, translation, animatePrev, animateNext} = props;
    const [show, setShow] = useState(false);
    return(
            <div className={`${st.front} ${animateNext ? st.next : animatePrev ? st.prev : ""}`}>
                <div className={st.word}>{word}</div>
                <div className={st.transcription}>{transcription}</div>
                {
                    show ? <div className={st.translation}
                            onClick={() => setShow(false)}>{translation}</div> :
                    <div className={st.showBtn}
                        onClick={() => setShow(true)}>Проверить</div>
                }
            </div>
    )
}

export default Card;