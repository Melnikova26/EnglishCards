
import st from './form.module.scss';
const TextInput = (props) => {
    const {hasError, error, value, onChange, ...items} = props;
    
    return (
        <>
            <div className={st.point}>
                <input onChange={onChange} value={value} type="text" 
                    {...items}
                />
                {hasError && <div className={st.error}>Поле не может быть пустым</div>}
                {error && <div className={st.error}>Поле может содержать только буквенные символы</div>}
            </div>
        </>
    )
};

export default TextInput;