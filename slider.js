const slides = document.querySelectorAll(".slide");
console.log("slides", slides);

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    if(curSlide === indx){
        slide.style.height = `400px`;
        slide.style.top = `-5%`;
        slide.style.border = `1px solid red`;
    }else{
        slide.style.height = `350px`;
        slide.style.top = `0%`; 
        slide.style.border = `none`;
    }
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
      curSlide--;
    }
  
  //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      if(curSlide === indx){
        slide.style.height = `400px`;
        slide.style.top = `-5%`;
        slide.style.border = `1px solid red`;
    }else{
        slide.style.height = `350px`; 
        slide.style.top = `0%`; 
        slide.style.border = `none`;
    }
    });
  });
