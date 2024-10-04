import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';

function FavoritePage() {
  const [FavoriteProducts, setFavoriteProducts] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]); // Replace `any` with the appropriate type for your products

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate fetching Favorite products
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Set dummy products
        const dummyProducts = [
          { productInfo: { name: 'Product 1', price: 100 } },
          { productInfo: { name: 'Product 2', price: 200 } },
        ];
        setProducts(dummyProducts);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch Favorite');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const productCards: JSX.Element[] = [];
    products.forEach((product, index) => {
      productCards.push(<ClientProductCard product={product.productInfo} key={index} />);
    });
    setFavoriteProducts(productCards);
  }, [products]);

  const clearAll = () => {
    setProducts([]);
    setFavoriteProducts([]);
  };

  return (
    <div className="text-black flex justify-center">
      <div className="w-[90%] p-4 flex flex-col min-h-[480px]">
        <div className="flex justify-between items-center mb-8 xmd:px-8">
          {products.length > 0 && <h2 className="font-medium text-[25px]">Favorite</h2>}
          {products.length > 1 && (
            <div>
              <ConfirmDeletePopup
                trigger={<p className=" text-[16px] hover:underline cursor-pointer">Clear All</p>}
                title={`Confirm removing all products from your Favorite`}
                body={`Are you sure you want to remove all products from your Favorite?`}
                onSubmit={clearAll}
              />
            </div>
          )}
        </div>
        {!loading && FavoriteProducts.length > 0 && (
          <div className="w-full flex gap-y-10 justify-center flex-wrap gap-x-3 px-6 xmd:px-0">{FavoriteProducts}</div>
        )}

        {!loading && products.length === 0 && (
          <p className="text-[20px] font-medium self-center">Your Favorite is empty.</p>
        )}

        {loading && (
          <div className="w-full flex justify-center px-6 py-20" data-testid="loading-spinner">
            <PropagateLoader color="#070f2b" />
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;