const loginBtn = document.getElementById('login_btn'),
      popup = document.getElementById('popup'),
      closeBtn = document.getElementById('close_popup'),
      getExploreButton = document.getElementById('scrollToBooking');

loginBtn.onclick = () => {
    popup.classList.remove('hidden');
    // TODO scrollFix!!!!!!!!!!!!!!!!!
    document.html.style.position= 'fixed';
}

closeBtn.onclick = () => {
    popup.classList.add('hidden');
}

getExploreButton.onclick = () => {
    event.preventDefault();
    window.scrollTo({
        top: 625,
        left: 0,
        behavior: "smooth"
    })
}
