import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    targetPosition: "bottom",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    style: {
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: "blue",
    },
  },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  {
    id: "3",
    position: { x: 160, y: 240 },
    targetPosition:'top',
    data: { label: "AIQData" },
  },
  {
    id: "4",
    position: { x: 0, y: 240 },
    type: "output",
    data: { label: "GilDAD" },
  },
  {
    id: "5",
    position: { x: -160, y: 240 },
    type: 'output',
    data: { label: "GilDAD" },
  },
  {
    id: "6",
    position: { x: 300, y: 70 },
    type: "output",
    data: { label: "side" },
    animated: true,
  },
  {
    id: "7",
    position: { x: 300, y: 140 },
    type: "output",
    data: { label: "side" },
    animated: true,
  },
  {
    id: "8",
    position: { x: 320, y: 210 },
    type: "output",
    data: { label: "side" },
    animated: true,
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "2", label: "", type: "step", target: "3" },
  { id: "e2-2", source: "2", label: "", type: "step", target: "4" },
  { id: "e2-4", source: "2", label: "", type: "step", target: "5" },
  {
    id: "e2-5",
    source: "1",
    label: "",
    type: "step",
    target: "6",
    animated: true,
  },
  {
    id: "e2-7",
    source: "2",
    label: "",
    type: "step",
    target: "7",
    animated: true,
  },
  {
    id: "e2-8",
    source: "3",
    label: "",
    type: "step",
    target: "8",
    animated: true,
    sourceHandle: 'b'
  },
];
function Solutions() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "50%",
        height: "50vh",
       
      }}
    >
      <ReactFlow
      zoomOnScroll={false}
      panOnScroll={false}
      minZoom={1}
      maxZoom={1}
      style={{ width: '100%', height: '100%' }}

        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
      
      </ReactFlow>
    </div>
  );
}

export default Solutions;
