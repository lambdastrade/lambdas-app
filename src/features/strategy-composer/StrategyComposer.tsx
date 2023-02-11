import {
    ArchiveBoxArrowDownIcon,
    ArrowPathRoundedSquareIcon,
    Cog6ToothIcon,
    CubeTransparentIcon,
    PlayCircleIcon,
    PlusCircleIcon
} from '@heroicons/react/24/outline';
import { useCallback } from 'react';
import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    BackgroundVariant,
    Panel
} from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
    { id: '4', position: { x: 0, y: 300 }, data: { label: '4' } }
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        type: 'smoothstep'
    }
];

const StrategyComposer = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            style={{
                maxHeight: '90%'
            }}>
            <Panel position="top-left">
                <div className="text-sm text-gray-400 font-medium font-jakarta">
                    my-grid-project
                </div>
            </Panel>
            <Panel position="top-right">
                <div className="text-sm text-gray-500  rounded-md shadow-md grid gap-4 grid-flow-col shadow-gray-200 bg-white py-2 px-5 font-medium font-jakarta">
                    <button className="hover:text-gray-900">
                        <PlayCircleIcon className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-900">
                        <ArrowPathRoundedSquareIcon className="w-5 h-5" />
                    </button>
                    <hr />
                    <button className="hover:text-gray-900">
                        <PlusCircleIcon className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-900">
                        <CubeTransparentIcon className="w-5 h-5" />
                    </button>
                    <button className="hover:text-gray-900">
                        <ArchiveBoxArrowDownIcon className="w-5 h-5" />
                    </button>
                    <hr />
                    <button className="hover:text-gray-900">
                        <Cog6ToothIcon className="w-5 h-5" />
                    </button>
                </div>
            </Panel>
            <Controls />
            <Background variant={BackgroundVariant.Lines} />
        </ReactFlow>
    );
};

export default StrategyComposer;
