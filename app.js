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
        <td>${firstName.value} ${lastName.value}</td>
        <td>${email.value}</td>
        <td>${gender.value}</td>
        <td><a href="£" class="checked curr">No</a></td>
        <td><button class="edit-btn">Edit</button></td>
        <td><button class="delete-btn">Delete</button></td>
    </tr>
    `
    table.innerHTML += lists;
}

//UPDATE LIST

table.addEventListener('click', e => {
    if(e.target.classList.contains('edit-btn')){
        //console.log('contains');
        firstForm.classList.add('hide');
        secondForm.classList.remove('hide');
        let parent = e.target.parentElement.parentElement;
        parent.remove();
    }
})


secondForm.addEventListener('submit', update)

function update(e){
    e.preventDefault();
    updateTemplate();
    firstForm.classList.remove('hide');
    secondForm.classList.add('hide');
    sFirstName.value = '';
    sLastName.value = '';
    sEmail.value = '';
};

const sFirstName = document.querySelector('.s-first-name');
const sLastName = document.querySelector('.s-last-name');
const sEmail = document.querySelector('.s-email');
const sGender = document.getElementById('s-gender');

function updateTemplate(){
    let updateLists = `
        <tr>
            <td>${sFirstName.value} ${sLastName.value}</td>
            <td>${sEmail.value}</td>
            <td>${sGender.value}</td>
            <td><a href="£" class="checked">No</a></td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>
        `
         table.innerHTML += updateLists;
}



console.log(checkbox.checked)




