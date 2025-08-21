import { Outlet, Link, useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();

  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="/profile/details" className={location.pathname === '/profile/details' ? 'active' : ''}>
          Details
        </Link>
        <Link to="/profile/settings" className={location.pathname === '/profile/settings' ? 'active' : ''}>
          Settings
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;