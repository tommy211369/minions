import React from "react";
import classes from "./Commander.module.css";

// Redux
import { connect } from "react-redux";
import actionTypes from "../../store/actions";

function Commander(props) {
  return (
    <div className={classes.Commander}>
      <button onClick={props.createMinion}>Créer un minion</button>
      <button onClick={props.destroyMinion}>Détruire un minion</button>
      <button onClick={() => props.createTeam(5)}>
        Créer une équipe de 5 minions
      </button>
      <button onClick={() => props.destroyTeam(5)}>
        Détruire une équipe de 5 minions
      </button>
      <button onClick={() => props.save(props.minions)}>
        Stocker le nombre d'infiltrés
      </button>
    </div>
  );
}

// Abonnement au state
const mapStateToProps = (state) => {
  return {
    minions: state.minion.minions,
  };
};

// Récupération des actions
const mapDispatchToProps = (dispatch) => {
  return {
    createMinion: () => dispatch({ type: actionTypes.CREATE_MINION }),
    destroyMinion: () => dispatch({ type: actionTypes.DESTROY_MINION }),
    createTeam: (value) =>
      dispatch({ type: actionTypes.CREATE_TEAM, value: value }),
    destroyTeam: (value) =>
      dispatch({ type: actionTypes.DESTROY_TEAM, value: value }),
    save: (value) => dispatch({ type: actionTypes.SAVE, value: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commander);
