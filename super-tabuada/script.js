function tabuada() {
      document.getElementById("resultado").innerText = ""  
      const inputNumero = document.getElementById("numero").value;
      const numeroConvertido = Number(inputNumero);

      for(let i = 1 ; i<=10 ; i++)
      {
        document.getElementById("resultado").innerText += `${numeroConvertido} X ${i} = ${numeroConvertido*i}\n`
      }
    }