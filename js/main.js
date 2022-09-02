'use strict'

{
    document.querySelector('button').addEventListener('dblclick', () => {
        console.log('Double Clicked!');
    });

    // document.addEventListener('mousemove', () => {
    //     console.log('moved');
    document.addEventListener('mousemove', e => {
        console.log(e.clientX, e.clientY);
    });
}