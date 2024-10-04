import React, { useEffect, useState } from 'react';

interface CategoriesMenuProps {
  setShowMenu?: React.Dispatch<React.SetStateAction<any>>;
}

const CategoriesMenu = ({ setShowMenu }: CategoriesMenuProps) => {
  const [isMobile] = useState(window.innerWidth < 700);
  const [displayedCategories, setDisplayedCategories] = useState<JSX.Element[]>([]);
  const [categories, setCategories] = useState<Record<string, number>>({});
  const [currentCategory, setCurrentCategory] = useState<string>('');

  useEffect(() => {
    const categoryArray = Object.keys(categories).map((category) => {
      const style = currentCategory.toLowerCase() === category.toLowerCase() ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white';

      return (
        <a
          onClick={(event) => categoryHandler(event)}
          href="#products"
          title={category}
          key={category}
          className={`${style} cursor-pointer px-2 py-1 rounded text-lg`} // Increased font size
        >
          {category}
        </a>
      );
    });

    setDisplayedCategories(categoryArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, currentCategory]);

  useEffect(() => {
    setDummyCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDummyCategories = () => {
    const dummyCategories = {
      'Mumugi wa Kigali': 10,
      Muntara: 8,
    };

    setCategories(dummyCategories);
  };

  const categoryHandler = (event: any) => {
    if ((event.target as HTMLParagraphElement).title === 'Ingendo') {
      setCurrentCategory('');
    } else {
      setCurrentCategory((event.target as HTMLParagraphElement).title);
    }
    if (setShowMenu) {
      setShowMenu(false);
    }
  };

  return (
    <nav className="flex flex-col gap-10 xmd:gap-8 md:gap-10 lg:gap-12 xmd:flex xmd:flex-row items-center justify-between xmd:justify-center h-16 text-neutral-600 text-lg xmd:w-[100%]"> {/* Increased font size */}
      <p
        onClick={(event) => categoryHandler(event)}
        className={`${!currentCategory ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'} cursor-pointer px-2 py-1 rounded text-lg`} // Increased font size
      >
        Ingendo
      </p>
      {displayedCategories}
    </nav>
  );
};

export default CategoriesMenu;