class Carro{

    private modelo:string;
    private numeroDePortas:number;
    private velocidade:number = 0;


    constructor(modelo:string, numeroDePorta:number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePorta;

    }
    public acelerar():void{
        this.velocidade  = this.velocidade + 10
    }
    public parar():void{
        this.velocidade = 0;
    }
    public velocidadeAtual():number{
        return this.velocidade
    }
}

let carroA = new Carro("Hiaci", 5);
carroA.acelerar();
console.log(carroA)