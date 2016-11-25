import Rx from 'rx';
import { button } from '@cycle/dom';

function main (sources){
  const view$ = Rx.Observable
  .of(button('.minus',['-']))
  .map(dom => ({key: 'minus-btn-view', val: dom}));

  const minusOnes$ = sources.DOM.select('.minus').events('click')
  .map(e => -1)
  .startWith(0)
  .map(v => ({key: 'minus-ones', val: v}));

  return Rx.Observable.merge(view$, minusOnes$);
}

export default main;
