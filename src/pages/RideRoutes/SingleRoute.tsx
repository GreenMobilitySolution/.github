import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import CategoriesSubMenu from '../../components/Menu/CategoriesSubMenu';
import { SingleCategory } from '../../components/Category/SingleCategory';
import { routes } from '../../../Database/GareRoutes';
import { SingleCategoryCars } from '../../components/Cars/SingleCategoryCars';


const SingleRoutePage = () => {
  const { categoryName = '' } = useParams<{ categoryName: string }>();

  return (
    <>
      <PageTitle title={`MobyLife | ${categoryName}`} />
      <div className="hidden xmd:flex">
        <CategoriesSubMenu />
      </div>
      <SingleCategory Routes={routes} CategoryTitle={categoryName} />
      <SingleCategoryCars Routes={routes} CategoryTitle={categoryName} />
    </>
  );
};

export default SingleRoutePage;