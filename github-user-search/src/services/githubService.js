import axios from 'axios';

export const fetchAdvancedUserData = async (params) => {
  const { username, location, repos } = params;
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>${repos}`;
  
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      { params: { per_page: 10 } }
    );
    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user details');
  }
};