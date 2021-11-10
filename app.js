let x = 1;
let y = 4;
let z = -1;


if (x < 2 && y > 3 && z < 0) {
    document.getElementById("p1").innerHTML ="x est plus petit que 2 et y plus grand que 4et z plus petit que 0"
}

if (x < 2 && y > 3 || z === -1) {
    document.getElementById("p2").innerHTML = "x est plus petit que 2 et y plus grand que 4 ou z strictement égal à -1"
}
