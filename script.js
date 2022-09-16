function converter_binario(){
    var num_decimal = Number(input_num_decimal.value);
    
    
    //Variável que armazena os bits binários, sendo essencialmente do tipo string para facilitar o manuseio
    //O .toString, nesse caso, serve para formar a representação do número em uma outra base numérica (binário)
    //A variável, número binário, já começa com o primeiro bit
    var num_binario = (num_decimal % 2).toString();

    /*Enquanto o número decimal for maior que 1:
        Número decimal é igual a ele mesmo dividido por 2 (sucessivas divisões por 2)
        E o número binário recebe o resto da divisão por 2 e há uma concatenação (já que se trata de texto) com o número binário já existente

        Isso se repete até a condição não ser mais verdadeira
    */
    for(; num_decimal > 1;){
        num_decimal = parseInt(num_decimal/2);
        num_binario = (num_decimal % 2) + num_binario;
    }

    resultado_binario.innerHTML = num_binario;
}

function converter_octal(){
    var num_decimal = Number(input_num_decimal.value);
    var num_octal = num_decimal.toString(8);
    
    resultado_octal.innerHTML = num_octal;
}

function converter_hexadecimal(){
    var num_decimal = Number(input_num_decimal.value);
    var num_hexadecimal = num_decimal.toString(16);

    resultado_hexadecimal.innerHTML = num_hexadecimal;
}