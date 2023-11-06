$(function () {
    $('html').addClass('wf-active');
    const window_width = $(window).width();
    const place_max = $('.nav a').length;
    const place_id = location.search.replace('?id=', '');
    const change_time = 1500;
    let thumbnail_postion = 0;
    let thumbnail_count = 1;

    function mySlide(type) {
        if (type === 'prev') {
            thumbnail_postion -= window_width;
            thumbnail_count--;
            if (thumbnail_count === 1) {
                $('[data-slide="prev"]').fadeOut();
            }
        }
        if (type === 'next') {
            thumbnail_postion += window_width;
            thumbnail_count++;
            if (thumbnail_count <= place_max) {
                $('[data-slide="prev"]').fadeIn();
            } else {
                thumbnail_postion = 0;
                thumbnail_count = 1;
                $('[data-slide="prev"]').fadeOut();
            }
        }
        $('.main').animate({
            scrollLeft: thumbnail_postion
        });
        $('.nav a').removeClass('is-active');
        $('.nav a').eq(thumbnail_count - 1).addClass('is-active');
    }
    //スマホ時のみ適応
    if (window.innerWidth <= 768) {
        $('[data-slide]').on('click', function () {
            let slide_type = $(this).attr('data-slide');
            mySlide(slide_type);
        });
    } else {
        if ($('body').attr('id') === 'page-index') {
            setInterval(function () {
                const random = Math.floor(Math.random() * place_max);
                $('.thumbnail li').removeClass('is-active');
                $('.thumbnail li').eq(random).addClass('is-active');
            }, change_time);
        }
    }
    //下層ページのみ適応
    if ($('body').attr('id') === 'page-place') {
        $('.place-img img').attr('src', 'img/place/' + place_id + '.jpg');
        let src = $("#src").attr('src');
        if (src === 'img/place/2.jpg') {
            $('.place-img img').addClass('sp');
        } else if (src === 'img/place/1.jpg' || src === 'img/place/7.jpg') {
            $('.place-img img').addClass('sp2');
        };

        $('[data-place]').each(function (index, el) {
            let place_key = $(this).attr('data-place');

            if ($(this)[0].tagName == 'A') {
                $(this).attr('href', place[place_id - 1][place_key]);
            } else {
                $(this).text(place[place_id - 1][place_key]);
            }
        });
        setTimeout(function () {
            $('.loader-wrap').remove();
        }, 1000)
    }


    $(function () {
        $('html').addClass('wf-active');
        const window_width = $(window).width();
        const place_max = $('.nav a').length;
        const place_id = location.search.replace('?id=', '');
        const change_time = 1500;
        let thumbnail_postion = 0;
        let thumbnail_count = 1;

        function mySlide(type) {
            if (type === 'prev') {
                thumbnail_postion -= window_width;
                thumbnail_count--;
                if (thumbnail_count === 1) {
                    $('[data-slide="prev"]').fadeOut();
                }
            }
            if (type === 'next') {
                thumbnail_postion += window_width;
                thumbnail_count++;
                if (thumbnail_count <= place_max) {
                    $('[data-slide="prev"]').fadeIn();
                } else {
                    thumbnail_postion = 0;
                    thumbnail_count = 1;
                    $('[data-slide="prev"]').fadeOut();
                }
            }
            $('.main').animate({
                scrollLeft: thumbnail_postion
            });
            $('.nav a').removeClass('is-active');
            $('.nav a').eq(thumbnail_count - 1).addClass('is-active');
        }
        //スマホ時のみ適応
        if (window.innerWidth <= 768) {
            $('[data-slide]').on('click', function () {
                let slide_type = $(this).attr('data-slide');
                mySlide(slide_type);
            });
        } else {
            if ($('body').attr('id') === 'page-index') {
                setInterval(function () {
                    const random = Math.floor(Math.random() * place_max);
                    $('.thumbnail li').removeClass('is-active');
                    $('.thumbnail li').eq(random).addClass('is-active');
                }, change_time);
            }
        }
        //下層ページのみ適応
        if ($('body').attr('id') === 'page-place') {
            $('.place-img img').attr('src', 'img/place/' + place_id + '.jpg');
            let src = $("#src").attr('src');
            if (src === 'img/place/2.jpg') {
                $('.place-img img').addClass('sp');
            } else if (src === 'img/place/1.jpg' || src === 'img/place/7.jpg') {
                $('.place-img img').addClass('sp2');
            };

            $('[data-place]').each(function (index, el) {
                let place_key = $(this).attr('data-place');

                if ($(this)[0].tagName == 'A') {
                    $(this).attr('href', place[place_id - 1][place_key]);
                } else {
                    $(this).text(place[place_id - 1][place_key]);
                }
            });
            setTimeout(function () {
                $('.loader-wrap').remove();
            }, 1000)
        }
    });

    // 画面リサイズした際、768px以下の時もしくは、769px以上でliにis-activeない場合画面をリロードする
    $(window).resize(function () {
        if ((window.matchMedia('(min-width:769px)').matches && !$('li').hasClass('is-active')) || window.matchMedia('(max-width:768px)').matches) {
            if ($('#page-index').length) {
                setTimeout(function () {
                    location.reload();
                }, 300);
            }
        }
    });
});




