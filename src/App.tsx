import React, { useState } from "react";
import background from "./img/background.jpg";
import { Button, InputLabel, Backdrop } from "@mui/material";
import welcome from "./img/welcome.jpg";



const appStyles = {
  backgroundImage: `url(${background})`,
  backgroundSize: "contain", // Esto hará que la imagen se extienda para cubrir todo el fondo
  height: "100vh", // Altura igual al 100% de la ventana visible
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff", // Color de texto para que sea legible
};

const appWelcome = {
  backgroundImage: `url(${welcome})`,
  backgroundSize: "contain", // Esto hará que la imagen se extienda para cubrir todo el fondo
  backgroundRepeat: "no-repeat",
  height: "100vh", // Altura igual al 100% de la ventana visible
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff", // Color de texto para que sea legible
};

const styles = {
  container: {
    alignItems: "center",
    gap: "16px",
    background: "#fff",
  },
  button: {
    alignItems: "center",
    display: "flex",
    backgroundColor: "#000",
    color: "#fff",
  },
  label: {
    fontSize: "3rem",
    fontFamily: "Gothic",
    alignItems: "center",
    color: "#fff", // Color del texto
  },
  error: {
    alignItems: "center",
    fontFamily: "Gothic",
    justifyContent: "center",
    display: "flex",
    fontSize: "2.5rem",
    color: "purple", // Color del texto
  },
};


function App() {
  const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState("");
  const [showInputs, setShowInputs] = useState(true);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(event.target.value);
  };

  const handleLogin = () => {

    if (birthdate == "1999-06-20") {
      setShowInputs(false);
      setError("");
    } else {
      setError("La fecha de nacimiento es incorrecta");
    }
  };

  return (
    <div>
      {showInputs && (
        <div style={appStyles}>
          <div>
            <InputLabel style={styles.label}>Ingresa la fecha correcta, Amy</InputLabel>
            <input
              type="date"
              value={birthdate}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              style={styles.button}
              onClick={handleLogin}
            >
              Ingresar
            </Button>
          </div>
          <p style={styles.error}>{error} </p>
        </div>
      )}
      {!showInputs && <div style={appWelcome}></div>}
    </div>
  );
}

export default App;