let arr = [{
  dp:'images/cat1.jpg',
  story:'story-images/photo-1580447670882-c5e6a8b9a2dc.jpeg',
},
{
  dp:'images/cat2.jpeg',
  story:'story-images/photo-1580447670904-6c8eca09e186.jpeg',
},
{
  dp:'images/cat3.jpeg',
  story:'story-images/photo-1610452222847-aa8b4fdbb09e.jpeg',
},
{
  dp:'images/cat4.jpeg',
  story:'story-images/photo-1671563056145-17ea87683ff4.jpeg',
},
{
  dp:'images/cat5.jpeg',
  story:'story-images/photo-1680889649735-f9963edcd44b.jpeg',
},
];

let clutter = "";
let storyContainer = document.querySelector('.story-container');
arr.forEach(function(elem,idx){
  clutter += `
  <div class="story">
  <img id="${idx}" src=${elem.dp}>
</div>`;
});
storyContainer.innerHTML = clutter;

// view story
let storyView = document.querySelector('.full-screen');
storyContainer.addEventListener('click',function(dets){
  // console.log(arr[dets.target.id].story);
  storyView.style.display = 'block';
  storyView.style.backgroundImage = `url(${arr[dets.target.id].story})`;
  setTimeout(function(){
    storyView.style.display = 'none';
  },3000);
});

// like button
let likeBtn = document.querySelector('.full-screen svg');
let flag = 0;
likeBtn.addEventListener('click',function(){
  if(flag === 0) {
    likeBtn.style.fill = 'rgb(255, 34, 71)';
    flag = 1;
  } else {
    likeBtn.style.fill = 'white';
    flag = 0;
  }
});

// linear gradient of stories
// let story = document.querySelectorAll('.story');
// story.addEventListener('click',function(){
//     story.style.background = 'linear-gradient(rgb(191, 187, 187),rgba(0, 0, 0, 0.325))';
// });