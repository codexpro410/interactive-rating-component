
x = document.querySelector('.sec1')
y = document.querySelector('.sec2')
btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
   x.style.display = 'none'
   y.style.display = 'inline-block'
    setTimeout(() => {
     x.style.display = 'inline-block'
     y.style.display = 'none'
            }, 2000);

})
n = document.getElementsByClassName('nx')
sp = document.getElementById('sp')
for (let i = 0; i < n.length; i++) {
  n[i].addEventListener('click',() =>{
    sp.innerHTML =  i+1

  })
  
}