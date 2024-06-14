"use strict";
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users.');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error while fetching users.', error);
        return [];
    }
}
async function addUser(user) {
    try {
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user.');
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error('Error while adding user.', error);
        throw error;
    }
}
async function deleteUser(userId) {
    try {
        const response = await fetch(`http://localhost:5000/users/${userId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete a user.');
        }
        console.log(`User with ID ${userId} deleted successfully.`);
    }
    catch (error) {
        console.error('Error while deleting user.', error);
        throw error;
    }
}
async function editUser(userId, updateUser) {
    try {
        const response = await fetch(`http://localhost:5000/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        });
        if (!response.ok) {
            throw new Error('Failed to edit a user.');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error while editing user.', error);
        throw error;
    }
}
function renderUsers(users) {
    const userListElement = document.getElementById('user-list');
    if (!userListElement) {
        console.error('User list element not found.');
        return;
    }
    // Clear previous user list
    userListElement.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div>
            <span>${user.name} - ${user.email}</span>
            <span>
                <button class="edit-btn" data-id="${user.id}">Edit</button> |
                <button class="delete-btn" data-id="${user.id}">Delete</button>
            </span>
        </div>
        `;
        userListElement.appendChild(li);
    });
}
async function handleAddUser(event) {
    const form = event.target;
    const nameInput = form.elements.namedItem('name');
    const emailInput = form.elements.namedItem('email');
    const newUser = {
        name: nameInput.value,
        email: emailInput.value
    };
    try {
        await addUser(newUser);
        refreshUsers();
        form.reset();
    }
    catch (error) {
        console.error('Failed to add user.', error);
    }
}
async function handlerEditUser(event) {
    const button = event.target;
    const userId = button.dataset.id;
    if (!userId) {
        console.log('User Id is not found.');
        return;
    }
    const newName = prompt('Enter the New Name');
    if (newName === null)
        return;
    const newEmail = prompt('Enter the New Name');
    if (newEmail === null)
        return;
    const userToUpdate = {
        name: newName,
        email: newEmail
    };
    try {
        await editUser(parseInt(userId), userToUpdate);
        refreshUsers();
    }
    catch (error) {
        console.log('Failed to edit user:', error);
    }
}
async function handleDeleteUser(event) {
    const button = event.target;
    const userId = button.dataset.id;
    if (!userId) {
        console.log('User Id is not found.');
        return;
    }
    if (confirm('Are you sure you want to delete this user?')) {
        try {
            await deleteUser(parseInt(userId));
            refreshUsers();
        }
        catch (error) {
            console.log('Failed to delete user:', error);
        }
    }
}
const userForm = document.getElementById('user-form');
if (userForm) {
    userForm.addEventListener('submit', handleAddUser);
}
document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('edit-btn')) {
        handlerEditUser(event);
    }
    if (event.target && event.target.classList.contains('delete-btn')) {
        handleDeleteUser(event);
    }
});
async function refreshUsers() {
    const users = await fetchUsers();
    renderUsers(users);
}
refreshUsers();
