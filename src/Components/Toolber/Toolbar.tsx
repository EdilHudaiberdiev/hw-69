import {NavLink} from 'react-router-dom';

const Toolbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">

      <div className="container">
        <NavLink to='/' className="navbar-brand d-flex">
          <p className="me-2">Tv show searcher</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;