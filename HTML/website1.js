let trends = document.querySelectorAll(".trendscard");//to target trendscard
let card = document.querySelectorAll(".card");
let count=0;

trends.forEach(function(slide,index)//to iterate each card ,will take call back function jisme slide hogi
{
    slide.style.left = `${index * 100}%`//
})
 
function myFun(){
    trends.forEach(function(curVal)
    {
        curVal.style.transform= `translateX(-${count * 100}%)`//
    })
}

//set interval for the repeted task , slide bar will wiork automatic---------------------------------------------------
setInterval(function(){
    count++;
    if(count == trends.length)
    {
        count=0;//count will start again
    }
myFun()//this func is called after every two seconds
},2000)



// ------------------------------for each loop for card class------------------------------
card.forEach(function(cards){
    cards.addEventListener("click",function(){//when clicked a function will be performed
        document.querySelector("cardpage").style.display="block";
        document.querySelector(".main").style.display="none";//when a card is click only that details will be shown others will be none
        document.querySelector("#women").style.display="none";
        document.querySelector("#men").style.display="none";
        document.querySelector("#Trending").style.display="none";
        document.querySelector(".cardimg").appendChild(cards)//cards will be apended to the card page
    })
})