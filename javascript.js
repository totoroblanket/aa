window.onload = function () {
    var $box = $('.box');
    var $button = $('.button');
    
    $button.on('click', function(){
    $box.toggleClass('active');
    });
    
};

// ここに直接書いても、登録されないと実行できない
