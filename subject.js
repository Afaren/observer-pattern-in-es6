module.exports = class Subject {

    constructor() {
        this.observers = [];
        this.eventObserverMap = {};
    }

    register(event, observer) {

        if (!!this.eventObserverMap[event]) {
            this.eventObserverMap[event].push(observer);
        } else {
            this.eventObserverMap[event] = [];
            this.eventObserverMap[event].push(observer);
        }
    }

    publishEvent(eventName) {
        this.eventObserverMap[eventName].forEach(observer => observer.doSth());
    }
}