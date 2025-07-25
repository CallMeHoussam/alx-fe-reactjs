import useRecipeStore from '../store/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <button onClick={() => 
      favorites.includes(recipeId) 
        ? removeFavorite(recipeId) 
        : addFavorite(recipeId)
    }>
      {favorites.includes(recipeId) ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;