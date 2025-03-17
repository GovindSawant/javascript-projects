let likeBtn = document.querySelector('.like');
let image = document.querySelector('.image-posted');
image.addEventListener('dblclick',function(){
  likeBtn.style.transform = 'translate(-50%,-50%) scale(1.5)';
  likeBtn.style.opacity = 0.8;
  setTimeout(function(){
    likeBtn.style.opacity = 0;
  },1000);
  setTimeout(function(){
    likeBtn.style.transform = 'translate(-50%,-50%) scale(0)';
  },1000);
  });
