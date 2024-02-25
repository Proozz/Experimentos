   var n1 = window.prompt("quantas horas trabalha por dia?")
   var n2 = window.prompt("quanto ganha por hora?")
   var n3 = window.prompt("quanto dias por mes?")

   var soma = n2 * n1
   var salario = soma * n3


  document.write(" |  Horas por dia: " + n1 + " horas | ")
  document.write("   ganho por hora: " + n2 + " EUR/BRL | ")
  document.write("   dias trabalhado: " + n3 + " dias | ")
  document.write("   seu salario: " + salario + " | ")
