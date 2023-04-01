import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/card";
import ErrorMessage from "../errorMessage/ErrorMessage";

import st from './word-card.module.scss';

function WordCard(props) {

    const {data} = props;

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animate, setAnimate] = useState('');
    const [show, setShow] = useState(false);
    const [learnedWords, setLearnedWords] = useState(0);

    const slider = (index) => {
        if(index === 1){
            setAnimate(`${st.next}`);
        } else {
            setAnimate(`${st.prev}`);
        }
        setTimeout(() => {
            setCurrentWordIndex((prevIndex) => prevIndex + index);
            setShow(false);
        }, 500);
        setTimeout(() => {
            setAnimate('');
        }, 800);
    }
    const getWords = () => {
        setShow(true);
        setLearnedWords((count) => count + 1);
    }

    function getProps(){
        if(!data[currentWordIndex].word || !data[currentWordIndex].transcription || !data[currentWordIndex].translation){
            return <ErrorMessage />;
        }
        return <Card   
                    show = {show}
                    getWords={getWords}
                    animate = {animate}
                    data={data[currentWordIndex]}
                />
    }
    return (
            <div className={st.container}>
                <header className={st.header}>
                    <Link to="/">
                        <button className='button button__header'>Back</button>
                    </Link>
                    <h2 className={st.title}>Title</h2>
                    <div></div>
                </header>
                <section className={st.learn}>
                    {getProps()}
                    <div className={st.buttons}>
                        <button 
                            className={st.buttons__back} 
                            disabled={currentWordIndex === 0}
                            onClick={() => {slider(-1)}}>Назад
                        </button>
                        <div className={st.count}>
                            {currentWordIndex + 1} / {data.length}
                        </div>
                        <button 
                            className={st.buttons__go}
                            disabled={currentWordIndex === data.length - 1}
                            onClick={() => {slider(1)}}>Вперед
                        </button>
                    </div>
                </section>
                <div className={st.learnedWords}>Изучено слов: {learnedWords}</div>
                
            </div>
    );
}

export default WordCard;