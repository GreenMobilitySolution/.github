import React, { useEffect, useState } from "react";
import { CategoriesTab } from "../../../Database/Category/CategoryTab";

interface CategoriesSubMenuProps {
  setShowMenu?: React.Dispatch<React.SetStateAction<any>>;
}

const CategoriesSubMenu = ({ setShowMenu }: CategoriesSubMenuProps) => {
  const [isMobile] = useState(window.innerWidth < 700);
  const [currentCategory, setCurrentCategory] = useState<string>("Ingendo na Gare");

  const categoryHandler = (event: any, category: string) => {
    event.preventDefault();
    setCurrentCategory(category);
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
    <nav className="flex bg-gradient-to-r from-green-100 to-green-200 flex-col gap-10 xmd:gap-8 md:gap-10 lg:gap-12 xmd:flex xmd:flex-row items-center justify-between xmd:justify-center h-16 text-neutral-600 text-lg xmd:w-[100%]">
      <div className="flex gap-4 p-2 rounded">
        <button
          onClick={() => scrollToSection('gares')}
          className={`${currentCategory === 'Ingendo na Gare' ? 'bg-grey-600 text-black' : 'hover:text-black hover:border-gray-500 hover:border'} border border-blue-400 cursor-pointer px-2 py-1 rounded text-lg`}
        >
          Ingendo na Gare
        </button>
        <button
          onClick={() => scrollToSection('cars')}
          className={`${currentCategory === 'Imodoka' ? 'bg-grey-600 text-black' : 'hover:text-black hover:border-gray-500 hover:border'} cursor-pointer border border-blue-400  px-2 py-1 rounded text-lg`}
        >
          Imodoka
        </button>
      </div>
    </nav>
  );
};

export default CategoriesSubMenu;