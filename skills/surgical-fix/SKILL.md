---
name: surgical-fix
description: >-
  Bir şeyi düzeltirken başka şeyleri bozmama disiplini. Karpathy Coder prensip 3
  (Surgical Changes) + YuruDesign projesi için doğrulama checklist'i. Tetikleyiciler:
  "bir şeyi düzeltirken diğerini bozma", "surgical fix", "minimal diff", "sadece bunu düzelt",
  "karpathy check", regresyon korkusu, sidebar/scroll/animasyon yan etkisi.
---

# Surgical Fix — Regresyonsuz Düzeltme

Kaynak: [karpathy-coder](~/.cursor/skills/karpathy-coder/SKILL.md) Prensip 3.

## Kural

Her değişen satır doğrudan kullanıcı isteğine bağlanmalı. Komşu kodu "iyileştirme", drive-by refactor yok.

## YuruDesign checklist (fix sonrası)

1. **Deneyim** — Sol kategori rail tıklanınca `active` + ilgili sahneye scroll
2. **Kategori** — Sol rail `?cat=` günceller, grid yenilenir
3. **Index hero** — Video vitrin tam genişlik, autoplay
4. **Mobil** — `mobile-dock` kategori seçimi çalışır
5. **prefers-reduced-motion** — Animasyon kapalıyken nav hâlâ çalışır

## Uygulama

- Önce kök nedeni doğrula (console, `elementFromPoint`, z-index, boş `sceneTriggers`, **TDZ**: `let`/`const` tanımlanmadan fonksiyon çağrısı script'i öldürür)
- Fallback ekle; ana yol kırılsa bile UX çalışsın
- Paylaşılan CSS (`impeccable.css`) değişiyorsa her iki rail sayfasını kontrol et
- Diff ≤ istenen scope; test etmeden "bitti" deme

## Anti-pattern

- GSAP/Lenis fix ederken sidebar tıklamasını kırmak
- Hero layout fix ederken experience pin z-index'ini unutmak
- `.main { margin-left: --rail-w }` içinde pin yaparken çift offset (520px kayma) — `pinReparent` + `alignPinnedScene`
- Tek sayfada hardcode; `data.js` / paylaşılan rail'i atlamak
