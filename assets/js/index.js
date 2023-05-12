var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,

      // slidesPerView: 1,
    },
  });

const button = document.querySelector(".heart");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    button.setAttribute("type",'solid');
    
  } else {
    document.querySelector('.react__container').innerHTML= "<box-icon class='heart' name='heart' type='' ></box-icon>";
  }
});

const card =document.querySelector(".card__container");  
const post = document.querySelector(".post__container");

fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')

.then(res=>(res.json()))

.then(users=>card.innerHTML = users.results.map((user)=>{

        console.log(user)
        const {picture,name} = user;
        return(`
        <div class="swiper-slide card">
        <div class="story__image"><img src=${picture.large} alt=${picture}></div>
        <div class="username__container">${name.first}</div>
      </div>
        `)

}).join("")
)


.catch(error=>console.log(error))