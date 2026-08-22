# ⚡ Simple Power Flow Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/flixlix/power-flow-card-plus?color=brightgreen&label=version)](https://github.com/)

Una card Lovelace moderna, fluida e ad alte prestazioni per **Home Assistant**, progettata per visualizzare in tempo reale i flussi energetici (Solare, Rete, Batteria, Casa e Carichi secondari individuali) con **curve di Bézier intelligenti**, **particelle SMIL Dot Glow** hardware-accelerated e **layout adattivo orizzontale/verticale a 2 colonne**.

---

## ✨ Caratteristiche Principali

- 📐 **Routing Intelligente delle Linee**: Curve di Bézier cubiche parametriche tra nodi che evitano sovrapposizioni e calcolano gli anchor perimetrali in modo deterministico.
- ✨ **Particelle Dot Glow nel Compositor**: Animazione hardware-accelerated SMIL con gradienti radiali ad alte prestazioni (zero overhead GPU/CPU, zero filtri pesanti) e piena compatibilità con iOS WKWebView.
- 📱 **Layout Responsive & Griglia a 2 Colonne**:
  - **Orizzontale**: Solare (Alto), Rete (SX), Batteria (Basso), Casa (DX) + Dispositivi estesi a destra.
  - **Verticale**: Solare (Alto), Rete (SX), Batteria (DX), Casa (Centro) + **Carichi secondari in griglia a 2 colonne** sotto la Casa senza limiti di altezza.
  - **Auto Switch** con isteresi (430px / 450px) e pieno supporto a **Lovelace Sections** (`getGridOptions()`).
- ⚡ **Velocità Dinamica & Spessore**:
  - Modalità Velocità **Assoluta** (Watt) o **Relativa** (% del totale) con smoothing EMA (Exponential Moving Average).
  - Modalità Spessore **Fissa**, **Watt** o **Ampere** (`stroke_mode`) con curve di scala (`linear`, `sqrt`, `log`).
- 🎛️ **Visual Card Editor Completo**: Configurazione grafica tramite UI di Home Assistant e **Sub-Editor interattivo** per aggiungere, rimuovere, riordinare e configurare i carichi secondari.
- 🌍 **Internazionalizzazione (i18n)**: Supporto nativo per **Italiano** e **Inglese** con rispetto dei formati numerici di `hass.locale`.
- 🚀 **Ottimizzazione Ciclo di Vita**: Setter `hass` memoizzato con filtro differenziale restrittivo sulle sole entità monitorate (`_watchedEntities`) e sospensione automatica via `IntersectionObserver` quando la card non è visibile.

---

## 📦 Installazione

### Metodo 1: Tramite HACS (Consigliato)
1. Apri **HACS** nella tua istanza di Home Assistant.
2. Clicca sui 3 puntini in alto a destra e seleziona **Repository personalizzati**.
3. Inserisci l'URL di questo repository, seleziona la categoria **Dashboard** (Lovelace) e clicca **Aggiungi**.
4. Clicca su **Scarica** e ricarica la dashboard.

### Metodo 2: Installazione Manuale
1. Scarica il file `simple-power-flow-card.js` dalla sezione [Releases](https://github.com/) di GitHub.
2. Copia il file nella cartella `/config/www/simple-power-flow-card.js`.
3. Vai in **Impostazioni** > **Dashboard** > **Tre puntini (in alto a destra)** > **Risorse** e aggiungi:
   - URL: `/local/simple-power-flow-card.js`
   - Tipo: `JavaScript Module`

---

## 🛠️ Esempi di Configurazione YAML

### 1. Configurazione Completa Tipica
```yaml
type: custom:simple-power-flow-card
title: "Flusso Energetico Casa"
solar:
  entity: sensor.solar_power
  name: "Fotovoltaico"
grid:
  entity: sensor.grid_power
  name: "Rete Elettrica"
battery:
  entity: sensor.battery_power
  name: "Accumulo"
home:
  entity: sensor.home_consumption
  name: "Casa"
devices:
  - id: heatpump
    name: "Pompa di Calore"
    entity: sensor.heatpump_power
    icon: "mdi:heat-pump"
    color: "#00bcd4"
    include_in_home: true
  - id: ev_charger
    name: "Auto Elettrica"
    entity: sensor.ev_charger_power
    icon: "mdi:car-electric"
    color: "#22c55e"
    include_in_home: true
  - id: kitchen
    name: "Piano Induzione"
    entity: sensor.kitchen_power
    icon: "mdi:stove"
    color: "#f59e0b"
    include_in_home: true
stroke_mode: watt
speed_mode: absolute
layout_mode: auto
scale_curve: sqrt
```

### 2. Configurazione con Coppie Direzionali (Import/Export separati)
```yaml
type: custom:simple-power-flow-card
title: "Flusso Energetico"
solar:
  entity: sensor.inverter_power
grid:
  entity_import: sensor.grid_imported_power
  entity_export: sensor.grid_exported_power
battery:
  entity_charge: sensor.battery_charge_power
  entity_discharge: sensor.battery_discharge_power
stroke_mode: ampere
speed_mode: relative
```

---

## ⚙️ Opzioni di Configurazione

| Parametro | Tipo | Default | Descrizione |
|---|---|---|---|
| `title` | `string` | `Power Flow` | Titolo visualizzato nell'intestazione della card |
| `solar` | `SourceDescriptor` | - | Configurazione del nodo Solare |
| `grid` | `SourceDescriptor` | - | Configurazione del nodo Rete |
| `battery` | `SourceDescriptor` | - | Configurazione del nodo Batteria |
| `home` | `SourceDescriptor` | - | Configurazione del nodo Casa (derivato se omesso) |
| `devices` | `IndividualDeviceConfig[]` | `[]` | Lista dei dispositivi secondari |
| `layout_mode` | `'auto' \| 'horizontal' \| 'vertical'` | `'auto'` | Modalità di disposizione grafica |
| `stroke_mode` | `'fixed' \| 'watt' \| 'ampere'` | `'watt'` | Modalità di calcolo dello spessore delle linee |
| `speed_mode` | `'absolute' \| 'relative'` | `'absolute'` | Modalità di calcolo della velocità delle particelle |
| `scale_curve` | `'linear' \| 'sqrt' \| 'log'` | `'sqrt'` | Curva matematica di scaling |
| `min_duration` | `number` | `0.8` | Durata minima particella in secondi (flusso rapido) |
| `max_duration` | `number` | `5.5` | Durata massima particella in secondi (flusso lento) |
| `min_stroke` | `number` | `2.0` | Spessore minimo della linea in px |
| `max_stroke` | `number` | `7.0` | Spessore massimo della linea in px |
| `max_total_particles`| `number` | `30` | Tetto massimo globale di particelle attive (min 1 per arco) |
| `display_zero_tolerance` | `number` | `5` | Soglia di tolleranza in Watt sotto la quale il flusso è considerato zero |
| `w_to_kw_threshold` | `number` | `1000` | Soglia in Watt per il passaggio automatico a kW |
| `decimals` | `number` | `1` | Numero di cifre decimali |
| `residual_handling` | `'clamp' \| 'absorb' \| 'unbalanced'` | `'clamp'` | Gestione del residuo matematico dei sensori |

### Descrittore di Sorgente (`SourceDescriptor`)
Ciascun nodo (`solar`, `grid`, `battery`, `home`, `devices`) accetta:
- `entity`: `string` (entità principale con segno)
- `entity_import` / `entity_export`: `string` (per rete)
- `entity_charge` / `entity_discharge`: `string` (per batteria)
- `entity_amperage`: `string` (entità per corrente in Ampere)
- `invert`: `boolean` (inverte convenzione segno su entità singola)
- `name`: `string` (override etichetta)
- `icon`: `string` (override icona MDI)
- `color`: `string` (override colore CSS)
- `include_in_home`: `boolean` (solo per devices: default `true`)

---

## ✨ Effetti Visivi Wow Factor (`effects`)

Tutti gli effetti visivi sono opzionali e disattivati di default:

```yaml
effects:
  meteor_trail:
    enabled: true          # Coda a cometa luminescente per le particelle
    tail_length: 0.08      # Lunghezza normalizzata (0.02 - 0.25)
    glow_intensity: 1.5    # Intensità bagliore (0.5 - 3.0)
  living_icons:
    enabled: true          # Icone vive e livello batteria dinamico
    battery_type: liquid   # 'liquid' (onda liquida animata) o 'gradient'
    battery_animated: true # Animazione onde continua
    load_animation: rotate # 'rotate', 'pulse' o 'none'
  glassmorphism:
    enabled: true          # Riflesso vetro 3D e neon ring
    intensity: 50          # Intensità riflesso (0 - 100%)
    neon_core: true        # Anello concentrico interno Neon
  impact_ripples:
    enabled: true          # Onde d'urto all'arrivo delle particelle nei nodi
    ripple_size: 18        # Dimensione espansione onda in px
    ripple_color: ""       # Colore personalizzato (lascia vuoto per colore del flusso)
```

---

## 🎨 Personalizzazione Stile (`styles`)

```yaml
styles:
  node_radius_primary: 36        # Raggio nodi principali (px)
  node_radius_secondary: 28      # Raggio dispositivi (px)
  node_border_width: 2.5         # Spessore bordo cerchi (px)
  icon_size_primary: 18          # Dimensione icone principali (px)
  icon_size_secondary: 16        # Dimensione icone dispositivi (px)
  line_routing_mode: bezier_curved # 'bezier_curved' o 'orthogonal_bus'
  bus_lane_spacing: 8            # Spaziatura corsie bus parallele (px)
  bus_corner_radius: 20          # Raggio curve a 90° bus (px)
  show_home_mix_ring: true       # Anello multi-colore quote su nodo Casa
```

---

## 💻 Sviluppo Locale & Test

```bash
# Installa le dipendenze
npm install

# Esegui i test unitari (Vitest)
npm test

# Esegui il controllo dei tipi TypeScript
npm run type-check

# Compila il bundle per produzione
npm run build

# Avvia il server di sviluppo per il simulatore
python3 -m http.server 5055 --directory dev
```
Visita `http://localhost:5055/index.html` per il simulatore completo di Home Assistant o `http://localhost:5055/editor.html` per l'editor isolato.

---

## 📄 Licenza
Rilasciato sotto licenza [MIT](LICENSE).
