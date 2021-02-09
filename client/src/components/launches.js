import React, { useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Vehicle from './vehicle';
import Mission from './mission';
import { FilterContext } from '../contexts/filter';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            id
            flight_number
            name
            date_local
            success
        }
    }
`;

function Launches() {
    const { successFilter, failFilter } = useContext(FilterContext);
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading)
        return <h4>Loading...</h4>;
    if (error)
        console.log(error);

    let filteredLaunches = data.launches;
    let totalLaunches = filteredLaunches.length;

    if ((successFilter && failFilter) || (!successFilter && !failFilter)) {
        filteredLaunches = data.launches;
        totalLaunches = filteredLaunches.length;
    }

    if (successFilter && !failFilter) {
        filteredLaunches = data.launches.filter((launch) => launch.success);
        totalLaunches = filteredLaunches.length;
    }

    if (failFilter && !successFilter) {
        filteredLaunches = data.launches.filter((launch) => !launch.success);
        totalLaunches = filteredLaunches.length;
    }

    filteredLaunches.sort((a, b) => (a.date_local < b.date_local ? 1 : -1));

    const displayLaunches = () => {
        return filteredLaunches.map((launch) => (
            <Vehicle key={launch.flight_number} launch={launch} />
        ));
    };


    return (
        <>
            <h1 className="display-4 my-3">Launches <small className="text-muted">(total:{totalLaunches})</small></h1>

            <Mission />

            {displayLaunches()}
        </>
    );
}
export default Launches;
