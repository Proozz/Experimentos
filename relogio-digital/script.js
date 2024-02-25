/*function atualizar(){
   var agora = new Date()
   var horas = agora.getHours()
   var minutos = agora.getMinutes()
   var segundos = agora.getSeconds()

   var relogio2 = `${horas}:${minutos}:${segundos}`

   document.getElementById("relogio").textContent = relogio2
   
}

atualizar();
    setInterval(atualizar, 100); */

function atualizar(){

document.getElementById("relogio").textContent = (new Date().toLocaleTimeString('pt-pt',));
document.getElementById("data").textContent = (new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }));


}

atualizar();
   setInterval(atualizar, 50);

