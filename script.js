window.onload = () => {
    let container = document.getElementById('container');
    container.addEventListener('click', (e) => {
        if (!container.classList.contains('open')) {
            container.classList.add('open');
        } else {
            container.classList.remove('open');
        }
    });
};