var pessoa = {
    peso : "",
    altura : "",
    imc : function(){
        alert('Calculo realizado');
        var peso = this.peso = document.getElementById("peso").value;
        var altura = this.altura =  document.getElementById("altura").value;
            altura = altura / 100;
            var imc = peso/(altura*altura);

            document.getElementById("resultadoimc").innerHTML = "<b>"
            +imc.toFixed(2)+"</b><br>"; 

if(imc < 18.5){
   document.getElementById("texto").innerHTML = "Você está abaixo do peso, precisa comer frutas fibrosas, carboidratos, beber água e malhar as pernas";
}if(imc >= 18.5 && imc < 24.99){
    document.getElementById("texto").innerHTML = "Você está com o peso normal, parabéns!";
}if(imc >= 30.0 && imc < 34.9){
    document.getElementById("texto").innerHTML = "Vixi, você está com obesidade, feche a boca!"
}if(imc >= 35 && imc < 39){
    document.getElementById("texto").innerHTML = "Thaixplodindo";
}if(imc >= 40){
    document.getElementById("texto").innerHTML = "Super Nova"
}
    },
    limpar : function(){
      
            document.getElementById("peso").value = "";
            document.getElementById("altura").value = "";
            document.getElementById("resultadoimc").innerHTML = "";
        
    }
}




