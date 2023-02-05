import {
    ArrowDownOnSquareStackIcon,
    ArrowPathRoundedSquareIcon,
    Cog6ToothIcon,
    CubeTransparentIcon,
    CursorArrowRaysIcon,
    PlusIcon
} from '@heroicons/react/24/outline';
import { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
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
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
];

const initialEdges = [
    {
        id: 'e1-2', source: '1', target: '2', type: 'smoothstep',
    }
];

const Composer: React.FunctionComponent = () => {
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
                <div className="text-sm text-gray-400 rounded-md shadow-md grid gap-4 grid-flow-col shadow-gray-200 bg-white py-2 px-5 font-medium font-jakarta">
                    <button>
                        <PlusIcon className="w-5 h-5" />
                    </button>
                    <button>
                        <CubeTransparentIcon className="w-5 h-5" />
                    </button>
                    <hr />
                    <button>
                        <ArrowDownOnSquareStackIcon className="w-5 h-5" />
                    </button>
                    <button>
                        <ArrowPathRoundedSquareIcon className="w-5 h-5" />
                    </button>
                    <hr />
                    <button>
                        <Cog6ToothIcon className="w-5 h-5" />
                    </button>
                </div>
            </Panel>
            {/* <MiniMap zoomable /> */}
            <Controls />
            <Background variant={BackgroundVariant.Lines} />
        </ReactFlow>
    );
};

export default Composer;
