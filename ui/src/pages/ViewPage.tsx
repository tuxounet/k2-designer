import NavigationPage from "../components/NavigationPage";
import { trpc } from "../utils/trpc";
export default function ViewPage() {
  const hello = trpc.hello.useQuery("client");
  if (!hello.data) return <div>Loading...</div>;
  return (
    <NavigationPage>
      <div>
        <h1>View</h1>
        <p>{hello.data.greetings}</p>
      </div>
    </NavigationPage>
  );
}
