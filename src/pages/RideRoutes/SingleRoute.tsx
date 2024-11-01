import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import CategoriesSubMenu from '../../components/Menu/CategoriesSubMenu';
import { routes } from '../../../Database/GareRoutes';
import { SingleCategoryCars } from '../../components/Cars/SingleCategoryCars';
import { BusStopSection } from '../../components/RoadRoutes/BusStop/BusStopSection';
import { busStops } from '../../../Database/BusStop/BusStops';
import CategoriesMenu from '../../components/Menu/CategoriesMenu';
import RouteHeader from '../../components/RoadRoutes/RouteHeader';
import { Routes } from '../../../Database/models/Routes';

const SingleRoutePage = () => {
    const { id = '' } = useParams<{ id: string }>();

    const route = Routes.find(route => route.id === id);

    if (!route) {
        return <div><h1>Route not found</h1></div>;
    }

    const routeName = `${route.from} - ${route.to}`;

    return (
        <>
            <PageTitle title={`MobyLife | ${routeName}`} />
            <div className="hroute den xmd:flex">
                <CategoriesSubMenu />
            </div>
            <RouteHeader categoryTitle={routeName} price={route.price} />
            <BusStopSection busStops={busStops} CategoryTitle={routeName} price={route.price}/>
            <SingleCategoryCars Routes={routes} CategoryTitle={routeName} />
        </>
    );
};

export default SingleRoutePage;