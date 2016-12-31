import Rx from 'rx';
import Counter from './components/counter';
import Layout from './components/layout';
import PlusBtn from './components/plusBtn';
import MinusBtn from './components/minusBtn';

export function App (sources) {
  const Grid$ = Rx.Observable.merge([
    PlusBtn(sources),
    Counter(sources),
    MinusBtn(sources),
    Layout(sources),
  ]);

  const DOM$ = sources.Grid.subscribe('DOM');

  const sinks = {
    DOM: DOM$,
    Grid: Grid$,
  };

  return sinks;
}
