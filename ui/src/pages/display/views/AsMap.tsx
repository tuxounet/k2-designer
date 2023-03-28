import NavigationPage from "../../../components/NavigationPage";
import { trpc } from "../../../utils/trpc";
import ForceGraph2D, { GraphData, NodeObject } from "react-force-graph-2d";

export default function AsMap() {
  const inventoryRequest = trpc.inventory.asMap.useQuery();
  if (!inventoryRequest.data) return <div>Loading...</div>;
  const data = inventoryRequest.data as GraphData;

  // gen a number persistent color from around the palette

  const getColor = (n: any) =>
    "#" + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, "0");
  const handleClick = (node: any) => {
    console.dir(node);
  };

  return (
    <NavigationPage>
      <div>
        <h1>View</h1>

        <ForceGraph2D
          nodeAutoColorBy="type"
          graphData={data}
          nodeId="id"
          onNodeClick={(node) => handleClick(node)}
          nodeCanvasObject={(node: any, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(
              (n) => n + fontSize * 0.2
            ); // some padding

            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fillRect(
              node.x - bckgDimensions[0] / 2,
              node.y - bckgDimensions[1] / 2,
              bckgDimensions[0],
              bckgDimensions[1]
            );

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);

            node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
          }}
          nodePointerAreaPaint={(node: any, color, ctx) => {
            ctx.fillStyle = color;
            const bckgDimensions = node.__bckgDimensions;
            bckgDimensions &&
              ctx.fillRect(
                node.x - bckgDimensions[0] / 2,
                node.y - bckgDimensions[1] / 2,
                bckgDimensions[0],
                bckgDimensions[1]
              );
          }}
        />
      </div>
    </NavigationPage>
  );
}
