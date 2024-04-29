let puppyImageEl = document.getElementById("puppyImage");
let likeIconEl = document.getElementById("likeIcon");
let likeButtonEl = document.getElementById("likeButton");
let isLike = false;

function onClickLikeButton(){
    if(isLike === false){
        puppyImageEl.src = "https://res.cloudinary.com/dxudtajsv/image/upload/v1713009330/mohan-developer-white-puppy-liked-img.png";
        likeIconEl.style.color = "#0967d2";
        likeButtonEl.style.backgroundColor = "#0967d2";
        likeButtonEl.style.color = "#ffffff";
        isLike = true;
    }
    else {
        puppyImageEl.src = "https://res.cloudinary.com/dxudtajsv/image/upload/v1713009424/mohan-developer-white-puppy-img.png";
        likeIconEl.style.color = "#cbd2d9";
        likeButtonEl.style.backgroundColor = "#cbd2d9";
        likeButtonEl.style.color = "#9aa5b1";
        isLike = false; 
    }
}