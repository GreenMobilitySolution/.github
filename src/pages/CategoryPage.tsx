import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { SingleCategory } from '../components/Category/SingleCategory';
import { routes } from '../../Database/GareRoutes';
import CategoriesSubMenu from '../components/Menu/CategoriesSubMenu';
import { SingleCategoryCars } from '../components/Cars/SingleCategoryCars';
import CategoriesMenu from '../components/Menu/CategoriesMenu';
import { Routes } from '../../Database/models/Routes';
import { Route } from './LandingPage/Home';

const SingleCategoryPage = () => {
  const { categoryName = '' } = useParams<{ categoryName: string }>();
  const [CategoryRoutes, setCategoryRoutes] = useState<Route[]>([]);

  useEffect(() => {
    let currentRoutes: Route[] = [];

    if (categoryName === 'Ingendo zo Mumugi wa Kigali') {
      currentRoutes = Routes.filter((route) => route.operate === "kigali");
    } else if (categoryName === 'Ingendo zo Muntara') {
      currentRoutes = Routes.filter((route) => route.operate === "upCountry sides");
    }
    setCategoryRoutes(currentRoutes);
  }, [categoryName]);

  return (
    <>
      <PageTitle title={`MobyLife | ${categoryName}`} />
      {/* <CategoriesMenu /> */}
      <div className="hidden xmd:flex">
        <CategoriesSubMenu />
      </div>
      <SingleCategory Routes={CategoryRoutes} CategoryTitle={categoryName} />
      <SingleCategoryCars Routes={CategoryRoutes} CategoryTitle={categoryName} />
    </>
  );
};

export default SingleCategoryPage;