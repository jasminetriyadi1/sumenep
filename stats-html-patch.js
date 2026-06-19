/**
 * stats-html-patch.js  —  Patch HTML Konten Statistik
 * Sinkron dengan FACILITIES (108 faskes nyata dari CSV)
 * Sertakan SETELAH data-patch.js di dashboard.html
 */
(function () {
  'use strict';

  /* ── DATA POPULASI 27 KEC (sama dengan data-patch.js agar standalone) ── */
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
  const totalPop = KEC_FULL.reduce((s, k) => s + k.pop, 0);

  /* ── 1. PERBARUI SEMUA KARTU STAT ── */
  function patchStatCards() {
    document.querySelectorAll('.stat-card').forEach(card => {
      const lbl = card.querySelector('.lbl');
      const val = card.querySelector('.val');
      const sub = card.querySelector('.sub');
      if (!lbl || !val) return;
      const label = lbl.textContent.trim();

      const MAP = {
        'Total Fasilitas':    { v:'96',   s:'+71 dari 2023', sc:'' },
        'Populasi Terlayani': { v:'82<span style="font-size:13px">%</span>', s:'Gap 8% ke WHO', sc:'bad' },
        'Blank Spot':         { v:'49',     s:'Kepulauan terpencil', sc:'bad' },
        'Rasio Faskes/Pddk':  { v:'<span class="sm">1:10.6k</span>', s:'Standar: 1:5,4k', sc:'warn' },
        'Total Nakes':        { v:'1.635', s:'350 Dokter · 350 Bidan · 935 Perawat', sc:'' },
        'Dokter Umum':        { v:'350',   s:'', sc:'' },
        'Bidan':              { v:'350',   s:'', sc:'' },
        'Perawat':            { v:'935',   s:'', sc:'' },
        'TT Tersedia':        { v:'1.581', s:'721 RS + 325 Puskesmas + 535 lainnya', sc:'' },
        'BOR Rata-rata':      { v:'73<span style="font-size:13px">%</span>', s:'RSUD Dr. Anwar: 85%', sc:'warn' },
      };

      const cfg = MAP[label];
      if (!cfg) return;
      val.innerHTML = cfg.v;
      if (sub && cfg.s) {
        sub.innerHTML = cfg.s;
        sub.className = 'sub' + (cfg.sc ? ' ' + cfg.sc : '');
      }
    });

    // Coverage bar
    const fill = document.querySelector('.cov-fill');
    if (fill) fill.style.width = '82%';

    // Teks coverage
    document.querySelectorAll('span').forEach(sp => {
      if (/(748|942|Terlayani)/.test(sp.textContent) && sp.textContent.includes('Terlayani')) {
        sp.innerHTML = 'Terlayani: <b style="color:#0d1f35">~942 ribu jiwa</b>';
      }
      if (/^Total: ~1/.test(sp.textContent)) {
        sp.textContent = 'Total: ~1.15 juta';
      }
    });
  }

  /* ── 2. RINGKASAN AKREDITASI PUSKESMAS ── */
  function injectAkreditasiBlock() {
    // Cari panel-box pertama, tambahkan setelah Coverage bar
    const firstPanel = document.querySelector('.panel-box');
    if (!firstPanel || firstPanel.querySelector('#akreditasi-block')) return;

    const chartWrap = firstPanel.querySelector('.chart-wrap');
    if (!chartWrap) return;

    const block = document.createElement('div');
    block.id = 'akreditasi-block';
    block.innerHTML = `
      <div class="sect" style="margin-top:14px">Akreditasi Puskesmas & RS (37 unit)</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
        ${[
          { lbl:'Paripurna ⭐⭐⭐⭐⭐', n:2,  col:'#22c474' },
          { lbl:'Utama ⭐⭐⭐⭐',       n:12, col:'#1a7fd4' },
          { lbl:'Madya ⭐⭐⭐',         n:11, col:'#f59e0b' },
          { lbl:'Dasar ⭐⭐',           n:13, col:'#e84545' },
        ].map(a => `
          <div style="background:#f8fafc;border:1px solid #dde4ee;border-radius:8px;padding:8px 10px">
            <div style="font-size:16px;font-weight:700;color:${a.col}">${a.n}</div>
            <div style="font-size:10px;color:#8a9bb0;margin-top:2px">${a.lbl}</div>
          </div>`).join('')}
      </div>`;
    firstPanel.insertBefore(block, chartWrap);
  }

  /* ── 3. TABEL POPULASI (panel kanan) ── */
  function injectPopTable() {
    const panels = document.querySelectorAll('.panel-box');
    if (!panels.length) return;
    const target = panels[panels.length - 1];
    const existing = document.getElementById('pop-table-section');
    if (existing) existing.remove();

    const section = document.createElement('div');
    section.id = 'pop-table-section';
    section.innerHTML = `
      <div class="sect" style="margin-top:16px">Populasi & Faskes per Kecamatan — 27 Kecamatan</div>
      <div style="max-height:240px;overflow-y:auto;margin-top:6px;border:1px solid #dde4ee;border-radius:8px">
        <table style="width:100%;border-collapse:collapse;font-size:10px">
          <thead>
            <tr style="position:sticky;top:0;background:#f0f4f8;z-index:1">
              <th style="text-align:left;padding:5px 8px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Kecamatan</th>
              <th style="text-align:right;padding:5px 8px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Pddk (rb)</th>
              <th style="text-align:right;padding:5px 8px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Faskes</th>
              <th style="text-align:right;padding:5px 8px;color:#4a6080;font-weight:600;border-bottom:1px solid #dde4ee">Kepadatan</th>
            </tr>
          </thead>
          <tbody>
            ${KEC_FULL.sort((a,b)=>b.faskes-a.faskes).map((k, i) => `
              <tr style="background:${i % 2 === 0 ? '#fff' : '#f7f9fc'}">
                <td style="padding:4px 8px;color:#2a3a52">${k.name}${k.island ? ' <span style="color:#a855f7">⛵</span>' : ''}</td>
                <td style="padding:4px 8px;text-align:right;color:#1a7fd4;font-weight:600">${k.pop.toFixed(1)}</td>
                <td style="padding:4px 8px;text-align:right;font-weight:700;color:${k.faskes >= 10 ? '#0ec4a0' : k.faskes >= 3 ? '#1a7fd4' : k.faskes >= 2 ? '#f59e0b' : '#e84545'}">${k.faskes}</td>
                <td style="padding:4px 8px;text-align:right;color:${k.density > 1000 ? '#e84545' : k.density > 500 ? '#f59e0b' : '#22c474'}">${k.density.toLocaleString('id-ID')}</td>
              </tr>`).join('')}
          </tbody>
          <tfoot>
            <tr style="background:#e8f0fa;font-weight:600;position:sticky;bottom:0">
              <td style="padding:5px 8px;color:#0d1f35">TOTAL</td>
              <td style="padding:5px 8px;text-align:right;color:#1a7fd4">${totalPop.toFixed(1)}</td>
              <td style="padding:5px 8px;text-align:right;color:#1a7fd4">108</td>
              <td style="padding:5px 8px;text-align:right;color:#4a6080">—</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div style="font-size:9px;color:#8a9bb0;margin-top:4px;line-height:1.5">
        Sumber: BPS Sumenep & Fasyankes_Sumenep_LENGKAP.csv (108 faskes, 2025).
        ⛵ = kepulauan · Kepadatan: jiwa/km² · Merah &gt;1.000, Kuning 500–1.000, Hijau &lt;500.
        Faskes: hijau tua ≥10, biru ≥3, kuning ≥2, merah = 1.
      </div>`;
    target.appendChild(section);
  }

  /* ── 4. UPDATE AKSES NOTE ── */
  function patchAksesNote() {
    const note = document.querySelector('.akses-note');
    if (!note) return;
    note.innerHTML = `
      Skor 0–100 merupakan komposit dari: <b>rasio faskes/populasi</b> (45%),
      <b>kepadatan & keterjangkauan</b> (35%), dan <b>ketersediaan rujukan & BPJS</b> (20%).
      <br><br>
      Data nyata: <b>108 faskes</b> (31 Puskesmas + 6 RS + 21 Klinik + 50 Faskes/DPM)
      di 27 kecamatan, populasi total <b>~${totalPop.toFixed(0)} ribu jiwa</b>.
      <br><br>
      <b>Kota Sumenep</b> mendominasi dengan 51 faskes (47% total) melayani 77 ribu penduduk.
      Kecamatan ⛵ kepulauan (Gayam, Nonggunong, Kangayan, Raas, Sapeken, Masalembu)
      masing-masing hanya punya 1–2 faskes dengan hambatan akses transportasi laut yang signifikan.`;
  }

  /* ── 5. TANDAI BARIS KEPULAUAN di acc-row ── */
  const KEPULAUAN = new Set(['Gayam','Nonggunong','Giligenting','Talango','Arjasa','Sapeken','Kangayan','Raas','Masalembu']);
  function markIslandRows() {
    document.querySelectorAll('.acc-row').forEach(row => {
      const nameEl = row.querySelector('.acc-name');
      if (!nameEl) return;
      const name = nameEl.textContent.replace('⛵','').trim();
      if (KEPULAUAN.has(name)) {
        row.style.borderLeft = '3px solid #a855f7';
        row.style.paddingLeft = '6px';
      }
    });
  }

  /* ── 6. TAMBAH LEGEND KEPULAUAN ── */
  function patchLegend() {
    const legend = document.querySelector('.akses-legend');
    if (!legend || legend.querySelector('#leg-island')) return;
    const row = document.createElement('div');
    row.id = 'leg-island';
    row.className = 'legend-row';
    row.style.marginBottom = '0';
    row.innerHTML = `<div class="legend-swatch" style="background:#a855f7"></div>
      <span>⛵ Kepulauan — penalti aksesibilitas laut</span>`;
    legend.appendChild(row);
  }

  /* ── ENTRYPOINT ── */
  function run() {
    patchStatCards();
    injectAkreditasiBlock();
    injectPopTable();
    patchAksesNote();
    patchLegend();
    setTimeout(markIslandRows, 300);
    console.log('[stats-html-patch] ✓ HTML patch selesai, 108 faskes sinkron');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(run, 300));
  } else {
    setTimeout(run, 300);
  }

  window.statsHtmlPatch = { KEC_FULL, totalPop, reapply: run };
})();
