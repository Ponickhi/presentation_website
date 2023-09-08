
  $(document).ready(function() {

    //function for making spoilers each of which shots down when the other one is open
    $('.block_title').click(function(event) {
      if($('.block').hasClass('one')) {
        $('.block_title').not($(this)).removeClass('active');
        $('.block_text').not($(this).next()).slideUp(100);
      }
      $(this).toggleClass('active').next().slideToggle(100);
    });



    //function for card slider, which slides only by pressing on buttons and scrolls only 1 card width
    const productContainers = $('.five_row');
    const firstCont = $('.card_container');
    const nxtBtn = $('.nxt_button');
    const preBtn = $('.pre_button');

    firstCont.each((i, item) => {
    let firstContDimensions = item.getBoundingClientRect();
    let firstContWidth = firstContDimensions.width;

    $(nxtBtn[i]).on('click', () => {
      $(productContainers[i]).scrollLeft($(productContainers[i]).scrollLeft() + firstContWidth + 20);
    });

    $(preBtn[i]).on('click', () => {
      $(productContainers[i]).scrollLeft($(productContainers[i]).scrollLeft() - firstContWidth - 20);
    });

    });
    
    //function that shows button to return the page back to top
    function backToTop() {
      let button = $('.back-to-top');

      $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 800) {
          button.fadeIn();
        } else {
          button.fadeOut();
        }
      });
      button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000)
      })
    }
    backToTop();


    //function for smooth scrolling for anchers (always add scroll behavior: smooth in CSS)
    $("a").click(function(event) {
      event.preventDefault();
      var blockID = $(this).attr("href");
      $('html, body').animate({
          scrollTop: $(blockID).offset().top
      }, 1000);
  });

  }); 
  

   

   