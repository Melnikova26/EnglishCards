import { Component } from 'react';

import Header from "../header/header";
import Main from "../main/main";
import Card from '../card/card';
import Footer from "../footer/footer";

import './app.scss';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: [
				{word: "Flower", transcription: "[ˈflaʊ.ɚ]", translation: "Цветок", change: true, id: 1},
				{word: "Company", transcription: "[ˈkʌmpənɪ]", translation: "Компания",change: false,  id: 2},
				{word: "Reveal", transcription: "[rɪˈviːl]", translation: "Раскрывать",change: false,  id: 3},
			],
			childComponentType: 'ChildComponent1'
		}
	}


	onLearn = () => {
		this.setState({
			childComponentType: 'ChildComponent2'
		})
	}

	onBack = () => {
		this.setState({
			childComponentType: 'ChildComponent1'
		})
	}

	onUpdateWord = (id, newValue) => {
        this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id){
					return {...item, word: newValue}
				}
				return item;
			})
		}));
    }

	onUpdateTranslation = (id, newValue) => {
        this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id){
					return {...item, translation: newValue}
				}
				return item;
			})
		}));
    }

	onUpdateTranscription = (id, newValue) => {
        this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id){
					return {...item, transcription: newValue}
				}
				return item;
			})
		}));
    }

	render() {
		const {data, childComponentType} = this.state;
		let ChildComponent;
		if (childComponentType === 'ChildComponent1') {
		ChildComponent = <Main data = {data} onLearn={this.onLearn} onUpdateWord={this.onUpdateWord} onUpdateTranscription={this.onUpdateTranscription} onUpdateTranslation={this.onUpdateTranslation}/>;
		} else if (childComponentType === 'ChildComponent2') {
		ChildComponent = <Card data = {data} onBack={this.onBack}/>;
		}
		return (
			<div className="app">
				<Header />
				{ChildComponent}
				<Footer/>
			</div>
		);
	}
  
}
  
export default App;