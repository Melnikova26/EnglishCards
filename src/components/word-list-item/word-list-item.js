import { Component } from 'react';
import pen from './../../icons/edit.svg';
import del from './../../icons/delete.svg';
import st from './word-list-item.module.scss';
import './../../buttons.scss';

class WordListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            change: false,
            word: this.props.word,
            transcription: this.props.transcription,
            translation: this.props.translation
        }
    }

    onEdit = () => {
        this.setState({
            change: true
        })
        console.log(this.state.word);
    }
    onUpdateWord = (event) => {
        this.setState({
            word: event.target.value,
        })
    }

    onUpdateTranscription = (event) => {
        this.setState({
            transcription: event.target.value,
        })
    }

    onUpdateTranslation = (event) => {
        this.setState({
            translation: event.target.value,
        })
    }

    onSave = () => {
        this.setState({
            change: false,
            word: this.state.word,
            transcription: this.state.transcription,
            translation: this.state.translation
        })
        this.props.onUpdateWord(this.props.num, this.state.word);
        this.props.onUpdateTranscription(this.props.num, this.state.transcription);
        this.props.onUpdateTranslation(this.props.num, this.state.translation);
    }



    onCancel = () => {
        this.setState({
            change: false,
            word: this.props.word,
            transcription: this.props.transcription,
            translation: this.props.translation
        })
        console.log(this.props.word);
        console.log(this.props.transcription);
    }

    render(){
        const {num} = this.props;
        const {change, word, transcription, translation} = this.state;
        let classNames = `${st.item}`;
        if (change) {
            classNames = `${st.item} ${st.active}`;
        }
        return (
            <li className={classNames}>
                <div className={st.point}>{num}</div>
                <div className={st.point}>
                    {
                        change ? <input type="text" 
                        value={word} name="word"
                        onChange={this.onUpdateWord} /> :
                        <input readOnly type="text" 
                        value={word} name="word"/>
                    }
                    
                </div>
                <div className={st.point}>
                    {
                        change ? 
                        <input type="text" value={transcription} name="transcription"
                                onChange={this.onUpdateTranscription}/> :
                        <input readOnly type="text" value={transcription} name="transcription"/>
                    }
                    
                </div>
                <div className={st.point}>
                    {
                        change ? 
                        <input type="text" value={translation} name="translation"
                                onChange={this.onUpdateTranslation}/> :
                        <input readOnly type="text" value={translation} name="translation"/>
                    }
                    
                </div>
                <div className={st.point}>
                    <div className={st.img}>
                        <div className={st.edbtn}>
                            {
                                change ? 
                                <button onClick={this.onSave} className={`button__save ${st.visible}`}></button> :
                                <button className='button__save'></button>
                            }
    
                            {
                                change ? 
                                <button 
                                className={`button__clone ${st.visible}`}
                                onClick={this.onCancel} >
                                    &times;</button> :
                                <button className='button__clone'>&times;</button>
                            }
                        </div>
                        <div onClick={this.onEdit}><img src={pen} alt="edit"/></div>
                        <div><img src={del} alt="del"/></div>
                    </div>
                </div>
            </li>
        )
    }
   
}

export default WordListItem;