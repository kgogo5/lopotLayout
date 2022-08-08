import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./Container";
import Main from "./main/Main";
// import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Reveal from "./reveal/Reveal";

const _ = () => {
  return (
    <>
      <Router>
        <Container>
          <>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/reveal" element={<Reveal />} />
              <Route
                path="/test"
                element={
                  <App />
                  // <PrivateRoute>
                  //   <Main />
                  // </PrivateRoute>
                }
              />
            </Routes>
          </>
        </Container>
      </Router>
    </>
  );
};

export default _;
