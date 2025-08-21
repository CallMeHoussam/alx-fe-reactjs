import { Outlet, Link, useLocation, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

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
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route index element={<ProfileDetails />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Profile;