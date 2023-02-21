import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';
import { classNames } from '../../../utils/classNames';
import React from 'react';

interface dropdownElement {
    key: any;
    element: ReactNode;
    nestedElement: ReactNode | null;
}

interface NestedTableProps {
    tableHeaders: Array<{ title: string; alignment: 'text-left' | 'text-center' | 'text-right' }>;
    rows: dropdownElement[];
}

const NestedTable = (props: NestedTableProps) => {
    const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (key: any) => {
        setExpandedRows({
            ...expandedRows,
            [key]: !expandedRows[key]
        });
    };

    return (
        <div className="overflow-hidden ring-1 ring-gray-300 rounded-lg font-jakarta">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 text-gray-800">
                    <tr key="header">
                        {props.tableHeaders.map((header) => (
                            <th
                                scope="col"
                                className={classNames(
                                    header.alignment,
                                    'px-3 py-3.5 text-sm font-semibold'
                                )}>
                                {header.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {props.rows.map((row) => (
                        <React.Fragment key={row.key}>
                            <tr className="hover:bg-gray-100 transition-all">
                                {row.element}

                                <td className="space-x-3 py-5 text-right text-sm font-medium sm:pr-6 align-middle text-gray-500">
                                    <button
                                        disabled={!row.nestedElement}
                                        onClick={() => toggleExpand(row.key)}
                                        className="disabled:text-gray-300 disabled:hover:text-gray-300 hover:text-gray-800">
                                        <ChevronDownIcon
                                            className={classNames(
                                                expandedRows[row.key] && row.nestedElement
                                                    ? 'rotate-90'
                                                    : 'rotate-0',
                                                'w-5 h-5 mt-2 transition-all'
                                            )}
                                        />
                                    </button>
                                </td>
                            </tr>
                            {expandedRows[row.key] && (
                                <tr>
                                    <td colSpan={props.tableHeaders.length + 1}>
                                        {row.nestedElement}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NestedTable;
