import React, { useState } from "react";

interface CategoriesSubMenuProps {
  setShowMenu?: React.Dispatch<React.SetStateAction<any>>;
}

const CategoriesSubMenu = ({ setShowMenu }: CategoriesSubMenuProps) => {
  const [isMobile] = useState(window.innerWidth < 700);
  const [currentCategory, setCurrentCategory] = useState<string>("Ingendo na Gare");

  const categoryHandler = (event: any, category: string, sectionId: string) => {
    event.preventDefault();
    setCurrentCategory(category);
    scrollToSection(sectionId);
    if (setShowMenu) {
      setShowMenu(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="mt-5 py-10 flex bg-gradient-to-r from-green-100 to-green-200 flex-col gap-4 xmd:gap-6 md:gap-8 lg:gap-10 xmd:flex xmd:flex-row items-center justify-between xmd:justify-center h-16 text-neutral-600 text-lg xmd:w-[100%] shadow-md">
      <div className="flex gap-4 p-2 rounded">
        <button
          onClick={(event) => categoryHandler(event, 'Ingendo na Gare', 'bus-stops')}
          className={`${
            currentCategory === 'Ingendo na Gare' ? 'bg-green-500 text-white' : 'hover:bg-green-300 hover:text-black'
          } cursor-pointer px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out`}
        >
          Ingendo na Gare
        </button>
        <button
          onClick={(event) => categoryHandler(event, 'Imodoka', 'cars')}
          className={`${
            currentCategory === 'Imodoka' ? 'bg-green-500 text-white' : 'hover:bg-green-300 hover:text-black'
          } cursor-pointer px-4 py-2 rounded-lg text-lg transition duration-300 ease-in-out`}
        >
          Imodoka
        </button>
      </div>
    </nav>
  );
};

export default CategoriesSubMenu;