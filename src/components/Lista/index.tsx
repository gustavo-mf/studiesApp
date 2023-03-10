import { ITarefa } from '../../types/ITarefa';
import Item from './Item/intex';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (selecionaTarefa: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>

      <ul>
        {tarefas.map((item) =>
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        )}
      </ul>
    </aside>
  );
}

export default Lista;