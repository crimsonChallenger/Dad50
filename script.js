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
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  if (absN >= 1e36) {
    return n.toExponential(2);
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
  const s = secondsAlive()
  const m = s / 60; // minutes old
  const h = s / 3600; // hours old
  const d = s / 86400; // days old
  const w = s / 604800; // weeks old
  const mo = s / 2629800; // months old
  const y = s / 31557600; // years old

  const ms = s * 1e3; // milliseconds old
  const us = s * 1e6; // microseconds old
  const ns = s * 1e9; // nanoseconds old
  const ps = s * 1e12; // picoseconds old
  const fs = s * 1e15; // femtoseconds old
  const as = s * 1e18; // attoseconds old
  const zs = s * 1e21; // zeptoseconds old

  return {
    generatedAt: new Date().toISOString(),
    metrics: [
      metric("Millennia old: ", y / 1000, "Total millennia elapsed since birth date."),
      metric("Centuries old: ", y / 100, "Total centuries elapsed since birth date."),
      metric("Half-centuries old: ", y / 50, "Total half-centuries elapsed since birth date."),
      metric("Scores old: ", y / 20, "Total scores elapsed since birth date. 1 score = 20 years."),
      metric("Decades old: ", y / 10, "Total decades elapsed since birth date."),
      metric("Years old: ", y, "Total years elapsed since birth date. Uses 365.25 days/year to account for leap years."),
      metric("Months old: ", mo, "Total months elapsed since birth date. Uses average month length of 30.44 days."),
      metric("Weeks old: ", w, "Total weeks elapsed since birth date."),
      metric("Leap years old: ", y / 4, "Estimate of leap years elapsed using 1 leap year every 4 years."),
      metric("Days old: ", d, "Total days elapsed since birth date."),
      metric("Hours old: ", h, "Total hours elapsed since birth date."),
      metric("Minutes old: ", m, "Total minutes elapsed since birth date."),
      metric("Seconds old: ", s, "Total seconds elapsed since birth date."),
      metric("Milliseconds old: ", ms, "Total milliseconds elapsed since birth date."),
      metric("Microseconds old: ", us, "Total microseconds elapsed since birth date."),
      metric("Nanoseconds old: ", ns, "Total nanoseconds elapsed since birth date."),
      metric("Picoseconds old: ", ps, "Total picoseconds elapsed since birth date."),
      metric("Femtoseconds old: ", fs, "Total femtoseconds elapsed since birth date."),
      metric("Attoseconds old: ", as, "Total attoseconds elapsed since birth date."),
      metric("Zeptoseconds old: ", zs, "Total zeptoseconds elapsed since birth date."),
      metric("Planck times old: ", s / 5.39e-44, "Calculated using the Planck time of 5.39 * 10^-44 seconds."),

      metric("Dog years old: ", y * 7, "Estimated using one human year = 7 dog years."),
      metric("Cat years old: ", y * 6, "Estimated using one human year = 6 cat years."),

      metric("Chinese zodiac cycles old: ", y / 12, "Calculated using the 12-year Chinese zodiac cycle. "),
      metric("Presidential terms old: ", y / 4, "Calculated using the 4-year U.S. presidential term."),
      metric("Olympiads old: ", y / 4, "Calculated using the 4-year Olympic cycle."),
      metric("Christmases old: ", y, "Estimated using one Christmas celebration every year."),
      metric("Birthdays old: ", y, "Estimated using one birthday every year."),
      metric("New Years old: ", y, "Estimated using one New Year every year."),

      metric("Heartbeats old: ", m * 70, "Estimated using an average resting heart rate of 70 beats per minute."),
      metric("Breaths old: ", m * 15, "Estimated using an average breathing rate of 15 breaths per minute."),
      metric("Blinks old: ", m * 15, "Estimated using an average blink rate of 15 blinks per minute."),
      metric("Meals old: ", d * 3, "Estimated using 3 meals per day."),

      metric("Miles around the Sun old: ", s * 18.5, "Estimated using Earth's orbital speed of ~18.5 miles per second."),
      metric("Earth rotations old: ", d, "Estimated using 1 Earth rotation every 24 hours."),
      metric("Moon cycles old: ", d / 29.53, "It takes the moon about 29.53 days from new moon to new moon. "),
      metric("Sunsets old: ", d, "Estimated using 1 sunset every day."),
      metric("Seasons old: ", y * 4, "Estimated using 4 seasons every year."),
      metric("Trips around the Sun old: ", y, "Calculated using one full orbit around the Sun per year."),

      metric("Google searches old: ", s * 99000, "Estimated using ~99,000 Google searches every second."),
      metric("Emails old: ", s * 4000000, "Estimated using ~4 million emails sent every second."),
      metric("YouTube hours old: ", m * 500, "Estimated using ~500 hours of YouTube content uploaded every minute."),
      metric("Windows updates old: ", d / 7, "Estimated using 1 Windows update every week."),
      metric("Coffee cups old: ", s * 28000, "Estimated using ~28,000 cups of coffee consumed every second worldwide."),
      metric("Text messages old: ", s * 8000000, "Estimated using ~8 million text messages sent every second."),
      metric("TikToks old: ", s * 1500, "Estimated using ~1,500 TikToks uploaded every second."),

      metric("Songs released old: ", d * 120000, "Estimated using ~120,000 songs released every day globally."),
      metric("Movies released old: ", d * 10000, "Estimated using ~10,000 movies released every day worldwide."),
      metric("Books published old: ", d * 6000, "Estimated using ~6,000 books published every day globally."),

      {
        title: "Family memories old: ",
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