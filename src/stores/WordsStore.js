    import {action, observable} from 'mobx';

    class WordsStore {
    @observable data = [];
     constructor () {
        this.apiBase = 'https://dictionarydatas-default-rtdb.firebaseio.com/words';
        this.initialize();
    }

    @action async getAllWords() {
        try {
            const response = await fetch(`${this.apiBase}.json`);
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

    @action async addWord(newWord) {
        try {
        const json = JSON.stringify(newWord);
        await fetch(`${this.apiBase}.json`,{
            method: 'POST',
            body: json,
            headers: {'Content-Type': 'application/json'}
        });
        this.data = this.data.push(newWord);
        } catch (err) {
            console.log(err);
        }
    }

    @action async removeWord(id) {
        try {
            
            const res = await fetch(`${this.apiBase}.json`).then(response => response.json());
            const removeItem = Object.keys(res).filter((key) => res[key].id === id).toString();
            await fetch(`${this.apiBase}/${removeItem}.json`,{
              method: 'DELETE',
              headers: {'Content-Type': 'application/json'}
            });
            this.data = this.data.filter((word) => word.id !== id)
          } catch (err) {
            console.log(err);
          }
    }

    @action async updateWord(updatedWord) {
        try {
            const json = JSON.stringify(updatedWord);
            const response = await fetch(`${this.apiBase}.json`);
            const res = await response.json();
            console.log(Object.keys(res));
            const updateItem = Object.keys(res).filter((key) => res[key].id === updatedWord.id).toString();
            await fetch(`${this.apiBase}/${updateItem}.json`,{
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