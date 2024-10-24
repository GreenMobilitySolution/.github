import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import CategoriesSubMenu from '../../components/Menu/CategoriesSubMenu';
import { routes } from '../../../Database/GareRoutes';
import { SingleCategoryCars } from '../../components/Cars/SingleCategoryCars';
import { BusStopSection } from '../../components/RoadRoutes/BusStop/BusStopSection';
import { busStops } from '../../../Database/BusStop/BusStops';
import CategoriesMenu from '../../components/Menu/CategoriesMenu';

const SingleRoutePage = () => {
    const { id = '' } = useParams<{ id: string }>();

    const route = routes.find(route => route.id === id);

    if (!route) {
        return <div><h1>Route not found</h1></div>;
    }

    const routeName = `${route.from} - ${route.to}`;

    return (
        <>
            <PageTitle title={`MobyLife | ${routeName}`} />
            <CategoriesMenu />
            <div className="hroute den xmd:flex">
                <CategoriesSubMenu />
            </div>
            <BusStopSection busStops={busStops} CategoryTitle={routeName} price={6000}/>
            <SingleCategoryCars Routes={routes} CategoryTitle={routeName} />
        </>
    );
};

export default SingleRoutePage;