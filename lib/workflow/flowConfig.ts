import type { Edge, Node, NodeTypes } from "@xyflow/react";
import DownloadNode from "@/components/workflow/nodes/DownloadNode";
import UploadNode from "@/components/workflow/nodes/UploadNode";

export type WorkflowNode = Node;
export type WorkflowEdge = Edge;

export const workflowNodeTypes: NodeTypes = {
  upload: UploadNode,
  download: DownloadNode,
};

export const initialNodes: WorkflowNode[] = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
    type: "upload",
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    data: { label: "Node 2" },
    type: "download",
  },
];

export const initialEdges: WorkflowEdge[] = [];
