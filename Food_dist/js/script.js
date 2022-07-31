let forms = document.forms.register
let inputs = document.querySelectorAll('.modal__input')
console.log(inputs);
let modal = document.querySelector(".modal")
let modal__content = document.querySelector(".modal__content")
let modal__close = document.querySelector(".modal__close")
let btn = document.querySelector('button[data-modal]')


btn.onclick = () => {
    modal.style.display = "block"
    setTimeout(() => {
        document.body.style.overflow = "hidden"
        modal__content.style.transform = "translate( 0% ,150%) scale(1)"
    }, 200);
}

const aviableSim = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
}


function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = "valid"
    } else {
        field.className = "invalid"
    }
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, aviableSim[inp.name])
    }
});


forms.onsubmit = (event) => {
    event.preventDefault()

    let success_count = 0
    let error_count = 0

    inputs.forEach(inp => {
        if(inp.classList.contains('invalid') || inp.value.length === 0) {
            inp.className = "invalid"
            error_count++
        } 
        if(inp.classList.contains('valid') ||  inp.value.length > 0 ) {
            success_count++
        }
    });


    if(error_count === 0) {
        submit()
    } else {
        alert('Я НАЙДУ ТЕБЯ ПО IP И ВЫРЕЖУ ТВОЮ СЕМЬЮ')
    }
    
}

function submit() {
    let user = {}

    let fm = new FormData(forms)

    fm.forEach((value, key) => {
        user[key] = value
    })


    console.log(user);
}
setTimeout(() => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
    modal__content.style.transform = "translate( 0% ,150%) scale(1)"
}, 200);



modal__close.onclick = () => {
    modal.style.display = "none"
setTimeout(() => {
    modal__content.style.transform = "translate( 0% ,-150%) scale(1)"
    document.body.style.overflow = ""
}, 500);
}

let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let second = document.querySelector('#seconds')




let taimer  = setInterval(() => {
    second.innerHTML--
    if(second.innerHTML==0) {
        minutes.innerHTML--
        second.innerHTML=59
    } if(minutes.innerHTML==0) {
        hours.innerHTML--
        minutes.innerHTML=59
    } if(hours.innerHTML==0) {
        days.innerHTML--
        hours.innerHTML=23
    } if (days.innerHTML == -1) {
        clearInterval(taimer)
        alert('end')
        days.innerHTML=0
        hours.innerHTML=0
        minutes.innerHTML=0
        second.innerHTML=0

    }
}, 100);



let links = document.querySelectorAll('.tabheader__item')
links.forEach(l => {
    l.onclick = () => {
       links.forEach(a => a.classList.remove('tabheader__item_active'))
        l.classList.add('tabheader__item_active')
    }
})
