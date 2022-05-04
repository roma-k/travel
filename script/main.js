let Labels = document.querySelectorAll('.radio-bar-label');
console.log(Labels);

for(let label of Labels) {
    label.onclick = function() {
        label.classList.add('.checked');
    };
}