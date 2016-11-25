import Rx from 'rx';
import { button } from '@cycle/dom';

function main (sources){
  const view$ = Rx.Observable
  .of(button('.plus btn',['+']))
  .map(dom => ({key: 'plus-btn-view', val: dom}));

  const plusOnes$ = sources.DOM.select('.plus').events('click')
  .map(e => 1)
  .map(v => ({key: 'plus-ones', val: v}));

  return Rx.Observable.merge(view$, plusOnes$);
}

export default main;
