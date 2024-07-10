import styles from './estilos/Login.module.css'
import { useNavigate } from 'react-router-dom';


export function Login() {

    const navigate = useNavigate();

    const registrarUsuario = () => {
       navigate("/registro"); // Redirige al usuario a la ruta '/menu'
    };

    return (

        <div className={styles.fondo}>
            <form action='' className={styles.contenedor}>

                <div className={styles.contenedor_caja1}>

                    <h2 className={styles.contenedor_caja1_h2}>Ingresa tu usuario:</h2>

                    <input type="text" placeholder='nombre de usuario' className={styles.contenedor_caja1_input} />

                </div>

                <div className={styles.contenedor_caja2}>

                    <h2 className={styles.contenedor_caja2_h2}>Ingresa tu Contraseña:</h2>

                    <input type="password" placeholder='Contraseña' className={styles.contenedor_caja2_input} />

                </div>

                <div className={styles.contenedor_botones}>
                    <button className={styles.contenedor_boton1} >Ingresar</button>
                </div>

            </form>

            <button className={styles.contenedor_boton2} onClick={registrarUsuario}>Registrar</button>

        </div>



    )
}