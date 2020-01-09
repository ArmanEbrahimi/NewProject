// getting reffrences to buttoms and image elements
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var images = document.getElementById("image");
//creating path for images
var imageCollection = ["https://image.shutterstock.com/z/stock-photo-close-up-photo-of-technological-metal-grid-structure-abstract-black-and-white-background-image-on-1096554218.jpg","https://image.shutterstock.com/z/stock-photo-abstract-red-building-blue-sky-1539585524.jpg","https://image.shutterstock.com/z/stock-photo-beautiful-and-high-contrasted-architecture-529481146.jpg"];
var ImageIndex = 0;
// defining function for prevButtom
prevButton.addEventListener("click",goBack);
function goBack(){
    if (ImageIndex == 0){
        ImageIndex = imageCollection.length-1;
    }
    else{
        ImageIndex--;
    }
    images.setAttribute("src",imageCollection[ImageIndex]);
}

//defining function for nextButton
nextButton.addEventListener("click",goNext);
function goNext(){
    if(ImageIndex == imageCollection.length-1){
        ImageIndex = 0;
    }
    else{
        ImageIndex++;
    }
    images.setAttribute("src",imageCollection[ImageIndex]);
}
