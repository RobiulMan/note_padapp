let title = document.querySelector('#title')
let textArea = document.querySelector('#text-body')
let cards = document.querySelector('#cards')
let addnowButtum = document.querySelector('#button')

addnowButtum.addEventListener('click', function(e) {
  if(title.value.trim().length < 1&& textArea.value.trim().length < 1) {
     alert('filed the input')
     return false
  } 
  //card root  element 
  const card = document.createElement('div')
  card.className = 'card m-2'
  card.style.width = '18rem'
  cards.appendChild(card)

  //card body element
  const cardbody = document.createElement('div')
  cardbody.className = 'card-body'
  card.appendChild(cardbody)

  //title element
  const titles = document.createElement('h5')
  titles.className = 'card-title'
  titles.appendChild(document.createTextNode(title.value))
  cardbody.appendChild(titles)

  //datils text element 
  const textbody = document.createElement('p')
  textbody.className = 'card-text'
  textbody.appendChild(document.createTextNode(textArea.value.slice(0, 150)))
  cardbody.appendChild(textbody)
  
  let element = document.createElement('a')
  element.className = 'card-link'
  element.innerHTML = `<i class="material-icons"> delete_forever </i>`
  cardbody.appendChild(element)

  
  
  //after add value to reset input filed
  title.value = ''
  textArea.value = ''
  // <a href="#" class="card-link">Card link</a>
  //   <a href="#" class="card-link">Another link</a>
    e.preventDefault();
  
})


