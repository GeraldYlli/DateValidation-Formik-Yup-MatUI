import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import EngBtn from "../component/EngBtn";
import AlbBtn from "../component/AlbBtn";
import "../styles.css";
import { Container, Typography } from "@material-ui/core";

function Content() {
  let history = useHistory();

  function EnghandleClick() {
    history.push("/EngBtn");
  }
  function AlbhandleClick() {
    history.push("/AlbBtn");
  }

  return (
    <Container>
      <Typography variant="h5">
        Date Validation - Material UI, Yup, and Formik{" "}
      </Typography>
      <button className="BtnChoice" onClick={EnghandleClick}>
        England Date Format
      </button>
      <button className="BtnChoice" onClick={AlbhandleClick}>
        Albania Date Format
      </button>
    </Container>
  );
}

function Btn() {
  return (
    <Router>
      <Route path="/EngBtn" exact component={EngBtn} />
      <Route path="/" exact component={Content} />
      <Route path="/AlbBtn" exact component={AlbBtn} />
    </Router>
  );
}

export default Btn;
