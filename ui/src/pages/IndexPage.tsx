import * as React from "react"
import NavigationPage from "../components/NavigationPage";
import { trpc } from "../utils/trpc";
export default function IndexPage() {
  const hello = trpc.hello.useQuery("client");
  if (!hello.data) return <div>Loading...</div>;
  return (
    <NavigationPage>
      <div>
        <h1>Index</h1>
        <p>{hello.data.greetings}</p>
      </div>
    </NavigationPage>
  );
}
