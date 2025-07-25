import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };
  return (
    <button onClick={() => deleteRecipe(recipeId)}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;