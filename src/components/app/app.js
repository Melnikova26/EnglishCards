import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../header/header";
import Main from "../main/main";
import WordCard from '../word-card/Word-card';
import Footer from "../footer/footer";


const App = () =>{

	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route exact path="/train" element={<WordCard />} />
				</Routes>
			</main>
			<Footer/>
			
    	</Router>
	);
	
  
}
  
export default App;