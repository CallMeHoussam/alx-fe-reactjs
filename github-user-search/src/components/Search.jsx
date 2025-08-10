import { useState } from 'react';
import { fetchAdvancedUserData, fetchUserDetails } from '../services/githubService';

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const userList = await fetchAdvancedUserData(searchParams);
      const usersWithDetails = await Promise.all(
        userList.map(async (user) => {
          const details = await fetchUserDetails(user.login);
          return { ...user, ...details };
        })
      );
      setUsers(usersWithDetails);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={searchParams.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Location"
            />
          </div>
          <div>
            <label className="block mb-1">Min Repos</label>
            <input
              type="number"
              name="minRepos"
              value={searchParams.minRepos}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Minimum repos"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="font-semibold">
                  {user.name || user.login}
                </h2>
                <p className="text-gray-600">{user.location}</p>
                <p className="text-sm">
                  Repositories: {user.public_repos} | Followers: {user.followers}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}