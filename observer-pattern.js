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

wanghao.register(new Observer(shasha_do_sth));
wanghao.register(new Observer(xiaoxin_do_sth));
wanghao.marrige();

wanghao.register(new Observer(xiaohong_do_sth));
wanghao.marrige();




