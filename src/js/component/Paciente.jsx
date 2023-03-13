import React from "react";


const Paciente = () => {

    return(
        <div className="mt-2 ms-3 py-3 bg-white shadow rounded">
                <p className="mb-3 ms-3 text-uppercase"> Nombre: 
                        <span className="fw-normal text-capitalize">Hook</span>
                </p>
                <p className="mb-3 ms-3 text-uppercase"> Propietario: 
                        <span className="fw-normal text-capitalize">Fran</span>
                </p>
                <p className="mb-3 ms-3 text-uppercase"> Email: 
                        <span className="fw-normal text-capitalize">email@email.com</span>
                </p>
                <p className="mb-3 ms-3 text-uppercase"> Fecha Alta: 
                        <span className="fw-normal text-capitalize">26/10/2022</span>
                </p>
                <p className="mb-3 ms-3 text-uppercase"> Síntomas: 
                        <span className="fw-normal text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos error, odio quibusdam corrupti qui sit rerum repudiandae iste. Non doloribus nulla itaque perferendis voluptate asperiores excepturi dolorem aspernatur cumque!</span>
                </p>
            </div>
    )
}

export default Paciente;