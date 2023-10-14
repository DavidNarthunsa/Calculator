const output = document.querySelector('#output');
const btns = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.clear')

btns.forEach(function(button) {
    button.addEventListener('click', function() {
        const btnValue = this.value;
        const storeValue = document.createElement('p');
        storeValue.textContent = btnValue;
        output.appendChild(storeValue);
    });
});


function clearOutput() {    
    output.innerHTML = '0';
}

clearBtn.addEventListener('click', clearOutput);
