import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="w-full md:w-200 sm:h-fit h-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center -mt-4 sm:mt-0">
      <Result />
      <Summary />
    </main>
  );
}

export default App;
