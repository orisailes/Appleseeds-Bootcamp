function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev.currentTarget.name.value)
    const userConfirmation = confirm(`

   Please confirm the detail given:

    Name: ${ev.currentTarget.name.value}
    Email: ${ev.currentTarget.email.value}
    Age: ${ev.currentTarget.age.value}
    `)

    if (userConfirmation){
        form.submit();
    }
}


const form = document.querySelector(`form`)




form.addEventListener(`submit`, handleSubmit)