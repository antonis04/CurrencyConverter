document.getElementById('przelicz').addEventListener('click', function () {
    const kwota = parseFloat(document.getElementById('kwota').value);
    const kurs = parseFloat(document.getElementById('kurs').value);

    if (isNaN(kwota) || isNaN(kurs) || kwota <= 0 || kurs <= 0) {
        document.getElementById('wynik').innerText = "Podaj poprawne wartości.";
        return;
    }

    const wynik = kwota * kurs;
    document.getElementById('wynik').innerText = `Przeliczona kwota: ${wynik.toFixed(2)}`;
});
