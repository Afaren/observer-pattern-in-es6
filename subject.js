module.exports = class Subject {
    constructor(){
        this.observers = [];
    }
    marrige() {
        this.observers.forEach(observer => observer.doSth());
    }

    register (observer){
        this.observers.push(observer);
    }
}