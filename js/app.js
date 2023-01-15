let dinero = document.getElementById('dinero')
let ingreso = document.getElementsByClassName("ingreso")
let ingresoNro = document.getElementById('ingresoNro')
let deta = document.getElementById('deta')
let disponibleNro = document.getElementById('disponibleNro')
let monto = document.getElementById('monto')
let disponible = document.getElementById('disponible')
let totalGasNro = document.getElementById('totalGasNro')

let resultado = 0
let sumGastos = 0


dinero.addEventListener('blur', ingrDinero)

btnMas.addEventListener('click', ingrClick)



function ingrDinero(){ 
  ingresoNro.innerText = dinero.value
  disponibleNro.innerText = dinero.value
  disponibleNro.value = dinero.value
  resultado = dinero.value
   
    
      
    if (resultado < 0) {
      disponibleNro.style.color = 'red'
    } else {
      disponibleNro.style.color = 'black'
    }
}  
  




function ingrClick(){ 
  sumGastos = sumGastos - monto.value 
  resultado = resultado - monto.value 
  deta.innerText = gasto.value
  disponibleNro.innerText = resultado
  totalGasNro.innerText = sumGastos

  if (resultado < 0) {
    disponibleNro.style.color = 'red'
  }else{
    disponibleNro.style.color = 'rgb(39, 255, 20)'
  }
}

  /*<i id="btnMas" class="bi bi-plus-lg"></i>*/