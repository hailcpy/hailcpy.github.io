
i=0;
j=1;
endReached=1


// document.querySelector('.Submit').addEventListener('click',function(){
    
// })

// function submitform(){
//     var a = document.getElementById('.next');
//     a.parentNode.removeChild(a)
//     var b = document.getElementById('.image1')
//     b.parentNode.removeChild(b)
//     var c = document.getElementById('.image2')
//     c.parentNode.removeChild(c)
//     document.getElementById('.heading').innerHTML = "Thank you for taking the trials"
// }

function uncheck(){
    var k =1
    for(k = 1;k<4;k++){
        $("#similar"+k).checked = false;
        $('#dissimilar'+k).checked = false;
    }
};



function sendData(){

};

function submitform(){

};

// Variable to hold request
var request;
// Bind to the submit event of our form
$("#foo").submit(function(event){

    // uncheck()
    //sendData
    if(i>=118)
    {
        endReached=1;
        // submitform()
    }
    else
    {
        if(i==117&&j>=120)
        {
            $(".next").textContent = 'Submit'
        }
        if(j>=120)
        {
            // stacki.append(i)
            // stackj.append(j)
            i+=1;
            j=i+1;
        }
        $(".image1").attr("src", '/animals/stim'+i+'.png');
        $(".image2").attr("src", '/animals/stim'+j+'.png');
        // stackj.append(j)
        j+=1;
    }

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

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

    // // Callback handler that will be called on success
    // request.done(function (response, textStatus, jqXHR){
    //     // Log a message to the console
    //     console.log("Hooray, it worked!");
    //     console.log(response);
    //     console.log(textStatus);
    //     console.log(jqXHR);
    // });

    // // Callback handler that will be called on failure
    // request.fail(function (jqXHR, textStatus, errorThrown){
    //     // Log the error to the console
    //     console.error(
    //         "The following error occurred: "+
    //         textStatus, errorThrown
    //     );
    // });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});

// document.querySelector('.back').addEventListener('click',function(){
//     document.querySelector('.image1').src = 'stim'+stacki[-1]+'.png';
//     document.querySelector('.image2').src = 'stim'+stackj[-1]+'.png';
//     stackj.remove;

// })

// document.querySelector('.similar').addEventListener('click',featureSelected())
// document.querySelector('.dissimilar').addEventListener('click',featureSelected())

// var header = document.getElementById("column2");
// var btns = header.getElementsByClassName("feature1");


// function featureSelected(){
    
// };


