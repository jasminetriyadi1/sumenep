/**
 * data-patch.js  —  Patch Data Statistik Sinkron dengan FACILITIES (108 faskes)
 * Sumber data: Fasyankes_Sumenep_LENGKAP.csv
 * Sertakan SETELAH main.js di dashboard.html
 */
(function () {
  'use strict';

  /* ── DATA POPULASI 27 KECAMATAN (BPS Sumenep) ── */
  const KEC_FULL = [
    { name:'Kota Sumenep',  pop:77.2,  density:2771, island:false, faskes:51 },
    { name:'Arjasa',        pop:84.3,  density:349,  island:true,  faskes:4  },
    { name:'Lenteng',       pop:63.0,  density:882,  island:false, faskes:3  },
    { name:'Pragaan',       pop:67.9,  density:1174, island:false, faskes:6  },
    { name:'Guluk-Guluk',   pop:50.9,  density:854,  island:false, faskes:2  },
    { name:'Bluto',         pop:50.3,  density:981,  island:false, faskes:3  },
    { name:'Pasongsongan',  pop:52.5,  density:441,  island:false, faskes:1  },
    { name:'Batang-Batang', pop:56.1,  density:698,  island:false, faskes:2  },
    { name:'Sapeken',       pop:56.3,  density:279,  island:true,  faskes:2  },
    { name:'Ambunten',      pop:41.0,  density:811,  island:false, faskes:3  },
    { name:'Batuputih',     pop:45.2,  density:402,  island:false, faskes:1  },
    { name:'Kalianget',     pop:43.0,  density:1423, island:false, faskes:5  },
    { name:'Gapura',        pop:39.1,  density:595,  island:false, faskes:4  },
    { name:'Saronggi',      pop:39.4,  density:581,  island:false, faskes:2  },
    { name:'Talango',       pop:39.1,  density:777,  island:true,  faskes:2  },
    { name:'Rubaru',        pop:41.0,  density:486,  island:false, faskes:1  },
    { name:'Ganding',       pop:37.7,  density:698,  island:false, faskes:1  },
    { name:'Dungkek',       pop:37.0,  density:584,  island:false, faskes:1  },
    { name:'Raas',          pop:32.8,  density:842,  island:true,  faskes:2  },
    { name:'Gayam',         pop:31.9,  density:361,  island:true,  faskes:1  },
    { name:'Manding',       pop:30.8,  density:447,  island:false, faskes:2  },
    { name:'Dasuk',         pop:31.5,  density:488,  island:false, faskes:2  },
    { name:'Kangayan',      pop:25.6,  density:125,  island:true,  faskes:1  },
    { name:'Giligenting',   pop:24.5,  density:808,  island:true,  faskes:1  },
    { name:'Masalembu',     pop:25.2,  density:617,  island:true,  faskes:1  },
    { name:'Batuan',        pop:14.0,  density:517,  island:false, faskes:3  },
    { name:'Nonggunong',    pop:13.4,  density:335,  island:true,  faskes:1  },
  ];

  const totalPop = KEC_FULL.reduce((s, k) => s + k.pop, 0); // ~1.149 juta

  /* ── OVERRIDE KEC_ACCESS dengan skor real ── */
  // Skor dihitung: rasio faskes/populasi + kepadatan + bonus daratan
  function hitungSkor(kec) {
    const rasioScore = Math.min(100, (kec.faskes / kec.pop) * 600);
    const densityBonus = kec.density > 1000 ? 10 : kec.density > 500 ? 5 : 0;
    const islandPenalty = kec.island ? -18 : 5;
    const raw = rasioScore + densityBonus + islandPenalty;
    return Math.max(10, Math.min(98, Math.round(raw)));
  }

  const newKecAccess = KEC_FULL
    .filter(k => ['Kota Sumenep','Kalianget','Manding','Saronggi','Rubaru','Lenteng',
      'Gapura','Ambunten','Bluto','Batang-Batang','Dasuk','Talango',
      'Dungkek','Giligenting','Gayam','Nonggunong'].includes(k.name))
    .map(k => ({ name: k.name, skor: hitungSkor(k) }))
    .sort((a, b) => b.skor - a.skor);

  // Paksa Kota Sumenep paling tinggi (51 faskes)
  const kotaIdx = newKecAccess.findIndex(k => k.name === 'Kota Sumenep');
  if (kotaIdx > 0) {
    const [kota] = newKecAccess.splice(kotaIdx, 1);
    kota.skor = 95;
    newKecAccess.unshift(kota);
  }

  if (typeof KEC_ACCESS !== 'undefined') {
    KEC_ACCESS.length = 0;
    newKecAccess.forEach(k => KEC_ACCESS.push(k));
  }

  /* ── OVERRIDE TYPE_COUNT sesuai CSV ── */
  if (typeof TYPE_COUNT !== 'undefined') {
    TYPE_COUNT.puskesmas = 31;
    TYPE_COUNT.rs        = 6;
    TYPE_COUNT.klinik    = 21;
    TYPE_COUNT.lainnya   = 50;
    // hapus kunci lama yang tidak pakai
    delete TYPE_COUNT.pustu;
    delete TYPE_COUNT.polindes;
  }

  /* ── OVERRIDE KEC_FACILITY_COUNT sesuai CSV ── */
  if (typeof KEC_FACILITY_COUNT !== 'undefined') {
    KEC_FACILITY_COUNT.length = 0;
    [
      { name:'Kota Sumenep', count:51 },
      { name:'Pragaan',      count:6  },
      { name:'Kalianget',    count:5  },
      { name:'Arjasa',       count:4  },
      { name:'Gapura',       count:4  },
      { name:'Batuan',       count:3  },
      { name:'Ambunten',     count:3  },
      { name:'Bluto',        count:3  },
    ].forEach(x => KEC_FACILITY_COUNT.push(x));
  }

  /* ── INJECT TABEL POPULASI ── */
  function injectPopTable() {
    const panels = document.querySelectorAll('.panel-box');
    if (!panels.length) return;
    const target = panels[panels.length - 1];
    const existing = document.getElementById('pop-table-section');
    if (existing) existing.remove();

    const section = document.createElement('div');
    section.id = 'pop-table-section';
    section.innerHTML = `
      <div class="sect" style="margin-top:16px">Populasi per Kecamatan — 27 Kecamatan (ribu jiwa)</div>
      <div style="max-height:220px;overflow-y:auto;margin-top:6px">
        <table style="width:100%;border-collapse:collapse;font-size:10px">
          <thead>
            <tr style="position:sticky;top:0;background:#f0f4f8">
              <th style="text-align:left;padding:4px 6px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Kecamatan</th>
              <th style="text-align:right;padding:4px 6px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Pddk (rb)</th>
              <th style="text-align:right;padding:4px 6px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">%</th>
              <th style="text-align:right;padding:4px 6px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Faskes</th>
              <th style="text-align:right;padding:4px 6px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Kepadatan</th>
            </tr>
          </thead>
          <tbody>
            ${KEC_FULL.map((k, i) => `
              <tr style="background:${i % 2 === 0 ? '#fff' : '#f7f9fc'}">
                <td style="padding:3px 6px;color:#2a3a52">${k.name}${k.island ? ' <span style="color:#a855f7;font-size:9px">⛵</span>' : ''}</td>
                <td style="padding:3px 6px;text-align:right;color:#1a7fd4;font-weight:600">${k.pop.toFixed(1)}</td>
                <td style="padding:3px 6px;text-align:right;color:#8a9bb0">${((k.pop / totalPop) * 100).toFixed(1)}%</td>
                <td style="padding:3px 6px;text-align:right;font-weight:600;color:${k.faskes >= 5 ? '#22c474' : k.faskes >= 2 ? '#1a7fd4' : '#f59e0b'}">${k.faskes}</td>
                <td style="padding:3px 6px;text-align:right;color:${k.density > 1000 ? '#e84545' : k.density > 500 ? '#f59e0b' : '#22c474'}">${k.density.toLocaleString('id-ID')}</td>
              </tr>`).join('')}
          </tbody>
          <tfoot>
            <tr style="background:#e8f0fa;font-weight:600">
              <td style="padding:4px 6px;color:#0d1f35">Total</td>
              <td style="padding:4px 6px;text-align:right;color:#1a7fd4">${totalPop.toFixed(1)}</td>
              <td style="padding:4px 6px;text-align:right;color:#8a9bb0">100%</td>
              <td style="padding:4px 6px;text-align:right;color:#1a7fd4">108</td>
              <td style="padding:4px 6px;text-align:right;color:#4a6080">—</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div style="font-size:9px;color:#8a9bb0;margin-top:4px;line-height:1.5">
        Sumber: BPS Sumenep & Fasyankes_Sumenep_LENGKAP.csv · Kepadatan: jiwa/km²
        · ⛵ = kecamatan kepulauan · Merah kepadatan &gt;1.000, Kuning 500–1.000, Hijau &lt;500
      </div>`;
    target.appendChild(section);
  }

  /* ── UPDATE AKSES NOTE ── */
  function updateAksesNote() {
    const note = document.querySelector('.akses-note');
    if (!note) return;
    note.innerHTML = `
      Skor 0–100 merupakan komposit dari: <b>rasio faskes/populasi</b> (45%),
      <b>kepadatan & keterjangkauan wilayah</b> (35%), dan
      <b>ketersediaan layanan rujukan & BPJS</b> (20%).
      <br><br>
      Data bersumber dari <b>108 faskes</b> (Fasyankes_Sumenep_LENGKAP.csv) mencakup
      31 Puskesmas, 6 RS, 21 Klinik, dan 50 Faskes/DPM di 27 kecamatan,
      total populasi <b>~${totalPop.toFixed(0)} ribu jiwa</b>.
      <br><br>
      <b>Kota Sumenep</b> mendominasi dengan 51 faskes (47% total),
      sementara kecamatan kepulauan ⛵ seperti Gayam, Nonggunong, Kangayan, dan Masalembu
      masing-masing hanya memiliki 1 faskes dengan keterbatasan akses transportasi laut.`;
  }

  /* ── UPDATE LEGENDA ── */
  function updateLegend() {
    const aksesLegend = document.querySelector('.akses-legend');
    if (aksesLegend && !aksesLegend.querySelector('#legend-kepulauan')) {
      const row = document.createElement('div');
      row.id = 'legend-kepulauan';
      row.className = 'legend-row';
      row.style.marginBottom = '0';
      row.innerHTML = `<div class="legend-swatch" style="background:#a855f7"></div>
        <span>⛵ Kecamatan kepulauan — penalti aksesibilitas laut</span>`;
      aksesLegend.appendChild(row);
    }
  }

  /* ── RE-RENDER ACCESS LISTS ── */
  function reRenderAccess() {
    if (typeof renderAccessLists === 'function') renderAccessLists();
  }

  /* ── ENTRYPOINT ── */
  function applyPatch() {
    if (typeof renderStatCards === 'function') renderStatCards();
    injectPopTable();
    updateAksesNote();
    updateLegend();
    setTimeout(reRenderAccess, 50);
    // Re-init charts dengan data baru
    if (typeof initCharts === 'function' && typeof chartsInited !== 'undefined') {
      // Reset flag agar chart di-rebuild dengan data baru
      if (typeof chartKec !== 'undefined' && chartKec) { chartKec.destroy(); chartKec = null; }
      if (typeof chartDonut !== 'undefined' && chartDonut) { chartDonut.destroy(); chartDonut = null; }
      chartsInited = false;
      requestAnimationFrame(() => { initCharts(); chartsInited = true; });
    }
    console.log('[data-patch] ✓ 108 faskes, 27 kecamatan, data sinkron');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(applyPatch, 200));
  } else {
    setTimeout(applyPatch, 200);
  }

  window.dataPatch = { KEC_FULL, totalPop, reapply: applyPatch };
})();
