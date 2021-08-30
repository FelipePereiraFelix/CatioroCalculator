var texto;
var idade = prompt("Me diga a quantos anos voce tem seu cachorro");

switch(idade){
  case "0":
    texto = "Seu cachorro nem existe";
    break;
  case "1":
   texto = "Seu cachorro tem 7 anos";
   break;
  case "2":
   texto = "Seu cachorro tem 14 anos";
   break;
  case "3":
   texto = "Seu cachorro tem 21 anos";
    break;
  case "4":
  texto = "Seu cachorro tem 28 anos";
  break;
  case "5":
   texto = "Seu cachorro tem 35 anos";
  break;
  default:
    texto = "Seu cachorro tem mais de 40 anos";
   
}
 document.write(texto);

