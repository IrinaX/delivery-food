(function () {
    var smoothScroll = function (linkAttribute) {
        var section = document.querySelector(linkAttribute);
        if (!section){
            goToHome(linkAttribute);
            return;
        }
        // var targetTop = section.getBoundingClientRect().top;
        // var scrollTop = window.pageYOffset;
        // var targetOffsetTop = targetTop + scrollTop;
        window.scrollTo({
            top: getOffset(section).top,
            left: 0,
            behavior: 'smooth'
        });
    };
    var closestAttr = function (item, attr) {
        var node = item;
        while (node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }
            node = node.parentElement;
        }
        return null;
    };

    var body = document.querySelector('body');
    body.addEventListener('click', function (e) {
        var target = e.target;
        // console.log(target);
        let linkAttribute = closestAttr(target, 'href');
        if (linkAttribute) {
            if (linkAttribute.indexOf('#', 0) !== -1 && linkAttribute.length > 1) {
                e.preventDefault();
                smoothScroll(linkAttribute);
            }
        }
    });
})();

function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        // "правильный" вариант
        return getOffsetRect(elem);
    } else {
        // пусть работает хоть как-то
        return getOffsetSum(elem);
    }
}

function getOffsetSum(elem) {
    var top = 0, left = 0;
    while (elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }

    return {top: top, left: left};
}

function getOffsetRect(elem) {
    // (1)
    var box = elem.getBoundingClientRect();

    // (2)
    var body = document.body;
    var docElem = document.documentElement;

    // (3)
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    // (4)
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    // (5)
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {top: Math.round(top), left: Math.round(left)};
}