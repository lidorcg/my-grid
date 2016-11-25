import Rx from 'rx';


export function makeGridDriver() {
  const eventBus = new EventBus();

  function gridDriver(event$) {
    event$.subscribe(event => {
      eventBus.post(event)
    });

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

  post(event) {
    this.subject.onNext(event);
  }

}
