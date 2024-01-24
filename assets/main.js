function checkResult() {
  const birthdayResult = document.getElementById("input-birthday");
  const birthday = birthdayResult.value;

  const now = new Date().getFullYear();
  const age = now - birthday;

  const resultView = document.getElementById("result");
  resultView.innerHTML = "Usia kamu ditahun ini adalah " + age + " Tahun";
  if (birthday > now) {
    resultView.innerHTML = "Masukan tahun kelahiran kurang dari tahun ini !!!";
  }
}
