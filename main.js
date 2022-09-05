const tabBtn = document.querySelectorAll(`[data-tab-target]`);
const tabContent = document.querySelectorAll(`[data-tab-content]`);

tabBtn.forEach((tab, index) => {
    tab.addEventListener(`click`, () => {
        tabContent.forEach(content => {
            content.classList.remove(`active`);
        });
        tabBtn.forEach(tab => {
            tab.classList.remove(`active`);
        });
        tabContent[index].classList.add(`active`);
        tabBtn[index].classList.add(`active`);
    });
});