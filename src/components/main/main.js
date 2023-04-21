import { Link } from 'react-router-dom';
import Add from '../add/add';
import WordList from '../word-list/word-list';
import st from './main.module.scss';
import './../../style/buttons.scss';

const Main = () => {
    return (
        <main className={st.main}>
            <div className={st.container}>
                <div className={st.grid}>
                    <div></div>
                    <h3 className={st.header}>You can learn, edit, delete or add words</h3>
                    <Link to="/train">
                        <button className="button button__learn">training</button>
                    </Link>
                </div>
                <div className={st.dictionary}>
                    <WordList />
                </div>
                {/* <Add /> */}
            </div>
        </main>
    )
}

export default Main;