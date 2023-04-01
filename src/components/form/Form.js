import st from './form.module.scss';
const TextInput = (props) => {

    return (
        <>
            <div className={st.point}>
                <input type="text" 
                    {...props}
                />
            </div>
        </>
    )
};

export default TextInput;