import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { SingleCategory } from '../components/Category/SingleCategory';
import { routes } from '../../Database/GareRoutes';
import CategoriesSubMenu from '../components/Menu/CategoriesSubMenu';
import { SingleCategoryCars } from '../components/Cars/SingleCategoryCars';
import CategoriesMenu from '../components/Menu/CategoriesMenu';

const SingleCategoryPage = () => {
  const { categoryName = '' } = useParams<{ categoryName: string }>();

  return (
    <>
      <PageTitle title={`MobyLife | ${categoryName}`} />
      {/* <CategoriesMenu /> */}
      <div className="hidden xmd:flex">
        <CategoriesSubMenu />
      </div>
      <SingleCategory Routes={routes} CategoryTitle={categoryName} />
      <SingleCategoryCars Routes={routes} CategoryTitle={categoryName} />
    </>
  );
};

export default SingleCategoryPage;