document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Retrieve the users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the email is already registered
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      document.getElementById('message').textContent = 'Email already registered';
      return;
    }
  
    // Create a new user
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
      password: password
    };
  
    // Save the new user to local storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect to the budget page
    window.location.href = 'budget.html';
  });
  
  