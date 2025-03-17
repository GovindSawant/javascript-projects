// for one element
// let elem = document.querySelector('#main .elem1');
// let img = document.querySelector('#main .elem1 img');

// elem.addEventListener('mousemove',function(dets){
//   img.style.opacity = 1;
//   img.style.left = dets.x + 'px';
//   img.style.top = dets.y + 'px';
// })
// elem.addEventListener('mouseenter',function(dets){
//   img.style.opacity = 1;
// })
// elem.addEventListener('mouseleave',function(dets){
//   img.style.opacity = 0;
// })

// for multuple elements (node list)
let elem = document.querySelectorAll('#main .elem');

elem.forEach(function(val){
  console.log(val.childNodes[3])
  val.addEventListener('mouseenter',function(){
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener('mouseleave',function(){
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener('mousemove',function(dets){
    val.childNodes[3].style.left = dets.x + 'px';
  });
});