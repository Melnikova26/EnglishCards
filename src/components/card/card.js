import { useEffect, useRef } from 'react';


import st from './card.module.scss';
import './../../style/buttons.scss';

const Card = (props) => {
    const checkRef = useRef(null);

    useEffect(() => {
        checkRef.current.classList.add(st.active);
        checkRef.current.focus();
    }, []);

    const {word, transcription, translation, animatePrev, animateNext, show, changeStateShow, countLearnedWords} = props;
    

    return(
            <div className={`${st.front} ${animateNext ? st.next : animatePrev ? st.prev : ""}`}>
                <div className={st.word}>{word}</div>
                <div className={st.transcription}>{transcription}</div>
                {
                    show ? <div className={st.translation}>{translation}</div> :
                    <div className={st.showBtn}
                        onClick={() => {
                            changeStateShow(true)
                            countLearnedWords()
                        }}
                        ref={checkRef}>Проверить</div>
                }
            </div>
    )
}

export default Card;