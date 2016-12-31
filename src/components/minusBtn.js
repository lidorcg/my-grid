import Rx from 'rx';
import { button } from '@cycle/dom';

function main ({Grid}){
  const minusBtn$ = Rx.Observable
  .of(button('.minus btn',['-']))
  .delay(0); // NEEDED "so all the wires will be connected before any data start flowing"

  return Grid.register('minus-btn', minusBtn$);
}

export default main;
