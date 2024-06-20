$(document).ready(function(){
    $("#colors .color").click(function(){
        var dataColor = $(this).attr('data-color');
        switch (dataColor){
            case 'grayColor':
                $(".carousel-item").removeClass("active");
                $(".grayColor").addClass("active");
                $(".color").removeClass("activeColor");
                $(".gray").addClass("activeColor");
            break;
            case 'yellowColor':
                $(".carousel-item").removeClass("active");
                $(".yellowColor").addClass("active");
                $(".color").removeClass("activeColor");
                $(".yellow").addClass("activeColor");
            break;
            case 'coralColor':
                $(".carousel-item").removeClass("active");
                $(".coralColor").addClass("active");
                $(".color").removeClass("activeColor");
                $(".coral").addClass("activeColor");
            break;
            default:
                break;
        }
    })
})