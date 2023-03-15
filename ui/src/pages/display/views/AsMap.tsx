import NavigationPage from "../../../components/NavigationPage";
import { trpc } from "../../../utils/trpc";
import ForceGraph2D from "react-force-graph-2d";
export default function AsMap() {
  const inventoryRequest = trpc.inventory.getInventoryStats.useQuery();
  if (!inventoryRequest.data) return <div>Loading...</div>;
  const inventory = inventoryRequest.data;
  function genRandomTree(N = 300, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
        })),
    };
  }

  const data = genRandomTree();
  return (
    <NavigationPage>
      <div>
        <h1>View</h1>
        <p>{JSON.stringify(inventory)}</p>
        <ForceGraph2D graphData={data} />
      </div>
    </NavigationPage>
  );
}
