import Rx from 'rx';
import { div, h1 } from '@cycle/dom';

function main ({Grid}){
  // subscribe
  const plusBtn$ = Grid.subscribe('plus-btn');
  const minusBtn$ = Grid.subscribe('minus-btn');
  const counter$ = Grid.subscribe('counter');
  // combine all into one view
  const layout$ = Rx.Observable.combineLatest(counter$, plusBtn$, minusBtn$)
  .map(([counter, plusBtn, minusBtn]) => {
    return (
      div('.container', [
        h1('.count', [counter.toString()]),
        plusBtn,
        minusBtn
      ])
    );
  });
  // register the view as DOM
  return Grid.register('DOM', layout$);
}

export default main;
