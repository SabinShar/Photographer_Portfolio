// Working with jQuery - Day 6
//Note: Make sure you added the jQuery.min.js file into the "js" folder and you linked
//the same in the index.html file

//To keep track of the images one by one
let index = 0; 
//To store the count of total number of images available (we have 6 in the HTML Work Section)
const totalWorkItems = $(".work-item").length;

$(document).ready(function(){
    //nav toggle while shrinking the webpage
    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width()< 768){
            $(".header .nav").slideToggle(); 
        }
    })
})

//Make the header fixed now
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
    }
    else{
        $(".header").removeClass("fixed");
    }
})

// Set Lightbox -> Making the image expanded to the maximum after clicking on the top of it.
const wHeight = $(window).height();
$(".lightbox-img").css("max-height", wHeight+"px");

//Lightbox SlideShow Code
$(".work-item-inner").click(function(){
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightBoxSlideShow();
})

// To move forward or backward in the slideshow
$(".lightbox .prev").click(function(){
    if(index == 0){
        index = totalWorkItems - 1;
    }
    else{
        index--;
    }
    lightBoxSlideShow();
})

$(".lightbox .next").click(function(){
    if(index == totalWorkItems-1){
        index =0;
    }
    else{
        index++;
    }
    lightBoxSlideShow();
})

//CLOSING THE LIGHTBOX
$(".lightbox-close").close(function(){
    $(".lightbox").removeClass("open");
})

//Closing the Lightbox when clicked outside the image-box
$(".lightbox").click(function(event){
    if($(event.target).hasClass("lightbox")){
        $(this).removeClass("open");
    }
})

// Function Definition of lightBoxSlideShow()
function lightBoxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalWorkItems+ "/" + (index+1));
}