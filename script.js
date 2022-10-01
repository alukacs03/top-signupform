let passwordField = document.getElementById('password');
let confirmPwdField = document.getElementById('confirmpassword');
const matchSpan = document.getElementById('pwdmatch');
const submitBtn = document.getElementById('submitbutton');
const lengthSpan = document.getElementById('pwdspan1');

[passwordField, confirmPwdField].forEach(e => {
    e.addEventListener('input', () => {
        validatePasswords();
    });   
})



function validatePasswords() {
    if (passwordField.value == confirmPwdField.value && passwordField.value.length >= 8) {
        submitBtn.disabled = false;
        matchSpan.innerHTML = '&nbsp';
        return true;
    } else if (passwordField.value != confirmPwdField.value && passwordField.value.length >= 8) {
        submitBtn.disabled = true;
        lengthSpan.innerHTML = '&nbsp;';
        matchSpan.textContent = 'Passwords do not match';
        return false;
    } else {
        submitBtn.disabled = true;
        lengthSpan.textContent = 'Minimum 8 characters required';
        matchSpan.textContent = 'Passwords do not match';
        return false;
    }
}