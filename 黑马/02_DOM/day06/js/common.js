//封装scroll家族的兼容代码
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

//封装获取id的代码
function $(id) {
    return document.getElementById(id);
}

//封装动画
function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //当前的位置
        var current = ele.offsetLeft;
        //一次走多少个像素
        var step = 10;
        //判断一次走的值是否等于current(当前的位置)小于target(目标)?是 返回step 否 返回-step
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(target - current) > Math.abs(step)) {
            ele.style.marginLeft = current + "px";
        } else {
            clearInterval(ele.timer);
            ele.style.marginLeft = target + "px";
        }
    }, 10)
}