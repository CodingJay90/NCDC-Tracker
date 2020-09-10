var selectedRow = null
const formInput = document.querySelector('.form-input');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const gender = document.getElementById('gender');
const checkbox = document.querySelector('#checkbox');
const submitButton = document.querySelector('.submit-button');
const table = document.querySelector('tbody');
const editButton = document.querySelectorAll('.edit-btn')
const hide = document.querySelector('.hide');
const firstForm = document.querySelector('.first-form');
const secondForm = document.querySelector('.second-form');
const updateButton = document.querySelector('.update-btn');
const secondFormContainer = document.querySelector('.second-form')
const secondFormInput = document.querySelector('.second-form-input');
const checked = document.querySelector('.checked')

formInput.addEventListener('submit', submitForm);

//SUBMIT FORM
function submitForm(e){
    e.preventDefault();
        generateTemplate();
    firstName.value = '';
    lastName.value = '';
    email.value = '';
}

function generateTemplate(){
    let lists = `
    <tr>
        <td class="name">${firstName.value} ${lastName.value}</td>
        <td class="name">${email.value}</td>
        <td>${gender.value}</td>
        <td><a href="£" class="checked curr">Edit</a></td>
        <td><button class="edit-btn" onClick="onEdit(this)">Edit</button></td>
        <td><button class="delete-btn" onClick="onDelete(this)">Delete</button></td>
    </tr>
    `
    table.innerHTML += lists;
}


function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    firstName.value = selectedRow.cells[0].innerHTML;
    lastName.value = selectedRow.cells[0].innerHTML;
    email.value = selectedRow.cells[1].innerHTML;
    gender.value = selectedRow.cells[2].innerHTML;

    submitTwo.classList.remove('hide');
    submitButton.classList.add('hide')
}

const submitTwo = document.querySelector('.submit-button-2')
submitTwo.addEventListener('click', updateForm)
function updateForm(){
    selectedRow.cells[0].innerHTML = firstName.value + ' ' + lastName.value;
    //selectedRow.cells[0].innerHTML = lastName.value;
    selectedRow.cells[1].innerHTML = email.value;
    selectedRow.cells[2].innerHTML = gender.value;

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    gender.value = '';

    submitTwo.classList.add('hide');
    submitButton.classList.remove('hide')
}


function onDelete(td){
    selectedRow = td.parentElement.parentElement;
    selectedRow.remove();
}







//UPDATE LIST

// table.addEventListener('click', e => {
//     if(e.target.classList.contains('edit-btn')){
//         firstForm.classList.add('hide');
//         secondForm.classList.remove('hide');
        
//         let updateName = e.target.parentElement.
//         previousElementSibling.previousElementSibling.
//         previousElementSibling.
//         previousElementSibling
//         .innerText;
//         let updateEmail = e.target.parentElement.
//         previousElementSibling.previousElementSibling.
//         previousElementSibling.innerText;
//         let updateGender = e.target.parentElement.previousElementSibling
//         .previousElementSibling.innerText;

//         secondFormContainer.innerHTML = `
//         <form class="form-input second-form-input">
//         <label for="first-name">First Name:
//         <input type="text" id="s-first-name" class="s-first-name" required value="${updateName}"/>
//         </label>
//         <label for="last-name">Last Name:
//         <input type="text" id="s-last-name" class="s-last-name" required value="${updateName}">
//         </label>
//         <label for="email">Email Address:
//         <input type="text"  id="s-email" class="s-email" required value="${updateEmail}">
//         </label>
//         <label for="gender">Gender:
//             <select id="s-gender">
//                 <option>None</option>
//                 <option>Male</option>
//                 <option>Female</option>
//             </select>
//         </label >
//         <label for="checkbox" class="checkbox">
//         <input type="checkbox"  id="checkbox">
//         Recently came into
//         Nigeria within the last 14 days?
//         </label>
//     </form>
//     <button onclick="updateList()" class="update-btn">Update</button>
//         `
//     }else{
//         alert('oops');
//         return
//     }
//     let updateContainer = e.target.parentElement.parentElement
//     console.log(updateContainer);
// })

// function updateList(){
//     table.innerHTML += `
//     <tr>
//         <td class="name">${document.querySelector('#s-first-name').value} 
//         ${document.querySelector('#s-last-name').value}</td>
//         <td class="sEmail">${document.querySelector('#s-email').value}</td>
//         <td class="sGender">${document.querySelector('#s-gender').value}</td>
//         <td><a href="£" class="checked">Edit</a></td>
//         <td><button class="edit-btn" >Edit</button></td>
//         <td><button class="delete-btn">Delete</button></td>
//     </tr>
//     `
//     firstForm.classList.remove('hide');
//     secondForm.classList.add('hide');
// }






// // const sFirstName = document.querySelector('#s-first-name').value;
// // const sLastName = document.querySelector('#s-last-name');
// // const sEmail = document.querySelector('#s-email');
// // const sGender = document.querySelector('#s-gender');