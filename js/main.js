var dia = prompt("Introduce un dia de la semana");
switch (dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es laborable");
        break;
    case "sabado":
    case "domingo":
        console.log("No es laborable");
        break;
    default:
        console.log("No has introducido un día de la semana");
        break;
}