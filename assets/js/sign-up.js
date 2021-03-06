const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      const form = document.querySelector("form.signup");
      const username = document.getElementById('email2');
      const password = document.getElementById('password1');
      const password2 = document.getElementById('password2');
      const small = document.querySelector(`small`);


      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });

const signUpSuccess = document.querySelector('.signUp-success');
 
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
    if (username.parentElement.className == 'field form-control success' &&  
        password.parentElement.className == 'field form-control success' &&
        password2.parentElement.className == 'field form-control success') {
            signUpSuccess.textContent = 'You have successfully signed up';

            let userDatabase;
            let userDB = indexedDB.open('users', 1);
            userDB.onsuccess = function() {
                userDatabase = userDB.result;
                let transaction = userDatabase.transaction(['users'], 'readwrite');
                let userStore = transaction.objectStore('users');
                
                let newUser = {
                    userName: username.value.trim(), 
                    password: password.value.trim(), 
                }

                let addUserRequest = userStore.add(newUser);
                addUserRequest.onsuccess = () => {
                    setTimeout(() => {
                        form.submit();
                    }, 1000);
                }
                transaction.oncomplete = () => {
                    console.log('new user added');
                }
                transaction.onerror = () => {
                    console.log('There was an error adding new user');
                }
            }
    }
});

function checkInputs(){

    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue === ''){
        setErrorFor(username, '??????????????? ?????? ?????? ????????? ?????????????????????');    
    } else {

        setSuccessFor(username);
    }

    if(passwordvalue === ''){
        setErrorFor(password, '???????????? ?????? ?????? ????????? ???????????????');
    }else{
        setSuccessFor(password);
    }

    if(password2value === ''){
        setErrorFor(password2, '???????????? ?????? ??????????????? ?????? ?????? ????????? ?????????????????????');
    }else if(passwordvalue !== password2value){
        setErrorFor(password2, "???????????? ?????? ????????????????????????, ????????? ????????????!");
    }else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formControl  = input.parentElement;
    console.log(small)
    small.innerText = message;
    formControl.className = 'field form-control error';
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'field form-control success'
}
