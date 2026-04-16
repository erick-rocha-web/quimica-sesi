// ========================
// BASE DE DADOS DOS ELEMENTOS
// ========================

const dadosElementos = { // objeto que armazena todos os dados dos elementos

    boro: {
        numero: 5,
        simbolo: "B",
        nome: "Boro",
        massa: "10,81",
        familia: "Família do Boro (Grupo 13 - 3A)",
        camada: "2s² 2p¹ (3 elétrons)",
        ligacao: "Covalente",
        exemplo: "H₃BO₃",
        caracteristicas: "Sólido, semimetal, cinza escuro",
        curiosidade: "Nome vem do árabe 'buraq', relacionado ao bórax"
    },
    aluminio: {
        numero: 13,
        simbolo: "Al",
        nome: "Alumínio",
        massa: "26,98",
        familia: "Família do Boro (Grupo 13 - 3A)",
        camada: "3s² 3p¹ (3 elétrons)",
        ligacao: "Metálica / Iônica",
        exemplo: "Al₂O₃",
        caracteristicas: "Sólido, prateado, metal leve",
        curiosidade: "Nome vem do latim 'alumen'"
    },
    gálio: {
        numero: 31,
        simbolo: "Ga",
        nome: "Gálio",
        massa: "69,72",
        familia: "Família do Boro (Grupo 13 - 3A)",
        camada: "4s² 4p¹ (3 elétrons)",
        ligacao: "Metálica / Covalente",
        exemplo: "GaAs",
        caracteristicas: "Metal que derrete na mão (PF: 29,7°C)",
        curiosidade: "Nome vem de 'Gallia' (França)"
    },
    indio: {
        numero: 49,
        simbolo: "In",
        nome: "Índio",
        massa: "114,82",
        familia: "Família do Boro (Grupo 13 - 3A)",
        camada: "5s² 5p¹ (3 elétrons)",
        ligacao: "Metálica",
        exemplo: "In₂O₃",
        caracteristicas: "Metal macio, prateado",
        curiosidade: "Nome vem da cor índigo em seu espectro"
    },
    talio: {
        numero: 81,
        simbolo: "Tl",
        nome: "Tálio",
        massa: "204,38",
        familia: "Família do Boro (Grupo 13 - 3A)",
        camada: "6s² 6p¹ (3 elétrons)",
        ligacao: "Metálica / Iônica",
        exemplo: "TlCl",
        caracteristicas: "Metal pesado, muito tóxico",
        curiosidade: "Nome vem do grego 'thallos' (broto verde)"
    },
    nihonio: {
        numero: 113,
        simbolo: "Nh",
        nome: "Nihônio",
        massa: "286",
        familia: "Família do Boro (Grupo 13 - 3A)",
        camada: "7s² 7p¹ (3 elétrons)",
        ligacao: "Provavelmente covalente",
        exemplo: "N/A",
        caracteristicas: "Sintético, altamente radioativo",
        curiosidade: "Primeiro elemento descoberto na Ásia (Japão)"
    },
    carbono: {
        numero: 6,
        simbolo: "C",
        nome: "Carbono",
        massa: "12,01",
        familia: "Família do Carbono (Grupo 14 - 4A)",
        camada: "2s² 2p² (4 elétrons)",
        ligacao: "Covalente",
        exemplo: "CO₂",
        caracteristicas: "Não-metal, base da vida orgânica",
        curiosidade: "Nome vem do latim 'carbo' (carvão)"
    },
    silicio: {
        numero: 14,
        simbolo: "Si",
        nome: "Silício",
        massa: "28,09",
        familia: "Família do Carbono (Grupo 14 - 4A)",
        camada: "3s² 3p² (4 elétrons)",
        ligacao: "Covalente",
        exemplo: "SiO₂",
        caracteristicas: "Semimetal, semicondutor",
        curiosidade: "Segundo elemento mais abundante na crosta terrestre"
    },
    germanio: {
        numero: 32,
        simbolo: "Ge",
        nome: "Germânio",
        massa: "72,63",
        familia: "Família do Carbono (Grupo 14 - 4A)",
        camada: "4s² 4p² (4 elétrons)",
        ligacao: "Covalente",
        exemplo: "GeO₂",
        caracteristicas: "Semimetal, semicondutor",
        curiosidade: "Sua existência foi prevista por Mendeleev"
    },
    estanho: {
        numero: 50,
        simbolo: "Sn",
        nome: "Estanho",
        massa: "118,71",
        familia: "Família do Carbono (Grupo 14 - 4A)",
        camada: "5s² 5p² (4 elétrons)",
        ligacao: "Metálica",
        exemplo: "SnO₂",
        caracteristicas: "Metal maleável, resistente à corrosão",
        curiosidade: "Grita ao ser dobrado (o 'grito do estanho')"
    },
    chumbo: {
        numero: 82,
        simbolo: "Pb",
        nome: "Chumbo",
        massa: "207,2",
        familia: "Família do Carbono (Grupo 14 - 4A)",
        camada: "6s² 6p² (4 elétrons)",
        ligacao: "Metálica",
        exemplo: "PbO",
        caracteristicas: "Metal pesado, denso e tóxico",
        curiosidade: "Nome vem do latim 'plumbum'"
    },
    flerovio: {
        numero: 114,
        simbolo: "Fl",
        nome: "Fleróvio",
        massa: "289",
        familia: "Família do Carbono (Grupo 14 - 4A)",
        camada: "7s² 7p² (4 elétrons)",
        ligacao: "Desconhecida",
        exemplo: "N/A",
        caracteristicas: "Sintético, radioativo",
        curiosidade: "Nome homenageia o Flerov Laboratory de Reações Nucleares"
    },
    nitrogenio: {
        numero: 7,
        simbolo: "N",
        nome: "Nitrogênio",
        massa: "14,01",
        familia: "Família do Nitrogênio (Grupo 15 - 5A)",
        camada: "2s² 2p³ (5 elétrons)",
        ligacao: "Covalente Tripla",
        exemplo: "N₂",
        caracteristicas: "Gás incolor, inodoro e inerte",
        curiosidade: "Compõe 78% da atmosfera terrestre"
    },
    fosforo: {
        numero: 15,
        simbolo: "P",
        nome: "Fósforo",
        massa: "30,97",
        familia: "Família do Nitrogênio (Grupo 15 - 5A)",
        camada: "3s² 3p³ (5 elétrons)",
        ligacao: "Covalente",
        exemplo: "P₄",
        caracteristicas: "Não-metal, altamente reativo",
        curiosidade: "O nome significa 'portador de luz'"
    },
    arsenio: {
        numero: 33,
        simbolo: "As",
        nome: "Arsênio",
        massa: "74,92",
        familia: "Família do Nitrogênio (Grupo 15 - 5A)",
        camada: "4s² 4p³ (5 elétrons)",
        ligacao: "Covalente",
        exemplo: "As₂O₃",
        caracteristicas: "Semimetal, altamente tóxico",
        curiosidade: "Historicamente conhecido como o 'rei dos venenos'"
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

    elemento.addEventListener("click", () => {

        const chave = elemento.dataset.element;
        const dados = dadosElementos[chave];

        // EXPLOSÃO
        elemento.classList.add("explodindo");

        setTimeout(() => {

            elemento.classList.remove("explodindo");
            elemento.classList.add("ativo");

            // preenche modal
            mNumero.textContent = dados.numero;
            mSimbolo.textContent = dados.simbolo;
            mNome.textContent = dados.nome;
            mMassa.textContent = dados.massa;
            mFamilia.textContent = dados.familia;
            mCamada.textContent = dados.camada;
            mLigacao.textContent = dados.ligacao;
            mExemplo.textContent = dados.exemplo;
            mCaracteristicas.textContent = dados.caracteristicas;
            mCuriosidade.textContent = dados.curiosidade;

            modal.classList.remove("hidden");

        }, 330); // tempo da explosão antes de abrir
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