
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementsByClassName('close')[0];
const authForm = document.getElementById('authForm');
const modalTitle = document.getElementById('modalTitle');
const switchToRegister = document.getElementById('switchToRegister');

openModalButton.onclick = function() {
    modal.style.display = 'block';
}

closeModalButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

switchToRegister.onclick = function(event) {
    event.preventDefault(); 
    if (modalTitle.innerText === "Вход") {
        modalTitle.innerText = "Регистрация";
        authForm.querySelector('button[type="submit"]').innerText = "Зарегистрироваться";
        document.getElementById('username').placeholder = "Имя пользователя";
    } else {
        modalTitle.innerText = "Вход";
        authForm.querySelector('button[type="submit"]').innerText = "Отправить";
        document.getElementById('username').placeholder = "Имя пользователя";
    }
}

authForm.onsubmit = function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert('Форма отправлена!');
    modal.style.display = 'none';
}

document.querySelectorAll('.zapis').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').innerText;
        document.getElementById('service').value = productName;
        document.getElementById('booking-form').classList.remove('hidden');
    });
});

document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('booking-form').classList.add('hidden');
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Запись на услугу ' + document.getElementById('service').value + ' успешно отправлена!');
    document.getElementById('booking-form').classList.add('hidden');
    this.reset();
});





// для отправки уедомления
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Ваше сообщение отправлено!');
//     this.reset();
// });