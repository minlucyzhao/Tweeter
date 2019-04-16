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

    // $(".tweet-input").on('input', function() {
    //     console.log($(this)); //Recognizes when you click away from section, the input event fires when the value of an <input>, <select>, or <textarea> element has been changed. 
    // });

    // $(".tweet-input").on('change', function() {
    //     console.log("change"); //Recognizes once you type in the textarea and clicks away
    // });

    // $(".tweet-input").on('keyup', function() {
    //     console.log("keyup"); //Recognizes when you release the key
    // });

    // $(".tweet-input").on('keydown', function() {
    //     console.log("keydown"); //Recognizes when you press down the key
    // });

    // $(".tweet-input").on('blur', function() {
    //     console.log("blur"); //Recognizes when you click away from section
    // });

    // $(".tweet-input").on('keypress', function() {
    //     console.log("keypress"); //ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.)
    // });
    
  });
