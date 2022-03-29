$(document).ready(function(){
    $('.content').show();

    $("#man-btn , #woman-btn").click(function(){
      $('#step1').show();
      $('.main').hide(2000);
    });

    $("#radioApple , #radioBanana , radioOrange").click(function(){
      $('#step2').show(5000);
      $('#step1').hide(2000);
    });

    $("#radioApples , #radioBananas , radioOranges").click(function(){
        $('#thanks').show(5000);
        $('#step2').hide(2000);
      });
});