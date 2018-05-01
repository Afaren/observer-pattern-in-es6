const Observer = require('./observer') ;
const Subject = require('./subject') ;

let shasha_do_sth = () => {
    console.log('shasha恭喜你');
}

let xiaoxin_do_sth = () => {
    console.log('xiaoxin恭喜你');
}

let xiaohong_do_sth = () => {
    console.log('xiaohong恭喜你');
}


let shasha = new Observer(shasha_do_sth);
let xiaoxin = new Observer(xiaoxin_do_sth);
let wanghao = new Subject();

wanghao.register(shasha);
wanghao.register(xiaoxin);
wanghao.marrige();

let xiaohong = new Observer(xiaohong_do_sth);
wanghao.register(xiaohong);
wanghao.marrige();




