function averageGrades(grades) {
  if (!grades.length) return null;
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return Math.round((sum / grades.length) * 10) / 10;
}

function parseGrades(raw) {
  return raw
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(Number)
    .filter((n) => Number.isFinite(n) && n >= 0 && n <= 100);
}

function showAverage() {
  const grades = parseGrades(document.getElementById("grades").value);
  const result = document.getElementById("result");
  const avg = averageGrades(grades);

  if (avg === null) {
    result.textContent = "Enter at least one numeric grade.";
    return;
  }

  result.textContent = "Average: " + avg.toFixed(1);
}

document.getElementById("avg-btn").addEventListener("click", showAverage);
