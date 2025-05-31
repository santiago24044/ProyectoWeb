import { useEffect, useState } from "react";
import axios from "axios";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/usuarios") // Petición al backend
             .then(response => setUsuarios(response.data)) // Guarda los datos
             .catch(error => console.error(error)); // Captura errores
    }, []);

    return (
        <div>
            <h2>Usuarios</h2>
            <ul>
                {usuarios.map(user => (
                    <li key={user.id}>{user.nombre} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;
