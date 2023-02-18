import st from 'card.module.scss';

const Card = () => {
    return(
        <div className={st.container}>
            <header className={st.header-learn}>
                <button className={st.button__header}>Back</button>
                <h2 className={st.header-learn__title}>Title</h2>
                <div></div>
            </header>
            <section className={st.learn}>
                <div className={st.learn__front}>
                    <div className={st.learn__word}>WORD</div>
                    <div className={st.learn__transcription}>[Transcription]</div>
                </div>
                <div className={st.learn__back}>
                    <div className={st.learn__translation}>Translation</div>
                </div>
                <div className={st.buttons}>
                    <button className={st.buttons__know}>I know</button>
                    <button className={st.buttons__no}>I don't know</button>
                </div>
            </section>

        </div>
    )
}

export default Card;