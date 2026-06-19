#!/usr/bin/env python3
"""
apply-patches.py — Tambahkan data-patch.js dan stats-html-patch.js
ke dashboard.html secara otomatis.

Cara pakai:
    python3 apply-patches.py

Jalankan dari folder sumenepsehat/.
Script ini:
  1. Backup dashboard.html → dashboard.html.bak
  2. Sisipkan <script src="data-patch.js"></script> dan
     <script src="stats-html-patch.js"></script> tepat sebelum </body>
"""

import shutil
import os

HTML_FILE = 'dashboard.html'
BACKUP    = 'dashboard.html.bak'

INJECT = '''
<!-- ══ PATCH: Data Statistik & Aksesibilitas Real (geodata.js) ══ -->
<script src="data-patch.js"></script>
<script src="stats-html-patch.js"></script>
'''

def main():
    if not os.path.exists(HTML_FILE):
        print(f'ERROR: {HTML_FILE} tidak ditemukan. Jalankan dari folder sumenepsehat/')
        return

    # Backup
    shutil.copy(HTML_FILE, BACKUP)
    print(f'✓ Backup dibuat: {BACKUP}')

    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        html = f.read()

    if 'data-patch.js' in html:
        print('⚠ data-patch.js sudah ada di dashboard.html, tidak ada yang diubah.')
        return

    if '</body>' not in html:
        print('ERROR: Tag </body> tidak ditemukan di dashboard.html')
        return

    patched = html.replace('</body>', INJECT + '\n</body>', 1)

    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(patched)

    print('✓ dashboard.html berhasil diperbarui.')
    print('  Script yang ditambahkan:')
    print('    - data-patch.js   (patch data KEC_ACCESS, KEC_FACILITY_COUNT, stat cards)')
    print('    - stats-html-patch.js  (tabel populasi, catatan akses, warna kepulauan)')
    print()
    print('Pastikan kedua file .js berada di folder yang sama dengan dashboard.html.')

if __name__ == '__main__':
    main()
