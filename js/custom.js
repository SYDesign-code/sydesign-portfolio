$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});

//ハンバーガーメニュー

$(".humbergerBtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    // $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    if ($(this).hasClass('active')) {
        $("#g-nav").fadeIn(500);
    } else {
        $("#g-nav").fadeOut(500);
    }
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".humbergerBtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//スクロールのモーション

$(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
  $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
      $(this).addClass('act');              /* 「active」のクラスを付与 */
    }
  });
});

 /* 固定headerをスクロールすると背景色が変わる実装 */

jQuery(window).on('scroll', function () {
    if (jQuery('.header').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    }else{
        jQuery('.header').removeClass('change-color');
    }
    
    if (jQuery('.header_top').height() < jQuery(this).scrollTop()) {
         jQuery('.header_top').addClass('change-color_top');
        }else{
            jQuery('.header_top').removeClass('change-color_top');
        }
});

