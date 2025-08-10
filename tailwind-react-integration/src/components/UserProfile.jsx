function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">

      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full sm:w-24 sm:h-24 md:h-36 md:w-36 mx-auto mb-4 
        hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      
       <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 text-center hover:text-blue-500">John Doe</h1>
      
      <p className="text-gray-600 sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
