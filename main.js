const automobili = [
    {marca: "Fiat" , modello: "Punto" , alimentazione: "Benzina"},
    {marca: "Opel" , modello: "Corsa" , alimentazione: "Benzina"},  
    {marca: "Peugeot" , modello: "208" , alimentazione: "GPL"},
    {marca: "Dacia" , modello: "Duster" , alimentazione: "Metano"},
    {marca: "Renault" , modello: "Clio" , alimentazione: "Benzina"},
    {marca: "Lancia" , modello: "Ypsilon" , alimentazione: "Benzina"},
    {marca: "AlfaRomeo" , modello: "Giulietta" , alimentazione: "Diesel"},
    {marca: "Ford" , modello: "Focus" , alimentazione: "Diesel"},
    {marca: "Citroen" , modello: "C3" , alimentazione: "GPL"},
    {marca: "Fiat" , modello: "500" , alimentazione: "Elettrico"}
];

//filter()


let benzina = automobili.filter(element => {
    return element.alimentazione === "Benzina" ;
});

let diesel = automobili.filter (element => {
    return element.alimentazione === "Diesel" ;
})

let altro = automobili.filter (element => {
    return element.alimentazione != "Diesel" && element.alimentazione != "Benzina"  ;
})

console.log(benzina);
console.log(diesel);
console.log(altro);

/**************************************************************/

let animali = [
    {nome: "gatto" , famiglia: "felin" , classe: "mammifero"} ,
    {nome: "cane" , famiglia: "canidi" , classe: "mammifero"} ,
    {nome: "Tartaruga" , famiglia: "Cheloni" , classe: "Rettili"} ,
    {nome: "Gallina" , famiglia: "fasianidi" , classe: "uccelli"} ,
] ;



let mammiferi = animali.filter (element => {
    return element.classe == "mammifero" ;
})

console.log(mammiferi);

/******************************************************************/

const supereroi = ["spiderman" , "ironman" , "HULK" , "captain America"] ;

const nuovoArray = supereroi.map(element => {
    let iniziale = element.charAt(0).toUpperCase() ;
    let tuttoIlResto = element.substring(1).toLowerCase() 
    const nuovaParola= iniziale+tuttoIlResto;
    return nuovaParola ;
}) ;



console.log(nuovoArray);

/***********************************************************************/
const persone = [
    {nome: "Federico", cognome: "Simone", età: 27 },
    {nome: "Alessia", cognome: "Carrera", età: 24 },
    {nome: "Andrea", cognome: "Lege", età: 16 },
    {nome: "Aldo", cognome: "Baglio", età: 68 },
] ;

const personePatente = persone.map(persona =>{
    if (persona.età >= 18) {
        return console.log(`${persona.nome} ${persona.cognome} può guidare`)
    } else {
        return console.log(`${persona.nome} ${persona.cognome} non può guidare perchè ha meno di 18 anni `)
    }
    
})