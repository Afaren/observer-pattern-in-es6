const Observer = require('./observer') ;
const Subject = require('./subject') ;

let shasha_for_marry_do_sth = () => console.log('shasha恭喜你');
let xiaoxin_for_marry_do_sth = () => console.log('xiaoxin恭喜你');
let xiaohong_for_marry_do_sth = () => console.log('xiaohong恭喜你');

let wanghao = new Subject();

wanghao.register("marry", new Observer(shasha_for_marry_do_sth));
wanghao.register("marry", new Observer(xiaoxin_for_marry_do_sth));
wanghao.publishEvent("marry");

wanghao.register("marry", new Observer(xiaohong_for_marry_do_sth));
wanghao.publishEvent("marry");


let shasha_for_have_first_child = () => console.log("喜得贵子_from_shasha");

wanghao.register("have_child", new Observer(shasha_for_have_first_child));
wanghao.publishEvent("have_child");

let xiaoxin_for_have_second_child = () => console.log("喜得二子_from_xiaoxin");
wanghao.register("have_child", new Observer(xiaoxin_for_have_second_child));
wanghao.publishEvent("have_child");

let xiaohong_for_have_second_child = () => console.log("喜得三子_from_xiaohong");
wanghao.register("have_child", new Observer(xiaohong_for_have_second_child));
wanghao.publishEvent("have_child");
