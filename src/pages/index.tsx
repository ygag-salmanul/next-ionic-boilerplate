import dynamic from "next/dynamic";

const App = dynamic(() => import("../router/AppShell"), {
  ssr: false,
});

export default function Home() {
  return <App />;
}
