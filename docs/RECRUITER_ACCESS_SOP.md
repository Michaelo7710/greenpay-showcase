# 🤝 SOP Recruiter & Auditor Access Protocol (Private Core Repository)

> **Dokumen SSOT Rujukan:** [`ADR-015`](https://github.com/Michaelo7710/greenpay-showcase/tree/main/docs/ADR-015.md)  
> **Klasifikasi:** Hak Istimewa Peninjauan Teknis Berbatas Waktu (Time-Bound Read-Only Access)  
> **Target Repositori Privat:** `Michaelo7710/e-wallet-monorepo` (*The Forge*)

---

## 1. Latar Belakang & Kebijakan

Repositori utama **GreenPay E-Wallet Monorepo** berisi seluruh implementasi algoritma perbankan ganda (*double-entry ACID ledger*), skema migrasi database, dan kode otentikasi biometrik yang dilindungi sebagai **Kekayaan Intelektual Proprietary (The Forge)**.

Demi memfasilitasi proses peninjauan mendalam (*deep-dive code review*) oleh **Hiring Manager, Principal Engineer, VP of Engineering, atau CTO** dari perusahaan perekrut terverifikasi, kami menyediakan mekanisme pemberian akses kolaborator *read-only* sementara.

---

## 2. Syarat & Ketentuan Akses

1. **Kelayakan Pemohon:**
   - Hiring Manager, Recruiter Resmi Perusahaan, atau Lead Auditor Teknologi.
   - Menggunakan alamat email domain korporat resmi (bukan email publik gratisan).
   - Memiliki akun GitHub terverifikasi.
2. **Batasan Akses:**
   - **Peran:** `Read-Only Collaborator` (dilarang melakukan *push*, *fork*, atau menyebarkan cuplikan kode mentah ke publik).
   - **Durasi Maksimal:** **7 Hari Kalender**. Setelah masa 7 hari berakhir, akses kolaborator akan dicabut secara otomatis (*automated revocation*).
   - **Klausul Non-Disclosure:** Peninjau dilarang menyalin, memanfaatkan, atau memperbanyak kode untuk tujuan komersial di luar evaluasi rekrutmen.

---

## 3. Alur Permohonan (3 Langkah Praktis)

1. **Kirim Email Permintaan Resmi:**
   - **Kepada:** `mikailnurwahid01@gmail.com`
   - **Subjek:** `[CODE-AUDIT-REQUEST] GreenPay Monorepo Access — <Nama Perusahaan>`
   - **Isi Email:**
     - Nama Lengkap & Gelar/Posisi: (misal: *Jane Doe, VP of Engineering at FinTech Corp*)
     - Username GitHub Pemohon: (misal: `@janedoe-recruiter`)
     - Tautan Lowongan / Kebutuhan Evaluasi:
     - Pernyataan persetujuan terhadap batasan 7-hari kalender.
2. **Verifikasi & Undangan Kolaborator:**
   - Pemilik repositori akan memverifikasi kredensial pemohon dalam kurun waktu 1x24 jam kerja.
   - Undangan kolaborator *Read-Only* ke repositori privat `Michaelo7710/e-wallet-monorepo` akan dikirimkan melalui GitHub Notifications.
3. **Pencabutan Akses Terjadwal:**
   - Pada hari ke-7 pukul 23:59 WIB, akses akun akan diputus secara terhormat, dan audit log sesi akan diarsipkan.

---

## 4. Narahubung Rekayasa

- **Lead Engineer & System Architect:** Muhammad Luthfi
- **Email:** `mikailnurwahid01@gmail.com`
- **Profil GitHub:** [@Michaelo7710](https://github.com/Michaelo7710)
- **Interactive Portfolio:** [personal-portfolio-ai](https://github.com/Michaelo7710/personal-portfolio-ai)
