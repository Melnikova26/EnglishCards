import img from './error.png';
const ErrorMessage = () => {
    return (
        <>
            <h3 style={{ textAlign: 'center', fontSize: '20px'}}>Похоже вышла ошибка. Пожалуйста, повторите попытку позднее!</h3>
            <img style={{ display: 'block', width: "300px", height: "400px", objectFit: 'contain', margin: '0 auto'}} src={img} alt=""Error/>
        </>

    )
}

export default ErrorMessage;