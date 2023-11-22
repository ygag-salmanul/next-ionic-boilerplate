import dynamic from "next/dynamic";

const App = dynamic(() => import("../router/AppShell"), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
