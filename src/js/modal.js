(() => {
  let currentModal;

  let refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    backdrop: document.querySelectorAll('.backdrop')
  };

  for (let i = 0; i < refs.openModalBtn.length; i++) {
    refs.openModalBtn[i].addEventListener('click', (e) => {
      const currentDataModal = e.target.dataset.modalOpen
      currentModal = document.querySelector(`[data-modal=${currentDataModal}]`)
      toggleModal()
    });

    refs.closeModalBtn[i] ? refs.closeModalBtn[i].addEventListener('click', toggleModal) : null;
    refs.backdrop[i] ? refs.backdrop[i].addEventListener('click', (e) => e.target.classList.contains('backdrop')? toggleModal() : null) : null;
  }

  function toggleModal() {
    currentModal.classList.toggle('is-hidden');
    document.documentElement.classList.toggle('overflow-hidden');
  }
})();
