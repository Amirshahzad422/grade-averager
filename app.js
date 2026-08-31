function averageGrades(grades) {
  if (!grades.length) return null;
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

function parseGrades(raw) {
  return raw
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

function showAverage() {
  const grades = parseGrades(document.getElementById("grades").value);
  const result = document.getElementById("result");
  const avg = averageGrades(grades);

  if (avg === null) {
    result.textContent = "Enter at least one numeric grade.";
    return;
  }

  result.textContent = "Average: " + avg.toFixed(2);
}

document.getElementById("avg-btn").addEventListener("click", showAverage);
