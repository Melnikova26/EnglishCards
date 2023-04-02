import { useState, useRef, useEffect } from 'react';
import TextInput from '../form/Form';
import pen from './../../icons/edit.svg';
import del from './../../icons/delete.svg';
import st from './word-list-item.module.scss';
import './../../style/buttons.scss';

const WordListItem = (props) => {
    const btnRef = useRef(null);
    const [change, setChange] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

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
    
    useEffect(() => {
        if(!dataRow.word || !dataRow.translation || !dataRow.transcription){
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [dataRow.word, dataRow.translation, dataRow.transcription]);

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
        console.log(dataRow);
    }

    const onCancel = () => {
        setChange(false);
        setDataRow({...prevDataRow});
    }

    const {word, transcription, translation} = dataRow;

    let classNames = `${st.item} ${change ? st.active : null}`;

    const inputs = [
        {name: 'word', value: word, id: 1},
        {name: 'transcription', value: transcription, id: 2},
        {name: 'translation', value: translation, id: 3}
    ];

    return (
        <li className={classNames}>
            <div className={st.point}>{props.num}</div>
            {
                inputs.map(item =>( 
                    <TextInput
                        hasError={item.value === ''}
                        key={item.id}
                        name={item.name}
                        value={item.value}
                        className={item.value === '' ? st.red : ''}
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
                                <button disabled={isEmpty} ref={btnRef} onClick={onSave} className={`button__save ${st.visible}`}></button>
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