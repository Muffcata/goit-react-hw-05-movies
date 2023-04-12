import { NavLink, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
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
