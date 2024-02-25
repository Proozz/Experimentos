    const zero = document.getElementById('zero')
     const incrementar = document.getElementById('incrementar3')
     const descrementar = document.getElementById('descrementar1')
     const limpar = document.getElementById('limpar3')
    
   
    const value = () => {    
           zero.innerHTML = count;

    };

    let count = 0;
    let intervalo = 0;

    incrementar.addEventListener('mousedown', () => {
          intervalo = setInterval(() => {
            count += 1;
            value();
            
          }, 50);
    })

    descrementar.addEventListener('mousedown', () => {
          intervalo = setInterval(() => {
            count -= 1;
            value();
            
          }, 50);
    })
   
    limpar.addEventListener('click', () => {
            count = 0;
            value();
    });

     document.addEventListener('mouseup', () => clearInterval(intervalo))
   



