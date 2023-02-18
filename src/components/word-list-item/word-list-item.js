
import edit from './../../icons/edit.svg';
import del from './../../icons/delete.svg';
import st from './word-list-item.module.scss';
import './../../buttons.scss';

const WordListItem = ({word, transcription, translation, change, num}) => {
    let classNames = `${st.item}`;
    if (change) {
        classNames = `${st.item} ${st.active}`;
    }
    return (
        <li className={classNames}>
            <div className={st.point}>{num}</div>
            <div className={st.point}>
                {
                    change ? <input type="text" defaultValue={word}/> :
                    <input readOnly type="text" defaultValue={word}/>
                }
                
            </div>
            <div className={st.point}>
                {
                    change ? <input type="text" defaultValue={transcription}/> :
                    <input readOnly type="text" defaultValue={transcription}/>
                }
                
            </div>
            <div className={st.point}>
                {
                    change ? <input type="text" defaultValue={translation}/> :
                    <input readOnly type="text" defaultValue={translation}/>
                }
                
            </div>
            <div className={st.point}>
                <div className={st.img}>
                    <div>
                        {
                            change ? 
                            <button className='button__save' style={{visibility: 'visible'}}>Save</button> :
                            <button className='button__save' style={{visibility: 'hidden'}}>Save</button>
                        }
                    </div>
                    <div><img src={edit} alt="edit"/></div>
                    <div><img src={del} alt="Save"/></div>
                </div>
            </div>
        </li>
    )
}

export default WordListItem;