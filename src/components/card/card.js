import { useEffect, useRef } from 'react';


import st from './card.module.scss';
import './../../style/buttons.scss';

const Card =  (props) => {
    const checkRef = useRef(null);
    const {data, animate, show, getWords, currentWordIndex, checked} = props;
    // const {english, transcription, russian} = dataCur;
    
    useEffect(() => {
        if(!checked.includes(currentWordIndex)){
            checkRef.current.focus();
        }
    }, [data.english]);


    return(
            <div className={`${st.front} ${animate}`}>
                <div className={st.word}>{data.english}</div>
                <div className={st.transcription}>{data.transcription}</div>
                {
                    checked.includes(currentWordIndex) ?
                    <div className={st.translation}>{data.russian}</div> :
                    show ? 
                    <div className={st.translation}>{data.russian}</div> :
                    <button className={st.showBtn}
                        onClick={() => getWords(currentWordIndex)}
                        ref={checkRef}>Проверить
                    </button>
                }
            </div>
    )
}

export default Card;