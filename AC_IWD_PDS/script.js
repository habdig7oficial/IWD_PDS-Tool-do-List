window.addEventListener('DOMContentLoaded',function(){

    const btn = document.querySelector("#btn")
    const lista = document.querySelector("#lista")
    const tarefa = document.querySelector("#tarefa")

    const data = document.querySelector("#data")



    btn.addEventListener("click",function(){

    const div = document.createElement("div")

    div.setAttribute("class","quebra")
    
    lista.appendChild(div)


    /*
     Objetos
     */

     const obj = {

        nome: document.createElement("p"),

        data_entrega : document.createElement("p"),

        dificuldade:document.createElement("p"),

        importante:document.querySelector("#checkbox")
     }


    obj.nome.innerHTML = tarefa.value
    
    obj.data_entrega.innerHTML = data.value

    if (obj.dificuldade.selectedIndex = 0 ) {

        obj.dificuldade.innerHTML = "Fácil"
            
    }

    else if (obj.dificuldade.selectedIndex = 1 ) {

        obj.dificuldade.innerHTML = "Médio"
            
    }

    else if (obj.dificuldade.selectedIndex = 2 ) {

        obj.dificuldade.innerHTML = "Difcil"
            
    }

    else{
        alert("Ocorreu um erro...")
        return;
    }


    /**/


    obj.nome.className ="mm"

    
    div.appendChild(obj.nome) 
    div.appendChild(obj.data_entrega)
    div.appendChild(obj.dificuldade)       

    if (obj.importante.checked) {
        const img = document.createElement("img")



        img.src= "https://i.pinimg.com/originals/19/29/df/1929dfe2b710f9807123f9b7b64079ec.jpg"
        img.setAttribute("class","tc")
        div.style.backgroundColor = "rgb(254, 204, 203)"
        img.alt = "importante"
        div.appendChild(img) 
    }


    })
})