const Observer = require('./observer') ;
const Subject = require('./subject') ;

let wanghao = new Subject();

let shasha_for_marry_do_sth = () => console.log('shasha恭喜你');
let xiaoxin_for_marry_do_sth = () => console.log('xiaoxin恭喜你');
let xiaohong_for_marry_do_sth = () => console.log('xiaohong恭喜你');

wanghao.register("marry", new Observer(shasha_for_marry_do_sth));
wanghao.publishEvent("marry");

wanghao.register("marry", new Observer(xiaoxin_for_marry_do_sth));
wanghao.publishEvent("marry");

wanghao.register("marry", new Observer(xiaohong_for_marry_do_sth));
wanghao.publishEvent("marry");


let shasha_for_have_first_child = () => console.log("喜得贵子_from_shasha");
let xiaoxin_for_have_second_child = () => console.log("喜得贵子_from_xiaoxin");
let xiaohong_for_have_second_child = () => console.log("喜得贵子_from_xiaohong");

wanghao.register("have_child", new Observer(shasha_for_have_first_child));
wanghao.publishEvent("have_child");

wanghao.register("have_child", new Observer(xiaoxin_for_have_second_child));
wanghao.publishEvent("have_child");

wanghao.register("have_child", new Observer(xiaohong_for_have_second_child));
wanghao.publishEvent("have_child");


wanghao.register("marry", new Observer(() => console.log("哎呀呀，这些天才听说您二位结婚了，恭喜恭喜呀")));
