function selectOption(){
  let option = document.querySelector('select')
  option = option.options[option.selectedIndex].value;
  
 if(option.value = "Estrangeira"){
    let inputEstrangeiro = document.querySelector('#natOutra')
    inputEstrangeiro.style.visibility = "visible"
  }else {
    inputEstrangeiro.style.visibility = "hidden"
  }
  console.log(option)
}


function Enviar(){
let name = document.querySelector('#name')
let age = document.querySelector('#age')
let naturalidade = document.querySelector('#naturalidade')
let natOutra = document.querySelector('#natOutra')
let city = document.querySelector('#city')
let rg = document.querySelector('#rg')
let cpf = document.querySelector('#cpf')
let tel = document.querySelector('#tel')
let bin = document.createElement('img')
bin.setAttribute('id','bin')
bin.value = `\u274C`

    if(name.value.length === 0 || age.value.length === 0 || naturalidade.value.length === 0 ||
        city.value.length === 0 || rg.value.length === 0 || cpf.value.length === 0 || tel.value.length === 0){
      alert(`[ERRO:] Todos os campos precisam ser preenchidos.`)
    }else{
      
      let cadastro = [name,age,naturalidade,city,rg,cpf,tel,bin]
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
      
      
      tabela.append(linha)


    }
}