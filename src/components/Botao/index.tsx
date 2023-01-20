import React from "react";
import style from './Botao.module.scss';

function Botao({ children, type = 'button' }: { children: string, type? : 'button' | 'submit' | 'reset' | undefined }) {
  return (
    <button type={type} className={style.botao}>
      { children }
    </button>
  );
}

export default Botao;