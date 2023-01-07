const notifyRead = document.querySelector(".notifications__read");
const notifyNumber = document.querySelector(".notifications__number");
const dot = document.getElementsByClassName("dot");
const dots = Array.from(dot);
const card = document.getElementsByClassName("card");
const cards = Array.from(card);


notifyRead.addEventListener('click', e => {
    e.preventDefault();

    cards.forEach((cardList) => {
        cardList.classList.remove("read")
    })

    dots.forEach(dot => {
        dot.classList.remove('dot');
    })

    notifyNumber.remove();

})