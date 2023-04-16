import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <Link className={style.list} to="/">
            Home
          </Link>
          <Link className={style.list} to="/movies">
            Movies
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
