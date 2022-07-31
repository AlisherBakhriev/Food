let forms = document.forms.register
let form = document.forms.register1
let inputs = document.querySelectorAll('.modal__input')
let input2 = document.querySelectorAll('.order__input')
let modal = document.querySelector(".modal")
let modal__content = document.querySelector(".modal__content")
let modal__close = document.querySelector(".modal__close")
let btn = document.querySelectorAll('button[data-modal]')


btn.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "block"
        setTimeout(() => {
            document.body.style.overflow = "hidden"
            modal__content.style.transform = "translate( 0% ,150%) scale(1)"
        }, 200);
    }
})

const aviableSim = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
}

function validate(field, regex) {
    if (regex.test(field.value)) {
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

input2.forEach(inp2 => {
    inp2.onkeyup = () => {
        validate(inp2, aviableSim[inp2.name])
    }
});


forms.onsubmit = (event) => {
    event.preventDefault()

    let success_count = 0
    let error_count = 0

    inputs.forEach(inp => {
        if (inp.classList.contains('invalid') || inp.value.length === 0) {
            inp.className = "invalid"
            error_count++
        }
        if (inp.classList.contains('valid') || inp.value.length > 0) {
            success_count++
        }
    });


    if (error_count === 0) {
        submit()
    } else {
        alert('Вы уверены что вы заполнели все правильно  ')
    }

}




form.onsubmit = (event2) => {
    event2.preventDefault()

    let success_count = 0
    let error_count = 0
    input2.forEach(inp2 => {
        if (inp2.classList.contains('invalid') || inp2.value.length === 0) {
            inp2.className = "invalid"
            error_count++
        }
        if (inp2.classList.contains('valid') || inp2.value.length > 0) {
            success_count++
        }
    });

    if (error_count === 0) {
        submit2()
    } else {
        alert('Вы уверены что вы заполнели все правильно  ')
    }

}

function submit() {
    let user = {}

    let fm = new FormData(forms)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);

    inputs.forEach(inp => {
        inp.value = ""
        inp.className = ""
    })
}

function submit2() {
    let userI = {}
    let fn = new FormData(form)

    fn.forEach((value, key) => {
        userI[key] = value
    })
    input2.forEach(inp2 => {
        inp2.value = ""
        inp2.className = ""
    })
    console.log(userI);
}

setTimeout(() => {
    modal.style.display = "block"
    setTimeout(() => {      
        document.body.style.overflow = "hidden"
        modal__content.style.transform = "translate( 0% ,150%) scale(1)"
    }, 100);
}, 1800);



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
let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')
let current = document.querySelector('#current')

let taimer = setInterval(() => {
    second.innerHTML--
    if (second.innerHTML == -1) {
        minutes.innerHTML--
        second.innerHTML = 59
    } if (minutes.innerHTML == -1) {
        hours.innerHTML--
        minutes.innerHTML = 59
    } if (hours.innerHTML == -1) {
        days.innerHTML--
        hours.innerHTML = 23
    } if (days.innerHTML == -1) {
        clearInterval(taimer)
        alert('Акция закончена')
        days.innerHTML = 0
        hours.innerHTML = 0
        minutes.innerHTML = 0
        second.innerHTML = 0

    }
}, 10);



let img = document.querySelector('.img')
let manu = document.querySelector('.tabcontent__descr')

let info = {
    fitnes: "img/tabs/vegy.jpg",
    premium: "img/tabs/elite.jpg",
    postnoe: "img/tabs/post.jpg",
    sbalansirovanoe: "img/tabs/vegy.jpg",


}
let manuText = {
    fitnes: "   Меню “Фитнес” - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством! ",
    premium: "  Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    postnoe: "Наше “специальное” “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом ",
    sbalansirovanoe: "  Меню “Сбалансированное” - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас."

}



let links = document.querySelectorAll('.tabheader__item[data-info]')
links.forEach(l => {
    l.onclick = () => {
        links.forEach(a => a.classList.remove('tabheader__item_active'))
        l.classList.add('tabheader__item_active')
        let key = l.getAttribute('data-info')

        img.setAttribute("src", info[key])
        manu.innerHTML = manuText[key]
    }
})

//   let value = 0

//   next.onclick = () =>{
//     value ++
//     current.innerHTML = value
//     if(current.innerHTML == 4) {
//         value--
//     }
//   }






