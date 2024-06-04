var ul = document.getElementById('ul')
var input = document.getElementById('input')
var button = document.getElementById('btn')
var delAll = document.getElementById('delAll')

button.addEventListener('click', ()=>{

   var li = document.createElement('li')
   var liText = document.createTextNode(input.value)
   li.appendChild(liText)
   ul.appendChild(li)
   input.value = ''

   var Delbutton = document.createElement('button')
   var DelbtnText = document.createTextNode('Delete')
   Delbutton.appendChild(DelbtnText)
   li.appendChild(Delbutton)

   Delbutton.addEventListener('click',()=>{
       ul.removeChild(li)
   })

   var Editbutton = document.createElement('button')
   var EditbtnText = document.createTextNode('Edit')
   Editbutton.appendChild(EditbtnText)
   li.appendChild(Editbutton)

   Editbutton.addEventListener('click',()=>{
     var newVal = prompt('ENTER EDIT VALUE')
     li.innerText = `${newVal}`
  })
})

delAll.addEventListener('click',()=>{
    ul.innerHTML = ''
})