import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ setTarefa }: { setTarefa: React.Dispatch<React.SetStateAction<ITarefa[]>>}) {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00');

  const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const novaTarefaArray = {
      tarefa: novaTarefa,
      tempo: tempo
    }

    setTarefa(tarefasAntigas => [
      ...tarefasAntigas, {
        ...novaTarefaArray,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ]);

    setNovaTarefa('');
    setTempo('00:00')
  };

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={novaTarefa}
          onChange={evento => setNovaTarefa(evento.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  );
}

export default Formulario;