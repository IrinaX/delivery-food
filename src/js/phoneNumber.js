console.log('w');
;(function () {
    const phoneNumberDOMElement = document.querySelector('.js-phone-number');
    if (!phoneNumberDOMElement) {
        return;
    }
    const generateNumber = (phoneNumberDOMElement) => {
        const phoneNumberDOMElementContent = phoneNumberDOMElement.textContent;
        return phoneNumberDOMElementContent.replace(/\D/g, "");
    };
    const phoneNumberDOMElements = document.querySelectorAll('.js-phone-number');
    for (let element of phoneNumberDOMElements) {
        element.setAttribute('href', 'tel:' + generateNumber(phoneNumberDOMElement));
    }
})();