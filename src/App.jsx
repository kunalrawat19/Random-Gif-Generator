import Header from "./components/Header";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="background min-h-screen flex flex-col items-center p-4 space-y-8">
      <Header />
      <Random />
      <Tag />
    </div>
  );
}
