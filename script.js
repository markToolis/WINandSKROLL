let box = document.querySelector('.box'),
    btn = document.querySelector('button');
btn.addEventListener('click', function(){
    box.style.height = box.scrollHeight + 'px';
});