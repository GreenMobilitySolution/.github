import React, { useEffect, useState } from 'react';
import CategoriesMenu from '../../components/Menu/CategoriesMenu';
import ClientProductCard, { ProductProp } from '../../components/Products/ProductCard/ClientProductCard';
import HeroSection from '../../components/Banners/HeroSection';
import { PropagateLoader } from 'react-spinners';

const Home = () => {
  const [productList, setProductList] = useState<ProductProp[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<JSX.Element[]>([]);
  const [viewProducts, setViewProducts] = useState<JSX.Element[]>([]);
  const [viewItems, setViewItems] = useState(12);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set dummy products
    const dummyProducts: ProductProp[] = [
      {
        id: '1',
        name: 'Product 1',
        newPrice: '100',
        oldPrice: '150',
        quantity: '10',
        vendor: {
          status: 'active',
          firstName: '',
          lastName: ''
        },
        categories: [{
          name: 'Category 1',
          id: '',
          createdAt: new Date(),
          updatedAt: new Date(),
          products: [{ id: '1' }]
        }],
        images: ['image1.jpg'],
        updatedAt: new Date(),
        createdAt: new Date(),
        description: '',
        isAvailable: false
      },
      {
        id: '2',
        name: 'Product 2',
        newPrice: '200',
        oldPrice: '250',
        quantity: '5',
        vendor: {
          status: 'active',
          firstName: '',
          lastName: ''
        },
        categories: [{
          name: 'Category 2',
          id: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          products: [{ id: '1' }]
        }],
        images: ['image2.jpg'],
        updatedAt: new Date(),
        createdAt: new Date(),
        description: '',
        isAvailable: false
      },
    ];
    setProductList(dummyProducts);
    setLoading(false);
  }, []);

  useEffect(() => {
    const productCards = [];
    for (let i = 0; i < productList.length; i++) {
      if (!currentCategory) {
        productCards.push(<ClientProductCard product={productList[i]} key={i} />);
      }
      if (currentCategory) {
        for (let j = 0; j < productList[i].categories.length; j++) {
          if (currentCategory.toLowerCase() === productList[i].categories[j].name.toLowerCase()) {
            productCards.push(<ClientProductCard product={productList[i]} key={i} />);
          }
        }
      }
    }
    if (productCards) {
      setSelectedProducts(productCards);
    }
  }, [currentCategory, productList, viewItems]);

  useEffect(() => {
    let productCards;
    if (selectedProducts.length >= viewItems) {
      productCards = selectedProducts.slice(0, viewItems);
    } else {
      productCards = selectedProducts;
    }
    setViewProducts(productCards);
  }, [viewItems, selectedProducts]);

  const handleAddMore = () => {
    setViewItems((prevViewItems) => prevViewItems + 4);
  };

  return (
    <div className="relative text-baseBlack">
      <div className="hidden xmd:flex">
        <CategoriesMenu />
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="flex flex-col items-center justify-around gap-y-8 py-8 xmd:px-8 lg:px-16" id="products">
        <h1 className="text-2xl font-medium">Ingendo zo mumugi wa Kigali.</h1>

        {loading && (
          <div className="w-full flex justify-center px-6 py-20" data-testid="loading-spinner">
            <PropagateLoader color="#070f2b" />
          </div>
        )}

        {!loading && (
          <div className="w-full flex gap-y-10 justify-center flex-wrap gap-x-5 px-6 xmd:px-0">
            {viewProducts.length > 0 ? viewProducts : `${currentCategory} Products sold out !! Come back later`}
          </div>
        )}
      </div>
      {selectedProducts.length > viewItems && (
        <div className="w-full flex items-center justify-center p-12">
          <button
            onClick={handleAddMore}
            className="w-[250px] flex justify-center gap-x-3 items-center rounded-3xl min-h-[50px] ml-1 text-primary border  border-primary hover:bg-gray-100"
          >
            Load more products
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;