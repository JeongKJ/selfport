
$(function(){
      let windoww = $(window).width();
      if(windoww>=1160){
        nav();
      }
      if(windoww<1159 && windoww>=980){
        nav();
      }
      if(windoww<979 && windoww>=580){
          mNav();
          mgallery();
      }
      if(windoww<579){
          mNav();
          mgallery();
      }
    })
function nav() {
    $(function(){
        $('nav li>a').on('click',function(){
            let str = $(this).attr('href');
            let nopee = $(str).offset().top;
            let top = $('header').innerHeight();
            $('body,html').animate({scrollTop:nopee-top},1000);
        })
    })

    $(function () {
        $('.all>figure').on('click', function () {
            $('#modal').css('display', 'block');
        })
    })
}
// 모바일 네비게이션
function mNav(){
    $(function(){
        $('nav li>a').on('click',function(){
            let str = $(this).attr('href');
            let nopee = $(str).offset().top;
            let top = $('header').innerHeight();
            $('body,html').animate({scrollTop:nopee-top},500);
        })
    })
    $('.btn').on('click',function(){
        $('nav').animate({left:0},function(){
            $('.btn').hide();
        })
            $('nav>li>a').on('click',function(){
                let str = $(this).attr('href');
                let nopee = $(str).offset().top;
                let top = $('header').innerHeight();
                let navWidth = $('nav').width();
                $('body,html').animate({scrollTop:nopee-top})
                    $('nav').css({left:'-'+navWidth+'px'});
                    $('.btn').show();
                });
            })
    $('.close_btn').on('click', function () {
        let navWidth = $('nav').width();
        $('nav').css({ left: '-' + navWidth + 'px' });
        $('.btn').show();
       }) 
       
}

function mgallery() {
    let slidewidth = $('#gallery>#show>.all>figure').width();
    $('#gallery>#show>.all>figure:last').prependTo('#show>.all');
    $('#show>.all').css({ marginLeft: '-' + slidewidth + 'px' });


    $('div#gallery>p.prev').on('click', function () {
        $('#show>.all').animate({ marginLeft: '+=' + slidewidth + 'px' }, 500,
            function () {
                $('#show>.all>figure:last').prependTo('#show>.all');
                $('#show>.all').css({ marginLeft: '-' + slidewidth + 'px' });
            })
    })

    $('div#gallery>p.next').on('click', function () {
        $('#show>.all').animate({ marginLeft: '-=' + slidewidth + 'px' }, 500,
            function () {
                $('#show>.all>figure:first').appendTo('#show>.all');
                $('#show>.all').css({ marginLeft: '-' + slidewidth + 'px' });
            })
    })
}