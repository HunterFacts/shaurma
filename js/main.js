$(document).ready(function(){
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    $.ajax({
        url: "https://localhost:44354/ShaurmaList"
      }).done(function(data) {
        let cardConstructor = "";
        data.Data.forEach(element => {
            cardConstructor = cardConstructor 
            + "<div class='col s12 m4'>"
                +"<div class='card'>"
                    +"<div class='card-image'>"
                        +"<img src='img/shaurma1.jpg'>"
                        +"<span class='card-title'>"+element.Name+"</span>"
                    +"</div>"
                    +"<div class='card-content'>"
                        +"<p>"+element.Description+"</p>"
                    +"</div>"
                    +"<div class='card-action'>"
                        +"<a href='#'>Купить</a>"
                        +"<div class='price'>"+element.Price+"</div>"
                    +"</div>"
                +"</div>"
            +"</div>";
        });
        $('.menu-container').html(cardConstructor);
      });
});