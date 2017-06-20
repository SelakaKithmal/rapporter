
# MM Rapporter

Der MM Rapporter ist ein Programm, welches es erlaubt,
einfach und schnell Time-Tracking Reports zu erstellen
und in eine Datenbank einzuspeisen.


## Abhaengigkeiten

Diese Abhaengigkeiten sind notwendig fuer die aktive
(Mit-) Entwicklung des Rapporters:

- UNIX / GNU/Linux als Host OS mit bash (fuer `./bin/build.sh` und `./bin/package.sh`)
- [nwjs SDK](https://nwjs.io/downloads) mit Chromium v59+

```bash
# Auf Arch Linux
pacaur -S nwjs-sdk;
```


## Installation

Nach der Installation des nwjs SDKs kann man den Rapporter
wie folgt starten. Es oeffnen sich automatisch die Dev Tools.

```bash
cd ~/Software;

# Installation
mkdir rapporter;
git clone https://github.com/mm-automation/rapporter.git ./rapporter;


# Start
cd ./rapporter;
nw .;
```


## Lizenz

Die Lizenz ist noch ungeklaert. Der Rapporter ist vorerst als
fuer Forschungs-Projekt und fuer Schulungs-Zwecke zu betrachten.

Es wird keine Haftung oder Garantie jeglicher Art uebernommen.
Verwendung auf eigene Verantwortung.

