const Observer = require('./observer') ;
const Subject = require('./subject') ;

let shasha_dosth = () => {
    console.log('shasha恭喜你');
}

let xiaoxin_dosth = () => {
    console.log('xiaoxin恭喜你');
}

let xiaohong_dosth = () => {
    console.log('xiaohong恭喜你');
}


let shasha = new Observer(shasha_dosth);
let xiaoxin = new Observer(xiaoxin_dosth);
let wanghao = new Subject();

wanghao.register(shasha);
wanghao.register(xiaoxin);
wanghao.marrige();

let xiaohong = new Observer(xiaohong_dosth);
wanghao.register(xiaohong);
wanghao.marrige();




