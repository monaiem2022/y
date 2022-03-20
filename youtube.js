let info = document.getElementById('info'),
    close = document.getElementById('close'),
    confirm = document.getElementById('confirm'),
    cancel = document.getElementById('cancel'),
    signin = document.getElementById('signin'),
    signin2 = document.getElementById('signin2'),
    signinTitle = document.getElementById('signinTitle'),
    email = document.getElementById('email'),
    message = document.getElementById('message'),
    password = document.getElementById('password'),
    animate = document.getElementById('animate'),
    emailValidate = document.getElementById('emailValidate'),
    redesign = document.getElementById('redesign'),
    search = document.getElementById('search');

  


signin.onclick = function (e) {
   "use strict";

   if(signin.innerHTML == 'sign in'){
     animate.style.display = 'none';
   }
 
   if(info.style.display == 'block'){
    info.style.display = 'none'
   } else {
    info.style.display = 'block'
   }
   close.onclick = function () {
    info.style.display = 'none'
   }
   cancel.onclick = function (e) {
     e.preventDefault();
     info.style.display = 'none';
     
   }
 
}


confirm.onclick = function (e) {
   e.preventDefault();
  let pass = password.value.length;
  let me = email.value;


  if(pass > 8 && pass != '' && confirm.innerHTML =='confirm' 
   &&  me.includes('@gmail.com') || me.includes('@yahoo.com')){
    signin.style.display = 'none';
    animate.style.display = 'block';
    signin2.innerHTML = email.value;
    signin2.style.display = 'block'
   

    function lola(){
      info.style.display = 'none';
      animate.style.display = 'none';
      location = 'collection.html'
     
    }
     setTimeout(lola,5000) 

  }

  else {
    message.style.display = 'block';
    emailValidate.style.display = 'none';
    location = 'index.html';
  }

 }

 signin2.onclick = function () {
   info.style.display = 'block';
   signinTitle.innerHTML = 'sign out';
   confirm.innerHTML = 'sign out';

   confirm.onclick = function (e) {
     e.preventDefault();

     
    
    if(confirm.innerHTML == 'sign out'){
      animate.style.display = 'block' ;
       function lola () {
          info.style.display = 'none';
          signin.style.display = 'inline-block';
          signin2.style.display = 'none';
         

       }  
       setTimeout(lola,5000)
      
   }

 
   
   }

 }

 let signinSidebar = document.getElementById('signinSidebar');

 signinSidebar.onclick = function () {
   info.style.display = 'block';
   cancel.onclick = function (e) {
    e.preventDefault();
    info.style.display = 'none';
  }

 }












 $('.iconMenu').on('click',function () {
  $('.sidebar').animate({
    left:0
  }, 500);
 })

 $('.iconMenu2').on('click',function () {
  $('.sidebar').animate({
    left:'-300px'
  }, 500);

})


$('.home , .clock ,.youtube ,.user, .youtubeImg, .sidebar img ,.music, .sports, .gaming, .news, .live')
.on('click',function () {
  $('.info').show();
  $('.sidebar').animate({
    left:'-350px'

  }, 500);
});

$('.close').on('click',function () {
  $('.info').hide()
})





















// $('video').click(function(){
   
//     $.each(videos, function(){
//         this.pause();
//         this.controls = false;
//     });
  
//     if(this.pause){
//         this.play();
//     } else{
//         this.play();
//     }
  
//     this.controls = true;
//   });
//   //////////////////////// I have to revise this function
  
//   var videos = $('video');
//  $(videos).on('click',function () {
   
    
//  this.play();
//  this.controls = true;




//  });



//  let main = document.getElementById('main');
//  let counter = document.getElementById('counter');
//  let counter5 = document.getElementById('counter5');
//  let add = document.getElementById('add');
//  let maincounter4 = document.getElementById('maincounter4');
//  let counter4 = document.getElementById('counter4');
 

// function x () {



//     let counter3 = document.getElementById('counter3').innerText;
//     let me = document.getElementById('counter').innerText;
//     document.getElementById('counter').innerText -= 1;

//     if(me ==1){
//         clearInterval(he)
//     }

//     video.onclick = function () {
//         this.controls = true;
//         this.onplay();

//     }

//      if(video.controls == true){
//         main.style.display = 'block';
     
//          counter.style.display = 'none';
//          counter3 = document.getElementById('counter3').innerText -=1;
//          counter.innerText = counter3.innerText;
//      }
     
//      if(counter3 ==0){
//         clearInterval(he);
//         main.style.display='none';
        
//         video.pause();
//         video.style.zIndex='1';
//         add.style.Zindex = '3';
//         add.controls = true;
//         add.play();
//     }  


      
    
    

    
    

//     // counter4.onclick = function () {
//     //     add.style.display = 'none';
//     //     video.play();
//     //     counter4.style.display = 'none'
//     //     if(counter3 == 0){
//     //         counter4.style.display = 'block'
//     //     }
//     // }
//     if(counter3 == 0){
//         maincounter4.style.display = 'block';
//     }

//     counter4.onclick = function () {

//         counter4.style.display = 'none';
//         add.style.display = 'none';
//         video.play();  

//     }
  


       
     
        

       

       
//         // if(button == 45){
//         //     maincounter4.style.display = 'none';
//         //     video.play();
//         //     video.style.zIndex='3';
//         //     add.style.Zindex = '1';
//         //     video.controls = true;
//         //     add.pause();

//         // }



//         // if(button == 20){
//         //     maincounter4.style.display = 'block'
//         // }


 
   
    
    
     
    

   
     
//     // if(add.controls = true){
        
//     //     let ll = document.getElementById('ll').innerText -= 1;
//     //     ll.innerText = button.innerText
       
        
//     // }


// }

// let he = setInterval(x,1000)







// window.onload = function ()  {
//     let counter2 = new CountUp('counter2', 0 ,5 ,0 ,10);
//     counter2.start();

//     if(counter2 == 5){
//         counter2.style.display = 'block'
//     }
   
// }



















//  function number() {
//     let ten = document.getElementById('ten').innerText;
//      document.getElementById('ten').innerText -= 1;
    
//       if(ten == 1){
//           clearInterval(malek);
//       }
//   }
//   malek = setInterval(number,1000)
 
 


// var videos = $('video');
// $(function (){


//     var ourcountdown = setInterval(function (){

//         var counter = parseInt($('.countdown').html());

//         if(counter !== 0) {
//             $('.countdown').html(counter -1);
            
//         }

//     }, 1000) 
// })



// let imgVideo = document.getElementById('imgVideo');
// let videoOne = document.getElementById('videoOne');



// imgVideo.onclick = function () {
//   videoOne.style.display = 'block';
//   imgVideo.style.zIndex = '1';
//   videoOne.controls = true;
//   videoOne.play();
//   videoOne.style.zIndex = '3';
  
// }

// videoOne.onclick = function () {
//   imgVideo.style.zIndex = '3';
//   videoOne.play();
//   videoOne.style.zIndex = '1'
// }



// $('video').on('click',function () {
//     var counter = parseInt($('.countdown').html());

//     if(counter === 0){
//         $('.allcount').hide()
//     }
    
// })






// function first () {
//     counter  = document.getElementById('counter').innerText;
//     document.getElementById('counter').innerText -= 1;

//     if(counter == 1){
//         clearInterval(me);
       
//     }

//     if(counter <= 8 && video.controls == true){
//         allCount.style.display = 'block'
//     }
// }

// let me = setInterval(first,1000)






// function time () {
    
//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     // if(m < 10){
//     //     m = "0" + m;
//     // }
//     // if(s < 10){
//     //     s = "10" + s;
//     // }

    
//     document.getElementById("clock").innerHTML =  s;


// let video = document.getElementById('video');
// let allCount = document.getElementById('allCount');

// var videos = $('video');



// }

// setInterval(time,1000);




// $(function time () {

//     let d = new Date();
//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();
//     document.getElementById("clock").innerHTML =  s;
//     setInterval(time,1000);

    
// $(videos).on('click',function() {
//     let clock = $('#clock');
//     this.controls = true;
//     this.onplay();

//     if(clock.val() <20){
//         $(this).children().hide()
        
//     }

// })

//     if(s < 20){
//         $('.allcount').show()
//     }

//     else{
//         $('.allcount').hide()
//     }

// })



// var videos = $('video');
// $(function (){


//     var ourcountdown = setInterval(function (){

  

//         $(videos).on('click',function lol () {
//             this.controls = true;
//            $(this).next().show();

//            if(counter !== 0) {
//             $('.countdown').html(counter -1 + '<span>wiil play in</span>' + " ")  ;
           
//         }
        
        
        
        
          
          
//        })
       
       
  
//         var counter = parseInt($('.countdown').html());
  
       
//     }, 1000) 


    
// })





// $(function (){


//     var ourcountdown2 = setInterval(function (){

//         var counter2 = parseInt($('.countdown2').html());

//         if(counter2 !== 0) {
//             $('.countdown2').html(counter2 -1 + '<span>wiil play in</span>' + " ")  ;
           
//         }


//     }, 1000) 

// })








// let video = document.getElementById('video');
// let allcount = document.getElementById('allcount');




// video.onclick = function () {
//     this.controls = true;
//     if(video.onplay()){
       
//     }
// }


// function call () {
    
//     let countdown = document.getElementById('countdown').innerText;
//     document.getElementById('countdown').innerText -=1;
    
//     if(countdown == 1){
//         clearInterval(lola);
//         countdown.style.display = 'none'
//     }
// }

//   let lola = setInterval(call,1000)








