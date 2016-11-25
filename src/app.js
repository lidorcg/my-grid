import Rx from 'rx';
import Layout from './components/layout';
import PlusBtn from './components/plusBtn';
import MinusBtn from './components/minusBtn';

export function App (sources) {
  const Grid$ = Rx.Observable.merge(
    Layout(sources),
    PlusBtn(sources),
    MinusBtn(sources)
  );

  const DOM$ = sources.Grid.subscribe('DOM');

  const sinks = {
    DOM: DOM$,
    Grid: Grid$,
  };

  return sinks;
}
