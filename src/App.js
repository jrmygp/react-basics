import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Band from "./components/Band/Band";
import TourSection from "./components/TourSection/TourSection";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div>
              <ContentCard />
            </div>
          </div>
        </div>
      </div>
      {/* <div><Band /></div>
    <div><TourSection /></div>
    <div><ClassComponent /></div> */}
    </>
  );
}

export default App;
