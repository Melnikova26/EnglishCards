
import { useEffect } from 'react';
import WordListItem from '../word-list-item/word-list-item';
import { inject, observer } from 'mobx-react';
import st from './word-list.module.scss';


const WordList = inject(['dataStore'])(observer(({ dataStore }) => {
    
    useEffect(() => {
        async function fetchData() {
            await dataStore.initializeStore();
        }
        fetchData();
        console.log(dataStore);
    }, []);
    
    return (
        <ul className={st.list}>
            <li className={st.item}>
                <div className={st.point}>#</div>
                <div className={st.point}>Word</div>
                <div className={st.point}>Transcription</div>
                <div className={st.point}>Translation</div>
                <div className={st.point}></div>
            </li>
            {dataStore.data.map((item, i) => {
                const {id} = item;
                return (
                    <WordListItem 
                        key = {id}
                        {...item}
                        num = {i + 1}
                        removeWord={dataStore.removeWord}
                        updateWord={dataStore.updateWord}/>
                )
            })}
        </ul>
    )
}));

export default WordList;