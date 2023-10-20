// verificar se eh para editar ou criar

var i = JSON.parse(localStorage.getItem('index'));
var iString = localStorage.getItem('index');
var data = JSON.parse(localStorage.getItem('contatos'));
var nome = document.getElementById('name')
var handle = document.getElementById('handle')
var btn = document.getElementById('btn')

if (iString){
    nome.value = data[i].name;
    handle.value = data[i].handle;
    btn.onclick = editaContato
    btn.innerText = 'EDIT CONTACT'
}
else{
    btn.innerText = 'ADD CONTACT'
    btn.onclick = criaContato
}
function editaContato(){
    if (nome.value != "" && handle.value != ""){
        console.log(nome.value);
        for(let i =0; i<data.length; i++){
            if(data[i].handle == handle.value){
                window.alert('Usuário já existe')
                return;
            }
        }
        data[i].name = nome.value;
        data[i].handle = handle.value;
        console.log(data);
        localStorage.setItem('contatos',JSON.stringify(data))
        window.location.href='index.html'
        localStorage.removeItem('index')
    }
    else{
        window.alert('Por favor insira um texto')
    }
    
}

function criaContato(){
    if(nome.value != '' && handle.value != ''){
        for(let i =0; i<data.length; i++){
            if(data[i].handle == handle.value){
                window.alert('Usuário já existe')
                return;
            }
        }
            let contatoNovo = {
                name: nome.value,
                handle: handle.value
            };
            data.push(contatoNovo);
            localStorage.setItem('contatos',JSON.stringify(data));
            window.location.href='index.html'
    }
    
    else{
        window.alert('Por favor insira um texto')
    }
}

