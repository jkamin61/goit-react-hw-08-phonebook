import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import style from './Navigation.module.css';


export const Navigation = () => {
    const isLoggedIn = useAuth();

    return (
      <nav>
        <NavLink className={style.link} to={'/'}>
          <div className={style.home}>
            Home
            </div>
        </NavLink>
        {isLoggedIn && (
          <NavLink className={style.link} to="/contacts">
            Phonebook
          </NavLink>
        )}
      </nav>
    );
}
