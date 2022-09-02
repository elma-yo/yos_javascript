'use strict'

{
    function update(){
        document.querySelector('h1').textContent = 'Change!';
    }

    setTimeout(update, 1000);
}