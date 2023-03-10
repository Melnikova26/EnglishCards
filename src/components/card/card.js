
import st from './card.module.scss';
import './../../buttons.scss';

const Card = (props) => {
    const {word, transcription, translation, animatePrev, animateNext, show, changeStateShow} = props;

    return(
            <div className={`${st.front} ${animateNext ? st.next : animatePrev ? st.prev : ""}`}>
                <div className={st.word}>{word}</div>
                <div className={st.transcription}>{transcription}</div>
                {
                    show ? <div className={st.translation}
                            onClick={() => changeStateShow(false)}>{translation}</div> :
                    <div className={st.showBtn}
                        onClick={() => changeStateShow(true)}>Проверить</div>
                }
            </div>
    )
}

export default Card;