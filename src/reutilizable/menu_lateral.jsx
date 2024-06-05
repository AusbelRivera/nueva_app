import { Link } from 'react-router-dom';
import styles from '../estilos/menu_lateral.module.css'
import imagen from '../img/usuario.png'


export function MenuLateral() {


    return (

        <div className={styles.lateral}>

            <div className={styles.lateral_img}>

                <img src={imagen} alt="imagen de usuario" className={styles.lateral_img1} />

            </div>

            <div className={styles.lateral_listas}>

                

                    <li className={styles.lateral_lista}>
                        <Link to="" >Clientes</Link>
                    </li>

                    <li className={styles.lateral_lista}>
                        <Link to="" >Registrar</Link>
                    </li>

                    <li className={styles.lateral_lista} >
                        <Link to="/Login" >Salir</Link>
                    </li>


            </div>


        </div>



    )

}