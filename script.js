//select  pop-overlay ,popup-box,add-book-btn

var popupOverlay = document.querySelector(".popup-overlay")
var addBookBtn = document.getElementById("add-book-popup-btn")

var conatiner = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitleInput = document.getElementById("Book-title-input")
var bookAuthorInput = document.getElementById("Book-author-input")
var bookDescInput = document.getElementById("Book-desc-input")
var errmsg = document.getElementsByClassName("errmsg")



addBookBtn.addEventListener("click",function(){
   
  
  popupOverlay.style.display = "block"
}
)

var cancelBtn = document.getElementById("cancel-popup")

cancelBtn.addEventListener("click",function(event){

    event.preventDefault()
    popupOverlay.style.display = "none"

})


addBook.addEventListener("click",function(event){

    


     event.preventDefault()
        var div = document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML = `<h2>${bookTitleInput.value}</h2>
        <h4>${bookAuthorInput.value}</h4>
        <p>${bookDescInput.value}</p>
        <button onclick="deleteBook(event)">Delete</button> `
        conatiner.append(div)
            
        bookTitleInput.value = ""
        bookAuthorInput.value = ""
        bookDescInput.value = ""
    
        popupOverlay.style.display = "none"
    
        

   



})

function deleteBook(event){

    event.target.parentElement.remove()

}


