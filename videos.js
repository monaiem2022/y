

let videoImg = document.getElementById('videoImg');
let mainVideoAnimate = document.getElementById('mainVideoAnimate');
let mainVideo = document.getElementById('mainVideo');
let content = document.getElementById('content');
let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');
let video4 = document.getElementById('video4');
let video5 = document.getElementById('video5');
let video6 = document.getElementById('video6');
let video7 = document.getElementById('video7');
let video8 = document.getElementById('video8');

let counter1html = document.getElementById('counter1');

let counterTitle1 = document.getElementById('counterTitle1');
let counterTitle2 = document.getElementById('counterTitle2');
let skip = document.getElementById('skip');


let timerhtml = document.getElementById('mainTimer');


videoImg.onclick = function () {
  videoImg.style.display = 'none';
  mainVideo.play();
  content.style.display = 'none';
  
}

mainVideo.onplay = function () {
  videoImg.style.display = 'none';
  content.style.display = 'none';
}






let ads = document.querySelectorAll('.one');	// نحدد كل الفيديوهات
let adsLength = ads.length;
let randomAdIndex = Math.floor(Math.random() * adsLength)
let randomAd = ads[randomAdIndex];	// فيدفيو عشوائي

function counter1() {
  let mainTimer = document.getElementById('mainTimer').innerText;

  // نوقف الدالة إذا كان الفيديو الرئيسي متوقف والإعلان متوقف (في حالة لم ينتهي الإعلان)
  const adNotEnded = randomAd.currentTime !== randomAd.duration;
  if (mainVideo.paused && randomAd.paused && adNotEnded) {
    return
  }

const adDuration = parseInt(randomAd.getAttribute('data-duration'));


  document.getElementById('mainTimer').innerText -= 1
  document.getElementById('counter1').innerText -= 1;

  if (mainTimer == 190) {
    counter1html.style.display = 'block';
    counter1html.innerHTML = 10;
    counterTitle1.style.display = 'block';
  }

  if (mainTimer == 180) {
    randomAd.controls = true;
    counterTitle1.style.display = 'none';
    counterTitle2.style.display = 'block';
    counterTitle2.style.zIndex = '20';
    counter1html.style.display = 'block';
    counter1html.style.zIndex = '20';
    counter1html.innerHTML = adDuration;
    mainVideo.pause();
    randomAd.style.display = 'block';
    randomAd.play();
  }




  if(counter1html.innerHTML == 0){
    randomAd.style.display = 'none';
    randomAd.pause();
    mainVideo.play();
    counter1html.style.display = 'none';
    counterTitle1.style.display = 'none';
    counterTitle2.style.display = 'none';
    skip.style.display = 'none'
  }



  if(mainTimer == 170){
    skip.style.display = 'block';
    ski.style.Zindex = '20';
  }

if(mainTimer == 80){
    skip.style.display = 'block';
    ski.style.Zindex = '20';
  }


  skip.onclick = function ()  {
    skip.style.display = 'none';
    randomAd.style.display = 'none';
    randomAd.pause();
    counter1html.style.display = 'none';
    counterTitle2.style.display = 'none';
    mainVideo.play()
  }


   



}


setInterval(counter1, 1000);






image1.onclick = function () {
 timerhtml.innerHTML = 200;
 randomAd.style.display = 'none';
 randomAd.pause();
 counter1html.style.display = 'none';
 counterTitle1.style.display ='none';
 counterTitle2.style.display = 'none'
 
 let image1 = document.getElementById('image1');
 videoImg.style.backgroundImage = "url('images/image1.jpg')";
 insideMainShowMore.style.display = 'none';
 function loading () {
   mainVideoAnimate.style.display = 'none';
   videoImg.style.display = 'none';
   content.style.display = 'none';
   mainVideo.src = video2.src;
   mainVideo.controls = true;
   mainVideo.play();

   if(video1  || video3 ||video4 || video5 || video6 || video7|| video8.play()){
     mainVideoAnimate.style.display = 'block';
     videoImg.style.display = 'block'
      function again () {
       mainVideoAnimate.style.display = 'none';
       videoImg.style.display = 'none';
       video1.pause();
       video3.pause();
       video4.pause();
       video5.pause();
       video6.pause();
       video7.pause();
       video8.pause();
     
      }
      setTimeout(again,1000)
    }
 }
 setTimeout(loading,1000)
let timeCounter1 = setInterval(counter1,3000);      

}






  image2.onclick = function () {
     timerhtml.innerHTML = 200;
    randomAd.style.display = 'none';
    randomAd.pause();
    counter1html.style.display = 'none';
    counterTitle1.style.display ='none';
    counterTitle2.style.display = 'none'
    
    let image2 = document.getElementById('image2');
    videoImg.style.backgroundImage = "url('images/image1-3.jpg')";
    insideMainShowMore.style.display = 'none';
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video2.src;
      mainVideo.controls = true;
      mainVideo.play();

      if(video1  || video3 ||video4 || video5 || video6 || video7|| video8.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video3.pause();
          video4.pause();
          video5.pause();
          video6.pause();
          video7.pause();
          video8.pause();
        
         }
         setTimeout(again,1000)
       }
    }
    setTimeout(loading,1000)
 let timeCounter1 = setInterval(counter1,3000);      

  }


  image3.onclick = function () {
     timerhtml.innerHTML = 200;
    randomAd.style.display = 'none';
    randomAd.pause();
    counter1html.style.display = 'none';
    counterTitle1.style.display ='none';
    counterTitle2.style.display = 'none'

    let image3 = document.getElementById('image3');
    videoImg.style.backgroundImage = "url('images/image1-2.jpg')";
    mainVideoAnimate.style.display = 'block';
    insideMainShowMore.style.display = 'none'
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video3.src;
      mainVideo.controls = true;
      mainVideo.play();

      if(video1 || video4 || video5 || video6 || video7 || video8 || video2.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video2.pause();
          video4.pause();
          video5.pause();
          video6.pause();
          video7.pause();
          video8.pause();
         }
         setTimeout(again,1000)
       }
    }
    setTimeout(loading,2000)
  }


  image4.onclick = function () {
      timerhtml.innerHTML = 200;
      randomAd.style.display = 'none';
      randomAd.pause();
      counter1html.style.display = 'none';
      counterTitle1.style.display ='none';
      counterTitle2.style.display = 'none'

    let image4 = document.getElementById('image4');
    videoImg.style.backgroundImage = "url('images/image1-4.jpg')";
    mainVideoAnimate.style.display = 'block';
    insideMainShowMore.style.display = 'none'
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video4.src;
      mainVideo.controls = true;
      mainVideo.play();

      if(video1 || video3  || video5 || video6 || video7 || video8 || video2.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video2.pause();
          video3.pause();
          video5.pause();
          video6.pause();
          video7.pause();
          video8.pause();
         }
         setTimeout(again,1000)
       }
    }
    setTimeout(loading,2000)
  }


  image5.onclick = function () {
      timerhtml.innerHTML = 200;
      randomAd.style.display = 'none';
      randomAd.pause();
      counter1html.style.display = 'none';
      counterTitle1.style.display ='none';
      counterTitle2.style.display = 'none'

    let image5 = document.getElementById('image5');
    videoImg.style.backgroundImage = "url('images/image1-5.jpg')";
    mainVideoAnimate.style.display = 'block';
    insideMainShowMore.style.display = 'none'
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video5.src;
      mainVideo.controls = true;
      mainVideo.play();

      if(video1 || video3 || video4 || video6 || video7 || video8 || video2.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video2.pause();
          video3.pause();
          video4.pause();
          video6.pause();
          video7.pause();
          video8.pause();
         }
         setTimeout(again,500)
       }
    }
    setTimeout(loading,500)

  }


  image6.onclick = function () {
      timerhtml.innerHTML = 200;
      randomAd.style.display = 'none';
      randomAd.pause();
      counter1html.style.display = 'none';
      counterTitle1.style.display ='none';
      counterTitle2.style.display = 'none'

    let image6 = document.getElementById('image6');
    videoImg.style.backgroundImage = "url('images/image1-6.jpg')";
    mainVideoAnimate.style.display = 'block';
    insideMainShowMore.style.display = 'none'
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video6.src;
      mainVideo.controls = true;
      mainVideo.play();

      if(video1 || video3 || video4 || video5 || video6 || video7 || video8 || video2.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video2.pause();
          video3.pause();
          video4.pause();
          video5.pause();
          video6.pause();
          video7.pause();
          video8.pause();
         }
         setTimeout(again,1000)
       }
    }
    setTimeout(loading,2000)
  }

  

  
  image7.onclick = function () {
      timerhtml.innerHTML = 200;
       randomAd.style.display = 'none';
      randomAd.pause();
      counter1html.style.display = 'none';
      counterTitle1.style.display ='none';
      counterTitle2.style.display = 'none'

    let image7 = document.getElementById('image1');
    videoImg.style.backgroundImage = "url('images/image1-7.jpg')";
    mainVideoAnimate.style.display = 'block';
    insideMainShowMore.style.display = 'none'
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video7.src;
      mainVideo.controls = true;
      mainVideo.play();
     

      if(video1 || video3 || video4 || video5 || video6 || video8 || video2.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video2.pause();
          video3.pause();
          video4.pause();
          video5.pause();
          video6.pause();
          video8.pause();
          
         }
         setTimeout(again,1000)
       }
    }
    setTimeout(loading,0)
  }


  image8.onclick = function () {
      timerhtml.innerHTML = 200;
      randomAd.style.display = 'none';
      randomAd.pause();
      counter1html.style.display = 'none';
      counterTitle1.style.display ='none';
      counterTitle2.style.display = 'none'

    let image8 = document.getElementById('image8');
    videoImg.style.backgroundImage = "url('images/image2.png')";
    mainVideoAnimate.style.display = 'block';
    insideMainShowMore.style.display = 'none'
    function loading () {
      mainVideoAnimate.style.display = 'none';
      videoImg.style.display = 'none';
      content.style.display = 'none';
      mainVideo.src = video8.src;
      mainVideo.controls = true;
      mainVideo.play();

      if(video1 || video3 || video4 || video5 || video6 || video7 || video2.play()){
        mainVideoAnimate.style.display = 'block';
        videoImg.style.display = 'block'
         function again () {
          mainVideoAnimate.style.display = 'none';
          videoImg.style.display = 'none';
          video1.pause();
          video2.pause();
          video3.pause();
          video4.pause();
          video5.pause();
          video6.pause();
          video7.pause();
         }
         setTimeout(again,1000)
       }
    }
    setTimeout(loading,0)

  }




 sub.onclick = function () {
   if(sub.innerHTML == 'Subscribed'){
     sub.innerHTML = 'Subscribe';
     sub.style.backgroundColor = 'red'
   } else {
     sub.innerHTML = 'Subscribed';
     sub.style.backgroundColor = '#333'
   }
  }
 


 let show = document.getElementById('show');
 let insideMainShowMore = document.getElementById('insideMainShowMore');

 show.onclick = function () {
   if(insideMainShowMore.style.display == 'block'){
     insideMainShowMore.style.display = 'none';
     show.innerHTML = 'Show more';
   } else {
     show.innerHTML = 'Show less';
     insideMainShowMore.style.display = 'block'
   }
 }


 












 $('.control').on('submit',function (e) {
   let inputComment = $('.inputComment');
   let commentDiv = $('.commentDiv');

   if(inputComment.val() != ''){
     e.preventDefault(e);
     $('<div>' + inputComment.val() + '</div>').appendTo(commentDiv)
   }  else {
  
   }
 })











  $('.videoList video').on('click' , function(){
  
    let src = $(this).attr('src')
    $('.mainVideo video').attr('src',src);
    
  });






$('.videoList').on('click',function () {

  $('.mainViews').text($(this).find('.watchViews').text());
  $('.mainTitle').text($(this).find('.watchTitle').text());
  $('.opacity').text($(this).find('.opacity1').text());
  $('.main_like').text($(this).find('.watchLike').text());
  $('.mainDate').text($(this).find('.watchDate').text());
  $('.mainName').text($(this).find('.watchName').text());
  $('.mainSubscribers').text($(this).find('.watchSubscribers').text());
  $('.mainShowMore').text($(this).find('.watchShowMore').text());
  $('.insideMainShowMore').text($(this).find('.insideWatchShowMore').text());
  $('.mainImg').attr('src', $(this).find('img').attr('src'));
  $('.commentImg').attr('src',$(this).find('img').attr('src'))
 
});







