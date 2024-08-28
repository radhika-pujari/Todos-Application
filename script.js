document.getElementById('addBtn').addEventListener('click', function() {
    const todoText = document.getElementById('todoInput').value.trim();
    
    if (todoText) {
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        
        listItem.innerHTML = `
            <span>${todoText}</span>
            <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
        `;
        
        todoList.appendChild(listItem);
        document.getElementById('todoInput').value = '';

        // Add delete functionality
        listItem.querySelector('.deleteBtn').addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }
});
