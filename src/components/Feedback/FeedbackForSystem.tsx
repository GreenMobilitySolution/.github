import { FeedbackForSystemProps } from "../../../lib/Feedback/FeedbackForSystem";
import { FaStar } from "react-icons/fa";

export const FeedbackForSystem: React.FC<FeedbackForSystemProps> = (props) => {
    return (
        <div className="flex flex-col p-6 border rounded-lg shadow-lg max-w-sm bg-white transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <img src={props.userPhoto} alt={props.userName} className="w-14 h-14 rounded-full mr-4 border-2 border-gray-200" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{props.userName}</h3>
                    <div className="flex gap-1 items-center">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={index < props.rating ? "text-yellow-500" : "text-gray-300"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className="mb-2 text-gray-700 leading-relaxed">{props.message}</p>
            <p className="text-gray-500 text-sm">{props.date}</p>
        </div>
    );
}