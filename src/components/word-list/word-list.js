import { useContext } from 'react';
import WordListItem from '../word-list-item/word-list-item';
import { DataContext } from '../Context/ContextProvider';
import st from './word-list.module.scss';


const WordList = () => {
    const {data, removeWord, updateWord} = useContext(DataContext);

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
}

export default WordList;