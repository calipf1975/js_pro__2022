var regName = /^[a-zA-Zа-яА-ЯёЁ]+$/i; // шаблон для имени
var regTel = /\+7\(\d{3}\)\d{3}-\d{4}/; // шаблон для телефона
var regEmail = /^[a-z0-9]+[.-]?[a-z0-9]+@[a-z]+.[a-z]{2,3}$/; // шаблон для эл почты
var regMessage = /.+/i; // шаблон для сообщения

// функция проверки соответствия значения шаблону
function check(value, reg, selector) {
    var field = document.querySelector('#' + selector);
    var test = reg.test(value);
    var error = document.querySelector('#' + selector + '_error');
    if (test) {
        field.style.backgroundColor = '#B8FFB3';
        error.innerHTML = '';
    } else {
        field.style.backgroundColor = '#FFB6B1';
        error.innerHTML = 'Ошибка!';
    }
}