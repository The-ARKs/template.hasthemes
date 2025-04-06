// const togglebutton = Document.getelementbyid("togglebutton")
// const sidebar = Document.getelementbyid("sidebar")


// togglebutton.addevntlistener("click", function(){
// sidebar.classlistener("visible")
// togglebutton.classlistener("active")
// })




const image = document.getElementById("togglebutton")
const box = document.getElementById("sidebar1")

image.addEventListener("click",function(){
if (box.style.display==="none"||box.style.display===""){
    box.style.display = "block";
}
else {
    box.style.display ="none";
}
    });


    const image2 = document.getElementById("togglebutton2")
    const box2 = document.getElementById("sidebar1")
    
    image2.addEventListener("click",function(){
    if (box2.style.display==="none"||box2.style.display===""){
        box2.style.display = "block";
    }
    else {
        box2.style.display ="none";
    }
        });


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
