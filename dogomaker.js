

 const property = [
    {
        name: 'Louie',
        color: 'Black',
        breed: 'Happy'
    },
    {
        name: 'Charlie',
        color: 'Brown',
        breed: 'Fluffy'
    },
];



let myTable = document.getElementById('myTable');
let resetBtn = document.getElementById('Reset');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', handleform);
    
});

function handleform(ev) {
    ev.preventDefault();
    
    let dogName = document.getElementById('dogname').value;  
    let dogColor = document.getElementById('dogcolor').value;  
    let dogBreed = document.getElementById('dogbreed').value;  
    let row = myTable.insertRow();
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.innerHTML = (dogName);
    cell2.innerHTML = (dogColor);
    cell3.innerHTML = (dogBreed);
    
    
}



