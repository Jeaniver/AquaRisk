function calculate() {
  const ph = document.getElementById("ph").value;
  const turbidity = document.getElementById("turbidity").value;
  const temp = document.getElementById("temp").value;

  if (ph === "" || turbidity === "" || temp === "") {
    alert("Please fill all fields");
    return;
  }

  let riskCount = 0;

  if (ph < 6.5 || ph > 8.5) riskCount++;
  if (turbidity > 5) riskCount++;
  if (temp > 30) riskCount++;

  let riskLevel = "SAFE";
  if (riskCount === 1) riskLevel = "MODERATE RISK";
  if (riskCount >= 2) riskLevel = "HIGH RISK";

  localStorage.setItem("waterData", JSON.stringify({
    ph,
    turbidity,
    temp,
    riskCount,
    riskLevel
  }));

  window.location.href = "result.html";
}