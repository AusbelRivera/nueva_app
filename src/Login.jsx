import './estilos/Login.css'

export function Login(){

    const RegistrarUsuario = () => {
        
        window.open('https://www.facebook.com', '_blank', 'width=600,height=400');

      };

    return(

        <>
            <form action='' className="contenedor">

                <div className='contenedor_caja1'>
                    
                    <h2 className='contenedor_caja1_h2'>Ingresa tu usuario:</h2>

                    <input type="text" placeholder='nombre de usuario' className='contenedor_caja1_input' />

                </div>

                <div className='contenedor_caja2'>
                    
                    <h2 className='contenedor_caja2_h2'>Ingresa tu Contraseña:</h2>

                    <input type="password" placeholder='Contraseña' className='contenedor_caja2_input' />

                </div>

                <div className='contenedor_botones'> 
                    <button className='contenedor_boton1' >Ingresar</button>
                </div>

            </form>

            <button className='contenedor_boton2' onClick={RegistrarUsuario}>Registrar</button>
         </>
            
        

    )

}