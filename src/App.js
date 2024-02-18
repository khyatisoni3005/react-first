import Navbar from "./components/Navbar";
import Form from "./components/Form";
import AccordianData from "./components/AccordianData";



function App() {
  return (
    <>

      <Navbar />
      <div className="row new-form"><Form /></div>
      <AccordianData />
    </>
  );
}

export default App;
