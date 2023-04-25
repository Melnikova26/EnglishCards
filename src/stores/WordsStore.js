    import {action, observable, computed} from 'mobx';

    class WordsStore {
    @observable data = [];
     constructor () {
        this.apiBase = 'https://dictionarydatas-default-rtdb.firebaseio.com/words';
        this.initialize();
        this.removeWord = this.removeWord.bind(this);
    }

    @action async getAllWords() {
        try {
            const response = await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words.json`);
            const data = await response.json();
            return Object.values(data);
        } catch (err) {
            console.log(err);
        } 
    }

    @action async initialize() {
        const words = await this.getAllWords();
        this.data = words || [];
    }
    @computed get wordData() {
        return this.data;
    }

    @action async addWord(newWord) {
        try {
        const json = JSON.stringify(newWord);
        await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words.json`,{
            method: 'POST',
            body: json,
            headers: {'Content-Type': 'application/json'}
        }).then(this.data.push(newWord));
        } catch (err) {
            console.log(err);
        }
    }

    @action async removeWord(id) {
        try {
            if (!this.data) {
                this.initialize.bind(this)();
            }
            const res = await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words.json`).then(response => response.json());
            const removeItem = Object.keys(res).filter((key) => res[key].id === id).toString();
            await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words/${removeItem}.json`,{
              method: 'DELETE',
              headers: {'Content-Type': 'application/json'}
            });
            console.log(this.data);
            this.data = this.data.filter((word) => word.id !== id)
          } catch (err) {
            console.log(err);
          }
    }

    @action async updateWord(updatedWord) {
        try {
            const json = JSON.stringify(updatedWord);
            const response = await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words.json`);
            const res = await response.json();
            console.log(Object.keys(res));
            const updateItem = Object.keys(res).filter((key) => res[key].id === updatedWord.id).toString();
            await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words/${updateItem}.json`,{
                method: 'PUT',
                body: json,
                headers: {'Content-Type': 'application/json'}
            });
            if (updateItem) {
                this.data.map((word) => (word.id === updatedWord.id ? updatedWord : word));
            }
        } catch (err) {
            console.log(err);
        }
    }

    }
    const store = new WordsStore();
    export default store;