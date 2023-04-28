import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Spinner from '../spinner/Spinner';
import Add from '../add/add';
import WordList from '../word-list/word-list';
import st from './main.module.scss';
import './../../style/buttons.scss';

const Main = inject(['dataStore'])(observer(({ dataStore }) => {
    const {getAllWords, addWord, data, removeWord, updateWord} = dataStore;
    const [newData, setNewData] = useState([data]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        async function fetchData(){
            try{
                await getAllWords();
                setIsLoaded(true);
            } catch(e){
                console.log(e);
            } 
        }
        fetchData();
        setNewData(data);
    }, [data]);

    const add = (newWord) => {
        setNewData((data) => [...data, newWord]);
        addWord(newWord);
    }
    const remove = async (word, id) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${word}"?`);
        if (confirmDelete) {
            removeWord(id);
            setNewData(newData => newData.filter((word) => word.id !== id));
        }
    };

    if(!isLoaded){
        return <Spinner/>
    }
    
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
                    <WordList newData={newData}
                              isLoaded={isLoaded}
                              remove={remove}
                              updateWord={updateWord}/>
                </div>
                <Add add={add}
                     data={newData}/>
            </div>
        </main>
    )
}))

export default Main;