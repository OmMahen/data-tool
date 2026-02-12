"use client";

import { Card, FileInput } from "@mantine/core";
import { Handle, Position } from "@xyflow/react";

export default function UploadNode() {
  return (
    <div>
      <Card withBorder>
        <FileInput placeholder="Upload File" />
      </Card>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
