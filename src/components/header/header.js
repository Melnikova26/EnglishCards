import { Link, NavLink } from 'react-router-dom';
import st from './header.module.scss';

const Header = () => {
    return (
        <header className={st.header}>
            <div className={st.cover}>
                <div className={st.upheader}>
                    <div>
                        <Link to="/" className={st.link}>
                            <img src="./logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <nav className={st.nav}>
                        <ul className={st.list}>
                            <li className={st.list_item}>
                                <NavLink 
                                    end
                                    style={({isActive}) => ({'color': isActive ? '#48a4cf' : 'inherit'})}
                                    to="/" 
                                    className={st.link}>Home</NavLink>
                            </li>
                            <li className={st.list_item}>
                                <NavLink
                                    end
                                    style={({isActive}) => ({'color': isActive ? '#48a4cf' : 'inherit'})} 
                                    to="/train" 
                                    className={st.link}>Training</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            
        </header>
    )
}

export default Header;