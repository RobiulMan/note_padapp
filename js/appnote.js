let title = document.querySelector('#title')
let textArea = document.querySelector('#text-body')
let cards = document.querySelector('#cards')
let addnowButtum = document.querySelector('#button')


//modal 
let modalTitle = document.querySelector('.modal-title')
let modalbody = document.querySelector('.modal-body')



addnowButtum.addEventListener('click', function(e) {
  if(title.value.trim().length < 1 && textArea.value.trim().length < 1) {
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

  //body text element 
  const textbody = document.createElement('p')
  textbody.className = 'card-text'
  textbody.appendChild(document.createTextNode(textArea.value.slice(0, 150)))
  cardbody.appendChild(textbody)

  //dot icons insert after body text
  textbody.insertAdjacentHTML('beforeend', `<i class="material-icons align-middle"> more_horiz </i>`)
  
  let removeElement = document.createElement('a')
  removeElement.className = 'card-link rmvs'
  removeElement.setAttribute('id','rmv')
  removeElement.innerHTML = `<i class="material-icons " id="remove"> delete_forever </i>`
  cardbody.appendChild(removeElement)


  let privewElement = document.createElement('a')
  privewElement.className = 'card-link'
  privewElement.setAttribute('id','rmv')
  privewElement.innerHTML = `<i class="material-icons"> wysiwyg </i>`
  cardbody.appendChild(privewElement)

  
  // more_horiz

  
  //after add value to reset input filed
  title.value = ''
  textArea.value = ''
  // <a href="#" class="card-link">Card link</a>
  //   <a href="#" class="card-link">Another link</a>
    e.preventDefault();
  
})

//remove button action function
cards.addEventListener('click', function(e) {
  // console.log(e.target.id === 'remove')
  if(e.target && e.target.id === 'remove') {
    e.target.parentElement.parentElement.parentElement.remove()
  }
  
})


