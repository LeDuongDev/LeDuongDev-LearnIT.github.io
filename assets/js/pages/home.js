const $=document.querySelector.bind(document)
function home(){
   toggleMenu()
   scrollMenu()
}
home()
function toggleMenu(){
   let iconMenu=$('#header .header-menu .menu-bars')
   let menu=$('#header .header-mobile')
   iconMenu.onclick=function(e){
      e.preventDefault()
      if(menu.classList.contains('hidden')){
         menu.classList.remove('hidden')
      }else{
         menu.classList.add('hidden')
      }
   }
}
window.onscroll=function(){scrollMenu()}
function scrollMenu(){
   let menuBar=$('#header .header-bar')
   if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
      menuBar.classList.add('shadow')
   }else{
      menuBar.classList.remove('shadow')

   }
}

   