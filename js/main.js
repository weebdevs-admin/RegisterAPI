let Form = document.querySelector('form')
let firstName = document.querySelector('.firstName')
let lastName = document.querySelector('.lastName')
let email = document.querySelector('.username')
let city = document.querySelector('.city')
let state = document.querySelector('.state')
let password = document.querySelector('.password')
let Submit = document.querySelector('.submit')
let check = document.querySelector('.check')

if (check.checked == true) {
    check.value = "checked"
} else {
    check.value = "not"
}


Submit.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('https://63da720219fffcd620c99cff.mockapi.io/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            city: city.value,
            password: password.value,
            state: state.value,
            check: check.value
        })
    })
    firstName.value = ''
    lastName.value=""
    email.value=""
    city.value=""
    password.value = ""

})


let id__text = document.querySelector('.id__text')
let firstName__text = document.querySelector('.firstName__text')
let lastName__text = document.querySelector('.lastName__text')
let email__text = document.querySelector('.email__text')
let state__text = document.querySelector('.state__text')
let city__text = document.querySelector('.city__text')
let password__text = document.querySelector('.password__text')


fetch('https://63da720219fffcd620c99cff.mockapi.io/register')

    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(e => {
            id__text.textContent = "ID: " + e.id
            firstName__text.textContent = "FIRST NAME: " + e.firstName
            lastName__text.textContent = "LAST NAME: " + e.lastName
            email__text.textContent = "EMAIL: " + e.email
            state__text.textContent = "STATE: " + e.state
            city__text.textContent = "CITY: " + e.city
            password__text.textContent = "PASSWORD: " + e.password
        });

    })
let listData = document.querySelector('.data')
let btn__data = document.querySelector('.data__btn')

btn__data.addEventListener('click', (e) => {
    listData.classList.toggle('list__data-open')
})



let btnEdit = document.querySelector('.edit')
btnEdit.addEventListener('submit', (e) => {
    e.preventDefault()
})
let elEdit = document.querySelector('.edit')
let FormEdit = document.querySelector('.edit__input')
let editInput = document.querySelector('.edit-input') 
let editBtn = document.querySelector('.edit-btn')
let regTitle = document.querySelector('.registration__title')

editBtn.addEventListener('click', () => {
    
    fetch(`https://63da720219fffcd620c99cff.mockapi.io/register/${editInput.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            city: city.value,
            password: password.value,
            state: state.value,
            check: check.value
        })
    })
})


elEdit.addEventListener('click', (e) => {
    FormEdit.classList.toggle('editForm')
    regTitle.textContent = "Editing Accaunt! "
    regTitle.style.color = "blue"

   

})

let Delete = document.querySelector('.dalete')
let deleteForm = document.querySelector('.delete__form')
let deleteBtn = document.querySelector('.delete__btn')
let deleteInput = document.querySelector('.delete__input')
Delete.addEventListener('click',()=>{
    deleteForm.classList.toggle('openDelete')
    
})
deleteBtn.addEventListener("click",()=>{
    fetch(`https://63da720219fffcd620c99cff.mockapi.io/register/${deleteInput.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            city: city.value,
            password: password.value,
            state: state.value,
            check: check.value
        })
    })
    deleteInput.value =""

})