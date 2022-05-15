console.log('hello mcs')

function createPopUp(){
    popup = document.getElementById('create-div')
    loginArea = document.getElementById('login-div')
    createBtn = document.getElementById('create-btn')

    loginArea.style.display = 'none'
    createBtn.style.display = 'none'
    popup.style.display = 'flex'
}