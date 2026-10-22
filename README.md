# DK-Race – Website

Schlanke, statische Startseite für DK-Race / DK-Reifenservice in Gifhorn. Reines HTML, CSS und
ca. 40 Zeilen JavaScript – kein Build, keine externen Ressourcen (keine Google Fonts, kein Tracking,
keine eingebettete Karte), keine Cookies.

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite: Hero, Leistungen, Werkstatt, Referenzen, Kontakt |
| `impressum.html`, `datenschutz.html` | Rechtliche Seiten |
| `styles.css` | Komplettes Styling, mobile Ansicht ab 320 px |
| `script.js` | Mobilmenü, „Jetzt geöffnet“-Anzeige, Copyright-Jahr. Öffnungszeiten stehen in `HOURS`. |

Nicht mehr verwendet (können gelöscht werden): `assets/images/dk-reifenservice-logo-transparent.png`,
`hero-wheel.svg`, `kw-sales-service-point.png`, `vehicle-parts.png`, `workshop-exterior.png` (ersetzt durch `.jpg`).

## Lokal ansehen

```bash
python3 -m http.server 8000
```

## Vor dem Livegang offen

- **Telefonnummer:** 
- **Fotos:** Hero-Foto (`workshop-exterior.jpg`) ist nur 508 px breit → hochauflösendes Original einsetzen.
  Platzhalter (`.ph`) für Reifenmontage, Fahrwerk, Toni in der Werkstatt und drei Galerie-Bilder ersetzen.
- **Facebook-/YouTube-URLs** im Footer (`[FACEBOOK-URL]`, `[YOUTUBE-URL]`).
- **Leistungen** Gebrauchtteile, Mopeds & Quads – noch aktuell?
- **Impressum:** Steuernummer vs. USt-IdNr. klären. **Datenschutz:** Text vervollständigen.
- **Schrift (optional):** `Instrument Serif` als `assets/fonts/instrument-serif-400.woff2` ablegen und per
  `@font-face` in `styles.css` einbinden; ohne Datei greift die Systemserifenschrift.
