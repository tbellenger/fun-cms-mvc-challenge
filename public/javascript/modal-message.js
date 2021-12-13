const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message");
const buttonOK = document.querySelector("#modalOk");

buttonOK.addEventListener("click", hideModal);

function showModal(message) {
  modalMessage.innerHTML = `${message}`;
  modal.classList.add("show");
}

function hideModal() {
  modal.classList.remove("show");
}
