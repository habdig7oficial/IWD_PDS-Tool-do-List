window.addEventListener('DOMContentLoaded',function(){

    const btn = document.querySelector("#btn")
    const lista = document.querySelector("#lista")
    const tarefa = document.querySelector("#tarefa")

    const data = document.querySelector("#data")



    btn.addEventListener("click",function(){

    const div = document.createElement("div")

    div.setAttribute("class","quebra")
    
    lista.appendChild(div)

    const li = document.createElement("p")
    const li_data = document.createElement("p")

    const li_combo = document.createElement("p")

    const checkbox = document.querySelector("#checkbox")

    li.innerHTML = tarefa.value
    
    li_data.innerHTML = data.value

    if (dificuldade.selectedIndex = 0 ) {

        li_combo.innerHTML = "Fácil"
            
    }

    else if (dificuldade.selectedIndex = 1 ) {

        li_combo.innerHTML = "Médio"
            
    }

    else if (dificuldade.selectedIndex = 2 ) {

        li_combo.innerHTML = "Difcil"
            
    }

    else{
        alert("Ocorreu um erro...")
        return;
    }


    /**/


    li.className ="mm"

    
    div.appendChild(li) 
    div.appendChild(li_data)
    div.appendChild(li_combo)       

    if (checkbox.checked) {
        const img = document.createElement("img")



        img.src= "https://i.pinimg.com/originals/19/29/df/1929dfe2b710f9807123f9b7b64079ec.jpg"
        img.setAttribute("class","tc")
        div.style.backgroundColor = "rgb(254, 204, 203)"
        img.alt = "importante"
        div.appendChild(img) 
    }


    })
})