



videoImg.onclick = function () {
  videoImg.style.display = 'none';
  mainVideo.play();
  content.style.display = 'none';
  
}


    
image1.onclick = function () {
  videoImg.style.backgroundImage = "url('images/animal1.jpg')";
  insideMainShowMore.style.display = 'none';
  function loading () {
    mainVideoAnimate.style.display = 'none';
    videoImg.style.display = 'none';
    content.style.display = 'none';
    mainVideo.src = video1.src;
    mainVideo.controls = true;
    mainVideo.play();
    if(video2  || video3 ||video4 || video5 || video6 || video7|| video8.play()){
      mainVideoAnimate.style.display = 'block';
      videoImg.style.display = 'block';
       function again () {
        mainVideoAnimate.style.display = 'none';
        videoImg.style.display = 'none';
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

mainVideo.onpause = function () {
  videoImg.style.display = 'block'
}
  image2.onclick = function () {
    videoImg.style.backgroundImage = "url('images/animal2.jpg')";
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
    setTimeout(loading,2000)
  }


  image3.onclick = function () {
    let image3 = document.getElementById('image3');

   
    videoImg.style.backgroundImage = "url('images/animal3.jpg')";
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
    videoImg.style.backgroundImage = "url('images/animal4.jpg')";
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
    videoImg.style.backgroundImage = "url('images/animal5.jpg')";
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
    videoImg.style.backgroundImage = "url('images/animal6.jpg')";
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
    videoImg.style.backgroundImage = "url('images/animal7.jpg')";
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
    videoImg.style.backgroundImage = "url('images/animal8.jpg')";
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



 

//  let sub =document.getElementById('sub');
//  sub.onclick = function () {
//    if(sub.innerHTML == 'Subscribed'){
//      sub.innerHTML = 'Subscribe';
//      sub.style.backgroundColor = 'red'
//    } else {
//      sub.innerHTML = 'Subscribed';
//      sub.style.backgroundColor = '#333'
//    }
//  }


//  let show = document.getElementById('show');
//  let insideMainShowMore = document.getElementById('insideMainShowMore');

//  show.onclick = function () {
//    if(insideMainShowMore.style.display == 'block'){
//      insideMainShowMore.style.display = 'none';
//      show.innerHTML = 'Show more';
//    } else {
//      show.innerHTML = 'Show less';
//      insideMainShowMore.style.display = 'block'
//    }
//  }


 



//  let body1 = document.getElementById('body1');
//  let see = document.getElementById('count');
//  let please = document.getElementById('please');

//   body1.onload = function () {
//     mainVideo.controls = true;

//     function count () {
//       let count = document.getElementById('count').innerText;
//       document.getElementById('count').innerText -= 1;
//       if(count == 1){
//         clearInterval(ss);
//         videoImg.style.display = 'none';
//         content.style.display = 'none';
//         see.style.display = 'none';
//         mainVideo.play();
//         please.style.display = 'block';
//         please.onclick = function () {
//           if(mainVideo.play()){
//             please.style.display = 'none';
//           }
//           if(mainVideo != paused){
//             videoImg.style.display = 'none'
//           }  else {
//             videoImg.style.display = 'block'
//           }
//         }
//         mainVideo.onclick = function () {
//           please.style.display = 'none';
//         }
//       }

  

     
//     }
//     let ss = setInterval(count,1000);
  

  
   

//   }



 

 














