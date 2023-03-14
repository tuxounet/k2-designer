import NavigationPage from "../components/NavigationPage";
import { trpc } from "../utils/trpc";

import "reactflow/dist/style.css";
import ReactFlow from "reactflow";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function EditPage() {
  const hello = trpc.hello.useQuery("client");
  if (!hello.data) return <div>Loading...</div>;
  return (
    <NavigationPage>
      <div>
        <h1>Design </h1>
        <p>{hello.data.greetings}</p>
        <div style={{ width: "100vw", height: "100vh" }}>
          <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div>
      </div>
    </NavigationPage>
  );
}
