const presents = document.querySelectorAll('.present');

presents.forEach((present, index) => {
    present.addEventListener('click', () => {
        openPresent(index + 1);
    });
});

function openPresent(number) {
    alert(`You opened present ${number}! 🎁`);
}


