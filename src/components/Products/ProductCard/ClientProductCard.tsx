import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

interface Props {
  product: ProductProp;
}
export interface Category {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  products: [
    {
      id: string;
    }
  ];
}
export interface User {
  firstName: string;
  lastName: string;
  status?: string;
}
export interface ProductProp {
  categories: Category[];
  createdAt: Date;
  description: string;
  expirationDate?: Date;
  feedbacks?: string[];
  id?: string;
  images: string[];
  isAvailable: boolean;
  name: string;
  newPrice: string;
  oldPrice?: string;
  quantity: string;
  updatedAt: Date;
  vendor: User;
}
const ClientProductCard = (props: Props) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null); // Dummy category state
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductProp[]>([]); // Dummy products state
  const [onWishlistPage, setOnWishlistPage] = useState(false); // Dummy wishlist page state
  const [inWishlist, setInWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${props.product.id}`);
  };

  useEffect(() => {
    let productInWishlist;
    if (products) {
      productInWishlist = products.find((product) => product.id === props.product.id);
    }
    if (productInWishlist) {
      setInWishlist(true);
      setWishlistId(productInWishlist.id ? parseInt(productInWishlist.id) : null);
    } else {
      setInWishlist(false);
      setWishlistId(null);
    }
  }, [products, props.product.id]);

  const handleAddToWishlist = () => {
    setLoading(true);
    // Simulate adding to wishlist
    setTimeout(() => {
      setInWishlist(true);
      setLoading(false);
    }, 1000);
  };

  const handleRemoveFromWishlist = () => {
    setLoading(true);
    // Simulate removing from wishlist
    setTimeout(() => {
      setInWishlist(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      onClick={handleCardClick}
      data-testid="productDiv"
      className="group cursor-pointer flex flex-col gap-y-2 w-[15.6rem] text-sm hover:bg-neutral-200 p-2 rounded relative duration-200"
    >
      <div className="absolute right-4 top-4 z-40">
        {loading ? (
          <div
            data-testid="beatLoaderDiv"
            className="flex bg-baseWhite w-15 h-8 pt-[2px] justify-center xmd:items-center text-center rounded-sm text-sm"
          >
            <BeatLoader size={10} color="#073001" />
          </div>
        ) : onWishlistPage ? (
          <div className="group-hover:flex sm:flex md:hidden bg-baseWhite w-8 h-8 pt-[2px] justify-center xmd:items-center text-center rounded-full">
          </div>
        ) : inWishlist ? (
          <div className="group-hover:flex sm:flex md:hidden bg-baseWhite w-8 h-8 pt-[2px] justify-center xmd:items-center text-center rounded-full">
            <i
              className="fa-solid fa-heart text-lg text-orange"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.stopPropagation();
                handleRemoveFromWishlist();
              }}
              data-testid="removeButton"
            ></i>
          </div>
        ) : (
          <div className="group-hover:flex sm:flex md:hidden bg-baseWhite w-8 h-8 pt-[2px] justify-center xmd:items-center text-center rounded-full">
            <i
              className="fa-regular fa-heart text-lg"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.stopPropagation();
                handleAddToWishlist();
              }}
              data-testid="addButton"
            ></i>
          </div>
        )}
      </div>
      <div className="bg-neutral-400 h-[19.5rem] p-2">
        <img src={props.product.images[0]} alt="" className=" h-full w-full object-contain" />
      </div>
      <div className="text-neutral-600">
        <p>{props.product.name}</p>
        {!props.product.categories[0] && <p>product</p>}
        {props.product.categories[0] && (
          <p className="text-[13px] ">
            {currentCategory
              ? currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1).toLowerCase()
              : props.product.categories[0].name.charAt(0).toUpperCase() +
                props.product.categories[0].name.slice(1).toLowerCase()}
          </p>
        )}
      </div>
      <p>{props.product.vendor?.lastName + ' ' + props.product.vendor?.firstName}</p>
      <p className="text-error200">RWF {props.product.newPrice}</p>
    </div>
  );
};
export default ClientProductCard;