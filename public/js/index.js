function playSong() {
  var audioPlayer = $('#music');

  setTimeout(function() {
    audioPlayer[0].play();
  });
}

function showSlideShow() {
  setTimeout(function () {
    $('.slideshow').addClass('fadeInAnimation');
    showFirstSlide();
  }, 27000);
  // can be 3000 to shorten
}

function showFirstSlide() {
  $('.first-slide').addClass('fadeInOutAnimation');

  setTimeout(function () {
    $('.someone').addClass('fadeInAnimation');
  }, 7000);

  setTimeout(function () {
    showSecondSlide();
  }, 13000);
}

function showSecondSlide() {
  $('.second-slide').addClass('fadeInOutAnimationLong');

  setTimeout(function () {
    showThirdSlide();
  }, 4000);
}

function showThirdSlide() {
  $('.third-slide').addClass('fadeInOutAnimation');

  setTimeout(function () {
    $('.third-slide .sprite-guy').addClass('first-phase-move');
    $('.third-slide .sprite-girl').addClass('first-phase-move-girl');
  }, 1000);

  setTimeout(function () {
    showFourthSlide();
  }, 10000);
}

function showFourthSlide() {
  $('.fourth-slide').addClass('fadeInOutAnimation');

  setTimeout(function () {
    showFourthSlideImgs();
  }, 9000);
}

function showFourthSlideImgs() {
  $('.fourth-slides-imgs').addClass('fadeInOutAnimationLong');

  setTimeout(function () {
    $('.fourth-slide-img-1').addClass('fadeInAnimationShort');
  }, 1000);

  setTimeout(function () {
    $('.fourth-slide-img-2').addClass('fadeInAnimationShort');
  }, 2500);

  setTimeout(function () {
    $('.fourth-slide-img-3').addClass('fadeInAnimationShort');
  }, 4000);

  setTimeout(function () {
    $('.fourth-slide-img-4').addClass('fadeInAnimationShort');
  }, 5500);

  setTimeout(function () {
    showFifthSlide();
  }, 14000);
}

function showFifthSlide() {
  $('.fifth-slide').addClass('fadeInOutAnimation');

  setTimeout(function () {
    showFifthSlideImgs();
  }, 9000);
}

function showFifthSlideImgs() {
  $('.slide-fifth-slide-imgs').addClass('fadeInOutAnimationLong');

  setTimeout(function () {
    $('.fifth-slide-img-1').addClass('fadeInAnimationShort');
  }, 1000);

  setTimeout(function () {
    $('.fifth-slide-img-2').addClass('fadeInAnimationShort');
  }, 2500);

  setTimeout(function () {
    $('.fifth-slide-img-3').addClass('fadeInAnimationShort');
  }, 4000);

  setTimeout(function () {
    $('.fifth-slide-img-4').addClass('fadeInAnimationShort');
  }, 5500);

  setTimeout(function () {
    showSixthSlide();
  }, 14000);
}

function showSixthSlide() {
  $('.sixth-slide').addClass('fadeInOutAnimation');

  setTimeout(function () {
    showSeventhSlide();
  }, 7000);
}

function showSeventhSlide() {
  $('.seventh-slide').addClass('fadeInOutAnimation');
  $('.seventh-slide .sprite-guy').addClass('second-phase-move');
  $('.seventh-slide .sprite-girl').addClass('second-phase-move-girl');
}

showSlideShow();
