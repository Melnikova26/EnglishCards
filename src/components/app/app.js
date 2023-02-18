import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

import './app.scss';

function App() {
  const data = [
    {word: "Flower", transcription: "[ˈflaʊ.ɚ]", translation: "Цветок", change: true, id: 1},
    {word: "Company", transcription: "[ˈkʌmpənɪ]", translation: "Компания",change: false,  id: 2},
    {word: "Reveal", transcription: "[rɪˈviːl]", translation: "Раскрывать",change: false,  id: 3},
  ];

    return (
      <div className="app">
            <Header />
            <Main data = {data}/>
            <Footer/>
      </div>
    );
}
  
export default App;