async function fetchUserData () {
    const apiUrl = ('https://jsonplaceholder.typicode.com/users');
    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        
   //clears 
   dataContainer.innerHTML = '';

    const userList = document.createElement('ul'); 

    //loops 

    users.forEach (user => {
        const listElement = document.createElement('li');
        listElement.textContent = user.name; 
        userList.appendChild(listElement);

    }); 

    dataContainer.appendChild(userList); 
} catch (error){

    dataContainer.innerHTML = 'Failed to load user data.';
    console.log('Error featching human data', error);
    console.log(dataContainer.innerHTML);

}

}

document.addEventListener('DOMContentLoaded', fetchUserData);