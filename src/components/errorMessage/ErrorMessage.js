import img from './error.png';
import st from './errorMessage.module.scss';
const ErrorMessage = () => {
    return (
        <>
            <h3 className={st.header}>Похоже произошла ошибка. Пожалуйста, повторите попытку позднее!</h3>
            <img className={st.desc} src={img} alt=""Error/>
        </>

    )
}

export default ErrorMessage;