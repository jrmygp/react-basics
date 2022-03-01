import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Band from "./components/Band/Band";
import TourSection from "./components/TourSection/TourSection";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import "./assets/card-styles.css"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-3 $green-800">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
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
