import React from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
        <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={index < rating ? "text-yellow-500" : "text-gray-300"}
                />
            ))}
        </div>
    );
};

export default StarRating;
