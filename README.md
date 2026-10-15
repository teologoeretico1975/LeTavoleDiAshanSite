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
