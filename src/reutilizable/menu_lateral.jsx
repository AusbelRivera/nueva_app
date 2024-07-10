import { Link } from 'react-router-dom';
import styles from '../estilos/menu_lateral.module.css'
import imagen from '../img/usuario.png'
import { useState } from 'react';


export function MenuLateral() {

    // esta funcion ayuda a que el menu lateral tenga submenus

    const [menuState, setMenuState] = useState({
        
        // aqui se encuentran los estados de los submenus ante de darle click

        clientes: false,
        trabajadores: false,

    });

    const toggleMenu = (menu) => {

        // aqui se obtiene el estado anterior al cambio con prevState y luego se cambia para evitar errores por multiples colisiones

        setMenuState(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };      


    return (

        // codigo html junto con css modular para evitar errores de colisiones y paginas

        <div className={styles.lateral}>

            <div className={styles.lateral_img}>

                <img src={imagen} alt="imagen de usuario" className={styles.lateral_img1} />

            </div>

            <div className={styles.lateral_listas}>



                <li className={styles.lateral_lista} onClick={() =>toggleMenu('clientes')}>
                    Clientes
                    
                    {menuState.clientes && (
                        <ul className={styles.submenu}>

                            <li className={styles.submenu_item}>

                                <Link to="/clientes/option1">Opción 1</Link>
                            </li>
                            
                            <li className={styles.submenu_item}>
                                <Link to="/clientes/option2">Opción 2</Link>
                            </li>
                            
                        </ul>
                    )}

                </li>


                <li className={styles.lateral_lista} onClick={() =>toggleMenu('trabajadores')} >
                    
                    Registrar Trabajadores

                    {menuState.trabajadores && (
                        
                        <ul className={styles.submenu}>

                            <li className={styles.submenu_item}>

                              <Link to="/registro" >Registrar</Link>

                            </li>

                                                        
                            <li className={styles.submenu_item}>

                                 <Link to="/vertrabajadores" >Ver Trabajadores</Link>

                            </li>
                        
                        </ul>

                    )}


                </li>


                <li className={styles.lateral_lista} >
                    <Link to="/Login" >Salir</Link>
                </li>


            </div>


        </div>



    )

}