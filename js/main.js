'use strict'

{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        targetNode.textContent = 'Change!';
        targetNode.title = 'This is title!';
        targetNode.style.color = 'white';
        targetNode.style.backgroundColor = 'skyblue';
    });
}