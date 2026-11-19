# Percy Studio — sito

Sito di Percy Studio (https://www.percystudio.it), con la pagina di *Le Tavole di Ashan*, la privacy policy e la pagina tester. Italiano e inglese. Statico, servito da GitHub Pages dal ramo `main`.

## Struttura

```
index.html            Home dello studio (IT)
en/index.html         Home dello studio (EN)
ashan/index.html      Le Tavole di Ashan (IT)
en/ashan/index.html   Le Tavole di Ashan (EN)
privacy.html          Privacy policy (IT + EN, stesso URL)
tester.html           Programma tester (IT + EN, noindex)
sitemap.xml           Sitemap per i motori di ricerca (da aggiornare a ogni nuova pagina)
robots.txt            Esclude tester.html e indica la sitemap
css/studio.css        Stile dello studio (chiaro/scuro automatico)
css/ashan.css         Stile del gioco, privacy e tester (scuro)
js/                   board.js (scacchiera in home), lang.js, contact.js
assets/images/        hero.jpg, og.jpg, screenshot_*.webp
```

`privacy.html` e `tester.html` restano agli stessi indirizzi di prima: il primo è l'URL registrato nella scheda Google Play, il secondo è nelle istruzioni ai tester.

## Email

L'indirizzo non è scritto in chiaro nell'HTML: compare al clic su "Mostra email" (`js/contact.js`, con i valori in `data-u` e `data-d`).

## Dominio

Dominio personalizzato in `CNAME`. Impostazioni: Settings → Pages.

## Google Search Console

La proprietà di dominio `percystudio.it` è verificata con un record TXT `google-site-verification=…` nella zona DNS su Aruba, accanto ai record SPF e DMARC. Non va rimosso: Google lo ricontrolla periodicamente.

La sitemap è `https://www.percystudio.it/sitemap.xml`, già inviata in Search Console. Usa gli indirizzi con `www` (come in `CNAME`) e indica per ogni pagina la versione nell'altra lingua. Non si aggiorna da sola: ogni nuova pagina pubblica va aggiunta a mano. `tester.html` resta fuori dalla sitemap ed è esclusa in `robots.txt`.

## Tarot Battle: lancio del 22 dicembre 2026

La pagina itch.io (`https://percystudio.itch.io/tarot-battle`) è in **Draft** e il gioco è già caricato. Finché non è pubblica, il sito non la collega: con la pagina in Draft un visitatore troverebbe un 404, e renderla pubblica in anticipo renderebbe il gioco giocabile prima del lancio.

Il pulsante è pronto nel ramo `tarot-itch-link` (pulsante pieno "Scopri su itch.io" / "View on itch.io", Instagram diventa secondario). Il giorno del lancio:

1. su itch.io la pagina passa a **Public**;
2. si unisce `tarot-itch-link` a `main`;
3. in `index.html` e `en/index.html`: pulsante "Gioca su itch.io" / "Play on itch.io", e Stato da "In arrivo il 22 dicembre 2026" a "Disponibile" / da "Coming December 22, 2026" a "Available";
4. si eliminano su GitHub i rami `tarot-itch-link` e `add-sitemap` (già unito).
