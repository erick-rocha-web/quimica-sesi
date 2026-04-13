// ========================
// BASE DE DADOS DOS ELEMENTOS
// ========================

const dadosElementos = { // objeto que armazena todos os dados dos elementos

    boro: { // chave que representa o elemento (igual ao data-element do HTML)
        numero: 5, // número atômico
        simbolo: "B", // símbolo químico
        nome: "Boro", // nome do elemento
        massa: "10,81", // massa atômica
        familia: "Grupo 13 (semimetal)", // família
        camada: "2s² 2p¹ (3 elétrons)", // camada de valência
        ligacao: "Covalente simples", // tipo de ligação
        exemplo: "H₃BO₃ (ácido bórico)", // exemplo de molécula
        caracteristicas: "Sólido, amorfo, cinza escuro", // características físicas
        curiosidade: "Nome vem do árabe 'buraq', relacionado ao bórax" // curiosidade
    },

    aluminio: { // elemento alumínio
        numero: 13,
        simbolo: "Al",
        nome: "Alumínio",
        massa: "27",
        familia: "Grupo 13 (metal)",
        camada: "3 elétrons na camada de valência",
        ligacao: "Iônica (Al³⁺)",
        exemplo: "Al₂O₃",
        caracteristicas: "Sólido, prateado, leve",
        curiosidade: "Nome vem do latim 'alumen'"
    },

    nitrogenio: { // elemento nitrogênio
        numero: 7,
        simbolo: "N",
        nome: "Nitrogênio",
        massa: "14",
        familia: "Grupo 15 (não metal)",
        camada: "2s² 2p³ (5 elétrons)",
        ligacao: "Covalente tripla",
        exemplo: "N₂",
        caracteristicas: "Gás incolor e inodoro",
        curiosidade: "Significa 'formador de salitre'"
    },

    arsenio: { // elemento arsênio
        numero: 33,
        simbolo: "As",
        nome: "Arsênio",
        massa: "74,92",
        familia: "Grupo 15 (semimetal)",
        camada: "5 elétrons na valência",
        ligacao: "Covalente",
        exemplo: "As₂O₃",
        caracteristicas: "Sólido, tóxico, cinza metálico",
        curiosidade: "Nome significa 'forte' no grego"
    },

    gálio: { // elemento gálio
        numero: 31,
        simbolo: "Ga",
        nome: "Gálio",
        massa: "69,72",
        familia: "Grupo 13",
        camada: "3 elétrons",
        ligacao: "Covalente",
        exemplo: "GaAs",
        caracteristicas: "Derrete na mão",
        curiosidade: "Nome vem de 'Gallia' (França)"
    },

    indio: { // elemento índio
        numero: 49,
        simbolo: "In",
        nome: "Índio",
        massa: "114,82",
        familia: "Grupo 13",
        camada: "3 elétrons",
        ligacao: "Covalente",
        exemplo: "In₂O₃",
        caracteristicas: "Macio, metálico",
        curiosidade: "Nome vem da cor índigo"
    },

    talio: { // elemento tálio
        numero: 81,
        simbolo: "Tl",
        nome: "Tálio",
        massa: "204,38",
        familia: "Grupo 13",
        camada: "3 elétrons",
        ligacao: "Iônica",
        exemplo: "TlCl",
        caracteristicas: "Muito tóxico",
        curiosidade: "Nome vem de 'broto verde'"
    },

    carbono: { // elemento carbono
        numero: 6,
        simbolo: "C",
        nome: "Carbono",
        massa: "12,01",
        familia: "Grupo 14",
        camada: "4 elétrons",
        ligacao: "Covalente",
        exemplo: "CO₂",
        caracteristicas: "Base da vida",
        curiosidade: "Nome vem de 'carvão'"
    },

    silicio: { // elemento silício
        numero: 14,
        simbolo: "Si",
        nome: "Silício",
        massa: "28,09",
        familia: "Grupo 14",
        camada: "4 elétrons",
        ligacao: "Covalente",
        exemplo: "SiO₂",
        caracteristicas: "Semicondutor",
        curiosidade: "Muito usado em tecnologia"
    },

    germanio: { // elemento germânio
        numero: 32,
        simbolo: "Ge",
        nome: "Germânio",
        massa: "72,63",
        familia: "Grupo 14",
        camada: "4 elétrons",
        ligacao: "Covalente",
        exemplo: "GeO₂",
        caracteristicas: "Semicondutor",
        curiosidade: "Nome vem da Alemanha"
    },

    estanho: { // elemento estanho
        numero: 50,
        simbolo: "Sn",
        nome: "Estanho",
        massa: "118,71",
        familia: "Grupo 14",
        camada: "4 elétrons",
        ligacao: "Metálica",
        exemplo: "SnO₂",
        caracteristicas: "Resistente à corrosão",
        curiosidade: "Usado em latas"
    },

    chumbo: { // elemento chumbo
        numero: 82,
        simbolo: "Pb",
        nome: "Chumbo",
        massa: "207,2",
        familia: "Grupo 14",
        camada: "4 elétrons",
        ligacao: "Metálica",
        exemplo: "PbO",
        caracteristicas: "Muito pesado e tóxico",
        curiosidade: "Nome vem de 'plumbum'"
    },

    flerovio: { // elemento fleróvio
        numero: 114,
        simbolo: "Fl",
        nome: "Fleróvio",
        massa: "289",
        familia: "Grupo 14",
        camada: "4 elétrons",
        ligacao: "Pouco conhecida",
        exemplo: "Desconhecido",
        caracteristicas: "Radioativo e instável",
        curiosidade: "Nome vem de laboratório russo"
    },

    nitrogenio: { // repetido para garantir consistência (caso clique funcione corretamente)
        numero: 7,
        simbolo: "N",
        nome: "Nitrogênio",
        massa: "14",
        familia: "Grupo 15",
        camada: "5 elétrons",
        ligacao: "Tripla",
        exemplo: "N₂",
        caracteristicas: "Gás",
        curiosidade: "Essencial para vida"
    },

    fosforo: { // elemento fósforo
        numero: 15,
        simbolo: "P",
        nome: "Fósforo",
        massa: "30,97",
        familia: "Grupo 15",
        camada: "5 elétrons",
        ligacao: "Covalente",
        exemplo: "P₄",
        caracteristicas: "Inflamável",
        curiosidade: "Brilha no escuro"
    },

    nihonio: { // elemento nihônio
        numero: 113,
        simbolo: "Nh",
        nome: "Nihônio",
        massa: "286",
        familia: "Grupo 13",
        camada: "3 elétrons",
        ligacao: "Provavelmente covalente (não confirmada experimentalmente)",
        exemplo: "Nenhum composto confirmado devido à alta instabilidade",
        caracteristicas: "Sintético e instável",
        curiosidade: "Descoberto no Japão"
    }

};


// ========================
// SELETORES
// ========================

const elementos = document.querySelectorAll(".elemento"); // seleciona todos os cards
const modal = document.getElementById("modal"); // seleciona o modal
const fechar = document.getElementById("fechar"); // botão de fechar

// campos do modal
const mNumero = document.getElementById("modal-numero"); // número
const mSimbolo = document.getElementById("modal-simbolo"); // símbolo
const mNome = document.getElementById("modal-nome"); // nome
const mMassa = document.getElementById("modal-massa"); // massa
const mFamilia = document.getElementById("modal-familia"); // família
const mCamada = document.getElementById("modal-camada"); // camada
const mLigacao = document.getElementById("modal-ligacao"); // ligação
const mExemplo = document.getElementById("modal-exemplo"); // exemplo
const mCaracteristicas = document.getElementById("modal-caracteristicas"); // características
const mCuriosidade = document.getElementById("modal-curiosidade"); // curiosidade


// ========================
// EVENTO DE CLIQUE NOS ELEMENTOS
// ========================

elementos.forEach(elemento => { // percorre todos os cards

    elemento.addEventListener("click", () => { // adiciona evento de clique

        const chave = elemento.dataset.element; // pega o nome do elemento (data-element)
        const dados = dadosElementos[chave]; // busca os dados no objeto

        // ativa visualmente o card clicado
        elemento.classList.add("ativo"); // adiciona classe ativa

        // preenche o modal com os dados
        mNumero.textContent = dados.numero; // coloca número
        mSimbolo.textContent = dados.simbolo; // símbolo
        mNome.textContent = dados.nome; // nome
        mMassa.textContent = dados.massa; // massa
        mFamilia.textContent = dados.familia; // família
        mCamada.textContent = dados.camada; // camada
        mLigacao.textContent = dados.ligacao; // ligação
        mExemplo.textContent = dados.exemplo; // exemplo
        mCaracteristicas.textContent = dados.caracteristicas; // características
        mCuriosidade.textContent = dados.curiosidade; // curiosidade

        modal.classList.remove("hidden"); // mostra o modal

    });

});


// ========================
// FECHAR MODAL
// ========================

fechar.addEventListener("click", () => { // quando clicar no botão fechar

    modal.classList.add("hidden"); // esconde o modal

    elementos.forEach(el => el.classList.remove("ativo")); // remove estado ativo de todos

});


// fechar clicando fora
modal.addEventListener("click", (e) => { // escuta clique no fundo do modal

    if (e.target === modal) { // verifica se clicou fora do conteúdo

        modal.classList.add("hidden"); // fecha o modal

        elementos.forEach(el => el.classList.remove("ativo")); // limpa estados

    }

});