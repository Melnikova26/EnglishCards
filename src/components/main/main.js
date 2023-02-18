import Add from '../add/add';
import WordList from '../word-list/word-list';
import st from './main.module.scss';
import './../../buttons.scss';

const Main = ({data}) => {
    return (
        <main className={st.main}>
            <div className={st.container}>
                <div className={st.grid}>
                    <div></div>
                    <h3 className={st.header}>You can learn, edit, delete or add words</h3>
                    <button className="button button__learn"><a href="##">learning</a> </button>
                </div>
                <div className={st.dictionary}>
                    <WordList data = {data}/>
                </div>
                <Add />
            </div>
        </main>
    )
}

export default Main;