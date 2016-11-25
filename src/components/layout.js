import Rx from 'rx';
import { div, h1 } from '@cycle/dom';

function main (sources){
  const plusBtnView$ = sources.Grid.subscribe('plus-btn-view');
  const minusBtnView$ = sources.Grid.subscribe('minus-btn-view');

  const plusOnes$ = sources.Grid.subscribe('plus-ones');
  const minusOnes$ = sources.Grid.subscribe('minus-ones');
  const count$ = Rx.Observable.merge(plusOnes$, minusOnes$)
  .scan((acc, i) => (acc +i),0)
  .startWith(0);

  const view$ = Rx.Observable.combineLatest(plusBtnView$, minusBtnView$, count$)
  .map(([plusBtn, minusBtn, count]) => {
    return (
      div('.container', [
        h1('.count', [count.toString()]),
        plusBtn,
        minusBtn
      ])
    );
  })
  .map(v => ({key: 'DOM', val: v}));

  return view$;
}

export default main;
