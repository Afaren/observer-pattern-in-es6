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


let wanghao = new Subject();

wanghao.register("marry", new Observer(shasha_do_sth));
wanghao.register("marry", new Observer(xiaoxin_do_sth));
wanghao.publishEvent("marry");

wanghao.register("marry", new Observer(xiaohong_do_sth));
wanghao.publishEvent("marry");




