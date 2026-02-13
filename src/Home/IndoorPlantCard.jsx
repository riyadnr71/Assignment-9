import { Link } from "react-router";

const IndoorPlantCard = ({ plant }) => {
  const {
    plantId,
    plantName,
    category,
    price,
    rating,
    image,
    careLevel,
  } = plant;

  
  const getCareLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'difficult':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Discount badge (if applicable) */}
      {plant.discount && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
          -{plant.discount}%
        </div>
      )}
      
   
      <button className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
            {plantName}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCareLevelColor(careLevel)}`}>
            {careLevel}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-3">
          {category}
        </p>

        <div className="flex items-center mb-4">
          {renderRating(rating)}
          <span className="ml-auto text-xs text-gray-500">
            {plant.reviews || 0} reviews
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">
              ${price}
            </span>
            {plant.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${plant.originalPrice}
              </span>
            )}
          </div>
          
        
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-1 ${plant.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`text-xs ${plant.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {plant.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        <Link to={`/plants-Details/${plantId}`} className="block">
          <button className="w-full bg-green-500 text-black py-2.5 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IndoorPlantCard;