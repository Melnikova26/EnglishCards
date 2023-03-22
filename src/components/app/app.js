import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import { useState } from 'react';

import Main from "../main/main";
import WordCard from '../word-card/Word-card';
import Footer from "../footer/footer";
import logo from './logo.png';
import st from './app.module.scss';

const App = () =>{

	const [data, setdata] = useState([
		{word: "Flower", transcription: "[ˈflaʊ.ɚ]", translation: "Цветок", change: true, id: 1},
		{word: "Company", transcription: "[ˈkʌmpənɪ]", translation: "Компания",change: false,  id: 2},
		{word: "Reveal", transcription: "[rɪˈviːl]", translation: "Раскрывать",change: false,  id: 3},
		{},
	]);

	return (
		<Router>
			<div className={st.app}>
				<header className={st.header}>
					<div className={st.cover}>
						<nav className={st.nav}>
							<div>
								<Link to="/" className={st.link}>
									<img src={logo} alt="Logo" />
								</Link>
							</div>

							<ul className={st.list}>
								<li className={st.list_item}>
									<Link to="/" className={st.link}>Home</Link>
								</li>
								<li className={st.list_item}>
									<Link to="/train" className={st.link}>Training</Link>
								</li>
							</ul>
						</nav>
					</div>
					
				</header>
				

				<Routes>
					<Route path="/train" element={<WordCard data = {data} />} />
					<Route path="/" element={<Main data = {data}/>} />
				</Routes>

				<Footer/>
			</div>
			
    	</Router>
	);
	
  
}
  
export default App;