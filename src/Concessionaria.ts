class Concessionaria {


    private endereco: string;
    private listaDeCarros: Array<Carro>;


    constructor(endereco:string){
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco;

    }
    public mostrarListaDeCarros(): any {
        return this.listaDeCarros;
    }
}


let concessionaria = new Concessionaria("Av. Paulista");
console.log(concessionaria)