$(function(){
    var video = document.getElementById('video');
    $('.btn-start').on('tap', function(){
        $(this).hide();
        video.play();
    });
});