import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  //   const navigate = useNavigate();
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <Link className={style.list} to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </ul>
      </nav>

      {/* <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button> */}
    </>
  );
};

export default Navigation;
