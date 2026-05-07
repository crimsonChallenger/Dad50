// ===== CONFIG =====
const BIRTHDAY = new Date("1976-05-08T00:00:00Z");

// ===== NUMBER FORMATTING =====
const NUMBER_NAMES = [
  [10 ** 33, "decillion"],
  [10 ** 30, "nonillion"],
  [10 ** 27, "octillion"],
  [10 ** 24, "septillion"],
  [10 ** 21, "sextillion"],
  [10 ** 18, "quintillion"],
  [10 ** 15, "quadrillion"],
  [10 ** 12, "trillion"],
  [10 ** 9, "billion"],
  [10 ** 6, "million"],
  [10 ** 3, "thousand"],
];

function formatNumber(n) {
  if (n === null || n === undefined) {
    return null;
  }

  const absN = Math.abs(n);

  if (absN < 1000) {
    return n.toLocaleString(undefined, {
      maximumFractionDigits: 0
    });
  }

  for (const [value, name] of NUMBER_NAMES) {
    if (absN >= value) {
      return `${(n / value).toFixed(2)} ${name}`;
    }
  }

  return n.toExponential(2);
}

// ===== TIME =====
function secondsAlive() {
  const now = new Date();
  return (now - BIRTHDAY) / 1000;
}

// ===== METRIC HELPER =====
function metric(title, value, note) {
  return {
    title: title,
    displayValue: formatNumber(value),
    note: note,
  };
}

// ===== METRICS =====
function getMetrics() {
  const s = secondsAlive();
  const d = s / 86400;

  return {
    generatedAt: new Date().toISOString(),
    metrics: [
      
      metric("Years old: ", d / 365, "Total years elapsed since birth date."),
      metric("Seconds old:", s, "Total seconds elapsed since birth date."),
      metric("Minutes old: ", s / 60, "Total minutes elapsed since birth date."),
      metric("Hours old: ", s / 3600, "Total hours elapsed since birth date."),
      metric("Days old: ", d, "Total days elapsed since birth date."),
      metric("Zeptoseconds old: ", s * 10**21, "Total zeptoseconds elapsed since birth date."),

      metric("Estimated heartbeats old: ", s * (70 / 60), "Estimated from 70 bpm."),
      metric("Estimated breaths old: ", s * (15 / 60), "Estimated from 15 breaths per minute."),
      metric("Estimated blinks old: ", s * (15 / 60), "Estimated from 15 blinks per minute."),
      metric("Estimated meals old: ", d * 3, "Estimated from 3 meals per day."),

      metric("Miles Earth traveled around the Sun old: ", s * 18.5, "Earth moves ~18.5 miles/sec."),

      metric("Estimated global Google searches old: ", s * 99000, "estimated from ~99k/sec."),
      metric("Estimated global emails old: ", s * 4000000, "Very rough estimate."),

      {
        title: "Estimated dad jokes old: ",
        displayValue: "OverflowError",
        note: "Value exceeds measurable bounds.",
      }
    ]
  };
}

function renderMetrics() {
  const data = getMetrics();
  const container = document.getElementById("metrics");

  container.innerHTML = "";

  for (const item of data.metrics) {
    const card = document.createElement("div");

    card.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.displayValue}</p>
      <small>${item.note}</small>
    `;

    container.appendChild(card);
  }
}

renderMetrics();
setInterval(renderMetrics, 1000);