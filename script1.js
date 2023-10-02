const nota=Number(prompt("Digite uma nota"));

const div1=document.querySelector("#div1");
const div2=document.querySelector("#div2");


if(nota>=6){//if só executa a condição verdadeira. (else- senão)
  div1.innerHTML=`Sua nota é  <span style="color:blue">${nota}</span> e você está Aprovado`;
}
else{//if só executa a condição verdadeira. (else- senão)
  div1.innerHTML=`Sua nota é  <span style="color:red">${nota}</span> e você está Reprovado`;
}

// Estilos Div ----------------------------------
div1.style.borderRadius="49px";
div1.style.position="Absolute";
div1.style.padding="10px";
div1.style.boxShadow="10px,10px,0px";
div1.style.backgroundColor="yellowgreen";
div1.style.color="white";
div1.style.fontFamily="Arial";
div1.style.textAlign="Center";

// Estilos H1 ------------------------
h1.style.fontFamily="Arial";

// Geral --------------------------
geral.style.backgroundColor="black";

