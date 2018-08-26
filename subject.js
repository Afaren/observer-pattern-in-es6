module.exports = class Subject {

    constructor() {
        this.observers = [];
        this.eventObserverMap = {};
        this.history = [];
    }

    register(event, observer) {

        if (!!this.eventObserverMap[event]) {
            this.eventObserverMap[event].push(observer);
        } else {
            this.eventObserverMap[event] = [];
            this.history[event] = [];
            this.eventObserverMap[event].push(observer);
        }
        this.history.filter(h => h === event).forEach(observer.doSth);
    }

    publishEvent(eventName) {
        this.eventObserverMap[eventName].forEach(observer => observer.doSth());
        this.history.push(eventName);
    }
}