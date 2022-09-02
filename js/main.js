'use strict'

{
    function update(){
        // document.getElementById('target').textContent = 'Change!';
        // document.querySelector('p').textContent = 'Change!';
        // document.querySelectorAll('p')[1].textContent = 'Change!';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです！`;
        });
    }

    setTimeout(update, 1000);
}