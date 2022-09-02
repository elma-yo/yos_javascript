'use strict'

{
    function update(){
        // document.querySelector('h1').textContent = 'Change!';
        // document.querySelector('#target').textContent = 'Change!';
        document.getElementById('target').textContent = 'Change!';
    }

    setTimeout(update, 1000);
}