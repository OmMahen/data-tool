"use client";

import { Button, Card } from "@mantine/core";
import { Handle, Position } from "@xyflow/react";

export default function DownloadNode() {
  return (
    <div>
      <Card withBorder>
        <Button>Download</Button>
      </Card>
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
