$(document).ready(function(){
	var win_h = $(window).height();
	$('video').css({height:win_h});
	// nav 현재 위치 표시
	$('#navBottom li a').click(function(){
		$('#navBottom li a').removeClass("nav-cur");
		$(this).addClass("nav-cur");
	})

	var programMenuView = false;

	// 마우스오버시 lnb토글
	// $('#navBottom > ul > li.program').mouseover(function(){
	// 	$('#navBottom > ul > li.latherapy .lnb').addClass("disnone").stop().animate({opacity:1});
	// 	programMenuView = true;
	// })
	// $('#navBottom > ul > li.latherapy,#navBottom > ul > li:eq(2),#navBottom > ul > li:eq(3)').mouseover(function(){
	// 	$('#navBottom > ul > li.program .lnb').addClass("disnone").stop().animate({opacity:1});
	// 	programMenuView = true;
	// })
	
	// $('#navBottom > ul > li').mouseover(function(){
	// 	$('.lnb',this).removeClass("disnone").stop().animate({opacity:1});
	// 	programMenuView = true;
	// })
	
	// $('#section').mouseover(function(){
	// 	if (programMenuView) {
	// 		$('.lnb').animate({opacity:0}).stop().addClass("disnone");
	// 		programMenuView = false;
	// 	} else {
	// 		programMenuView = false;
	// 	}
	// })

	// $('.lnb').mouseout(function(){
	// 	$('.lnb').animate({opacity:0}).stop().addClass("disnone");
	// })


	// 섹션별 top값 구하기
	var sec01_h = $('.sec01').height();
	var sec02_h = $('.sec02').height();
	var sec03_h = $('.sec03').height();
	var sec04_h = $('.sec04').height();
	var sec05_h = $('.sec05').height();
	var sec06_h = $('.sec06').height();
	var sec_h = sec01_h + sec02_h + sec03_h + sec04_h + sec05_h + sec06_h;
	var pro_sec_h = sec01_h + sec02_h + sec03_h + sec04_h + sec05_h;
	var reserve_sec_h = sec01_h + sec02_h + sec03_h;
	var manager_sec_h = sec01_h + sec02_h;
	// console.log("sec01_h----"+sec01_h)
	// console.log("sec02_h----"+sec02_h)

	$('.sec02').css({top:sec01_h})
	$('.sec03').css({top:sec01_h + sec02_h})
	$('.sec04').css({top:sec01_h + sec02_h + sec03_h})
	$('.sec05').css({top:sec01_h + sec02_h + sec03_h + sec04_h})
	$('.sec06').css({top:sec01_h + sec02_h + sec03_h + sec04_h + sec05_h})
	$('#proSection03').css({top:sec01_h + sec02_h + sec03_h + 150})
	$('#footer').css({top:sec_h});
	$('#proFooter').css({top:pro_sec_h + 150});
	$('#reserveFooter').css({top:reserve_sec_h + 300});
	$('#managerFooter').css({top:manager_sec_h + 150});
	$('#loginFooter').css({top:manager_sec_h + 100});
	$('#aboutFooter').css({top:manager_sec_h});
	$('#mypageFooter').css({top:manager_sec_h + 50});
	// console.log(sec01_h + sec02_h + sec03_h + 50);
	// console.log("aaa");

	// 휠 다운시 헤더 스케일다운
	// var finishScroll;
	// var nowScroll;
	// $(window).scroll(function(){
		

		// if (finishScroll > $(window).scrollTop()) {
			// console.log("올림");
			// console.log($(window).scrollTop());
			// $('#navTop').css({display:"block"});
			// $('#header #navBottom a#logo').css({top:4});
			// $('#header #navBottom ul').css({top:45});
			// $('#header #navBottom ul .lnb').css({top:35});
		// }else if (finishScroll < $(window).scrollTop()) {
			// console.log("내림");
			// console.log($(window).scrollTop());
			// if($(finishScroll < 50)){
			// 	$('body').animate({scrollTop:win_h})
			// }
			// $('#navTop').css({display:"none"});
			// $('#header #navBottom a#logo').css({top:18.5});
			// $('#header #navBottom ul').css({top:35});
			// $('#header #navBottom ul .lnb').css({top:45});
		// }
		// finishScroll = $(window).scrollTop();
		// console.log("finishScroll="+finishScroll)
		// var win_h = $(window).height();
		// if(finishScroll > win_h){
		// 	$('#header').removeClass("disnone");
		// }else if(finishScroll < 400){
		// 	$('#header').addClass("disnone");
		// }
	// });	

	$('.commentwrap .commentTop textarea').hide();
	$('.replywrap .commentTop textarea').hide();
	
	// textarea 숨긴 후 footerTop값을 계산해야함.
	setTop();

	// 쓴 글에서 수정눌렀을때 textarea toggle
	$('.commentwrap .goreply a.modify').click(function(){
		if($(this).text()=="수정"){
			$('.commentwrap .commentTop p').hide();
			$('.commentwrap .commentTop textarea').show();
			$(this).text("저장")
		}else if($(this).text()=="저장"){
			$('.commentwrap .commentTop p').show();
			$('.commentwrap .commentTop textarea').hide();
			$(this).text("수정")
		}		
		return false;
	})

	// 답글 글에서 수정눌렀을때 textarea toggle
	$('.replywrap .goreply a.modify').click(function(){
		if($(this).text()=="수정"){
			$('.replywrap .commentTop p').hide();
			$('.replywrap .commentTop textarea').show();
			$(this).text("저장")
		}else if($(this).text()=="저장"){
			$('.replywrap .commentTop p').show();
			$('.replywrap .commentTop textarea').hide();
			$(this).text("수정")
		}		
		return false;
	})

	// footer top값 다시 받아오기
	function setTop(){
		var setTop = $('.sec01').height() + $('.sec02').height() + 150
		$('#mypageFooter').css({top:setTop});	
		$('#loginFooter').css({top:setTop});	
		// console.log(setTop)
	}
	// 마이페이지에서 아래화살표 눌렀을때 내용 보이도록.
	$('.modify h4').click(function(){
		$('.pwConfirm').toggleClass("disnone");
		setTop();
		if($('i',this).hasClass("fa-chevron-down")){
			$('i',this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
		}else if($('i',this).hasClass("fa-chevron-up")){
			$('i',this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}
	})
	$('.inquiry h4').click(function(){
		$('.reserveConsultList').toggleClass("disnone");
		setTop();
		if($('i',this).hasClass("fa-chevron-down")){
			$('i',this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
		}else if($('i',this).hasClass("fa-chevron-up")){
			$('i',this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}
	})
	$('.managerInquiry h4').click(function(){
		$('.managerRequestList').toggleClass("disnone");
		setTop();
		if($('i',this).hasClass("fa-chevron-down")){
			$('i',this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
		}else if($('i',this).hasClass("fa-chevron-up")){
			$('i',this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}
	})

	// 관리신청사 x에 hover 효과
	// $('.result1 a').mouseenter(function(){
	// 	console.log("a")
	// 	$(this).siblings("div.blur").removeClass("disnone")
	// 	return false;
	// }).mouseleave(function(){
	// 	$(this).siblings("div.blur").addClass("disnone")
	// 	return false;
	// })

	// 팝업로그인창 닫기
	$('a.close').click(function(){
		$('.popup,.accessAgree, .privateAgree, .emailnopeAgree, .loginwrap, .provisionAgree').addClass("disnone")
		return false;
	})

	// 이용약관 팝업
	$('a.goAccessAgree, a.access').click(function(){
		$('.popup').removeClass("disnone");
		$('.popup .accessAgree').removeClass("disnone");
		return false;
	})

	// 개인정보보호정책 팝업
	$('a.goPrivateAgree,a.private').click(function(){
		$('.popup').removeClass("disnone");
		$('.popup .privateAgree').removeClass("disnone");
		return false;
	})

	// 이메일무단수집거부 팝업
	$('a.emailnope').click(function(){
		$('.popup').removeClass("disnone");
		$('.popup .emailnopeAgree').removeClass("disnone");
		return false;
	})

	// 개인정보 제3자제공 팝업
	$('a.provision').click(function(){
		$('.popup').removeClass("disnone");
		$('.popup .provisionAgree').removeClass("disnone");
		return false;
	})

    var parent;
    var greatParent;
    var i;
	// 관리자가 예약상담 및 일반문의글 호출
	$('a.content').click(function(){
		$('.popup').removeClass("disnone");
		$('#content').removeClass("disnone");
		parent = $(this).parent();
		greatParent = parent.parent();
		i = greatParent.index();
		return false;
	})
	// 문의내역에서 글보기 닫을때 disnone
	$('#content a.close').click(function(){
		$('#content').addClass("disnone");
	})

	// 호출된 글에서 관리자가 답글쓰기누르면 textarea로 전환
	$('a.writeReply').click(function(){
		// 버튼이 저장하기로 되어있으면 창닫고 답글로 삽입
		var goSave = $(this).text();
		if(goSave=="저장하기"){
			// console.log("왜 답글 안달림?")
			$(this).text("답글쓰기");	
			$('.inquiryContent p').removeClass("disnone");
			$('.inquiryContent textarea').addClass("disnone");	
			$('.popup').addClass("disnone");
			appendRow();
		}else if(goSave=="답글쓰기"){
			$('.inquiryContent p').addClass("disnone");
			$('.inquiryContent textarea').removeClass("disnone");
			$(this).text("저장하기");	
		}
		return false;
	})

	// 테이블 행삽입 함수
	function appendRow() {
		var inn = i+1;
		var tr = "<tr><td></td>" + 
				"<td>답글</td>" + 
				"<td><span class='admin'>관리자</span></td>"  +  
				"<td><a href='#' class='content'>Re : 산전마사지도 부분이 있나요??</a></td>" + 
				"<td>2016-04-04</td></tr>"
		$(".adminInquiry table tr:eq(" + inn + ")").after(tr);
	}

	// 공지사항 이벤트 게시판 제목 클릭시 세부내용 나옴.
	$('.adminInquiry td a.subject').click(function(){
		var noticeContentIndex = $(this).parent().parent().index()+1;
		var noticeContent = $('.adminInquiry table#noticebbs tbody tr:eq(' + noticeContentIndex + ')')
		$('.noticeContent').addClass("disnone");
		noticeContent.removeClass("disnone");
		setTop();
		return false;
	})



	var main05Status = false;

	$('body').mousewheel(function(e,delta){

		var scrollTop = $(window).scrollTop()

		if(delta==-1){
			var main01 = $('#section02 .article h2')
			var main01p = $('#section02 .article ul')
			var main04 = $('#section04 .article h2')
			var main05 = $('#section05 .article h2')
			var main06 = $('#section06 .article h2')

			if(isScrolledIntoView(main01)){
				$('#section02 .article h2').css({"animation-play-state":"running"})
				$('#section02 .article > p').css({"animation-play-state":"running"})
			}

			if(isScrolledIntoView(main01p)){
				$('#section02 .article ul > li > a').css({"animation-play-state":"running"})
			}

			if(isScrolledIntoView(main04)){
				$('#section04 .article h2').css({"animation-play-state":"running"})
			}

			if(isScrolledIntoView(main05)){
				$('#section05 .article h2').css({"animation-play-state":"running"})

				if (!main05Status) {
					// 메인 카운터 자동 올라가기
				    $('span.count').each(function(index) {
				       var eachnum = $(this).attr("data-count")
				       $(this).prop('Counter',0);
					   $(this).animate({
					      Counter: eachnum
					   }, {
					   	  interation: 1,
					      duration: 3000,
					      step: function(now) {
					         $(this).text(parseInt(now));
					      }
					   });
					});

					main05Status = true;
				}
			}

			// if(isScrolledIntoView(main06)){
			// 	$('#section06 .article h2').css({"animation-play-state":"running"})
			// 	$('#section06 .article p.first').css({"animation-play-state":"running"})
			// 	$('#section06 .article p.last').css({"animation-play-state":"running"})
			// 	$('#section06 .article a').css({"animation-play-state":"running"})
			// }

			// fix-menu show
			if(scrollTop > win_h-200){
				console.log(scrollTop)
				$('.fix-menu.m').removeClass("disnone")
			}
		}
		if(delta==1){
			if(scrollTop <= win_h){
				$('.fix-menu.m').addClass("disnone")
			}
		}

	})
	// 스크롤 다운 화살표 위아래 움직임

	setInterval(function(){
		$('#section01 a').animate({bottom:130},1300).animate({bottom:160},1300);
	},2700)
	
	
	// family site
	$('.family').click(function(){
		$('ul.familyList').toggleClass("disnone");
	})	


	// 관리사신청내역 지우기
	var parentName;
	$('.result a.close').click(function(){
		$('.popup').removeClass("disnone");
		$('.delAlert').removeClass("disnone");
		$('#loginSection05').addClass("disnone");
		parentName = $(this).parent().parent()
		return false;
	})
	$('.result1 a.close').click(function(){
		$('.popup').removeClass("disnone");
		$('.delAlert').removeClass("disnone");
		$('#loginSection05').addClass("disnone");
		parentName = $(this).parent()
		return false;
	})

	$('a.yes').click(function(){
		parentName.remove();
		$('.popup').addClass("disnone");
		$('.delAlert').addClass("disnone");
		$('#loginSection05').removeClass("disnone");
		setTop();		
		return false;
	})
	$('a.no').click(function(){
		$('.popup').addClass("disnone");
		$('.delAlert').addClass("disnone");
		$('#loginSection05').removeClass("disnone");
		return false;
	})
	$('a.del').click(function(){
		parentName = $(this).parent().parent().parent().parent()
		$('.popup').removeClass("disnone");
		$('.delAlert').removeClass("disnone");
		$('#loginSection05').addClass("disnone");
		return false;
	})

	// 회원가입 - 중복체크 시 경고문
	$('.reservationInput .uid > a').click(function(){
		// console.log("aaa");
		$('p.uidExclamation').removeClass("disnone");
		return false;
	})
	$('.phone a').click(function(){
		$('p.phoneExclamation').removeClass("disnone");
		return false;
	})
	$('.email a').click(function(){
		$('p.emailExclamation').removeClass("disnone");
		return false;
	})


	// lnb show/hide
	$('.navBottomWrap,.lnbwrap').mouseover(function(){
		$('.lnbwrap').stop().slideDown(100)
		$('.lnb').removeClass("disnone");
	}).mouseleave(function(){
		$('.lnbwrap').stop().slideUp(100)
		$('.lnb').stop().addClass("disnone");
	})	
	$('#navBottom > ul > li').mouseover(function(){
		$(this).addClass("nav-cur");
		$(this).children("a").css("color","#d0ae5e");
	}).mouseleave(function(){
		$(this).removeClass("nav-cur");
		$(this).children("a").css("color","#232323");
	})	

	// memberbar show/hide
	// $('.a.memberBtn').toggle(function(){
	// 	$('#navTop').stop().slideDown(500);
	// })

	// main function slide
	// n = 1;
	// var slide_w = $('#section01 > ul#slider li').width();
	// var slide_cnt = $('#section01 ul#slider li').size();
	// var sliderOn = 'img/ico_slider_on.png'
	// var sliderOff = 'img/ico_slider.png'
	// $('a#nextBtn').click(function(){
	// 	n++;
	// 	if(n==slide_cnt){
	// 		$('#section01 ul#slider').css({marginLeft:-slide_w * 1});
	// 		n=2
	// 	}
	// 	$('#section01 ul#slider').stop().animate({marginLeft:-slide_w * n});
		// navdot
		// $('#section01 ul#navdot img').attr({src:sliderOff});
		// $('#section01 ul#navdot li:eq(' + (n-1) + ') img').attr({src:sliderOn});
		// if(n==slide_cnt-1){
		// 	$('#section01 ul#navdot li:eq(0) img').attr({src:sliderOn});
		// }
	// 	return false;
	// })
	// $('a#prevBtn').click(function(){
	// 	n--;
	// 	if(n==-1){
	// 		$('#section01 ul#slider').css({marginLeft:-slide_w * (slide_cnt-2)});
	// 		n=slide_cnt-3;
	// 	}
	// 	$('#section01 ul#slider').stop().animate({marginLeft:-slide_w * n});
		// navdot
		// $('#section01 ul#navdot img').attr({src:sliderOff});
		// $('#section01 ul#navdot li:eq(' + (n-1) + ') img').attr({src:sliderOn});
	// 	return false;
	// })




    // memberBtn click
	flag=false;
    $('a.memberBtn').click(function(){
    	// console.log("aa")
    	if(flag){
    		$('.navTopWrap').stop().animate({height:40});
    		$('#navTop ul').removeClass("disnone");
    		flag=false;
    	}else{
    		$('.navTopWrap').stop().animate({height:0});
    		$('#navTop ul').addClass("disnone");
    		flag=true;	
    	}
    	return false;
    })

	
	// 고객후기 없애기
	$('#navBottom li.community .lnb li:eq(2)').addClass("disnone");
	$('#footerTop > ul > li:eq(3) > ul > li:eq(2)').addClass("disnone");

	// fix menu hover
	$('.fbutton').mouseenter(function(){
		console.log("aaaa")
		$('.tooltip',this).removeClass("disnone");
		$('.rightbar',this).removeClass("disnone");
	}).mouseleave(function(){
		$('.tooltip',this).addClass("disnone");
		$('.rightbar',this).addClass("disnone");
	})

	// 스크롤값에 따른 엘리먼트 변화
	function isScrolledIntoView(elem) {

	var docViewTop = $(window).scrollTop();
    	var docViewBottom = docViewTop + $(window).height();
    	var elemTop = $(elem).offset().top;
    	var elemBottom = elemTop + $(elem).height();
    	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
	} 


	$('.agree label').click(function(){
		$('.agree label .boxwrap').removeClass("checkboxoff").addClass("checkboxoff");
		$('.boxwrap',this).toggleClass("checkboxon");
	})		

	$('.agree:eq(4) label').click(function(){
		$('.agree label .boxwrap').removeClass("checkboxoff").addClass("checkboxoff");
		$('.boxwrap',this).toggleClass("checkboxon");
	})		

	// 가격인상 공지사항 2018.01.03 - 구충모
	var pricePopup = getCookie('pricePopup');
	
	if (pricePopup != 'N') {
		$('.priceup-popup').removeClass('hide');
	}
	$('.priceup-popup a.close').click(function(){
		setCookie('pricePopup', 'N', 1);
		$('.priceup-popup').addClass('disnone');
	})

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + escape(cvalue) + '; ' + expires + '; path=/;';
	}

	function getCookie(cname) {
		var name = cname + '=';
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return '';
	}
});
