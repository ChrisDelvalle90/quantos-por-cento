function calcular()
{
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    calculo = parseFloat(num1 / num2)*100
    alert(num1 + " é " + calculo.toFixed(2) + "% de " + num2)
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
}