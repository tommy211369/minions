import React from "react";
import classes from "./App.module.css";

// Composants
import Header from "./Components/Header/Header";
import Commander from "./Components/Commander/Commander";

// Redux
import { connect } from "react-redux";

function App(props) {
  let history;

  if (props.history && props.history != "") {
    history = props.history.map((result) => (
      <div key={result.id} className={classes.result}>
        <span>
          <b>{result.value}</b> infiltrés
        </span>
        Le {new Date(result.id).toLocaleString("fr-FR")}
      </div>
    ));
  }

  return (
    <div className={classes.App}>
      <Header />

      <div className="container">
        <div className={classes.content}>
          <h1>À la conquête du monde</h1>
          <div className={classes.minions}>
            <span>{props.minions}</span>
            minions infiltrés
          </div>
        </div>

        <Commander />

        {props.history && props.history != "" ? (
          <div className={classes.content}>
            <h2>Tableau des infiltrations</h2>
            {history}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Abonnement au state
const mapStatetoProps = (state) => {
  return {
    minions: state.minion.minions,
    history: state.save.history,
  };
};

export default connect(mapStatetoProps)(App);
