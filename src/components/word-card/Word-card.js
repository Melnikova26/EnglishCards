import { useState } from "react";
import Card from "../card/card";

import st from './word-card.module.scss';

function WordCard(props) {
    const {data} = props;

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [next, setAnimateNext] = useState(false);
    const [prev, setAnimatePrev] = useState(false);
    const [show, setShow] = useState(false);


    const changeStateShow = (newState) => {
        setShow(newState);
    }

    const slider = (setAnimate, index) => {
        setAnimate(true);
        setTimeout(() => {
            setCurrentWordIndex((prevIndex) => prevIndex + index);
            setShow(false);
        }, 500);
        setTimeout(() => {
            setAnimate(false);
        }, 800);
    }

    return (
            <div className={st.container}>
                <header className={st.header}>
                    <button className='button button__header' onClick = {props.onBack}>Back</button>
                    <h2 className={st.title}>Title</h2>
                    <div></div>
                </header>
                <section className={st.learn}>
                    <Card   show = {show}
                            changeStateShow={changeStateShow}
                            animateNext = {next}
                            animatePrev = {prev}
                            word={data[currentWordIndex].word} 
                            transcription={data[currentWordIndex].transcription}
                            translation={data[currentWordIndex].translation} />
                    
                    <div className={st.buttons}>
                        <button className={st.buttons__back} onClick={() => {slider(setAnimatePrev, -1)}} disabled={currentWordIndex === 0}>Назад</button>
                        <div className={st.count}>{currentWordIndex + 1} / {data.length}</div>
                        <button className={st.buttons__go} onClick={() => {slider(setAnimateNext, +1)}} disabled={currentWordIndex === data.length - 1}>Вперед</button>
                    </div>
                </section>
                
            </div>
    );
}

export default WordCard;