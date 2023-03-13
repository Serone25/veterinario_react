import React,{useState, useEffect} from "react";


const Formulario = ({pacientes, SetPacientes}) => {

    const[nombre,setNombre] = useState("");
    const[propietario,setPropietario] = useState("");
    const[email,setEmail] = useState("");
    const[fecha,setFecha] = useState("");
    const[sintomas,setSintomas] = useState("");

    const[error, setError] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Enviando formulario")

        if([nombre, propietario, email,fecha, sintomas].includes('')){
            console.log("Hay al menos un campo vacío");
            setError(true);
            return;
        }
        setError(false)

        //Objeto de Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        SetPacientes([...pacientes, objetoPaciente]) //los puntos suspensivos son un metodo inmutable. gracias a el cogemos el objeto y hace una copy, después, le añade el nuevo
                                                      //es decir, no hace un push y cambia el array de objetos, si no que copia los ya hechos y luego añade el nuevo.
                                                      //no modificamos directamente el array, sino que lo hacemos a través del SetPacientes

        //Reiniciar los valores del form a su valor inicial para que no se queden guardados los anteriores
        setNombre('');
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }                                               


    return(
        <div className="w-50 fw-bold">
            <h2>Seguimiento Pacientes</h2>
            <p className="fs-5">
                Añade Pacientes y <span className="Veterinaria fw-bold"> Adminístralos</span>
            </p>
            <form onSubmit={handleSubmit} className="bg-light shadow body rounded py-4"> {error && alert("Rellene todos los campos")}
                <div className="d-flex flex-column">
                    <label htmlFor="mascota" className="mb-2 text-center text-uppercase">Nombre Mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" className="mx-auto col-11 my-1 py-1" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="d-flex flex-column pt-2">
                    <label htmlFor="propietario" className="mb-2 text-center text-uppercase">Nombre Propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre del propietario" className="mx-auto col-11 my-1 py-1" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
                </div>
                <div className="d-flex flex-column pt-2">
                    <label htmlFor="email" className="mb-2 text-center text-uppercase">E-Mail</label>
                    <input id="email" type="email" placeholder="E-Mail de Contacto" className="mx-auto col-11 my-1 py-1"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="d-flex flex-column pt-2">
                    <label htmlFor="alta" className="mb-2 text-center text-uppercase"> Fecha de Alta</label>
                    <input id="alta" type="date" className="mx-auto col-11 my-1 py-1"  value={fecha} onChange={(e) => setFecha(e.target.value)}/>
                </div>
                <div className="d-flex flex-column pt-2">
                    <label htmlFor="sintomas" className="mb-2 text-center text-uppercase">Síntomas</label>
                    <textarea id="sintomas" placeholder="Describe los síntomas" className="mx-auto col-11"  value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
                </div>
                <input type="submit" className=" btn btn-outline-info w-75 py-1 mt-2 text-uppercase fw-bold" value="Agregar Paciente"/>
                
            </form>
        </div>
    )
}

export default Formulario;