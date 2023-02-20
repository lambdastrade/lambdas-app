import { ResponsiveLine } from '@nivo/line';
import kpi_data from '../../data/mocked/kpi_data';
import { linearGradientDef } from '@nivo/core';

const defs = [
    linearGradientDef('gradientA', [
        { offset: 0, color: 'inherit', opacity: 100 },
        { offset: 60, color: 'inherit', opacity: 0 }
    ])
];

const KPIChart = () => {
    return (
        <div className="w-full h-full">
            <ResponsiveLine
                data={kpi_data}
                xScale={{ type: 'point' }}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                    reverse: false
                }}
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridX={false}
                enableGridY={false}
                defs={defs}
                colors={['#374151']}
                fill={[{ match: { id: 'japan' }, id: 'gradientA' }]}
                lineWidth={3}
                enablePoints={false}
                isInteractive={false}
                enableArea={true}
                areaOpacity={0.1}
                crosshairType="cross"
                useMesh={true}
                legends={[]}
                motionConfig="stiff"
            />
        </div>
    );
};

export default KPIChart;
