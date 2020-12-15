let title = document.querySelector('#title')
let textArea = document.querySelector('#text-body')
let cards = document.querySelector('#cards')
let addnowButtum = document.querySelector('#button')



//modal box elemetn
let modals = document.querySelector('.modals')


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
  privewElement.innerHTML = `<i class="material-icons" id="privew"> wysiwyg </i>`
  cardbody.appendChild(privewElement)

  


  
  
  // //after add value to reset input filed
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


//privew button action function
cards.addEventListener('click', function(e) {
  // console.log(e.target.id === 'remove')
  if(e.target && e.target.id === 'privew') {
    
    //modals continer
    const box = document.createElement('div')
    box.className = 'modal-dialog modal-dialog-centered'
    modals.appendChild(box)

    //modal content
    const modalConten = document.createElement('div')
    modalConten.className = 'modal-content'
    box.appendChild(modalConten)

    //modal Header
    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'
    modalConten.appendChild(modalHeader)
    
    //modal Header content title
    const modalHeaderTitle = document.createElement('input')
    modalHeaderTitle.className = 'form-control'
    modalHeaderTitle.setAttribute('id', 'box-title')
    modalHeaderTitle.setAttribute('placeholder', 'Title of note')
    modalHeaderTitle.value = title.value
    modalHeader.appendChild(modalHeaderTitle)

    //modal Header content close button
    const modalHeaderClose = document.createElement('button')
    modalHeaderClose.className = 'close'
    modalHeaderClose.setAttribute('id', 'buttonClose')
    modalHeaderClose.innerHTML = `<i class="material-icons" id="close"> cancel </i>`
    modalHeader.appendChild(modalHeaderClose)
    
    //modal body content
    const modalBodyCont = document.createElement('div')
    modalBodyCont.className = 'modal-body'
    modalConten.appendChild(modalBodyCont)

    const modalTextArea = document.createElement('textarea')
    modalTextArea.className = 'form-control'
    modalTextArea.setAttribute('id', 'modal-body')
    modalTextArea.setAttribute('rows','10')
    modalTextArea.value = textArea.value
    modalBodyCont.appendChild(modalTextArea)

    //modal footer content
    const modalFooterCont = document.createElement('div')
    modalFooterCont.className = 'modal-footer'
    modalConten.appendChild(modalFooterCont)

    //modal footer Close button
    const modalFooterBtnCancel  = document.createElement('button')
    modalFooterBtnCancel.className = 'btn btn-secondary'
    modalFooterBtnCancel.setAttribute('type', 'button')
    modalFooterBtnCancel.setAttribute('id', 'cancel')
    modalFooterBtnCancel.appendChild(document.createTextNode('Cancel'))

    modalFooterCont.appendChild(modalFooterBtnCancel)

    //modal footer Seave button 
    const modalFooterBtnSave = document.createElement('button')
    modalFooterBtnSave.className = 'btn btn-primary'
    modalFooterBtnSave.setAttribute('type', 'button')
    modalFooterBtnSave.setAttribute('id', 'save')
    modalFooterBtnSave.appendChild(document.createTextNode('Save changes'))
    modalFooterCont.appendChild(modalFooterBtnSave)

    
    e.preventDefault();
  }
  // e.preventDefault()
  
})

// <div class="modal-dialog modal-dialog-centered" >
// <div class="modal-content">
// <div class="modal-header">
// <input class="form-control" id="box-title" placeholder="note title">
// <button id="buttonClose" class="close" >
// <span>&times;</span>
// </button>
// </div>
// <div class="modal-body">
// <textarea class="form-control " rows="10" id="modal-body">
// </textarea>
// </div>
// <div class="modal-footer">
// <button type="button" class="btn btn-secondary" id="cansee">Close</button>
// <button type="button" class="btn btn-primary">Save changes</button>
// </div>
// </div>
// </div>
