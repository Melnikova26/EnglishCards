

import WordListItem from '../word-list-item/word-list-item';
import st from './word-list.module.scss';


const WordList = (props) => {

    const {newData, remove, updateWord} = props;



    return (
        <ul className={st.list}>
            <li className={st.item}>
                <div className={st.point}>#</div>
                <div className={st.point}>Word</div>
                <div className={st.point}>Transcription</div>
                <div className={st.point}>Translation</div>
                <div className={st.point}></div>
            </li>
            {newData.map((item, i) => {
                const {id} = item;
                return (
                    <WordListItem 
                        key = {id}
                        {...item}
                        num = {i + 1}
                        remove={remove}
                        updateWord={updateWord}/>
                )
            })}
        </ul>
    )
};

export default WordList;