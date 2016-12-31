import Rx from 'rx';
import { button } from '@cycle/dom';

function main ({Grid, DOM}){
  // subscribe to clicks
  const plusOnes$ = DOM.select('.plus').events('click').map(e => 1);
  const minusOnes$ = DOM.select('.minus').events('click').map(e => -1);
  // sum the clicks with default 0
  const counter$ = Rx.Observable.merge(plusOnes$, minusOnes$)
  .scan((acc, i) => (acc +i),0)
  .startWith(0);
  // register counter
  return Grid.register('counter', counter$);
}

export default main;
