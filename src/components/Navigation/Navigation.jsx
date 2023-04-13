import { Link, useNavigate } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className={style.nav}>
        <Link to="/">Home</Link>
        {/* <Link to="/movies">Movies</Link> */}
      </nav>
      <nav>
        <button type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
