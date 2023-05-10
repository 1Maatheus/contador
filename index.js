function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let resultado = document.getElementById("resultado");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("[ERRO] Insira os dados para realizar a contagem!");
    resultado.innerHTML = "Impossível contar!";
  } else {
    resultado.innerHTML = "Contando: ";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      alert("Passo inválido, considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      //Iniciando a contagem Crescente
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += ` ${c} \u{27A1}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        //Iniciando contagem Decrescente
        resultado.innerHTML += `${c} \u{27A1}`;
      }
    }
    resultado.innerHTML += ` \u{1F6A9}`;
  }
}
