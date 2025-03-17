// selecting elements
let btn = document.querySelector('.add-friend-button');
let istatus = document.querySelector('.status');
let flag = 0;
btn.addEventListener('click',function(){
  if (flag === 0 ){
    btn.innerHTML = 'Friends'
    btn.style.backgroundColor = 'transparent';
    btn.style.color = ' rgb(85, 85, 229)';
    btn.style.border = '1px solid rgb(85, 85, 229)';
    istatus.innerHTML = 'Request send'
    istatus.style.color = 'rgb(85, 85, 229)';
    flag = 1;
  } else {
    btn.innerHTML = 'Add Friend'
    btn.style.backgroundColor = 'rgb(85, 85, 229)';
    btn.style.color = 'white'
    btn.style.border = 'none';
    istatus.innerHTML = 'Stranger';
    istatus.style.color = 'rgb(112, 112, 112)';
    flag = 0;
  }
})