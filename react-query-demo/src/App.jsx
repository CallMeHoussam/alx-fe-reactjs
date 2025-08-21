import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }>
            <Route index element={<ProfileDetails />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;