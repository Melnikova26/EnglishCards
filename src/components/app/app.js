import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';

import Header from "../header/header";
import Main from "../main/main";
import WordCard from '../word-card/Word-card';
import Footer from "../footer/footer";


const App = () =>{

	const [data, setdata] = useState([
		{word: "Flower", transcription: "[ˈflaʊ.ɚ]", translation: "Цветок", change: true, id: 1},
		{word: "Company", transcription: "[ˈkʌmpənɪ]", translation: "Компания",change: false,  id: 2},
		{word: "Reveal", transcription: "[rɪˈviːl]", translation: "Раскрывать",change: false,  id: 3},
		{},
	]);

	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<Main data = {data}/>} />
					<Route exact path="/train" element={<WordCard data = {data} />} />
				</Routes>
			</main>
			<Footer/>
			
    	</Router>
	);
	
  
}
  
export default App;