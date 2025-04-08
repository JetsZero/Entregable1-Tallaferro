
const juegos = [];
//funcion para agregar juego a la lista de juegos
function agregarGame(nombre){
    
    if(search(nombre)){
        alert("este juego ya existe")
    }
    else{
        const tipo = prompt("Tipo de juego: ");
        const temp = prompt("duracion aproximada: ");
        const juego = {
            nombre: nombre || "",
            tipo: tipo || "",
            temp: temp || "",
        }
        juegos.push(juego)
        alert("se agrego el juego: ",juego)
    } 
}
//funcion para buscar objeto juego
function search(nameX){
    
    for (const srch of juegos) {
        if (srch.nombre == nameX){
            return srch;
        }
    }
    return null;
}
//funcion para buscar los juegos que comparten tipo
function searchType (typeName){
    const generoJuegos = [];
    for (const srch of juegos) {
        if (typeName == srch.tipo ){
            generoJuegos.push(srch)
        }
    }
    if (generoJuegos.length == 0){
        return "No existe este tipo de juego en la lista ";
    }
    return generoJuegos;
}
//funcion para editar las propiedades de juego
function edit (editarJuego){
    editarJuego.nombre = prompt("Cambiar el nombre de "+editarJuego.nombre+" por: ");
    let cambiarTipo = prompt("Desea cambiar el tipo del juego [si/no]?")
    if(cambiarTipo == "si"){
        editarJuego.tipo = prompt("Tipo de juego: ");
    }
    editarJuego.temp = prompt("duracion aproximada: ");

}
//menu
let opt = parseInt(prompt("Bienvenido, por favor ingrese a una de las opciones presentes: \n"+ 
    "1) Agregar Juego\n"+
    "2) Buscar juego\n"+
    "3) Ordenar juegos por el tipo\n"+
    "4) Ver todos los juegos\n"+
    "5) Editar juego\n"+
    "6) Eliminar Juego"+
    "0) salir"))
//ciclo menu y operadores simulador
while (opt > 0 ) {
    switch (opt) {
        //agregar
        case 1: 
            console.log("Ha ingresado a la opcion de agregar juego a la lista, por favor ingrese el juego")
            const nombre = prompt("nombre del juego: ");
            agregarGame(nombre);
            break;
        //buscar nombre
        case 2:
            let buscar = prompt("Juego a buscar: ")
            let srchResult = search(buscar)
            if(srchResult){
                alert(srchResult)
            }
            else{
                alert("no se encontro el juego "+buscar)
            }
            break;
        //buscar juegos por tipo
        case 3:
            let genero = prompt("Ingrese el genero a buscar: ")
            alert(JSON.stringify(searchType(genero),null,2))
            break;
        //Lista de juego
        case 4:
            console.log(JSON.stringify(juegos,null,2))
            break;
        //editar juego de la lista
        case 5:
            let ed = prompt("Ingrese juego que quiere editar: ")
            let result = search(ed)
            if (result){
                edit(result)
            }
            else{
                let posibleAgregar = prompt("No existe este juego, Quiere agregarlo [si/no]?")
                if (posibleAgregar == "si"){
                    agregarGame(ed)
                }
            }
            break;
        //eliminar juego
        case 6:
            let juego = prompt("Juego a eliminar: ")
            let rsult = search(juego)

            if (rsult){
                let punto = juegos.findIndex(data => data.nombre == juego)
                if (punto != -1){
                    console.log(rsult.nombre+" ha sido eliminado de la lista")
                    juegos.splice(punto, 1)
                }
                else{
                    alert("El juego no esta en la lista")
                }
            }

            break

        //salir de la consola
        default:
            console.log("Para salir seleccione el numero 0")
            break;
        
    }
    //menu
    opt = parseInt(prompt("Bienvenido, por favor ingrese a una de las opciones presentes: \n"+ 
        "1) Agregar Juego\n"+
        "2) Buscar juego\n"+
        "3) Ordenar juegos por el tipo\n"+
        "4) Ver todos los juegos\n"+
        "5) Editar juego\n"+
        "6) Eliminar Juego\n"+
        "0) salir"))
    
}

console.log("gracias por entrar"); //fin
