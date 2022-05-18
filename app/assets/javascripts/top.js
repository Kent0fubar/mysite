$(function () {
    function screenHandler() {
        $screenIndex = $('.selected').index('.select-menu ul li');
    }
        // when A-btn is clicked on the start screen
        $('.ab-top').on('click', function () {
            if ($('.title').hasClass('start')) {
                $('.title').fadeOut(60).fadeIn(60).fadeOut(60).fadeIn(60).fadeOut();
                $('.select-menu').delay(600).fadeIn(90);
                $('.menu1').addClass('selected');
                $('.title').removeClass('start');
                $(this).delay(600).queue(function() {
                    $(this).addClass('select-mode');
                });
            } else {

            }
        });
        
        // B-btn clicked
        $('.ab-left').on('click', function () {
            if ($('.ab-top').hasClass('select-mode')) {
            $('.ab-top').removeClass('select-mode');
            $('.menu').removeClass('selected');
            $('.select-menu').hide();
            $('.title').show();
            $('.title').addClass('start');
            } else if($('.introduction-screen').hasClass('view-mode')) {
                $('.game-screen').css({'background-color': '#8fbc8f', 'color': 'black'})
                $('.introduction-screen').css('display', 'none').removeClass('view-mode');
                $('.select-menu').css('display', 'block');
                $('.ab-top').addClass('select-mode');
                $('.menu1').addClass('selected');
            }
            else if($('.status-screen').hasClass('view-mode')) {
                $('.game-screen').css({'background-color': '#8fbc8f', 'color': 'black'})
                $('.status-screen').css('display', 'none').removeClass('view-mode');
                $('.select-menu').css('display', 'block');
                $('.ab-top').addClass('select-mode');
                $('.menu1').addClass('selected');
            } else if($('.setting-screen').hasClass('view-mode')) {
                $('.game-screen').css({'background-color': '#8fbc8f', 'color': 'black'})
                $('.setting-screen').css('display', 'none').removeClass('view-mode');
                $('.cross-right').removeClass('language-select-mode');
                $('.cross-left').removeClass('language-select-mode');
                $('.select-menu').css('display', 'block');
                $('.ab-top').addClass('select-mode');
                $('.menu1').addClass('selected');
            } else {

            }
        });

        // Cross-bottom
        $('.cross-bottom').on('click', function () {
            var $selectedMenu = $('.selected');
            var $selectedMenuIndex = $('.selected').index('.select-menu ul li');
            $selectedMenu.removeClass('selected');
            if ($selectedMenuIndex === 2) {
                $('.menu1').addClass('selected');
            } else if ($('.ab-top').hasClass('select-mode')) {
                $selectedMenu.next().addClass('selected');
            } else {

            }
        });
        
        // Cross-top
        $('.cross-top').on('click', function () {
            var $selectedMenu = $('.selected');
            var $selectedMenuIndex = $('.selected').index('.select-menu ul li');
            $selectedMenu.removeClass('selected');
            if($selectedMenuIndex === 0) {
                $('.menu3').addClass('selected');
            } else if ($('.ab-top').hasClass('select-mode')) {
                $selectedMenu.prev().addClass('selected');
            }
        });

        // Cross-right
        $('.cross-right').on('click', function() {
            if ($(this).hasClass('language-select-mode') && $('.language-en').hasClass('selected-language')) {
                $('.language-jp').addClass('selected-language');
                $('.language-en').removeClass('selected-language');
                $('.jp').show();
                $('.en').hide();
            } else {

            }
        });
        
        // Cross-left
        $('.cross-left').on('click', function() {
            if ($(this).hasClass('language-select-mode') && $('.language-jp').hasClass('selected-language')) {
                $('.language-en').addClass('selected-language');
                $('.language-jp').removeClass('selected-language');
                $('.en').show();
                $('.jp').hide();
            } else {

            }
        });

        //Processing at selection
        $('.ab-top').on('click', function() {
            var $selectedMenuIndex = $('.selected').index('.select-menu ul li');
            if ($(this).hasClass('select-mode') && $('.menu3').hasClass('selected')) {
                $(this).removeClass('select-mode');
                $('.menu').removeClass('selected');
                $('.title').removeClass('start');
                $('.game-screen').css({'background-color': 'black', 'color': '#fff'})
                $('.screen').eq($selectedMenuIndex).addClass('view-mode').css('display', 'block');
                $('.select-menu').css('display', 'none');
                $('.cross-right').addClass('language-select-mode');
                $('.cross-left').addClass('language-select-mode');
            } else if ($(this).hasClass('select-mode')) {
                $(this).removeClass('select-mode');
                $('.menu').removeClass('selected');
                $('.title').removeClass('start');
                $('.game-screen').css({'background-color': 'black', 'color': '#fff'})
                $('.screen').eq($selectedMenuIndex).addClass('view-mode').css('display', 'block');
                $('.select-menu').css('display', 'none');
            }
        });
    });
