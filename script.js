{
  const getAmount = () => {
    return parseFloat(document.getElementById("kwota").value);
  };

  const getCurrency = () => {
    return parseFloat(document.getElementById("kurs").value);
  };

  const displayResult = (message) => {
    document.getElementById("wynik").innerText = message;
  };

  const calculateResult = (amount, currency) => {
    document.getElementById("przelicz").addEventListener("click", function () {
      const amount = getAmount();
      const currency = getCurrency();

      if (isNaN(amount) || isNaN(currency) || amount <= 0 || currency <= 0) {
        displayResult("Podaj poprawne wartości.");
        return;
      }

      const wynik = amount * currency;
      displayResult(`Przeliczona kwota: ${wynik.toFixed(2)}`);
    });
  };

  calculateResult();
}
