import Rx from 'rx';
import { button } from '@cycle/dom';

function main ({Grid}){
  const plusBtn$ = Rx.Observable
  .of(button('.plus btn',['+']));

  return Grid.register('plus-btn', plusBtn$);
}

export default main;
