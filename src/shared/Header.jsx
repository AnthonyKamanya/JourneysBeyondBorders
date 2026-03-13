import { NavLink } from 'react-router';

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <NavLink to={'/'}>Welcome</NavLink>
          <NavLink to={'/tasks'}>Tasks</NavLink>
          <NavLink to={'/taskdetails'}>TaskDetail</NavLink>
          <NavLink to={'/profile'}>Profile</NavLink>
          <NavLink to={'/notfound'}>Notfound</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
