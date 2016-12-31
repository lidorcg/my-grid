import Rx from 'rx';


export function makeGridDriver() {
  const eventBus = new EventBus();

  function gridDriver(event$) {
    eventBus.merge(event$);
    return eventBus;
  }

  return gridDriver;
}


class EventBus {

  constructor() {
    this.subject = new Rx.Subject();
  }

  subscribe(key) {
    return this.subject
      .filter(event => event.key === key)
      .map(event => event.val);
  }

  register(key, event$) {
    return event$.map(e => ({key: key, val: e}));
  }

  merge(event$) {
    this.subject = this.subject.merge(event$);
  }

}
