import React from "react";
import style from './Botao.module.scss';

function Botao({ children }: { children: string }) {
  return (
    <button className={style.botao}>
      { children }
    </button>
  );
}

export default Botao;