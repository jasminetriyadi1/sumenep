/* ═══════════════════════════════════════════════════════════════
   main.js  —  WebGIS Aksesibilitas Faskes Kabupaten Sumenep
   DATA SINKRON dengan peta.js (FACILITIES array, 108 faskes nyata)
   Sumber: Fasyankes_Sumenep_LENGKAP.csv
═══════════════════════════════════════════════════════════════ */

/* ═══════════════════ DATA SINKRON CSV ═══════════════════ */

// Tipe faskes sesuai CSV: puskesmas(31), rs(6), klinik(21), faskes(46), dpm(4) = 108 total
const TYPE_COUNT = { puskesmas: 31, rs: 6, klinik: 21, lainnya: 50 };
const TYPE_LABEL = { puskesmas: "Puskesmas", rs: "RS / Klinik Utama", klinik: "Klinik Pratama", lainnya: "Faskes / DPM" };
const TYPE_COLOR = { puskesmas: "#1a7fd4", rs: "#e84545", klinik: "#f59e0b", lainnya: "#22c474" };

// Skor aksesibilitas per kecamatan (16 kecamatan utama daratan)
const KEC_ACCESS = [
  { name: "Kota Sumenep",  skor: 95 },
  { name: "Kalianget",     skor: 76 },
  { name: "Manding",       skor: 70 },
  { name: "Saronggi",      skor: 68 },
  { name: "Rubaru",        skor: 62 },
  { name: "Lenteng",       skor: 60 },
  { name: "Gapura",        skor: 58 },
  { name: "Ambunten",      skor: 57 },
  { name: "Bluto",         skor: 54 },
  { name: "Batang-Batang", skor: 52 },
  { name: "Dasuk",         skor: 48 },
  { name: "Talango",       skor: 44 },
  { name: "Dungkek",       skor: 41 },
  { name: "Giligenting",   skor: 37 },
  { name: "Gayam",         skor: 34 },
  { name: "Nonggunong",    skor: 30 },
];

// Distribusi faskes per kecamatan (TOP 8, semua tipe dari CSV)
const KEC_FACILITY_COUNT = [
  { name: "Kota Sumenep",  count: 51 },
  { name: "Pragaan",       count: 6  },
  { name: "Kalianget",     count: 5  },
  { name: "Arjasa",        count: 4  },
  { name: "Gapura",        count: 4  },
  { name: "Batuan",        count: 3  },
  { name: "Ambunten",      count: 3  },
  { name: "Bluto",         count: 3  },
];

const VALID_VIEWS = ["statistik", "aksesibilitas"];

let chartKec   = null;
let chartDonut = null;
let chartsInited = false;

/* ═══════════════════ VIEW SWITCHING ═══════════════════ */
function showView(id) {
  if (!VALID_VIEWS.includes(id)) id = "statistik";

  document.querySelectorAll(".view").forEach(v => {
    v.classList.toggle("active", v.id === "view-" + id);
  });

  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === id);
  });

  try { history.replaceState(null, "", "#" + id); } catch(e) {}

  if (id === "statistik" && !chartsInited) {
    requestAnimationFrame(() => { initCharts(); chartsInited = true; });
  }

  const dd = document.getElementById("mobile-dropdown");
  if (dd) dd.classList.remove("open");
}

/* ═══════════════════ DOM CONTENT LOADED ═══════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => showView(btn.dataset.view));
  });

  const menuToggle     = document.getElementById("menu-toggle");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  if (menuToggle && mobileDropdown) {
    menuToggle.addEventListener("click", e => {
      e.stopPropagation();
      mobileDropdown.classList.toggle("open");
    });
    document.addEventListener("click", e => {
      if (
        mobileDropdown.classList.contains("open") &&
        !mobileDropdown.contains(e.target) &&
        e.target !== menuToggle
      ) mobileDropdown.classList.remove("open");
    });
  }

  renderAccessLists();
  renderStatCards();

  const hash = (location.hash || "").replace("#", "");
  showView(VALID_VIEWS.includes(hash) ? hash : "statistik");
});

/* ═══════════════════ STAT CARDS (data sinkron CSV) ═══════════════════ */
function renderStatCards() {
  // Perbarui kartu berdasarkan label teks
  document.querySelectorAll(".stat-card").forEach(card => {
    const lbl = card.querySelector(".lbl");
    const val = card.querySelector(".val");
    const sub = card.querySelector(".sub");
    if (!lbl || !val) return;
    const label = lbl.textContent.trim();

    if (label === "Total Fasilitas") {
      val.textContent = "108";
      if (sub) sub.textContent = "31 Puskesmas + 6 RS + 71 Lainnya";
    }
    if (label === "Populasi Terlayani") {
      val.innerHTML = '82<span style="font-size:13px">%</span>';
      if (sub) { sub.className = "sub bad"; sub.textContent = "Gap 8% ke WHO 90%"; }
    }
    if (label === "Blank Spot") {
      val.textContent = "5";
      if (sub) { sub.className = "sub bad"; sub.textContent = "Kepulauan terpencil"; }
    }
    if (label === "Rasio Faskes/Pddk") {
      val.innerHTML = '<span class="sm">1:10.6k</span>';
      if (sub) { sub.className = "sub warn"; sub.textContent = "Standar 1:5,4k"; }
    }
    if (label === "Total Nakes") {
      val.textContent = "1.635";
      if (sub) { sub.className = "sub"; sub.textContent = "350 Dokter + 350 Bidan + 935 Perawat"; }
    }
    if (label === "Dokter Umum") {
      val.textContent = "350";
    }
    if (label === "Bidan") {
      val.textContent = "350";
    }
    if (label === "Perawat") {
      val.textContent = "935";
    }
    if (label === "TT Tersedia") {
      val.textContent = "1.581";
      if (sub) { sub.className = "sub"; sub.textContent = "721 TT di RS, 325 di Puskesmas"; }
    }
    if (label === "BOR Rata-rata") {
      val.innerHTML = '73<span style="font-size:13px">%</span>';
      if (sub) { sub.className = "sub warn"; sub.textContent = "RSUD Dr. Anwar: 85%"; }
    }
  });

  // Coverage bar
  const covFill = document.querySelector(".cov-fill");
  if (covFill) covFill.style.width = "82%";

  // Update teks coverage
  document.querySelectorAll("span, b").forEach(el => {
    if (el.textContent.includes("~748")) {
      el.innerHTML = 'Terlayani: <b style="color:#0d1f35">~942 ribu jiwa</b>';
    }
    if (el.textContent === "Total: ~1.1 juta" || el.textContent === "Total: ~1,1 juta") {
      el.textContent = "Total: ~1.15 juta";
    }
    if (el.textContent.includes("748 ribu")) {
      el.innerHTML = 'Terlayani: <b style="color:#0d1f35">~942 ribu jiwa</b>';
    }
  });
}

/* ═══════════════════ AKSESIBILITAS — renderAccessLists ═══════════════════ */
function renderAccessLists() {
  const sorted = [...KEC_ACCESS].sort((a, b) => b.skor - a.skor);
  const half   = Math.ceil(sorted.length / 2);

  const KEPULAUAN = new Set(["Gayam","Nonggunong","Giligenting","Talango"]);

  ["acc-left", "acc-right"].forEach((elId, gi) => {
    const el = document.getElementById(elId);
    if (!el) return;
    const slice = sorted.slice(gi * half, (gi + 1) * half);
    el.innerHTML = slice.map((k, i) => {
      const rank = gi * half + i + 1;
      const col  = k.skor >= 75 ? "#22c474" : k.skor >= 55 ? "#f59e0b" : "#e84545";
      const islandMark = KEPULAUAN.has(k.name)
        ? `<span title="Kecamatan kepulauan" style="color:#a855f7;margin-left:3px;font-size:9px">⛵</span>` : "";
      return `
        <div class="acc-row" ${KEPULAUAN.has(k.name) ? 'style="border-left:3px solid #a855f7;padding-left:6px"' : ''}>
          <div class="acc-rank">${rank}</div>
          <div class="acc-name">${k.name}${islandMark}</div>
          <div class="acc-bar-wrap">
            <div class="acc-bar" style="width:${k.skor}%;background:${col}"></div>
          </div>
          <div class="acc-score" style="color:${col}">${k.skor}</div>
        </div>`;
    }).join("");
  });
}

/* ═══════════════════ STATISTIK — initCharts ═══════════════════ */
function initCharts() {
  const tickColor = "rgba(74,96,128,0.8)";
  const gridColor = "rgba(0,0,0,0.05)";

  if (chartKec)   { chartKec.destroy();   chartKec   = null; }
  if (chartDonut) { chartDonut.destroy(); chartDonut = null; }

  /* Bar chart: distribusi faskes per kecamatan (semua tipe) */
  const canvasKec = document.getElementById("chart-kec");
  if (canvasKec && typeof Chart !== "undefined") {
    chartKec = new Chart(canvasKec, {
      type: "bar",
      data: {
        labels: KEC_FACILITY_COUNT.map(x => x.name),
        datasets: [{
          label: "Jumlah Faskes",
          data: KEC_FACILITY_COUNT.map(x => x.count),
          backgroundColor: KEC_FACILITY_COUNT.map((_, i) => i === 0 ? "#0ec4a0" : "#1a7fd4"),
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y} fasilitas` } }
        },
        scales: {
          x: { ticks: { color: tickColor, font: { size: 9 }, maxRotation: 35 }, grid: { color: gridColor } },
          y: { beginAtZero: true, ticks: { stepSize: 5, color: tickColor, font: { size: 9 } }, grid: { color: gridColor } }
        }
      }
    });
  }

  /* Donut chart: faskes per tipe */
  const canvasDonut = document.getElementById("chart-donut");
  if (canvasDonut && typeof Chart !== "undefined") {
    chartDonut = new Chart(canvasDonut, {
      type: "doughnut",
      data: {
        labels: Object.values(TYPE_LABEL),
        datasets: [{
          data: Object.values(TYPE_COUNT),
          backgroundColor: Object.values(TYPE_COLOR),
          borderWidth: 2,
          borderColor: "#fff",
          hoverOffset: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: tickColor, font: { size: 10 }, padding: 8, boxWidth: 10 }
          },
          tooltip: {
            callbacks: {
              label: ctx => {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const pct   = ((ctx.parsed / total) * 100).toFixed(1);
                return ` ${ctx.label}: ${ctx.parsed} (${pct}%)`;
              }
            }
          }
        }
      }
    });
  }

  /* Kec access bars */
  const barsEl = document.getElementById("kec-access-bars");
  if (barsEl) {
    const sorted = [...KEC_ACCESS].sort((a, b) => b.skor - a.skor);
    barsEl.innerHTML = sorted.map(k => {
      const col = k.skor >= 75 ? "#22c474" : k.skor >= 55 ? "#f59e0b" : "#e84545";
      return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <div style="width:90px;font-size:10px;color:#8a9bb0;flex-shrink:0;text-align:right">${k.name}</div>
        <div style="flex:1;background:#f0f4f8;border-radius:4px;height:8px;overflow:hidden">
          <div style="height:100%;width:${k.skor}%;background:${col};border-radius:4px;transition:width .6s"></div>
        </div>
        <div style="width:28px;font-size:10px;font-weight:700;color:${col}">${k.skor}</div>
      </div>`;
    }).join("");
  }
}

/* ═══════════════════ RESIZE ═══════════════════ */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (chartKec)   chartKec.resize();
    if (chartDonut) chartDonut.resize();
  }, 150);
});
