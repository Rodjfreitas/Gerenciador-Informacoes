function selectOption(){
  let option = document.querySelector('select')
  option = option.options[option.selectedIndex].value;
  
 if(option.value = "Estrangeira"){
    let inputEstrangeiro = document.querySelector('#natOutra')
    inputEstrangeiro.style.visibility = "visible"
  }else {
    inputEstrangeiro.style.visibility = "hidden"
  }
  
}


function Enviar(){
let name = document.querySelector('#name')
let age = document.querySelector('#age')
let naturalidade = document.querySelector('#naturalidade')
let natOutra = document.querySelector('#natOutra')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let rg = document.querySelector('#rg')
let cpf = document.querySelector('#cpf')
let tel = document.querySelector('#tel')






    if(name.value.length === 0 || age.value.length === 0 || naturalidade.value.length === 0 ||
        city.value.length === 0 || rg.value.length === 0 || cpf.value.length === 0 || tel.value.length === 0){
      alert(`[ERRO:] Todos os campos precisam ser preenchidos.`)
    }else{
      
      let cadastro = [name, age, naturalidade, city, state, rg, cpf, tel]
      let tabela = document.querySelector('#lancamentos')
      let linha = document.createElement('tr')
      

      for(let pos in cadastro){
        
        let list = document.createElement('td')
        list.setAttribute('id','list')
        list.append(cadastro[pos].value)
        console.log(list)
        linha.append(list)
        cadastro[pos].value = ""

      }

      let bin = document.createElement('td')
      bin.setAttribute('id','bin')
      bin.setAttribute('onclick','removeLinha(this)')
      bin.append(`\u274C`)
      linha.append(bin)

      
      tabela.append(linha)
      naturalidade.value = "Brasileira"


    }
}


function removeLinha(element){
  let dialog = confirm("Tem certeza que deseja excluir?")
  if(dialog){
    var el = element.closest('tr');
    var index = Array.prototype.indexOf.call(el.parentNode.children, el);
    console.log(index); // mostrar posição da linha como exemplo
    //removo a linha
    el.outerHTML = '';
  }else{
    
  }

}

