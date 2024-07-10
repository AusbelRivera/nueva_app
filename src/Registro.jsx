/* eslint-disable */

import { MenuLateral } from "./reutilizable/menu_lateral.jsx"
import { Formulario } from "./reutilizable/formulario.jsx"





export function Registro() {

    // creando el formulario
    const fields = [
        { name: 'Usuario',placeholder:'Escribe el Usuario del Empleado', label: 'Usuario:', type: 'text' },
        { name: 'Contraseña',placeholder:'Escribe la Contraseña del Empleado', label: 'Contraseña:', type: 'password' },
        { name: 'Nombre',placeholder:'Nombre del Empleado', label: 'Nombre:', type: 'text' },
        { name: 'Apellido',placeholder:'Apellido del Empleado', label: 'Apellido:', type: 'text' },
        { name: 'Cedula',placeholder:'Cedula del Empleado', label: 'cedula:', type: 'text' },
        { name: 'Correo',placeholder:'Correo del Empleado', label: 'Correo:', type: 'email' },
        {
            name: 'TipoUsuario',
            label: 'Tipo de Usuario:',
            type: 'select',
            options: [
                { value: 'Empleado', label: 'Empleado' },
                { value: 'Administrador', label: 'Administrador' },
                { value: 'Contador', label: 'Contador' },
            ],
        },
    ];
    


    const handleSubmit = (formData) => {
        console.log(formData);

        // aqui van los servicios api y esas cosas
    };

    const botonText = "Registrar";




    return (

        <>

            <MenuLateral />

            <Formulario fields={fields} onSubmit={handleSubmit} boton={botonText} />

        </>

    )


}