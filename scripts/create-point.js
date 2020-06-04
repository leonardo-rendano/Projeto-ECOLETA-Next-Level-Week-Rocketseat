
function populateUFs() {
  const ufSelect = document.querySelector("select[name=UF]")

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then( res => res.json() )
  .then( states => {

    for( const state of states ) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  } )
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true


  fetch(url)
  .then( res => res.json() )
  .then( cities => {

    for( const city of cities ) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  } )

}

document
  .querySelector("select[name=UF")
  .addEventListener("change", getCities)

  
  //ITENS DE COLETA
  // PEGAR TODOS OS LIs

  const itemsToCollect = document.querySelectorAll(".items-grid li")

    for (const item of itemsToCollect) {
      item.addEventListener("click", handleSelectedItem)
    }

      const collectedItems = document.querySelector("input[name=items]")

      let selectedItems = []

      function handleSelectedItem(event) {        
        const itemLi = event.target

        //ADICIONAR OU REMOVER UMA CLASSE COM JAVASCRIPT
        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.id

        //VERIFICAR SE EXISTEM ITENS SELECIONADOS
        //SE SIM, PEGAR OS ITENS SELECIONADOS

        const alreadySelected = selectedItems.findIndex( item => {
          const itemFound = item == itemId //ISSO SERÁ TRUE OU FALSE
          return itemFound
        })

        //SE JÁ ESTIVER SELECIONADO, TIRAR DA SELEÇÃO
        if( alreadySelected >= 0 ) {
          //tirar da seleção
          const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
            
          })

          selectedItems = filteredItems
        }else {
          //SE NÃO ESTIVER SELECIONADO, ADD A SELEÇÃO
          selectedItems.push(itemId)
        }
        //ATUALIZAR O CAMPO ESCONDIDO COM OS ITENS SELECIONADOS
        collectedItems.value = selectedItems

      }
    

