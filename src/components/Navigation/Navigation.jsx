import { Link } from 'react-router-dom';
import style from './Navigation.module.css';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
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

      <button className={style.btn} type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
};

export default Navigation;
