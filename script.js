const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['pink','black','red','yellow','purple','blue'];
body.style.backgroundColor='green';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});