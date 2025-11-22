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
    return element.alimentazione == "Benzina" ;
});

let diesel = automobili.filter (element => {
    return element.alimentazione == "Diesel" ;
})

let altro = automobili.filter (element => {
    return element.alimentazione != "Diesel" && element.alimentazione != "Benzina"  ;
})

console.log(benzina);
console.log(diesel);
console.log(altro);





//let diesel = [];
//let altro = [];


/*let benzina = automobili.filter(element => {
    if (element.alimentazione == "Benzina") {
        
    } else if (element.alimentazione == "Diesel"){
        diesel.push(element);
    } else {
        altro.push(element) ;
    }
}) ;

console.log(diesel);
console.log(altro) ;
console.log(benzina);*/