// import { useState, useContext } from 'react';

// import st from './add.module.scss';
// import './../../style/buttons.scss';


// const Add = () => {
//     // const { data, addWord } = useContext(DataContext);
//     const [english, setEnglish] = useState('');
//     const [transcription, setTranscription] = useState('');
//     const [russian, setRussian] = useState('');


//     const sendWord = async (e) => {
//         e.preventDefault();
//         const newWord = {
//           id: await data[data.length - 1].id + 1,
//           english,
//           transcription,
//           russian,
//         };
//         addWord(newWord);
//         setEnglish('');
//         setTranscription('');
//         setRussian('');
        
//       };
//     return (
//         <div className={st.add}>
//             <h3 className={st.header}>Add a new word</h3>
//             <form action="##" onSubmit={sendWord}>
//                 <div className={st.word}>
//                     <div className={st.point}>Word</div>
//                     <div className={st.point}>Transcription</div>
//                     <div className={st.point}>Translation</div>
//                 </div>
//                 <div className={st.word}>
//                     <div className={st.point}>
//                         <input 
//                             type="text"
//                             value={english}
//                             onChange={(e) => setEnglish(e.target.value.trim())}
//                             required
//                         />
//                     </div>
//                     <div className={st.point}>
//                         <input 
//                             type="text"
//                             value={transcription}
//                             onChange={(e) => setTranscription(e.target.value.trim())}
//                             required/>
//                     </div>
//                     <div className={st.point}>
//                         <input 
//                             type="text"
//                             value={russian}
//                             onChange={(e) => setRussian(e.target.value.trim())}
//                             required/>
//                     </div>
//                 </div>
//                 <button type="submit" className="button button__add">ADD</button>
//             </form>
            
//         </div>
//     )
// }

// export default Add;