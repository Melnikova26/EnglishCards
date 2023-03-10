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
            dataRow: {
                word: this.props.word,
                transcription: this.props.transcription,
                translation: this.props.translation
            },
            prevDataRow: {
                word: this.props.word,
                transcription: this.props.transcription,
                translation: this.props.translation
            },
        }
    }
    
    onEdit = () => {
        this.setState({
            change: true
        })
    }

    onUpdate = (event) => {
        const {name, value} = event.target;
        this.setState((state) => ({
            dataRow: {
                ...state.dataRow,
                [name]: value
            }
        }));
    };

    onSave = () => {
        this.setState({
            change: false,
            prevDataRow: {
                ...this.state.dataRow
            }
        });
    }

    onCancel = () => {
        this.setState({
            change: false,
            dataRow: {
                ...this.state.prevDataRow
            }
        })
    }

    render(){
        const {change} = this.state;
        const {word, transcription, translation} = this.state.dataRow;

        let classNames = `${st.item}`;

        if (change) {
            classNames = `${st.item} ${st.active}`;
        }

        return (
            <li className={classNames}>
                <div className={st.point}>{this.props.num}</div>
                <div className={st.point}>
                    {
                        change ? <input type="text" 
                        value={word} name="word"
                        onChange={this.onUpdate} /> :
                        <input readOnly type="text" 
                        value={word} name="word"/>
                    }
                    
                </div>
                <div className={st.point}>
                    {
                        change ? 
                        <input type="text" value={transcription} name="transcription"
                                onChange={this.onUpdate}/> :
                        <input readOnly type="text" value={transcription} name="transcription"/>
                    }
                    
                </div>
                <div className={st.point}>
                    {
                        change ? 
                        <input type="text" value={translation} name="translation"
                                onChange={this.onUpdate}/> :
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