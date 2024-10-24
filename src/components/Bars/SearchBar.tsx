import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleInputClick = () => {
    navigate('/search');
  };

  return (
    <div
      className="hover:cursor-pointer relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleInputClick}
    >
      <Search className="w-6 h-6 text-black hover: cursor-pointer" />
      {isHovered && (
        <input
          type="text"
          placeholder="Search..."
          className="absolute left-8 w-48 p-2 border border-gray-300 rounded-lg transition-all duration-300 ease-in-out"
        />
      )}
    </div>
  );
};

export default SearchBar;