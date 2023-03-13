import React from "react";
import Paciente from "./Paciente.jsx";

const ListadoPacientes = () => {
    return(
        <div className="w-50 fw-bold text-start">
                <h2 className="text-center">ListadoPacientes</h2>
                <p className="fs-5 text-center">
                    Administra tus <span className="Veterinaria fw-bold "> Pacientes y Citas</span>
                </p>
                <Paciente/>
                <Paciente/>
                <Paciente/>
              
        </div>
    )
}

export default ListadoPacientes;