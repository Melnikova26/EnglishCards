import st from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={st.footer}>
            <ul className={st.list}>
                <li className={st.item}><a href="##" className={st.link}>Contact information</a></li>
                <li className={st.item}><a href="##" className={st.link}>Social</a></li>
                <li className={st.item}><a href="##" className={st.link}>About team</a></li>
            </ul>
        </footer>
    )
}

export default Footer;