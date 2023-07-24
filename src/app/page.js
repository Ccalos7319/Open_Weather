"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const KEY = "abaf2c338fc00a0cae5d37159644ba0a";
  const city = "Arequipa";

  const [datos, setDatos] = useState();

  useEffect(() => {
    const promesa = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    );
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      setDatos(data);
    });
  }, []);

  return (
    datos && (
  
        <div id="card">
          <div>
            <h1>City: {JSON.stringify(datos.name)}</h1>
            <p>ID: {JSON.stringify(datos.id)} </p>
            <p>Temperatura: {JSON.stringify(datos.main.temp)} </p>
            <p>Humedad: {JSON.stringify(datos.main.humidity)} </p>
            <p>Visibilidad: {JSON.stringify(datos.visibility)} </p>
          </div>
        </div>
    
    )
  );
}
//   const [estado, setEstado] = useState();
//   useEffect(() => {
//     console.log("hola");
//   },[]);

//  function handleChaing() {
//   setEstado(!estado);
//   console.log("Estado cambiado")

//  }
