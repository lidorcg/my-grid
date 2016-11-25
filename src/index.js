import {run} from '@cycle/rx-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeGridDriver} from './drivers/grid'
import {App} from './app'

const main = App

const drivers = {
  DOM: makeDOMDriver('#app'),
  Grid: makeGridDriver(),
}

run(main, drivers)
