let projects = document.querySelectorAll('.article-project');
console.log(projects.length);

for (let i = 0; i < projects.length; i++) {
    let p = '#project-' + i;
    console.log(p);
    let down = document.querySelector(p);
}


document.addEventListener('click', () => {
    console.log('click');
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});

console.log('iuzehiuefziuhzeffez');