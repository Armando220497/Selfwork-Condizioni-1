let v = prompt("Inserisci un voto");

switch (true) {

    // casi
    case v < 18:
        console.log("insufficiente");
        break;

    case v >= 18 && v < 21:
        console.log("sufficiente");
        break;

    case v >= 21 && v < 24:
        console.log("buono");
        break;

    case v >= 24 && v < 27:
        console.log("distinto");
        break;

    case v >= 27 && v <= 29:
        console.log("ottimo");
        break;

    case v == 30:
        console.log("eccellente");
        break;

    default:
        console.log("Voto non valido");
}