$(function() {
    /*明天入住，后天退房*/
    var today = new Date().getTime();
    var day2 = new Date(today + 86400000);
    var day3 = new Date(today + 2 * 86400000);

    var tomorrowMonth = day2.getMonth() + 1;
    var tomorrowDate = day2.getDate();

    var totomorrowMonth = day3.getMonth() + 1;
    var totomorrowDate = day3.getDate();
    var pad = function(num) {
        return num < 10 ? '0' + num : num;
    }

    var str = pad(tomorrowMonth) + '月' + pad(tomorrowDate) + '日入住，' + pad(totomorrowMonth) + '月' + pad(totomorrowDate) + '日退房';
    $('#RoomDate')[0].innerHTML = str;

    $("#PhotoSlides").slides({
        preload: false,
        preloadImage: '../assets/css/images/loading.gif',
        play: 4000
    });

    $('#OpenMap').fancybox({
        'onStart': function() {
            $('#BDMapFrame').attr('src', 'map.html');
        }
    });

    $('#PhotoSlides img').each(function(index, item) {
        var src = $(item).attr('file');
        $(item).attr('src', src);
    });
});


