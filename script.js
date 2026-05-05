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
      metric("Seconds alive", s, "Total runtime in seconds."),
      metric("Minutes alive", s / 60, "Total runtime in minutes."),
      metric("Hours alive", s / 3600, "Total runtime in hours."),
      metric("Days alive", d, "Total days since birth."),

      metric("Estimated heartbeats", s * (70 / 60), "Estimated from 70 bpm."),
      metric("Estimated breaths", s * (15 / 60), "Estimated from 15 breaths per minute."),
      metric("Estimated blinks", s * (15 / 60), "Estimated from 15 blinks per minute."),
      metric("Estimated hours slept", d * 8, "Estimated from 8 hours per day."),
      metric("Estimated meals eaten", d * 3, "Estimated from 3 meals per day."),

      metric("Miles Earth traveled around the Sun", s * 18.5, "Earth moves ~18.5 miles/sec."),

      metric("Google searches during your lifetime", s * 99000, "Rough estimate using ~99k/sec."),
      metric("Emails sent worldwide during your lifetime", s * 4000000, "Very rough estimate."),

      {
        title: "Times you proved you're the best dad ever",
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