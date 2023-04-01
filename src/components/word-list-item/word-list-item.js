import { useState } from 'react';
import TextInput from '../form/Form';
import pen from './../../icons/edit.svg';
import del from './../../icons/delete.svg';
import st from './word-list-item.module.scss';
import './../../style/buttons.scss';

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

    const inputs = [
        {name: 'word', value: word},
        {name: 'transcription', value: transcription},
        {name: 'translation', value: translation}
    ];

    return (
        <li className={classNames}>
            <div className={st.point}>{props.num}</div>
            {
                inputs.map(item =>( 
                    <TextInput
                        name={item.name}
                        value={item.value}
                        readOnly={!change}
                        onChange={onUpdate}
                    />
                ))
            }
            <div className={st.point}>
                <div className={st.img}>
                    {
                        change ? 
                            <div className={st.edbtn}>
                                <button onClick={onSave} className={`button__save ${st.visible}`}></button>
                                <button className={`button__clone ${st.visible}`} onClick={onCancel}>&times;</button>
                            </div>
                            :
                            <div className={st.edbtn}>
                                <button className='button__save'></button>
                                <button className='button__clone'>&times;</button>
                            </div>
                    }
                    <div onClick={onEdit}><img src={pen} alt="edit"/></div>
                    <div><img src={del} alt="del"/></div>
                </div>
            </div>
        </li>
    )
    
   
}

export default WordListItem;