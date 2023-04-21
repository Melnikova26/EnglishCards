    import {action, observable, computed} from 'mobx';

    class WordsStore {
    @observable data = [];
    @observable loading = true;
    @observable error = false;


     constructor () {
        this.apiBase = 'https://dictionarydatas-default-rtdb.firebaseio.com/words';
        this.initializeStore();
    }

    @action async initializeStore() {
        await this.getAllWords();
    }
    
    @action async getAllWords() {
            try {
            this.loading = true;
            await fetch(`https://dictionarydatas-default-rtdb.firebaseio.com/words.json`)
                .then(res => res.json())
                .then(data => {
                    this.data = Object.values(data);

                });
            } catch (err) {
                this.error = err.message || 'Something went wrong';
            } finally {
                this.loading = false;
            }
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
        this.error = err.message || 'Something went wrong';
        }
    }

    @action async removeWord(id) {
        try {
        const res = await this.http(`${this.apiBase}.json`);
        const removeItem = Object.keys(res).filter((key) => res[key].id === id).toString();
        await this.http(`${this.apiBase}/${removeItem}.json`, 'DELETE');
        this.data = this.data.filter((word) => word.id !== id);
        } catch (err) {
        this.error = err.message || 'Something went wrong';
        }
    }

    @action async updateWord(updatedWord) {
        try {
        const json = JSON.stringify(updatedWord);
        const res = await this.http(`${this.apiBase}.json`);
        const updateItem = Object.keys(res).filter((key) => res[key].id === updatedWord.id).toString();
        await this.http(`${this.apiBase}/${updateItem}.json`, 'PUT', json);
        this.data = this.data.map((word) => (word.id === updatedWord.id ? updatedWord : word));
        } catch (err) {
        this.error = err.message || 'Something went wrong';
        }
    }

    @action clearError() {
        this.error = false;
    }
    }
    const store = new WordsStore();
    store.initializeStore();
    export default store;