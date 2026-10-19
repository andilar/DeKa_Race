# Redesign-Prompt für DK-Race

## Auftrag

Du bist ein erfahrener UX/UI-Designer und Frontend-Entwickler. Entwickle auf Basis der vorhandenen Analyse und Bildquellen ein vollständiges, modernes Redesign der Website von DK-Race / DK-Reifenservice. Das Ergebnis soll wie die Website eines glaubwürdigen, inhabergeführten Reifen- und Fahrzeugservicebetriebs in Gifhorn wirken: technisch kompetent, direkt, lokal verwurzelt und leicht erreichbar.

Lies vor der Umsetzung vollständig:

- `../dk-race-analysis/ANALYSE.md`
- `../dk-race-analysis/Startseite.png`
- `../dk-race-analysis/Startseite.pdf`
- die Bilddateien in `../dk-race-analysis/images/`

Nutze die Analyse als verbindliche inhaltliche Grundlage. Übernimm keine offensichtlich veralteten, widersprüchlichen oder ungeprüften Angaben ungekennzeichnet.

## Ziele

Die neue Website soll Besucher möglichst schnell zu einer dieser Handlungen führen:

1. telefonisch Kontakt aufnehmen,
2. eine Anfrage per WhatsApp senden,
3. Leistungen und Spezialisierungen verstehen,
4. Öffnungszeiten und Anfahrt finden,
5. bisherige Arbeiten und Kundenfahrzeuge ansehen.

Priorisiere diese Ziele deutlich vor dekorativen Inhalten. Die Seite muss insbesondere auf Smartphones schnell erfassbar und komfortabel bedienbar sein.

## Offene Angaben und verbindliche Regeln

Folgende Angaben sind vor Veröffentlichung durch den Betreiber zu bestätigen:

- endgültiger Markenname: **DK-Race**, **DK-Reifenservice** oder **DK-Reifen**,
- Logo und Schreibweise der Marke,
- E-Mail-Adresse,
- Telefonnummer und WhatsApp-Nummer,
- Öffnungszeiten,
- aktuell angebotene Leistungen,
- Links zu Facebook und YouTube,
- Inhalte von Impressum und Datenschutz,
- Berechtigung zur Nutzung von Hersteller- und Partnerlogos.

Verwende für ungeklärte Angaben gut erkennbare Platzhalter wie `[MARKENNAME]`, `[E-MAIL BESTÄTIGEN]` oder `[TELEFON BESTÄTIGEN]`. Erfinde keine Bewertungen, Zertifikate, Preise, Partner, Kontaktdaten oder Leistungsversprechen. Der Hinweis der alten Seite auf eine falsche Telefonnummer darf nicht in die neue Oberfläche übernommen werden; stattdessen müssen vor Veröffentlichung konsistente, geprüfte Daten eingesetzt werden.

## Informationsarchitektur

Erstelle eine schlanke Hauptnavigation mit höchstens fünf primären Punkten:

- Leistungen
- Referenzen
- Über uns
- Standort
- Kontakt

Die Startseite soll in dieser Reihenfolge aufgebaut sein:

### 1. Header

- eindeutiges Logo beziehungsweise vorläufiger Markenplatzhalter,
- reduzierte Navigation ohne doppelte Menüs,
- gut sichtbarer primärer CTA „Termin / Angebot anfragen“,
- mobile Navigation mit vollständig bedienbarem Menü,
- optional eine kompakte Kontaktleiste mit Telefon und Öffnungsstatus, sofern die Daten bestätigt sind.

### 2. Hero

- prägnante deutsche Überschrift mit lokalem Bezug zu Gifhorn,
- ein kurzer Satz zu Reifen-, Fahrwerks- und Fahrzeugservice,
- primärer CTA „Per WhatsApp anfragen“,
- sekundäre CTAs „Jetzt anrufen“ und „Route planen“,
- authentisches Werkstatt- oder Fahrzeugmotiv statt austauschbarem Stockfoto.

Formuliere sachlich und konkret. Vermeide nicht belegbare Aussagen wie „der Beste“, „Nummer 1“ oder erfundene Kundenzahlen.

### 3. Leistungen

Zeige die wichtigsten Leistungsgruppen als übersichtliche Karten oder Abschnitte:

- Reifenservice und Montage,
- Felgen und Felgenveredelung,
- Fahrwerke und Luftfahrwerke,
- Verschleiß- und Fahrzeugteile,
- Umbauten und individuelle Projekte.

Jede Leistung erhält eine kurze, verständliche Beschreibung und einen passenden Anfrage-Link. Kennzeichne Leistungen als vorläufig, wenn sie noch bestätigt werden müssen. „Dropitbox“, Gebrauchtteile, Mopeds/Quads und Events nur aufnehmen, wenn ihre Aktualität bestätigt wurde.

### 4. Anfrageprozess

Erkläre in drei kurzen Schritten, wie eine Anfrage funktioniert, zum Beispiel:

1. Anliegen und Fahrzeugdaten senden,
2. Fahrzeugschein optional sicher hochladen,
3. Rückmeldung und Terminabstimmung erhalten.

Ein Upload des Fahrzeugscheins darf nur umgesetzt werden, wenn Datenschutz, Einwilligung, Speicherort, Löschfrist, Dateitypen, Größenlimit und sichere Übertragung geklärt sind. Andernfalls nur auf WhatsApp, Telefon oder ein einfaches Kontaktformular verweisen.

### 5. Vertrauen und Werkstatt

- Werkstattfoto und kurzer Text zum Betrieb,
- reale Vorteile wie persönliche Beratung, lokale Erreichbarkeit und Spezialisierung,
- KW-Sales-&-Service-Point nur mit bestätigter Partnerschaft und Nutzungsberechtigung,
- Reifenmarken nur als ruhige, visuell konsistente Leiste und nur bei geklärten Bildrechten,
- keine erfundenen Rezensionen oder Qualitätskennzahlen.

### 6. Referenzen

- kuratierte Galerie mit Kundenfahrzeugen, Umbauten und Projekten,
- große, hochwertige Bilder mit kurzen, sachlichen Bildunterschriften,
- responsive Darstellung und optionale Detailansicht,
- keine öffentliche Benutzeranmeldung und kein Community-Modul.

Wenn noch keine geeigneten Originalbilder vorliegen, nutze klar gekennzeichnete Bildplatzhalter und beschreibe, welches Motiv benötigt wird.

### 7. Standort und Öffnungszeiten

- vollständige Adresse,
- bestätigte Öffnungszeiten als echter HTML-Text statt als Grafik,
- Buttons für Route und Anruf,
- datenschutzfreundliche Kartenlösung: Karte erst nach Einwilligung laden oder zunächst eine statische Vorschau beziehungsweise einen externen Routenlink zeigen,
- kurzer Hinweis zu Zufahrt oder Parkmöglichkeiten nur bei gesicherter Information.

### 8. Kontakt

- kurzes, verständlich beschriftetes Formular,
- Felder nur für tatsächlich benötigte Angaben,
- klare Erfolgs-, Lade- und Fehlermeldungen,
- sichtbare Datenschutzhinweise und Spam-Schutz ohne unnötige Hürden,
- alternative Kontaktwege Telefon und WhatsApp.

### 9. Footer

- verifizierte Kontaktdaten,
- Öffnungszeiten,
- Impressum und Datenschutz,
- bestätigte Social-Media-Links,
- aktuelles, automatisch gepflegtes Copyright-Jahr.

Besucherzähler, Login, doppelte Navigation und veraltete saisonale Aktionsgrafiken entfallen vollständig.

## Visuelle Richtung

Entwickle die vorhandene Motorsport-/Werkstatt-Identität weiter, ohne das alte Design nachzubauen:

- dunkle, hochwertige Grundgestaltung in Anthrazit oder nahezu Schwarz,
- Cyan beziehungsweise elektrisches Blau als gezielte Akzentfarbe,
- Weiß und helle Grautöne für gut lesbare Inhalte,
- kräftige, moderne Typografie mit technischem Charakter, aber ohne Grunge-Effekt bei Fließtexten,
- großzügige Abstände, klare Raster und deutlich erkennbare Hierarchie,
- dezente technische Details, etwa feine Linien oder zurückhaltende Texturen,
- hochwertige Fotografie als wichtigstes Gestaltungsmittel,
- Animationen nur dezent, zweckmäßig und unter Beachtung von `prefers-reduced-motion`.

Vermeide eine überladene „Tuning“-Optik, Neon auf jeder Fläche, kleine graue Texte, uneinheitliche Logos, starke Glows, Karbonfaser-Klischees und generische Stockbilder. Die Anmutung soll modern, handwerklich und seriös sein.

## Responsive Verhalten

Entwickle mobile-first für typische Breiten ab 320 Pixel. Alle Bereiche müssen ohne horizontales Scrollen funktionieren. CTAs sollen auf Mobilgeräten leicht erreichbar sein; ein kompakter, nicht störender Kontakt-CTA am unteren Rand ist zulässig. Prüfe zusätzlich Tablet- und große Desktopansichten. Bilder benötigen passende Seitenverhältnisse, responsive Größen und dürfen keine Layoutsprünge verursachen.

## Barrierefreiheit und Qualität

- orientiere dich an WCAG 2.2, Konformitätsstufe AA,
- verwende semantisches HTML mit logischer Überschriftenstruktur,
- ermögliche vollständige Tastaturbedienung und gut sichtbare Fokuszustände,
- stelle ausreichende Farbkontraste und mindestens 44 × 44 Pixel große Touch-Ziele sicher,
- hinterlege sinnvolle Alternativtexte; rein dekorative Bilder bleiben für Screenreader verborgen,
- beschrifte Formulare eindeutig und verknüpfe Fehlermeldungen programmatisch,
- respektiere reduzierte Bewegung sowie Browser-Zoom,
- verwende verständliche deutsche Texte und echte Umlaute.

## Technik und Performance

- nutze den im Projekt vorhandenen Technologie-Stack; führe keine unnötig große Abhängigkeit oder ein neues Framework ein,
- erstelle wiederverwendbare Komponenten und halte zentrale Geschäftsangaben an einer Stelle pflegbar,
- liefere optimierte Bilder in modernen Formaten mit geeigneten Fallbacks, definierten Abmessungen und Lazy Loading unterhalb des sichtbaren Bereichs,
- lade Schriften datenschutzkonform, vorzugsweise lokal oder über Systemschriften,
- vermeide unnötiges JavaScript und blockierende Ressourcen,
- strebe gute Core Web Vitals und einen Lighthouse-Wert von mindestens 90 in Performance, Accessibility, Best Practices und SEO an,
- ergänze aussagekräftigen Seitentitel, Meta-Description, Open-Graph-Daten, Favicons und strukturierte Daten vom Typ `LocalBusiness` beziehungsweise einem passenderen Untertyp,
- strukturiere Telefonnummern, Links und Adressdaten semantisch korrekt,
- binde Analyse-, Karten-, Video- oder Social-Media-Dienste nicht ohne passende Datenschutz- und Einwilligungslösung ein.

## Umgang mit vorhandenem Bildmaterial

Das Material in `../dk-race-analysis/images/` dient als Referenz und darf nur verwendet werden, wenn Auflösung, Aktualität und Nutzungsrechte passen. Insbesondere:

- `workshop-exterior.png` eignet sich vorläufig als Vertrauensmotiv, sollte aber möglichst durch das hochauflösende Original ersetzt werden,
- `vehicle-parts.png` nur klein einsetzen oder durch ein aktuelles Originalfoto ersetzen,
- `opening-hours.png` nicht übernehmen; Zeiten als Text darstellen,
- alte Facebook- und YouTube-Grafiken durch zugängliche Icons ersetzen,
- `tire-brands-winter-offer.png` nicht als Aktionsgrafik übernehmen,
- `kw-sales-service-point.png` nur nach Bestätigung der Partnerschaft und Bildrechte einsetzen.

Erzeuge keine neuen Logos, die mit echten Hersteller- oder Partnermarken verwechselt werden könnten.

## Inhalt und Tonalität

Alle sichtbaren Texte sind auf Deutsch. Schreibe kurz, direkt, kompetent und freundlich. Verwende eine konsistente Ansprache und entscheide dich vorzugsweise für „Sie“, sofern der Betreiber keine andere Markenstimme vorgibt. Nutze konkrete Handlungsaufforderungen statt Marketingsprache. Erstelle sinnvolle Entwurfstexte, markiere jedoch alle sachlich ungeklärten Aussagen.

## Erwartetes Ergebnis

Liefere eine produktionsnahe, responsive Startseite einschließlich aller nötigen Komponenten und Zustände. Setze keine unbestätigten Fakten als endgültigen Inhalt ein. Dokumentiere anschließend kurz:

1. die umgesetzte Seitenstruktur und wichtigsten Designentscheidungen,
2. alle verwendeten beziehungsweise ersetzten Bildquellen,
3. alle noch offenen Inhalte und Platzhalter,
4. die Schritte zum lokalen Starten, Testen und Bauen,
5. die Ergebnisse der durchgeführten Tests.

## Abnahmekriterien

Das Redesign ist fertig, wenn:

- die Seite auf Mobilgerät, Tablet und Desktop ohne Layoutfehler funktioniert,
- die drei Hauptaktionen WhatsApp, Anruf und Route schnell auffindbar sind,
- Navigation und Inhaltsreihenfolge klar und frei von Dopplungen sind,
- keine Anmeldung, kein Besucherzähler und keine veraltete Aktionswerbung erscheinen,
- ungeklärte Kontaktdaten und Markenangaben eindeutig als Platzhalter markiert sind,
- Texte, Fokuszustände, Formulare und Kontraste barrierearm umgesetzt sind,
- alle Links und Formularzustände geprüft wurden,
- keine vermeidbaren Browserfehler oder fehlenden Assets auftreten,
- die Seite mit realistischen Inhalten statt Blindtext präsentiert wird,
- Build, Linting und vorhandene Tests erfolgreich durchlaufen.
