var paragraph1 = []
var paragraph2 = []

function para1() {

    for( var i = 1 ; i <= 6 ; i++)
    paragraph1.push(document.getElementById("1_row_input_" + i).value);

    paragraph1.join(".");

    document.getElementById("paragraph1").innerHTML = paragraph1;
}
function para2() {

    for( var j = 1 ; j <= 6 ; j++)
    paragraph2.push(document.getElementById("2_row_input_" + j).value);

    paragraph2.join(".");

    document.getElementById("paragraph2").innerHTML = paragraph2;
}