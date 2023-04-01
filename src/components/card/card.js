import { useEffect, useRef } from 'react';


import st from './card.module.scss';
import './../../style/buttons.scss';

const Card = (props) => {
    const checkRef = useRef(null);
    const {data, animate, show, getWords} = props;
    const {word, transcription, translation} = data;
    useEffect(() => {
        checkRef.current.focus();
    }, [word]);


    return(
            <div className={`${st.front} ${animate}`}>
                <div className={st.word}>{word}</div>
                <div className={st.transcription}>{transcription}</div>
                {
                    show ? 
                        <div className={st.translation}>{translation}</div> :
                        <button className={st.showBtn}
                            onClick={getWords}
                            ref={checkRef}>Проверить
                        </button>
                }
            </div>
    )
}

export default Card;