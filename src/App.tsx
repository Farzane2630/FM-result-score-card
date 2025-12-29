import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="w-screen h-screen flex sm:justify-center justify-start items-center flex-col sm:flex-row -mt-4 sm:mt-auto">
      <Result />
      <Summary />
    </main>
  );
}

export default App;
