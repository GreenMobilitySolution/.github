import { useState, useEffect } from "react";
import CategoriesMenu from "../../components/Menu/CategoriesMenu";
import HeroSection from "../../components/Banners/UpdateSection";
import { routes } from "../../../Database/GareRoutes";
import { CategoryGareSection } from "../../components/CategoryGaresSection";
import { FeedbackForSystem } from "../../components/Feedback/FeedbackForSystem";
import { SystemFeedback } from "../../../Database/Feedback/SystemFeedback";
import { PropagateLoader } from "react-spinners";
import LoadButton from "../../components/Buttons/LoadButton";
import { userIconUrl } from "../../assets/images/dynamicImages/images";

const Home = () => {
  const [loadingFeedback, setLoadingFeedback] = useState(true);
  const [visibleFeedbackCount, setVisibleFeedbackCount] = useState(4);

  useEffect(() => {
    // Simulate fetching feedback
    setTimeout(() => {
      setLoadingFeedback(false);
    }, 1000); // Adjust the timeout as needed
  }, []);

  const handleLoadMoreFeedback = () => {
    setVisibleFeedbackCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="relative text-baseBlack">
      <div className="hidden xmd:flex">
        <CategoriesMenu />
      </div>
      <div>
        <HeroSection />
      </div>
      {/* Kigali Transportation */}
      <CategoryGareSection Routes={routes} CategoryTitle="Ingendo zo mumugi wa Kigali" />
      {/* Rwanda Sides Transportation */}
      <CategoryGareSection Routes={routes} CategoryTitle="Ingendo zo Muntara" />
      <div className="flex flex-col mb-5 items-center gap-5">
        <h1 className="text-2xl mb-5 mt-5 font-medium">Reba icyo abakoresha iyi systeme bayivugaho!</h1>
        <div className="flex flex-wrap mb-5 justify-center gap-4">
          {loadingFeedback ? (
            <div className="w-full flex justify-center px-6 py-20" data-testid="loading-spinner">
              <PropagateLoader color="#070f2b" />
            </div>
          ) : (
            <>
              {SystemFeedback.slice(0, visibleFeedbackCount).map((feedback, index) => (
                <FeedbackForSystem
                  key={index}
                  userPhoto={userIconUrl}
                  userName={feedback.userName}
                  message={feedback.message}
                  date={feedback.date}
                  rating={feedback.rating}
                />
              ))}
            </>
          )}
        </div>
        {!loadingFeedback && visibleFeedbackCount < SystemFeedback.length && (

      <LoadButton handle={ handleLoadMoreFeedback}>Izindi</LoadButton>
        )}
      </div>
    </div>
  );
};

export default Home;