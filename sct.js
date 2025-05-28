// const togglebutton = Document.getelementbyid("togglebutton")
// const sidebar = Document.getelementbyid("sidebar")


// togglebutton.addevntlistener("click", function(){
// sidebar.classlistener("visible")
// togglebutton.classlistener("active")
// })


const btn = document.getElementById ("togglebutton1");
const img = document.getElementById ("img111");

let isvisible = false;

btn .addEventListener("click",function(){
if (!isvisible){
    img.classList.remove('slide-out');
    img.classList.add('slide-in');
  }
else {
img.classList.remove('slide-in');
    img.classList.add('slide-out');
}
isvisible = !isvisible;

});
// const img1 = document.getElementById ("img111");
// const btn1 = document.getElementById ("togglebutton2");
// btn1.addEventListener("click",function(){
// if (isvisible){
//     img.classList.remove('slide-out2');
// img.classList.add('slide-in2');
// }
// else {
//       img.classList.remove('slide-in2');
//     img.classList.add('slide-out2');

//   }
// isvisible = !isvisible;
//     });
   




// const img1 = document.getElementById ("img111");
// let isvisible1 = false

// btn1.addEventListener("click",function(){
// if (isvisible){
//     img.classList.remove('slide-out2');
// img.classList.add('slide-in2');
// }
// else {
//       img.classList.remove('slide-in2');
//     img.classList.add('slide-out2');

//   }
// isvisible1 = isvisible;
    
// });


  let lastScroll = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      // لو بينزل
      header.style.top = "-100px";
    } else {
      // لو بيطلع
      header.style.top = "0";
    }

    lastScroll = currentScroll;
  });
