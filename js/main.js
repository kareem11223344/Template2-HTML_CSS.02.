
// Start Events
let contentList = document.querySelector('.content');
let foodList = document.getElementById('food');
let juiecsList = document.getElementById('juiecs');
let active = document.querySelector('.active')
let btnFood = document.querySelector('.btn-food')
let btnJuiecs = document.querySelector('.btn-juiecs')

btnFood.addEventListener('click',()=>{
    juiecsList.style.display = "none";
    foodList.style.display = "flex";
})
btnJuiecs.addEventListener('click',()=>{
    juiecsList.style.display = "flex";
    foodList.style.display = "none";
})
active.addEventListener('click',()=>{
    foodList.style.display = "flex";
    juiecsList.style.display = "flex";
})
// End Events

// Start reviews

let reviewsData = [
    {
        id: 1,
        name: "Dean Michael",
        imgUrl: "images/reviews1.jpg",
        review: "Thank you for the beautiful service"
    },
    {
        id: 2,
        name: "Ruby Jake",
        imgUrl: "images/reviews2.jpg",
        review: "I am very very happy"
    },
    {
        id: 3,
        name: "David Hussay",
        imgUrl: "images/reviews3.jpg",
        review: "Thank you "
    },
];
let reviewsName = document.querySelector(".box .name");
let reviewsImg = document.querySelector(".person img");
let reviewsTitle = document.querySelector(".person .title");

let next = document.querySelector(".box .next");
let back = document.querySelector(".box .back");

let currentItems = 0;
let updateData =()=>{
    item = reviewsData[currentItems];
    reviewsName.textContent = item.name;
    reviewsImg.src = item.imgUrl;
    reviewsTitle.textContent = item.review;
}
updateData()
next.addEventListener('click',()=>{
    currentItems++;
    if(currentItems > reviewsData.length-1) currentItems=0;
    updateData();
});
back.addEventListener('click',()=>{
    currentItems--;
    if(currentItems < 0) currentItems=reviewsData.length-1;
    updateData();
})

// End reviews
