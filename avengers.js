const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo Americano",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura mk LXXXV",
    armaSecundaria: "",
    velocidade: 90,
    forca: 80,
    resistencia: 85,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

//Easter egg: Acquiesce - Oasis

const thor = {
    nome: "Thor Odinson",
    codinome: "Deus do Trovão",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Stormbreaker",
    velocidade: 80,
    forca: 95,
    resistencia: 90,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Punhos",
    armaSecundaria: "",
    velocidade: 70,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const thanos = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada dupla",
    velocidade: 75,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" +
               "Codinome do personagem: " + this.codinome + "\n" +
               "Arma principal: " + this.armaPrincipal + "\n" +
               "Arma secundaria: " + this.armaSecundaria + "\n" +
               "Nível de força: " + this.forca + "\n" +
               "Nível de velocidade: " + this.velocidade + "\n" +
               "Nível de resistência: " + this.resistencia;
    }
};

const listaDePersonagens = [capitaoAmerica, homemDeFerro, thor, hulk, thanos];

for (let i = 0; i < listaDePersonagens.length; i++) {
    for (let j = i + 1; j < listaDePersonagens.length; j++) {
        let lutador1 = listaDePersonagens[i];
        let lutador2 = listaDePersonagens[j];

        console.log(`Batalha: ${lutador1.codinome} VS ${lutador2.codinome}`);
        console.log(" Lutador 1 ");
        console.log(lutador1.descricao());
        console.log("\n Lutador 2 ");
        console.log(lutador2.descricao());

        console.log("\n RESULTADO \n");

        //Velocidade
        if (lutador1.velocidade > lutador2.velocidade) {
            console.log(`Velocidade: ${lutador1.codinome} vence! (${lutador1.velocidade} x ${lutador2.velocidade})`);
        } else if (lutador2.velocidade > lutador1.velocidade) {
            console.log(`Velocidade: ${lutador2.codinome} vence! (${lutador2.velocidade} x ${lutador1.velocidade})`);
        } else {
            console.log(`Velocidade: Empate! (${lutador1.velocidade} x ${lutador2.velocidade})`);
        }


        //Força
        if (lutador1.forca > lutador2.forca) {
            console.log(`Força: ${lutador1.codinome} vence! (${lutador1.forca} x ${lutador2.forca})`);
        } else if (lutador2.forca > lutador1.forca) {
            console.log(`Força: ${lutador2.codinome} vence! (${lutador2.forca} x ${lutador1.forca})`);
        } else {
            console.log(`Força: Empate! (${lutador1.forca} x ${lutador2.forca})`);
        }


       //Resistencia
       if (lutador1.resistencia > lutador2.resistencia) {
           console.log(`Resistência: ${lutador1.codinome} vence! (${lutador1.resistencia} x ${lutador2.resistencia})`);
       } else if (lutador2.resistencia > lutador1.resistencia) {
           console.log(`Resistência: ${lutador2.codinome} vence! (${lutador2.resistencia} x ${lutador1.resistencia})`);
       } else {
           console.log(`Resistência: Empate! (${lutador1.resistencia} x ${lutador2.resistencia})`);
       }

        console.log("\n\n");

    }
}

