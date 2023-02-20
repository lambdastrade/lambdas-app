import * as React from 'react';

export default function TimeButtonGroup() {
    let dashboardTimeFrames: string[] = ['12h', '24h', '7d', '30d', '6m', '1y'];
    let firstItem: string = dashboardTimeFrames[0];
    let lastItem: string = dashboardTimeFrames[dashboardTimeFrames.length - 1];

    return (
        <div>
            <span className="isolate inline-flex rounded-md divide-x border text-xs leading-5 font-jakarta font-semibold bg-white text-gray-500">
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md px-4 py-2 hover:bg-gray-50">
                    {firstItem}
                </button>

                {dashboardTimeFrames.slice(1, -1).map((timeFrame, index) => (
                    <button
                        key={index}
                        type="button"
                        className="relative -ml-px inline-flex items-center px-4 py-2 hover:bg-gray-50 ">
                        {timeFrame}
                    </button>
                ))}

                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md px-4 py-2 hover:bg-gray-50">
                    {lastItem}
                </button>
            </span>
        </div>
    );
}
