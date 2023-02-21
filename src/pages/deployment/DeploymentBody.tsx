import React from 'react';
import TimeButtonGroup from '../dashboard/TimeButtonGroup';
import StatsFilterGroup from '../dashboard/StatsFilterGroup';
import DeploymentCards from '../../components/cards/DeploymentCards';
import DeploymentTable from '../../components/tables/DeploymentTable';
import NestedTable from '../../components/tables/nested-table/NestedTable';

const rows = [
    {
        key: 1,
        element: (
            <>
                <td>Row 1 Element 1</td>
                <td>Row 1 Element 2</td>
                <td>Row 1 Element 3</td>
            </>
        ),
        nestedElement: <td>Row 1 Nested Element</td>,
        isExpanded: false
    },
    {
        key: 2,
        element: (
            <>
                <td>Row 2 Element 1</td>
                <td>Row 2 Element 2</td>
                <td>Row 2 Element 3</td>
            </>
        ),
        nestedElement: null,
        isExpanded: false
    }
];

const DeploymentBody = () => {
    return (
        <div className="font-jakarta w-full h-full flex flex-col flex-1">
            <div className="flex justify-between items-center col-span-12">
                <TimeButtonGroup />
                <StatsFilterGroup />
            </div>
            <DeploymentCards />
            {/* <div className="my-10 space-y-5">
                <NestedTable
                    tableHeaders={[
                        { title: 'Name', alignment: 'text-left' },
                        { title: 'Description', alignment: 'text-left' },
                        { title: 'Actions', alignment: 'text-left' }
                    ]}
                    rows={rows}
                />
            </div> */}
            <DeploymentTable />
        </div>
    );
};

export default DeploymentBody;
