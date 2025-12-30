let transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];

function adicionar(){
    const descricao = document.getElementById("descricao").value;
    const valor = Number(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;

    if (!descricao || !valor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const transacao = {
        descricao,
        valor,
        tipo
    };

    transacoes.push(transacao);
    salvar();
    atualizarTela();
}

    function salvar() {
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }

    function atualizarTela() {
        const lista = document.getElementById("lista-transacoes");
        const saldoE1 = document.getElementById("saldo");

    lista.innerHTML = "";
    let saldo = 0;

    transacoes.forEach(t => {
        const li = document.createElement("li");
        li.innerText = `${t.descricao} - R$ ${t.valor.toFixed(2)} (${t.tipo})`;
        lista.appendChild(li);

        saldo += t.tipo === "entrada" ? t.valor : -t.valor;
    });

    saldoE1.innerText = `Saldo: R$ ${saldo.toFixed(2)}`;
}
        
atualizarTela();