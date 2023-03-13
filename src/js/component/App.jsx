import React,{useState} from "react";
import Header from "./Header.jsx";
import Formulario from "./Formulario.jsx";
import ListadoPacientes from "./ListadoPacientes.jsx";



//create your first component
const App = () => {

	const [pacientes, SetPacientes] = useState([])

	return (
		<div className="container mt-5">
			<Header/>
			<div className="mt-5 mx-auto d-flex justify-content-between text-center">
				<Formulario
					pacientes = {pacientes}
					SetPacientes = {SetPacientes}
				/>
				<ListadoPacientes/>
			</div>
			
		</div>
	);
};

export default App;
