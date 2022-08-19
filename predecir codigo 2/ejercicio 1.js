





function muestraInformaciónContacto() {

   var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];

    console.log(auntContactInfo);
}

//variables                          valor de retorno

// muestraInformaciónContacto       null
// auntContactInfo                  ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
// Console log                      auntContactInfo

// valor de prediccion               ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]




function muestraListaDeCompras() {

    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];

    frozen.push("croqueta de papa");

    console.log(frozen);
}

//variables                           valor de rtorno


// produce                             ["manzanas", "naranjas"];
 //frozen                                ["brócoli", "helado"];
//frozen                                ["brócoli", "helado, croqueta de papa"];

// console log                   ["brócoli", "helado, croqueta de papa"];



var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");


movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);


//variables                           valor de retorno

//movieLibrary                    ["Bambi", "E.T.", "Toy Story"];
//movieLibrary.push("Zoro");
//movieLibrary             ["Bambi", "E.T.", "Toy Story, Zoro"];
//movieLibrary[1] = "Beetlejuice";

//console.log       ["Bambi", "Beetlejuice", "Toy Story, Zoro"];
