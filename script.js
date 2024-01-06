$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front End Developer", "App Developer", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Counter variable
    var downloadCount = localStorage.getItem("downloadCount") || 0;

    // Display download count
    $(".download-count").text(downloadCount);

    // CV download button click event
    $("#downloadCV").click(function () {
        // Increment download count
        downloadCount++;
        // Update UI
        $(".download-count").text(downloadCount);
        // Save count to local storage
        localStorage.setItem("downloadCount", downloadCount);
         // Show and hide the message
         $(".download-message").addClass("show");
         setTimeout(function () {
             $(".download-message").removeClass("show");
         }, 5000); // 5000 milliseconds (5 seconds)
    });

});