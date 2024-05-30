import "./estilos/App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Login";
import { Registro } from "./Registro";
import { MenuLateral } from "./reutilizable/menu_lateral";

export function App() {

    return (

        <Router>

            <Routes>

                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<Login />} />

                <Route path="/menu" element={<MenuLateral />} />

                <Route path="/registro" element={<Registro />} />


            </Routes>
            
        </Router>
    );
}