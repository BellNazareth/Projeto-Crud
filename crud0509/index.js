var data;

 if (localStorage.getItem("contatos")) {
    data = JSON.parse(localStorage.getItem("contatos"));
    } else {
    data = [{
            name: "Ana Britto",
            handle: "ana_britto",
        },
        {
            name: "Ricardo Costa",
            handle: "ricardocosta",
        },
        {
            name: "Tiago Montana",
            handle: "tiagomontana",
        }
    ];

    localStorage.setItem("contatos", JSON.stringify(data));
}

// create ( pegar o que veio do createcontact e adicionar em data )

// read ( ler data e adicionar na lista )
const list = document.getElementById("contact-list");
data.forEach((pessoa, index)=>{
    var pessoaLi = document.createElement('li');
    var pessoaDiv = document.createElement('div');
    var pessoaPar = document.createElement('p');
    var btnEditar = document.createElement('button');
    var btnExcluir = document.createElement('button')
    pessoaPar.innerHTML = pessoa.name + '</br>' + pessoa.handle; //pessoa.name = data[index].name
    //botao edita
    btnEditar.className ='contact-edit'
    btnEditar.onclick = () => editar(index);
    //botao exclui
    btnExcluir.className ='contact-remove'
    btnExcluir.onclick = () => removeContact(index);
    pessoaDiv.appendChild(pessoaPar);
    pessoaDiv.appendChild(btnEditar);
    pessoaDiv.appendChild(btnExcluir);
    pessoaLi.appendChild(pessoaDiv);
    list.appendChild(pessoaLi);
    
}
)

// update ( levar para a outra tela com os dados e atualizar )
function editar(numInd){
    localStorage.setItem('index',JSON.stringify(numInd));
    window.location.href='./createcontact.html';
}
// delete ( apagar de data )
function removeContact(numInd){
    console.log(data[numInd]);
    data.splice(numInd,1);
    localStorage.setItem('contatos',JSON.stringify(data));
    location.reload();
    
}

// busca
const searchInput = document.getElementById("search-input")
searchInput.onkeyup=searchContact
function searchContact() {  
    var input, filter, ul, li, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    filter.length <= 0 ? document.getElementById("showing-contacts").style.display = "none" : document.getElementById("showing-contacts").style.display = "";
    ul = document.getElementById("contact-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}