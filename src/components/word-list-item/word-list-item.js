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
        id: props.id,
        english: props.english,
        transcription: props.transcription,
        russian: props.russian
    });
    const [prevDataRow, setPrevDataRow] = useState({
        id: props.id,
        english: props.english,
        transcription: props.transcription,
        russian: props.russian
    });
    
    useEffect(() => {
        if(!dataRow.english || !dataRow.russian || !dataRow.transcription){
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [dataRow.english, dataRow.russian, dataRow.transcription]);

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
        props.updateWord(dataRow);
        console.log(dataRow);
    }

    const onCancel = () => {
        setChange(false);
        setDataRow({...prevDataRow});
    }

    const {english, transcription, russian} = dataRow;

    let classNames = `${st.item} ${change ? st.active : null}`;

    const inputs = [
        {name: 'english', value: english, id: 1},
        {name: 'transcription', value: transcription, id: 2},
        {name: 'russian', value: russian, id: 3}
    ];
    const remove = () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${dataRow.english}"?`);
        if (confirmDelete) {
            props.removeWord(props.id);
        }
    };

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
                    <div onClick={remove}><img src={del} alt="del"/></div>
                </div>
            </div>
        </li>
    )
    
   
}

export default WordListItem;