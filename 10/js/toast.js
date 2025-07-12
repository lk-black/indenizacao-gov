document.addEventListener("DOMContentLoaded", function () {
    const nomes = [
        "Ana P.", "Bruno G.", "Camila T.", "Daniel M.", "Eduarda L.", "Felipe K.", "Gabriela R.",
        "Henrique F.", "Isabela C.", "João V.", "Karen B.", "Leonardo N.", "Mariana S.",
        "Nathan D.", "Olívia A.", "Paulo Z.", "Quésia E.", "Rafael Q.", "Sara J.", "Tiago U.",
        "Úrsula W.", "Vinícius H.", "Wesley O.", "Yasmin I.", "Zeca X.", "Beatriz F.", "Caio M.",
        "Débora V.", "Erick J.", "Fernanda R.", "Guilherme D.", "Helena L.", "Ian S.", "Júlia T.",
        "Kleber O.", "Lara C.", "Matheus G.", "Nicole B.", "Otávio H.", "Priscila W.", "Renan Y.",
        "Sabrina U.", "Tales M.", "Valéria P.", "William Q.", "Xênia K.", "Yago T.", "Zilda J.",
        "Alex F.", "Bianca M.", "Carlos T.", "Diana C.", "Elias R.", "Fabiana Z.", "Giovana S.",
        "Hugo L.", "Ingrid D.", "Jonas P.", "Kamila H.", "Luana Q.", "Maurício E.", "Natália V.",
        "Orlando G.", "Patrícia N.", "Quintino O.", "Roberta X.", "Samuel I.", "Talita B.",
        "Uelinton M.", "Vera A.", "Wagner K.", "Xavier D.", "Yuri C.", "Zuleica T.", "Alan J.",
        "Bruna Y.", "Cristiano Z.", "Daniele A.", "Eduardo S.", "Fernanda M.", "Gerson C.",
        "Heloísa F.", "Igor N.", "Janaina B.", "Kelvin G.", "Larissa H.", "Miguel W.",
        "Nayara O.", "Pedro L.", "Quezia D.", "Rita T.", "Sandro U.", "Tatiane P.",
        "Ubiratan Q.", "Vanessa V.", "Wellington X.", "Ximena R.", "Yasmin G.", "Zé Luiz T."
    ];

    const cidades = [
        "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Salvador", "Fortaleza",
        "Curitiba", "Manaus", "Recife", "Porto Alegre", "Goiânia", "Belém", "Campinas",
        "São Luís", "Maceió", "Natal", "Campo Grande", "Teresina", "João Pessoa", "Cuiabá",
        "Aracaju", "Florianópolis", "Macapá", "Palmas", "Boa Vista", "Vitória", "Niterói",
        "Ribeirão Preto", "São José dos Campos", "Santos", "Sorocaba", "Uberlândia", "Londrina",
        "Juiz de Fora", "Joinville", "Caxias do Sul", "Feira de Santana", "Aparecida de Goiânia",
        "Anápolis", "Pelotas", "Maringá", "Mauá", "Caruaru", "Vila Velha", "São Bernardo do Campo",
        "São José do Rio Preto", "Bauru", "Petrolina", "Jundiaí", "Ilhéus", "Canoas",
        "Piracicaba", "Franca", "Itabuna", "Blumenau", "Chapecó", "Foz do Iguaçu", "Cascavel",
        "Barueri", "Betim", "Ipatinga", "Taubaté", "Volta Redonda", "Marabá", "Paulínia",
        "Ponta Grossa", "Rondonópolis", "Teófilo Otoni", "Itabira", "Araraquara", "Caraguatatuba",
        "Cubatão", "Criciúma", "Linhares", "Jequié", "Araguari", "Passo Fundo", "Rio Branco",
        "Itajaí", "Patos de Minas", "Vitória da Conquista", "Sete Lagoas", "Ourinhos",
        "São Carlos", "Uberaba", "Boa Esperança", "Garanhuns", "Itaquaquecetuba", "Camaçari",
        "Guaratinguetá", "Poços de Caldas", "Bragança Paulista", "Barbacena", "Catanduva",
        "Tupã", "Arapiraca", "Resende", "Varginha", "Bagé", "Itu", "Leme", "Três Lagoas",
        "Rio Verde", "Tatuí", "São João del Rei", "Timóteo"
    ];

    const tempos = [
        "15 seg atrás", "37 seg atrás", "58 seg atrás",
        "1 min atrás", "2 min atrás", "3 min atrás", "4 min atrás", "5 min atrás", "6 min atrás", "7 min atrás",
        "8 min atrás", "9 min atrás", "10 min atrás", "12 min atrás", "15 min atrás", "18 min atrás",
        "20 min atrás", "22 min atrás", "25 min atrás", "30 min atrás", "35 min atrás", "40 min atrás",
        "45 min atrás", "50 min atrás", "55 min atrás", "1 hora atrás", "1h15 atrás", "1h30 atrás",
        "1h45 atrás", "2 horas atrás", "2h30 atrás", "3 horas atrás", "4 horas atrás",
        "5 horas atrás", "6 horas atrás", "7 horas atrás", "8 horas atrás",
        "9 horas atrás", "10 horas atrás", "11 horas atrás", "12 horas atrás",
        "13 horas atrás", "14 horas atrás", "15 horas atrás", "16 horas atrás",
        "Ontem", "1 dia atrás", "2 dias atrás", "3 dias atrás", "4 dias atrás",
        "5 dias atrás", "6 dias atrás", "1 semana atrás"
    ];


    function gerarValorAleatorio() {
        const valor = Math.floor(Math.random() * (6000 - 1200 + 1)) + 1200;
        return "R$ " + valor.toLocaleString('pt-BR') + ",00";
    }

    const modal = document.querySelector('.toast-popup');
    const spanNome = modal.querySelector('.nomefictitio');
    const spanCidade = modal.querySelector('.cidadefictitia');
    const spanValor = modal.querySelector('.valorficitio');
    const spanTempo = modal.querySelector('.minutofictitio');
    const barra = modal.querySelector('.barradeprogresso');

    function atualizarToast() {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const cidade = cidades[Math.floor(Math.random() * cidades.length)];
        const tempo = tempos[Math.floor(Math.random() * tempos.length)];
        const valor = gerarValorAleatorio();

        spanNome.textContent = nome;
        spanCidade.textContent = cidade;
        spanTempo.textContent = tempo;
        spanValor.textContent = valor;

        // Reiniciar barra
        barra.style.transition = 'none';
        barra.style.width = '100%';
        void barra.offsetWidth;
        barra.style.transition = 'width 6s linear';
        barra.style.width = '0%';

        // Mostrar toast
        modal.classList.remove("opacity-0", "translate-y-4");
        modal.classList.add("opacity-100", "translate-y-0");
        modal.style.pointerEvents = "auto";

        // Esconder após 6 segundos
        setTimeout(() => {
            modal.classList.remove("opacity-100", "translate-y-0");
            modal.classList.add("opacity-0", "translate-y-4");
            modal.style.pointerEvents = "none";
        }, 6000);
    }

    // Dispara primeiro após 7s e depois a cada 7s
    setTimeout(() => {
        atualizarToast();
        setInterval(atualizarToast, 7000);
    }, 7000);
});