'use strict'

{
    function update(){
        // document.getElementById('target').textContent = 'Change!';
        document.querySelector('p').textContent = 'Change!';
    }

    setTimeout(update, 1000);
}