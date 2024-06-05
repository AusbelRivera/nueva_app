import { MenuLateral } from "./reutilizable/menu_lateral.jsx"
import { Formulario } from "./reutilizable/formulario.jsx"





export function Registro() {

    
    const fields = [
        { name: 'Usuario', label: 'Usuario:', type: 'text' },
        { name: 'Contraseña', label: 'Contraseña:', type: 'password' },
        { name: 'Nombre', label: 'Nombre:', type: 'text' },
        { name: 'Apellido', label: 'Apellido:', type: 'text' },
        { name: 'Correo', label: 'Correo:', type: 'email' }
    ];

    const handleSubmit = (formData) => {
        console.log(formData);
    };




    return (

        <>

            <MenuLateral />

            <Formulario fields={fields} onSubmit={handleSubmit} />

        </>

    )


}