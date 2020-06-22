var i;
var j;
i = Math.floor(Math.random()*120)
j = Math.floor(Math.random()*120);
$(".image1").attr("src", 'animals/stim'+i+'.png');
$(".image2").attr("src", 'animals/stim'+j+'.png');

function uncheck(){
    var k =1
    for(k = 1;k<9;k++){
        $('#'+k).prop("value","5");
		$('#'+k).tooltip('hide');
		$('#checkbox'+k).prop("checked", false);
    }
};


$('#1').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox1').prop("checked", false);
});
$('#2').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox2').prop("checked", false);
});
$('#3').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox3').prop("checked", false);
});
$('#4').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox4').prop("checked", false);
});
$('#5').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox15').prop("checked", false);
});
$('#6').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox6').prop("checked", false);
});
$('#7').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox7').prop("checked", false);
});
$('#8').on('input change' ,function (){
	$(this).tooltip('show');
	$('#checkbox8').prop("checked", false);
});

$('#checkbox1').change(function (){
	$('#1').prop("value", "5");
	$('#1').tooltip('hide');
});
$('#checkbox2').change(function (){
	$('#2').prop("value", "5");
	$('#2').tooltip('hide');
});
$('#checkbox3').change(function (){
	$('#3').prop("value", "5");
	$('#3').tooltip('hide');
});
$('#checkbox4').change(function (){
	$('#4').prop("value", "5");
	$('#4').tooltip('hide');
});
$('#checkbox5').change(function (){
	$('#5').prop("value", "5");
	$('#5').tooltip('hide');
});
$('#checkbox6').change(function (){
	$('#6').prop("value", "5");
	$('#6').tooltip('hide');
});
$('#checkbox7').change(function (){
	$('#7').prop("value", "5");
	$('#7').tooltip('hide');
});
$('#checkbox8').change(function (){
	$('#8').prop("value", "5");
	$('#8').tooltip('hide');
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