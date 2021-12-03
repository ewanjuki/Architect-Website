document.querySelector('.hamburger-menu')
    .addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.classList.toggle('change');
    });

document.querySelector('.scroll-btn')
    .addEventListener('click', () => {         
        document.querySelector('html')
            .style.scrollBehavior = 'smooth';

        setTimeout(() => {
            document.querySelector('html')
                .style.scrollBehavior = 'unset';
        }, 1000);
    });