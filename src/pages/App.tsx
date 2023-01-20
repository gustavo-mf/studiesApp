import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from "../components/Lista";
import { ITarefa } from '../types/ITarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefa] = useState<ITarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefa={setTarefa} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
