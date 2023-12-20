$(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");

  /*profile, view버튼 클릭시 profile_wrap 펼쳐지는 효과*/
  $(".profile").click(function () {
    $(".tab_wrap2").animate({ scrollTop: 10 }, "slow");
    $("#profile_wrap").css({ position: "fixed" });
    $("#profile_wrap")
      .stop()
      .animate({ width: "100%", opacity: "1" }, 500, function () {
        $(this).children(".tab_wrap").addClass("on");
      });
    $(".tab_wrap>ul>li").removeClass("on");
    $(".tab_wrap>ul>li:nth-of-type(1)").addClass("on");
    $(".tab").removeClass("on");
    $(".tab").eq(0).addClass("on");
  });

  $(".view").click(function () {
    $(".tab_wrap2").animate({ scrollTop: 10 }, "slow");
    $("#profile_wrap").css({ position: "fixed" });
    $("#profile_wrap")
      .stop()
      .animate({ width: "100%", opacity: "1" }, 500, function () {
        $(this).children(".tab_wrap").addClass("on");
      });
    $(".tab_wrap>ul>li").removeClass("on");
    $(".tab_wrap>ul>li:nth-of-type(1)").addClass("on");
    $(".tab").removeClass("on");
    $(".tab").eq(0).addClass("on");
  });

  $(".close").click(function () {
    $("#profile_wrap")
      .stop()
      .animate({ width: "0%", opacity: "0" }, 500, function () {
        $(this).children(".tab_wrap").removeClass("on");
      });
  });

  /*profile tab key*/
  $(".tab_wrap>ul>li").click(function () {
    let i = $(this).index();
    $(".tab_wrap>ul>li").removeClass("on");
    $(this).addClass("on");
    $(".tab").removeClass("on");
    $(".tab").eq(i).addClass("on");
  });

  /*scroll*/
  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;

  $(".scroll_wrap").scroll(function () {
    $(this).index();
    $(".navi li").removeClass("on");
    let scroll = $(".scroll_wrap").scrollTop();
    if (con1 == scroll) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(0).addClass("on");
      $("#con1 .gooey_effect").addClass("on");
      $(".about_text").addClass("on");
      $(".hello").addClass("on");
      $(".skills").addClass("on");
      $(".license").addClass("on");
    } else if (con2 == scroll) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(1).addClass("on");
      $(".svgBox").addClass("on");
      $(".text_scroll>h1").addClass("on");
      $(".ux_project").addClass("on");
      $(".ux_text").addClass("on");
      $(".ux_wrap").addClass("on");
    } else if (con3 == scroll) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(2).addClass("on");
      $("#con3 .gooey_effect1").addClass("on");
      $(".con3_title").addClass("on");
      $(".con3_left").addClass("on");
      $(".con3_right").addClass("on");
    } else if (con4 == scroll) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(3).addClass("on");
      $(".wave_wrap").addClass("on");
      $(".design_top").addClass("on");
      $("footer").addClass("on");
      $(".poster_img li").addClass("on");
    }
  });

  /*uxui project 위로 자동슬라이드*/
  let b = 0;
  let ux = $(".ux_slide_img>li").length;
  let hei = 100;
  setInterval(function () {
    b++;
    if (b == ux - 1) {
      $(".ux_slide_img")
        .stop()
        .animate({ top: "-400%" }, function () {
          $(".ux_slide_img").css({ top: 0 });
        });
      b = 0;
    } else {
      $(".ux_slide_img")
        .stop()
        .animate({ top: -b * hei + "%" });
    }
  }, 4000);

  /*con3 slide effect*/
  let c = 0;
  let con3_slide = $(".redesign_text").length;
  $(".redesign_text").eq(0).addClass("on");
  $(".con3_right_content").eq(0).fadeIn(0);
  $(".pg1").text(`0${c + 1}`);
  $(".pg2").text(`0${con3_slide}`);

  /*con3 다음 버튼 누를 때*/
  $(".right_a").click(function () {
    c++;
    if (c >= con3_slide) {
      c = 0;
    }
    $(".redesign_text").removeClass("on");
    $(".redesign_text").eq(c).addClass("on");
    $(".con3_right_content").fadeOut();
    $(".con3_right_content").eq(c).fadeIn();
    $(".pg1").text(`0${c + 1}`);
    $(".pg2").text(`0${con3_slide}`);
  });

  /*con3 이전 버튼 누를 때*/
  $(".left_a").click(function () {
    c--;
    if (c < 0) {
      c = 3;
    }
    $(".redesign_text").removeClass("on");
    $(".redesign_text").eq(c).addClass("on");
    $(".con3_right_content").fadeOut();
    $(".con3_right_content").eq(c).fadeIn();
    $(".pg1").text(`0${c + 1}`);
    $(".pg2").text(`0${con3_slide}`);
  });

  /*con3 모달박스*/
  $(".plan").click(function () {
    $("body").css({ overflowY: "hidden" });
    $(".plan_modal").animate({ scrollTop: 0 }, "slow");
    let i = $(this).index();
    $(".plan_modal").eq(i).css({ display: "block" });
  });
  $(".modal_close").click(function () {
    $("body").css({ overflowY: "auto" });
    $(".plan_modal").css({ display: "none" });
  });

  /*con4 모달박스*/
  $(".poster_img li").click(function () {
    let i = $(this).index();
    $(".modal").eq(i).addClass("on");
    $("body").css({ overflowY: "hidden" });
  });
  $(".x").click(function () {
    $(".modal").removeClass("on");
    $("body").css({ overflowY: "auto" });
  });

  /*커스텀 마우스 포인터*/
  const cousor = document.querySelector(".drag");

  const animateCursor = (e) => {
    cousor.style.left = `${e.pageX}px`;
    cousor.style.top = `${e.pageY}px`;
    // console.log(e.pageX);
  };
  window.addEventListener("mousemove", animateCursor);

  /*swiper*/
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    freeMode: true,
    centeredSlides: false,

    // Responsive breakpoints
    breakpoints: {
      1221: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      501: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      391: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
    },
  });

  /*scroll text animation / 스크롤에 따른 텍스트 애니메이션*/
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = `scale(1.1)`;
          entry.target.classList.add("on");
        } else {
          entry.target.style.opacity = 0.3;
          entry.target.style.transform = `scale(1)`;
          entry.target.classList.remove("on");
        }
        entry.intersectionRatio;
      });
    },
    {
      rootMargin: "-350px 0px -400px 0px", // top right bottom left
    }
  );

  // console.log(observer.rootMargin); //rootMargin 값 확인

  let ele = document.querySelectorAll(".scroll_text");
  ele.forEach((el) => {
    observer.observe(el);
  });

  let media = $(window).width();
  if (media < 1221 && media >= 391) {
    /*scroll text animation / 스크롤에 따른 텍스트 애니메이션*/
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = `scale(1.1)`;
            entry.target.classList.add("on");
          } else {
            entry.target.style.opacity = 0.3;
            entry.target.style.transform = `scale(1)`;
            entry.target.classList.remove("on");
          }
          entry.intersectionRatio;
        });
      },
      {
        rootMargin: "-350px 0px -40% 0px", // top right bottom left
      }
    );

    // console.log(observer.rootMargin); //rootMargin 값 확인

    let ele = document.querySelectorAll(".scroll_text");
    ele.forEach((el) => {
      observer.observe(el);
    });
  } else if (media < 391) {
    $(".view").click(function () {
      $(".tab_wrap2").animate({ scrollTop: 0 }, "slow");
    });
    /*scroll text animation / 스크롤에 따른 텍스트 애니메이션*/
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = `scale(1.1)`;
            entry.target.classList.add("on");
          } else {
            entry.target.style.opacity = 0.3;
            entry.target.style.transform = `scale(1)`;
            entry.target.classList.remove("on");
          }
          entry.intersectionRatio;
        });
      },
      {
        rootMargin: "-430px 0px -36% 0px", // top right bottom left
      }
    );

    // console.log(observer.rootMargin); //rootMargin 값 확인

    let ele = document.querySelectorAll(".scroll_text");
    ele.forEach((el) => {
      observer.observe(el);
    });
  }
});
