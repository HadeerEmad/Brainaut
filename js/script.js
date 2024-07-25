$(window).on('load', function() {
    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
        $('body').css({ 'overflow-y': 'auto' });
        animateBox();
    });

    let projectsSlider = $('.roadmap.owl-carousel');
    if(projectsSlider.length) {
        projectsSlider.owlCarousel({
            responsive:{
                0:{
                    items:1
                },
                560:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:3
                },
                1200:{
                    items:6
                }
            },
            margin: 10,
            nav: true,
            loop: false,
            dots: false
        });
    }
});


let tradeValue = 100;

$(function() {

    // MENU TOGGLE
    $('.mirror').click(function() {
        $('.navbar-collapse').removeClass('show');
    });

    windowHeight();

    $(window).scroll(function() {
        animateBox();
        windowHeight();

        if($(this).scrollTop() > 100) {
            $('#mainNavbar').addClass('scrolled');
        }else {
            $('#mainNavbar').removeClass('scrolled');
        }
    });

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();


    // SMOOTH SCROLL
    $('.smooth-a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 75
        }, 1000);
        return false;
    });


    if($('#counter').length) {
        var a = 0;
        $(window).scroll(function () {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({countNum: $this.text()}).animate({
                        countNum: countTo
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
                });
                a = 1;
            }
        });
    }


    // PRESALE

    let startDate = 1620086400,
        phaseI = startDate + 604800,
        phaseII = startDate + (604800 * 2),
        phaseIII = startDate + (604800 * 3),
        nowDate = new Date().getTime() / 1000;

    if (startDate > nowDate) {
        countDown(startDate);
        $('#preslaeText').html('Presale of XBRN Starting In');
    } else if (phaseI > nowDate) {
        countDown(phaseI);
        $('#preslaeText').html('Phase I of XBRN Pre-sale Is Live');
    }  else if (phaseII > nowDate) {
        countDown(phaseII);
        $('#preslaeText').html('Phase II of XBRN Pre-sale Is Live');
    }  else if (phaseIII > nowDate) {
        countDown(phaseIII);
        $('#preslaeText').html('Phase III of XBRN Pre-sale Is Live');
    } else {
        $('#preslaeText').html('Presale of XBRN Ended');
    }


    // FAQ
    $('.faq-body').slideUp(0);
    $('.faq-head.active').next('.faq-body').slideDown(0);
    $('.faq-head').click(function () {
        $('.faq-body').slideUp();
        $('.faq-head').removeClass('active');
        if($(this).next('.faq-body').css('display') === 'none') {
            $(this).next('.faq-body').slideDown('slow');
            $(this).addClass('active');
        }else {
            $(this).next('.faq-body').slideUp('slow');
            $(this).removeClass('active');
        }
    });

    //////////////////////////////////////////////////////////////////////

    // INDEX PAGE

    $('#connectMM').click(function (e) {
        e.preventDefault();
        alert('You clicked connect MetaMask');
    });

    $('#connectTW').click(function (e) {
        e.preventDefault();
        alert('You clicked connect TrustWallet');
    });


    ///////////////////////////

    // BUY FORM

    let buyRate = 1000;

    $('#bnbInput').keyup(function () {
        if($(this).val() > 0 && $(this).val() !== '') {
            $('#xbrnInput').val($(this).val() * buyRate);
            $('#buyBtn').removeAttr('disabled');
        }else {
            $('#xbrnInput').val('');
            $('#buyBtn').attr('disabled', '');
        }
    });

    $('#xbrnInput').keyup(function () {
        if($(this).val() > 0 && $(this).val() !== '') {
            $('#bnbInput').val($(this).val() / buyRate);
            $('#buyBtn').removeAttr('disabled');
        }else {
            $('#bnbInput').val('');
            $('#buyBtn').attr('disabled', '');
        }
    });

    $('#buyBtn').click(function (e) {
        e.preventDefault();
        alert('You entered vales >> bnb: ' + $('#bnbInput').val() + ' ,xbrn: ' + $('#xbrnInput').val());

        $('#modalBeforeConfirm').removeClass('d-none');
        $('#modalAfterConfirm').addClass('d-none');
        $('#confirmModal').modal('show');

        setTimeout(function () {
            $('#modalAfterConfirm').removeClass('d-none');
            $('#modalBeforeConfirm').addClass('d-none');
        }, 2000);
    });


    ///////////////////////////


    $('#brnValue').attr('data-count', '10000');
    $('#brnSupply').attr('data-count', '10000');
    $('#brnMarketcap').attr('data-count', '10000');
    $('#brnBurned').attr('data-count', '10000');
    $('#xbrnValue').attr('data-count', '10000');
    $('#xbrnSupply').attr('data-count', '10000');
    $('#xbrnMarketcap').attr('data-count', '10000');


    ////////////////////////////////////////////////////////////////

    // POOL PAGE

    $('.enableBtn').slideUp(0);
    $('.stakeLPBtn').slideUp(0);

    $('.unlockWalletBtn').click(function (e) {
        e.preventDefault();
        alert('You clicked Unlock Wallet');
        $(this).slideUp();
        $(this).parent().find('.enableBtn').slideDown();
    });

    $('.enableBtn').click(function (e) {
        e.preventDefault();
        alert('You clicked Enable');
        $(this).slideUp();
        $(this).parent().find('.stakeLPBtn').slideDown();
    });

    $('.stakeLPBtn').click(function (e) {
        e.preventDefault();
        alert('You clicked Stake LP');
    });

    $('.harvestBtn').click(function (e) {
        e.preventDefault();
        alert('You clicked Harvest');
    });


    ///////////////////////////////////////////

    // TRADE PAGE

    $('#tradeOptions').slideUp(0);
    $('#viewSettings').click(function (e) {
        e.preventDefault();
        $('#tradeFormContent').slideUp();
        $('#tradeOptions').slideDown();
    });
    $('#optionsBack').click(function (e) {
        e.preventDefault();
        $('#tradeFormContent').slideDown();
        $('#tradeOptions').slideUp();
    });


    $('#availableBalance').html(0);
    $('#tradeValue').html(tradeValue);

    $('#paySelect').change(function () {
        $('#firstSymbolImage').attr('src', 'images/' + $(this).val().toLowerCase() + '.png')
        $('#firstSymbol').html($(this).val().toUpperCase());
        $('#symbolPay').html($(this).val().toUpperCase());
    });
    $('#receiveSelect').change(function () {
        $('#secondSymbolImage').attr('src', 'images/' + $(this).val().toLowerCase() + '.png')
        $('#secondSymbol').html($(this).val().toUpperCase());
        $('#symbolReceive').html($(this).val().toUpperCase());
        checkSymbol($(this).val());
    });

    let x = 0
    $('#tradeReverse').click(function (e) {
        e.preventDefault();
        let firstVal = $('#paySelect').val(),
        secondVal = $('#receiveSelect').val();

        if(x === 0) {
            $('#paySelect').html('<option value="bnb" data-content="<img src=\'images/bnb.png\' class=\'mr-1\' alt=\'\'> BNB">BNB</option>\n' +
                                        '<option value="usdt" data-content="<img src=\'images/usdt.png\' class=\'mr-1\' alt=\'\'> USDT">USDT</option>\n' +
                                        '<option value="busd" data-content="<img src=\'images/busd.png\' class=\'mr-1\' alt=\'\'> BUSD">BUSD</option>');
            $('#receiveSelect').html('<option value="brn" data-content="<img src=\'images/brn.png\' class=\'mr-1\' alt=\'\'> BRN">BRN</option>\n' +
                                            '<option value="xbrn" data-content="<img src=\'images/xbrn.png\' class=\'mr-1\' alt=\'\'> XBRN">XBRN</option>');
            x = 1;
        }else {
            $('#receiveSelect').html('<option value="bnb" data-content="<img src=\'images/bnb.png\' class=\'mr-1\' alt=\'\'> BNB">BNB</option>\n' +
                '<option value="usdt" data-content="<img src=\'images/usdt.png\' class=\'mr-1\' alt=\'\'> USDT">USDT</option>\n' +
                '<option value="busd" data-content="<img src=\'images/busd.png\' class=\'mr-1\' alt=\'\'> BUSD">BUSD</option>');
            $('#paySelect').html('<option value="brn" data-content="<img src=\'images/brn.png\' class=\'mr-1\' alt=\'\'> BRN">BRN</option>\n' +
                '<option value="xbrn" data-content="<img src=\'images/xbrn.png\' class=\'mr-1\' alt=\'\'> XBRN">XBRN</option>');
            x = 0;
        }

        $('.selectpicker').selectpicker('refresh');
        $('#paySelect').selectpicker('val', secondVal).change();
        $('#receiveSelect').selectpicker('val', firstVal).change();
    });

    $('#payInput').on('keyup change', function () {
        if($(this).val() > 0 && $(this).val() !== '') {
            $('#receiveInput').val($(this).val() * tradeValue);
            $('#confirmOrder').removeAttr('disabled');
        }else {
            $('#receiveInput').val('0');
            $('#confirmOrder').attr('disabled', '');
        }
    });

    $('#receiveInput').on('keyup change', function () {
        if($(this).val() > 0 && $(this).val() !== '') {
            $('#payInput').val($(this).val() / tradeValue);
            $('#confirmOrder').removeAttr('disabled');
        }else {
            $('#payInput').val('0');
            $('#confirmOrder').attr('disabled', '');
        }
    });


    $('input[name="slippage"]').change(function () {
        $('#slippagePercent').val('').removeClass('active');
    });
    $('#slippagePercent').keyup(function () {
        $(this).addClass('active');
        $('input[name="slippage"]').removeAttr('checked');
        if($(this).val() === ''){
            $(this).val(5);
        }
    });



    $('#confirmOrder').click(function (e) {
        e.preventDefault();
        let formVals = [];
        formVals.push($('#payInput').val(), $('#paySelect').val(), $('#receiveInput').val(), $('#receiveSelect').val());
        if($('#slippagePercent').val() !== ''){
            formVals.push($('#slippagePercent').val());
        }else {
            formVals.push($('input[name="slippage"]:checked').val());
        }
        formVals.push($('#deadline').val());
        alert('You Entered Values: ' + formVals);
    });

});


function checkSymbol(symbol) {
    switch(symbol.toLowerCase()) {
        case 'brn':
            tradeValue = 100;
            $('#tradeValue').html(tradeValue);
            break;
        case 'xbrn':
            tradeValue = 500;
            $('#tradeValue').html(tradeValue);
            break;
        case 'bnb':
            tradeValue = 0.2;
            $('#tradeValue').html(tradeValue);
            break;
        case 'usdt':
            tradeValue = 0.1;
            $('#tradeValue').html(tradeValue);
            break;
        case 'busd':
            tradeValue = 0.5;
            $('#tradeValue').html(tradeValue);
            break;
    }
    $('#payInput').change();
}


function windowHeight() {
    $('.win-height').css({ 'min-height': $(window).height() });
}

function animateBox() {
    let scrollVar = $(document).scrollTop();

    $('.animate-box').each(function() {
        let boxVal = $(this).offset().top - $(window).height() + 50;

        if (scrollVar > boxVal) {
            if (!$(this).hasClass('animated')) {

                if ($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                } else if ($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                } else {
                    $(this).addClass('animated fadeInUp');
                }

            }
        }
    });
}



// COUNTDOWN
function countDown(dateVal) {
    $('.countdown').each(function() {
        let thisCount = $(this);

        let x = setInterval(function() {

            let distance = parseInt(dateVal) - new Date().getTime() / 1000;

            let days = Math.floor(distance / (3600 * 24));
            let hours = Math.floor(distance % (3600 * 24) / 3600);
            let minutes = Math.floor(distance % 3600 / 60);
            let seconds = Math.floor(distance % 60);

            if (days > 0)
                thisCount.find('.counter-holder .day').html(days);
            else
                thisCount.find('.counter-holder .day').html('00');
            if (hours > 0)
                thisCount.find('.counter-holder .hours').html(hours);
            else
                thisCount.find('.counter-holder .hours').html('00');
            if (minutes > 0)
                thisCount.find('.counter-holder .minutes').html(minutes);
            else
                thisCount.find('.counter-holder .minutes').html('00');
            if (seconds > 0)
                thisCount.find('.counter-holder .seconds').html(seconds);
            else
                thisCount.find('.counter-holder .seconds').html('00');

            if (distance < 0) {
                clearInterval(x);
                $('#connectWallet').removeClass('d-none');
            }
        }, 1000);
    });
}