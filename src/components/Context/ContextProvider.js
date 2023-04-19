import { useState, useEffect, createContext } from 'react';
import { useHttp } from '../../hooks/http.hook';

export const DataContext = createContext();

const ContextProvider = ({children}) => {
	
	const { loading, request, error, clearError } = useHttp();

	const _apiBase = "https://dictionarydatas-default-rtdb.firebaseio.com/words";

	const [data, setData] = useState([]);
	

    useEffect(() => {
		getAllWords();
    }, []);

	const getAllWords = async () => {
		const res = await request(
			`${_apiBase}.json`
		);
		setData(res ? Object.values(res).map(_transformWord) : []);
	};

	const _transformWord = (word) => {
		return {
			english: word.english,
			transcription: word.transcription,
			russian: word.russian,
			id: word.id,
		};
	};

	
	const addWord = async(newWord) => {
		const json = JSON.stringify(newWord);
		await request(`${_apiBase}.json`, 'POST', json);
		setData(prevData => [...prevData, newWord]);
		console.log(data);

		// console.log(newWord);
		// setData(prevData => [...prevData, newWord]);
		// console.log(data);
	};
	const removeWord = async (id) => {
		const res = await request(`${_apiBase}.json`);
		const removeItem = Object.keys(res).filter(key => res[key].id === id).toString();
		await request(`${_apiBase}/${removeItem}.json`, 'DELETE');
		setData(data.filter((word) => word.id !== id));
	};

	const updateWord = async (updatedWord) => {
			console.log(updatedWord.id, data[6].id);
			const json = JSON.stringify(updatedWord);
			const res = await request(`${_apiBase}.json`);
			const updateItem = Object.keys(res).filter(key => res[key].id === updatedWord.id).toString();
			await request(`${_apiBase}/${updateItem}.json`, 'PUT', json);
			const updatedData = data.map(word => word.id === updatedWord.id ? updatedWord : word);
			setData(updatedData);
	};
	return (
		<DataContext.Provider value={{data, loading, error, clearError, addWord, removeWord, updateWord}}>
			{children}
		</DataContext.Provider>
	);
};

export default ContextProvider;