import st from './header.module.scss';

const Header = () => {
    return (
        <header className={st.header}>
            <div className={st.left}>
                <div>Hello, Friend!</div>
                <div>We're glade to see you!</div>
            </div>
            <div className={st.right}>
                Welcome to our app for learning English words
            </div>
        </header>
    )
}

export default Header;