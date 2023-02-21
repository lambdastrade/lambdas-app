import React from 'react';
import TimeButtonGroup from '../dashboard/TimeButtonGroup';
import StatsFilterGroup from '../dashboard/StatsFilterGroup';
import DeploymentCards from '../../components/cards/DeploymentCards';
import DeploymentTable from '../../components/tables/DeploymentTable';

const DeploymentBody = () => {
    return (
        <div className="font-jakarta w-full h-full flex flex-col flex-1">
            <div className="flex justify-between items-center col-span-12">
                <TimeButtonGroup />
                <StatsFilterGroup />
            </div>
            <DeploymentCards />
            <DeploymentTable />
        </div>
    );
};

export default DeploymentBody;
