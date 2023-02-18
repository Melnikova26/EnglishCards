import WordListItem from '../word-list-item/word-list-item';

import st from './word-list.module.scss';

const WordList = ({data}) => {
    let num = 0;
    const element = data.map(item => {
        const {id, ...itemProps} = item;
        num++;
        return (
            <WordListItem 
                key = {id}
                {...itemProps} num = {num}/>
        )
    });
    return (
        <ul className={st.list}>
            <li className={st.item}>
                <div className={st.point}>#</div>
                <div className={st.point}>Word</div>
                <div className={st.point}>Transcription</div>
                <div className={st.point}>Translation</div>
                <div className={st.point}></div>
            </li>
            {element}
        </ul>
    )
}

export default WordList;