'use strict'

{
    const text = document.querySelector('textarea');

    // text.addEventListener('focus', () => {
    //     console.log('focus');
    // });

    // text.addEventListener('blur', () => {
    //     console.log('blur');
    // });

    text.addEventListener('input', () => {
        console.log('input');
    });

    text.addEventListener('change', () => {
        console.log('change');
    });
}