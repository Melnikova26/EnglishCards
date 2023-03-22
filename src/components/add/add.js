import st from './add.module.scss';
import './../../buttons.scss';


const Add = () => {
    return (
        <div className={st.add}>
            <h3 className={st.header}>Add a new word</h3>
            <div className={st.word}>
                <div className={st.point}>Word</div>
                <div className={st.point}>Transcription</div>
                <div className={st.point}>Translation</div>
            </div>
            <div className={st.word}>
                <div className={st.point}>
                    <input type="text"/>
                </div>
                <div className={st.point}>
                    <input type="text"/></div>
                <div className={st.point}>
                    <input type={st.text}/>
                </div>
            </div>
            <button className="button button__add">ADD</button>
        </div>
    )
}

export default Add;