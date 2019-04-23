$(document).ready(function() {
    // --- our code goes here ---
    console.log("document.ready works");

    //--- register event handler to the textarea element ---  
    //--- Note: $(this_is_a_jquery_object) ---
    let maxLength = 140;
    $(".tweet-input").on('input', function() {
        let count = $(this).val().length;
        let showCount = maxLength - count;
        //$('.counter', this.parentElement).text(showCount)
        //the second parameter: "look for .counter within "this.parentElement"
        if (showCount < 0) {
            $('.counter', this.parentElement).text(showCount).addClass("setRed");
            //add a class, don't modify css directly on jquery
        } else {
            $('.counter', this.parentElement).text(showCount).removeClass("setRed");
        }
        //OR $('.counter').text(showCount) (not recommended but works)
        //OR $(this).siblings('span').text(showCount) (also works)
    });
  });
