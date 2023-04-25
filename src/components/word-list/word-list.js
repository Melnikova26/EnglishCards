
import { useState, useEffect } from 'react';
import WordListItem from '../word-list-item/word-list-item';
import Spinner from '../spinner/Spinner';
import { inject, observer } from 'mobx-react';
import st from './word-list.module.scss';


const WordList = inject(['dataStore'])(observer(({ dataStore }) => {

    const {data, removeWord, updateWord, getAllWords} = dataStore;
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        async function fetchData(){
            try{
                await getAllWords();
                setIsLoaded(true);
            } catch(e){
                console.log(e);
            } 
        }
        fetchData();
      }, [data, removeWord]);
    
    if(!isLoaded){
        return <Spinner/>
    }

    return (
        <ul className={st.list}>
            <li className={st.item}>
                <div className={st.point}>#</div>
                <div className={st.point}>Word</div>
                <div className={st.point}>Transcription</div>
                <div className={st.point}>Translation</div>
                <div className={st.point}></div>
            </li>
            {data.map((item, i) => {
                const {id} = item;
                return (
                    <WordListItem 
                        key = {id}
                        {...item}
                        num = {i + 1}
                        removeWord={removeWord}
                        updateWord={updateWord}/>
                )
            })}
        </ul>
    )
}));

export default WordList;