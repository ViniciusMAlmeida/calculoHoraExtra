
function calcular() {
    const salario = parseFloat(document.getElementById('salario').value)
    const horasMes = parseFloat(document.getElementById('horaMes').value)
    const horasExtras = parseFloat(document.getElementById('horaExtra').value)

    const vlrHora = salario / horasMes
    const vlrHoraExtra = vlrHora * 1.5
    const vlrHoraExtraBruta = vlrHoraExtra * horasExtras
    const vlrSalarioExtra = vlrHoraExtraBruta - (vlrHoraExtraBruta * 0.1)

    document.getElementById('resultado').innerHTML = `
    Valor Hora Trabalhada: ${vlrHora.toFixed(2)}<br>
    Valor Hora Extra: ${vlrHoraExtra.toFixed(2)}<br>
    Valor Hora Extra Bruta: ${vlrHoraExtraBruta.toFixed(2)}<br>
    Valor Extra Liquido: ${vlrSalarioExtra.toFixed(2)}<br>
    <span class="textoVermelho">*Valor Extra Liquido está descontanto 10% do valor bruto,<br>
    que representa o valor de impostos aproximadamente</span>`
}