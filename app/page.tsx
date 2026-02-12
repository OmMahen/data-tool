"use client";
import {
  Background,
  BackgroundVariant,
  ReactFlow,
} from "@xyflow/react";
import { workflowNodeTypes } from "@/lib/workflow/flowConfig";
import { useWorkflowState } from "@/lib/workflow/useWorkflowState";

export default function Home() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useWorkflowState();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={workflowNodeTypes}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
