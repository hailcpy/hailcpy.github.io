var i;
var j;
i = Math.floor(Math.random()*120)
j = Math.floor(Math.random()*120);
$(".image1").attr("src", 'animals/stim'+i+'.png');
$(".image2").attr("src", 'animals/stim'+j+'.png');

function uncheck(){
    var k =1
    for(k = 1;k<9;k++){
        $('#'+k).prop("value","2.5");
        $('#rangetext'+k).text(rangeValues[$('#'+k).val()]);
    }
};
var rangeValues =
{
    "1": "very dissimilar",
    "2": "dissimilar",
    "3": "no idea",
    "4": "similar",
    "5": "very similar",
};

$('#1').on('input change' ,function (){
    $('#rangetext1').text(rangeValues[$(this).val()]);
});
$('#2').on('input change' ,function (){
    $('#rangetext2').text(rangeValues[$(this).val()]);
});
$('#3').on('input change' ,function (){
    $('#rangetext3').text(rangeValues[$(this).val()]);
});
$('#4').on('input change' ,function (){
    $('#rangetext4').text(rangeValues[$(this).val()]);
});
$('#5').on('input change' ,function (){
    $('#rangetext5').text(rangeValues[$(this).val()]);
});
$('#6').on('input change' ,function (){
    $('#rangetext6').text(rangeValues[$(this).val()]);
});
$('#7').on('input change' ,function (){
    $('#rangetext7').text(rangeValues[$(this).val()]);
});
$('#8').on('input change' ,function (){
    $('#rangetext8').text(rangeValues[$(this).val()]);
});

$("#foo").submit(function(event){
    var $form = $(this);
    submitform($form);
    i = Math.floor(Math.random()*120)
    j = Math.floor(Math.random()*120);
    while(i==j){
    i = Math.floor(Math.random()*120)
    j = Math.floor(Math.random()*120);
    }
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
    $("body").replaceWith("<p style  = 'text-align:center; font-size: 50px;'>Thank you for taking part in the experiment</p>");
    
})
