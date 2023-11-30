const loginBtn = document.getElementById('login_btn'),
      popup = document.getElementById('popup'),
      closeBtn = document.getElementById('close_popup');

loginBtn.onclick = () => {
    popup.classList.remove('hidden');
}

closeBtn.onclick = () => {
    popup.classList.add('hidden');
}
