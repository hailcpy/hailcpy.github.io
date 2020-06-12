

var i;
var j;
i=0;
j=1;

function uncheck(){
    var k =1
    for(k = 1;k<9;k++){
        $('#'+k).prop("value","2.5");
    }
};

$("#foo").submit(function(event){
    var $form = $(this);
    submitform($form);
    i = Math.floor(Math.random()*120)
    j = Math.floor(Math.random()*120);
    while(i==j){
    i = Math.floor(Math.random()*120)
    j = Math.floor(Math.random()*120);
    }
    console.log(i);
    console.log(j);
    uncheck();
    $(".image1").attr("src","");
    $(".image2").attr("src","");
    $(".image1").attr("src", 'animals/stim'+i+'.png');
    $(".image2").attr("src", 'animals/stim'+j+'.png');
});

var request;
function submitform($form){
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    console.log($form)
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    
    var serializedData = 'image1='+i+'&';
    serializedData += 'image2='+j+'&';
    // Serialize the data in the form
    serializedData += $form.serialize();
    console.log(serializedData)
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwRPwCF3evi73rufIP8MBcpBLrmi1OcRNGSbZBhu5cRqeLIVw/exec",
        type: "post",
        data: serializedData
    });

    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
};

$(".next2").click(function(){
    var $form = $("#foo");
    submitform($form);
    // $("body").css("background-image", "url(" + "back.jpg" + ")")
    $("body").replaceWith("<p style  = 'text-align:center; font-size: 50px;'>Thank you for taking part in the experiment</p>");
    
})

// Variable to hold request


// Bind to the submit event of our form

