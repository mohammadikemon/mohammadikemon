// menu btn 
var menuList = document.querySelector(".menu-list");
var menuShowBtn = document.querySelector(".menu-btn i");
var menuRemoBtn = document.querySelector(".menu-remove-btn i");

menuShowBtn.addEventListener("click", function() {
    menuShowBtn.classList.add("menuRemoveBtn")
    menuList.classList.add("menuCome")
})

menuRemoBtn.addEventListener("click", function () {
    menuShowBtn.classList.remove("menuRemoveBtn")
    menuShowBtn.classList.add("menuShowBtn");
    menuList.classList.remove ("menuCome")
    menuList.classList.add("menuGo")
    menuList.style.transitionDelay = "0s"
})
// menulist 
var menuItemLen = document.querySelectorAll(".menu-item").length;
for(var x=0; x<menuItemLen; x++) {
    var menuItem = document.querySelectorAll(".menu-item")[x];
    menuItem.addEventListener("click", function() {
        menuList.style.transitionDelay = "0.75s"
        menuList.classList.remove("menuCome")
        menuList.classList.add("menuGo")
        menuShowBtn.classList.remove("menuRemoveBtn")
        menuShowBtn.classList.add("menuShowBtn");
    })
}
// manu Item 

var home = document.querySelectorAll(".menu-item")[0];
var about = document.querySelectorAll(".menu-item")[1];
var service = document.querySelectorAll(".menu-item")[2];
var skill = document.querySelectorAll(".menu-item")[3];
var contact = document.querySelectorAll(".menu-item")[4];

home.addEventListener("click", function() {
    home.classList.add("menuItemColorAdd")
    home.classList.remove("menuItemColorRemove")
    about.classList.remove("menuItemColorAdd")
    contact.classList.remove("menuItemColorAdd")
    skill.classList.remove("menuItemColorAdd")
    service.classList.remove("menuItemColorAdd")
})

about.addEventListener("click", function() {

    home.classList.add("menuItemColorRemove")
    about.classList.add("menuItemColorAdd")
    service.classList.remove("menuItemColorAdd")
    about.classList.remove("menuItemColorRemove")
    contact.classList.remove("menuItemColorAdd")
    skill.classList.remove("menuItemColorAdd")

})

service.addEventListener("click", function () {

    home.classList.add("menuItemColorRemove")
    about.classList.add("menuItemColorRemove")
    service.classList.add("menuItemColorAdd")
    service.classList.remove("menuItemColorRemove")
    skill.classList.remove("menuItemColorAdd")
    contact.classList.remove("menuItemColorAdd")

})

skill.addEventListener("click", function() {

    home.classList.add("menuItemColorRemove")
    about.classList.add("menuItemColorRemove")
    service.classList.add("menuItemColorRemove")
    skill.classList.add("menuItemColorAdd")
    contact.classList.remove("menuItemColorAdd")
    skill.classList.remove("menuItemColorRemove")
    

})

contact.addEventListener("click", function () {
    home.classList.add("menuItemColorRemove")
    about.classList.add("menuItemColorRemove")
    service.classList.add("menuItemColorRemove")
    skill.classList.add("menuItemColorRemove")
    contact.classList.add("menuItemColorAdd")
})

