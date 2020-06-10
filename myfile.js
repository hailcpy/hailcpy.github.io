
i=0;
j=1;
endReached=1
// stacki = []
// stackj = []
document.querySelector('.next').addEventListener('click',function(){
    uncheck()
    //sendData
    if(i>=4)
    {
        endReached=1;
        submitform()
    }
    else
    {
        if(i==117&&j>=120)
        {
            document.querySelector('.next').textContent='Submit';
        }
        if(j>=120)
        {
            // stacki.append(i)
            // stackj.append(j)
            i+=1;
            j=i+1;
        }
        document.querySelector('.image1').src = 'stim'+i+'.png';
        document.querySelector('.image2').src = 'stim'+j+'.png';
        // stackj.append(j)
        j+=1;
    }
})

document.querySelector('.Submit').addEventListener('click',function(){
    d
})

function submitform(){
    var a = document.getElementById('.next');
    a.parentNode.removeChild(a)
    var b = document.getElementById('.image1')
    b.parentNode.removeChild(b)
    var c = document.getElementById('.image2')
    c.parentNode.removeChild(c)
    document.getElementById('.heading').innerHTML = "Thank you for taking the trials"
}

function uncheck(){
    var k =1
    for(k = 1;k<4;k++){
        document.getElementById('similar'+k).checked = false;
        document.getElementById('dissimilar'+k).checked = false;
    }
};



function sendData(){

};

function submitform(){

};

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


// function statechange(element){
//     console.log(element)
//     document.getElementById(element).style.backgroundColor = "blue";
// };
// 
// 
//     // var current = document.getElementsByClassName("active");
//     console.log(this.className[1])
//     // if(current)
//     // {
//     //     current[0].className = current[0].className.replace(" active", "");
//     // }
//     this.className += "active";
//   });
// }