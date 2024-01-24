const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto",]

const obterConvidados = (req, res) => {
    if (!req.query.nome) {
        return res.json(convidados)
    }

    const convidadoBuscado = convidados.find(convidado => convidado === req.query.nome);

    if (!convidadoBuscado) {
        return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista" })
    }

    return res.json({ mensagem: "Convidado presente" })

}

const cadastrarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "O campo nome deve ser mandado no body da requisisção" })
    }
    const convidadoExistente = convidados.find(convidado => convidado === nome);

    if (convidadoExistente) {
        return res.status(400).json({ mensagem: "O nome do convidade a ser adicionado já existe na lista. Caso queira adicionar outro convidado com o mesmo nome, favor adicionar sobrenome também" })
    }
    convidados.push(nome);

    return res.status(201).json({ mensagem: "Convidado adicionado" })
}

const deletarConvidado = (req, res) => {
    const { nome } = req.params;
    const indiceConvidadoExistente = convidados.findIndex(convidado => convidado === nome);


    if (!deletarConvidado) {
        return res.status(404).json({ mensagem: "O convidado a ser removido não está presente na lista" });

    }
    convidados.splice(indiceConvidadoExistente, 1)

    return res.json({ mensagem: "Convidado removido" })
}

module.exports = {
    obterConvidados,
    cadastrarConvidado,
    deletarConvidado
}