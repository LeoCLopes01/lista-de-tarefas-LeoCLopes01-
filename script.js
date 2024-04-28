// Desenvolva sua lógica aqui

let tarefas = []


function renderizarTarefa(tarefas){
    let listaDeTarefas = document.querySelector(".listaDeTarefas");
    
    const li = document.createElement("li")
    
    li.innerText = "sem nenhuma tarefa registrada..."
    if(tarefas.length == 0){
        listaDeTarefas.appendChild(li)
    }else{
        
        for(let i = 0; i < tarefas.length; i++){
            listaDeTarefas.appendChild(criarListaDeTarefas(tarefas[i]))
        }
    }
    
}

if (JSON.parse(localStorage.getItem('meuArr'))){
    tarefas =  JSON.parse(localStorage.getItem('meuArr'));
}
renderizarTarefa(tarefas)

function criarListaDeTarefas(tarefa){
    let listaDeTarefas = document.querySelector(".listaDeTarefas");
    const tarefaa = document.createElement("li")
    const paragrafo = document.createElement("p")
    const escluirTarefa = document.createElement("button");

    tarefaa.classList.add("tarefa");
    escluirTarefa.classList.add("buttonEscluir")

    paragrafo.innerText = tarefa;
    escluirTarefa.innerText = "Escluir";

    
    escluirTarefa.addEventListener('click', function(){
        const index = tarefas.indexOf(tarefa);
        if(index > -1){
            tarefas = JSON.parse(localStorage.getItem('meuArr'));
            tarefas.splice(index,1)
            tarefaa.remove()

           tarefas =  localStorage.meuArr =JSON.stringify(tarefas)
        }
            
            if(tarefas.length === 0){
                const li = document.createElement("li")
                li.innerText = "sem nenhuma tarefa registrada...";
                listaDeTarefas.appendChild(li)
            }
    
        
    });

    

    tarefaa.appendChild(paragrafo);
    tarefaa.appendChild(escluirTarefa)

    return tarefaa;
}

document.querySelector('.buttonPrincipal').addEventListener('click',function(event){
    event.preventDefault();
    let valorinput = document.querySelector('input').value;
    let novaTarefa = valorinput
    let listaDeTarefas = document.querySelector(".listaDeTarefas");
    // const listaDeTarefas = document.querySelector('ul')
    if(listaDeTarefas.firstChild && listaDeTarefas.firstChild.innerText === 'sem nenhuma tarefa registrada...'){
        listaDeTarefas.firstChild.remove()
    }
    
    // tarefas.unshift(novaTarefa);

    
    // renderizarTarefa(tarefas);
    if(localStorage.meuArr){
        tarefas = JSON.parse(localStorage.getItem('meuArr'));
    }
    let novoItem = novaTarefa;
    tarefas.unshift(novoItem);
    document.querySelector('input').value ="";
    localStorage.meuArr =JSON.stringify(tarefas); 
    
    listaDeTarefas.innerHTML ="";
    renderizarTarefa(tarefas);   

});


console.log(localStorage.getItem("meuArr"));