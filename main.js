const questionItem = document.querySelectorAll('.question__item');
const questionBtn = document.querySelectorAll('.question__btn');

for (let i = 0; i < questionItem.length; i++) {
    const element = questionItem[i];
    questionBtn[i].addEventListener('click', function () {
        for (let i = 0; i < questionItem.length; i++) {
            if (element !== questionItem[i]) {
                questionItem[i].classList.remove('show-text');
            }
        }
        element.classList.toggle('show-text');
    })
}

