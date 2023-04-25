import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Card from "../card/card";
import ErrorMessage from "../errorMessage/ErrorMessage";


import st from './word-card.module.scss';

const WordCard = inject(['dataStore'])(observer(({ dataStore }) => {

    const {data} = dataStore;
    
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animate, setAnimate] = useState('');
    const [show, setShow] = useState(false);
    const [learnedWords, setLearnedWords] = useState(0);
    const [checked, setChecked] = useState([]);


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
    const getWords = (id) => {
        setShow(true);
        setLearnedWords((count) => count + 1);
        setChecked([...checked, id]);
    }
    function getProps(){
        if(!data[currentWordIndex].english || !data[currentWordIndex].transcription || !data[currentWordIndex].russian){
            return <ErrorMessage />;
        }
        return <Card   
                    show = {show}
                    getWords={getWords}
                    animate = {animate}
                    data={data[currentWordIndex]}
                    currentWordIndex={currentWordIndex}
                    checked= {checked}
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
}));

export default WordCard;