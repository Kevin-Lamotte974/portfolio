
//* Création des étoiles filantes
let bg = document.querySelector('.bg-star')

let createStar = () => {

    let star = document.createElement('div')
    
    let taille = 1
    let positionX = Math.floor(Math.random()*(bg.clientWidth+400))
    let positionY = Math.floor(Math.random()*(bg.clientHeight+800))-300
    
    star.setAttribute('class', 'star')

    star.style.height = taille+'px'
    star.style.width = taille+'px'
    star.style.top = positionY+'px'
    star.style.left = positionX+'px'
    // star.style.backgroundColor = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'

    if(star.clientHeight > bg.clientHeight){
        star.remove()
    }
    
    bg.appendChild(star)

    setTimeout(() => {
        star.remove()
    }, 3000)

}

setInterval(() => {
    createStar()
}, 50)

//* Séléction des pages
let button = document.querySelectorAll('.button');

button.forEach((b) => {
    b.addEventListener('click', () => {
        let beforeCurrent = document.querySelector('.current');
        if(b.classList[1] !== beforeCurrent.classList[0] && b.classList[1] !== 'projets'){
            beforeCurrent.classList.remove('current')
            beforeCurrent.classList.add('last')
            let currentLanding = document.querySelector('.in-landing.'+b.classList[1])
            currentLanding.classList.add('current')
            setTimeout(()=> {
                beforeCurrent.classList.remove('last')
            }, 1000)
        }
    })
})

let otherbuttons = document.querySelectorAll('.select');

otherbuttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let beforeCurrent = document.querySelector('.current-detail');
        console.log(btn.classList[1]);
        if(btn.classList[1] !== beforeCurrent.id){
            beforeCurrent.classList.remove('current-detail')
            // beforeCurrent.classList.add('last')
            let currentLanding = document.querySelector('.contenu-details#'+btn.classList[1])
            currentLanding.classList.add('current-detail')
            setTimeout(()=> {
                beforeCurrent.classList.remove('last')
            }, 1000)
        }
    })
})

//! Animation lors du changement de section

// let observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//             entry.target.classList.remove('hidden');
//         } else {
//             entry.target.classList.remove('show');
//             entry.target.classList.add('hidden');
//         }
//     })
// })

// let hiddens = document.querySelectorAll('hidden');
// hiddens.forEach((element) => observer.observe(el))

//TODO Transition changement de texte

let jobwords = ['Beau Gosse', 'PD']

let jobsentence = document.getElementById('jobsentence')
let job = document.getElementById('job')

let transition = document.createElement('span')
transition.classList.add('transition')

let i = 0
job.innerHTML = jobwords[0]
setInterval(() => {
//     job.classList.add('hidden')
    job.innerHTML = jobwords[0]
    setTimeout(() => {
        job.innerHTML = jobwords[1]
    }, 4900)
//     job.classList.add('transition')
//     console.log(jobwords[i++%jobwords.length]);
//     setTimeout(() => {
//         job.classList.remove('transition')
//         job.classList.remove('hidden')
//     }, 2500)
}, 5000)

//* Détermine l'âge

let age = document.getElementById('age');
let ageSpan = age.querySelector('span');

let birthday = new Date(2001, 9, 1)
console.log(new Date().getFullYear() - birthday.getFullYear());

let determineAge = new Date().getFullYear() - birthday.getFullYear();
new Date().getMonth() < birthday.getMonth() && determineAge--;

ageSpan.innerText = determineAge;