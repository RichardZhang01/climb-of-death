async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value;

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            }),
        });

        if (response.ok) {
            function replaceLocation() {
                document.location.replace('/dashboard')
            }
            setTimeout(replaceLocation, 500);
        } else {
            alert("Incorrect username or password. Please try again!");
        }
    } else {
        alert("Please enter your username and password");
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);