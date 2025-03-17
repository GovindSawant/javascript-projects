let cur = document.querySelector('#main .cursor');
let main = document.querySelector('#main');

main.addEventListener('mousemove',function(det){
  cur.style.left = det.x + 'px';
  cur.style.top = det.y + 'px'
})