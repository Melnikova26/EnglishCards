import { useState } from 'react';
import pen from './../../icons/edit.svg';
import del from './../../icons/delete.svg';
import st from './word-list-item.module.scss';
import './../../buttons.scss';

const WordListItem = (props) => {
    const [change, setChange] = useState(false);
    const [dataRow, setDataRow] = useState({
        word: props.word,
        transcription: props.transcription,
        translation: props.translation
    });
    const [prevDataRow, setPrevDataRow] = useState({
        word: props.word,
        transcription: props.transcription,
        translation: props.translation
    });

    
    const onEdit = () => {
        setChange(true);
    }

    const onUpdate = (event) => {
        const {name, value} = event.target;
        setDataRow(dataRow => ({
            ...dataRow,
            [name]: value
        }));
    };

    const onSave = () => {
        setChange(false);
        setPrevDataRow({...dataRow});
    }

    const onCancel = () => {
        setChange(false);
        setDataRow({...prevDataRow});
    }

        const {word, transcription, translation} = dataRow;

        let classNames = `${st.item} ${change ? st.active : null}`;


    return (
        <li className={classNames}>
            <div className={st.point}>{props.num}</div>
            <div className={st.point}>
                {
                    change ? <input type="text" 
                    value={word} name="word"
                    onChange={onUpdate} /> :
                    <input readOnly type="text" 
                    value={word} name="word"/>
                }
                
            </div>
            <div className={st.point}>
                {
                    change ? 
                    <input type="text" value={transcription} name="transcription"
                            onChange={onUpdate}/> :
                    <input readOnly type="text" value={transcription} name="transcription"/>
                }
                
            </div>
            <div className={st.point}>
                {
                    change ? 
                    <input type="text" value={translation} name="translation"
                            onChange={onUpdate}/> :
                    <input readOnly type="text" value={translation} name="translation"/>
                }
                
            </div>
            <div className={st.point}>
                <div className={st.img}>
                    <div className={st.edbtn}>
                        {
                            change ? 
                            <button onClick={onSave} className={`button__save ${st.visible}`}></button> :
                            <button className='button__save'></button>
                        }

                        {
                            change ? 
                            <button 
                            className={`button__clone ${st.visible}`}
                            onClick={onCancel} >
                                &times;</button> :
                            <button className='button__clone'>&times;</button>
                        }
                    </div>
                    <div onClick={onEdit}><img src={pen} alt="edit"/></div>
                    <div><img src={del} alt="del"/></div>
                </div>
            </div>
        </li>
    )
    
   
}

export default WordListItem;