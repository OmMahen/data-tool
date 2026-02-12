"use client";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
} from "@xyflow/react";
import { useCallback, useState } from "react";
import { initialEdges, initialNodes, type WorkflowEdge, type WorkflowNode } from "./flowConfig";

export function useWorkflowState() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [edges, setEdges] = useState<WorkflowEdge[]>(initialEdges);

  const onNodesChange: OnNodesChange<WorkflowNode> = useCallback((changes) => {
    setNodes((prev) => applyNodeChanges(changes, prev));
  }, []);

  const onEdgesChange: OnEdgesChange<WorkflowEdge> = useCallback((changes) => {
    setEdges((prev) => applyEdgeChanges(changes, prev));
  }, []);

  const onConnect: OnConnect = useCallback((params) => {
    setEdges((prev) => addEdge(params, prev));
  }, []);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  };
}
