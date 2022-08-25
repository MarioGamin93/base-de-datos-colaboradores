import React from "react";
import { useState } from "react";
import AgregarColaboradores from "./components/AgregarColaboradores";
import { BaseColaboradores } from "./components/BaseColaboradores";
import BuscarColaboradores from "./components/BuscarColaboradores";
import ListadoColaboradores from "./components/ListadoColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  console.log(colaboradores)

  return (
    <div className="App">
      <BuscarColaboradores setColaboradores={setColaboradores}  />

      <AgregarColaboradores colaboradores={colaboradores} setColaboradores={setColaboradores} />

      <ListadoColaboradores colaboradores={colaboradores}/>
    </div>
  );
}

export default App;
