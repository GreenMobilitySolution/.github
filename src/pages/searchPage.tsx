import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchCard from '../components/Products/ProductCard/SearchCard';
import Pagination from '../components/Pagination';
import { Product as DisplayProduct } from '../components/Products/ProductCard/SearchCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<DisplayProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const query = useQuery();
  const searchTerm = query.get('query') || '';

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      // Simulate fetching products
      setTimeout(() => {
        const dummyProducts: DisplayProduct[] = [
          {
            id: '1',
            name: 'Product 1',
            price: 100,
            owner: 'John Doe',
            image: 'image1.jpg',
          },
          {
            id: '2',
            name: 'Product 2',
            price: 200,
            owner: 'Jane Doe',
            image: 'image2.jpg',
          },
        ];
        setProducts(dummyProducts);
        setLoading(false);
      }, 1000);
    }
  }, [searchTerm, currentPage, itemsPerPage]);

  return (
    <div className="text-baseBlack">
      <div className="w-full flex flex-col items-center justify-center gap-y-8 py-12 px-4 md:px-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex text-xl text-grey2 font-medium">Search Results for &quot;{searchTerm}&quot;</h1>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="w-full flex gap-y-10 justify-center flex-wrap gap-x-5 px-6 xmd:px-0">
          {products.length > 0 ? (
            <SearchCard productList={products} />
          ) : (
            <p>No products found.</p>
          )}
        </div>
        {products.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / itemsPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;