import { useState } from "react";
import Card from "../card/card";

import st from './word-card.module.scss';

function WordCard(props) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [next, setAnimateNext] = useState(false);
    const [prev, setAnimatePrev] = useState(false);

    const words = props.data.map(item => {
        return item.word;
    });
    const transcriptions = props.data.map(item => {
        return item.transcription;
    });
    const translations = props.data.map(item => {
        return item.translation;
    });

    const slider = (setAnimate, index) => {
        setAnimate(true);
        setTimeout(() => {
            setCurrentWordIndex((prevIndex) => prevIndex + index);
        }, 500);
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
    }

    return (
            <div className={st.container}>
                <header className={st.header}>
                    <button className='button button__header' onClick = {props.onBack}>Back</button>
                    <h2 className={st.title}>Title</h2>
                    <div></div>
                </header>
                <section className={st.learn}>
                    <Card   animateNext = {next}
                            animatePrev = {prev}
                            word={words[currentWordIndex]} 
                            transcription={transcriptions[currentWordIndex]}
                            translation={translations[currentWordIndex]} />
                    
                    <div className={st.buttons}>
                        <button className={st.buttons__back} onClick={() => {slider(setAnimatePrev, -1)}} disabled={currentWordIndex === 0}>Назад</button>
                        <div className={st.count}>{currentWordIndex + 1} / {words.length}</div>
                        <button className={st.buttons__go} onClick={() => {slider(setAnimateNext, +1)}} disabled={currentWordIndex === words.length - 1}>Вперед</button>
                    </div>
                </section>
                
            </div>
    );
}

export default WordCard;