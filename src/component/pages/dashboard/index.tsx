import React from "react";
import { Link } from "react-router-dom";
import css from "./index.module.css";
import NavButton from "../../navButton";
import UserName from "../../username";
import Logo from "../../logo";

function Dashboard() {
  return (
    <div className={css.dashboardContainer}>
      <UserName user="Eva" />
      <Logo />
      <div className={css.buttonContainer}>
        <NavButton name="Neuva sesion" />
        <Link to="/nuevo-paciente">
          <NavButton name="Nuevo paciente" />
        </Link>

        <NavButton name="Directorio de pacientes" />
        <NavButton name="Calendario" />
      </div>
    </div>
  );
}

export default Dashboard;
