class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Converte o tipo para minúsculas para facilitar a comparação
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'não tem um ataque definido';
        }

        console.log(`o ${this.tipo} atacou ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi('Gandalf', 150, 'Mago');
heroi1.atacar();  // Saída: o mago atacou usou magia

const heroi2 = new Heroi('Aragorn', 30, 'Guerreiro');
heroi2.atacar();  // Saída: o guerreiro atacou usou espada

const heroi3 = new Heroi('Li', 25, 'Monge');
heroi3.atacar();  // Saída: o monge atacou usou artes marciais

const heroi4 = new Heroi('Shadow', 28, 'Ninja');
heroi4.atacar();  // Saída: o ninja atacou usou shuriken