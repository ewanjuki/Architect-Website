document.querySelector('.hamburger-menu')
    .addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.classList.toggle('change');
    });