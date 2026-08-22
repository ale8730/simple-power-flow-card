# ⚡ Simple Power Flow Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/ale8730/simple-power-flow-card?color=brightgreen&label=version)](https://github.com/ale8730/simple-power-flow-card/releases)

Una card Lovelace per **Home Assistant** ultra-moderna, fluida e ad alte prestazioni, progettata per visualizzare in tempo reale i flussi energetici (Solare, Rete, Batteria, Casa e Carichi secondari individuali) con **curve di Bézier intelligenti**, **canale centrale a Bus ortogonale**, **motore particellare RAF a 60/120fps**, **effetti visivi dinamici** e **layout adattivo orizzontale/verticale a 2 colonne**.

---

## ✨ Caratteristiche Principali

- 📐 **Routing Linee Intelligente & Flessibile**:
  - **Curve di Bézier parametriche**: Raccordi armoniosi e non sovrapposti tra tutti i nodi.
  - **Canale a Bus Ortogonale (`orthogonal_bus`)**: Fascio centrale a corsie parallele separate con curve a 90° e spaziatura regolabile.
- 🚀 **Motore Particellare Continuo (RAF 60/120fps)**: Animazione ultra-fluida senza glitch né scatti durante i cambi di potenza o aggiornamento sensori.
- ✨ **Effetti Visivi "Wow Factor" (Tutti opzionali e configurabili)**:
  - ☄️ **Meteor Trail**: Coda a cometa luminescente per le particelle con gradienti direzionali in tempo reale.
  - 🌀 **Icone Vive (Living Icons)**: Rotazione/pulsazione per elettrodomestici attivi e livello batteria liquido con onda animata continua (`liquid`) o gradiente energetico radiale (`gradient`).
  - 💎 **Vetro Bombato 3D & Neon Core**: Riflessi di luce simulati in puro SVG e anelli concentrici interni luminescenti.
  - 💥 **Onde d'Urto all'Arrivo (Impact Ripples)**: Micro-onde d'urto ad espansione all'arrivo dei flussi nei nodi (GPU accelerated).
- 🏠 **Anello Multi-Colore Mix Casa (Home Energy Mix Ring)**: Mostra in tempo reale sul perimetro della Casa la quota proporzionale proveniente da Solare, Batteria e Rete, con hover glow dinamico.
- 🔋 **Supporto Coppie Direzionali & Amperaggio**:
  - Sensore unico con segno o coppie dedicate (Prelievo/Immissione per Rete, Carica/Scarica per Batteria).
  - Visualizzazione SoC %, Ampere e Watt multilivello all'interno dei nodi.
- 📱 **Layout Responsive & Sezioni Lovelace**:
  - **Orizzontale**: Ideale per Tablet e Desktop.
  - **Verticale**: Ideale per Smartphone con carichi secondari organizzati in griglia a 2 colonne.
  - **Auto Switch** automatico in base alla larghezza della card.
- 🎛️ **Visual Card Editor Completo**: Configurazione tramite interfaccia grafica suddivisa in schede tematiche (*Generale*, *Nodi Principali*, *Dispositivi*, *Stile & Dimensioni*, *Effetti Visivi ✨*, *Avanzate*).
- ♿ **Accessibilità**: Supporto nativo `@media (prefers-reduced-motion: reduce)`.

---

## 📦 Installazione

### Metodo 1: Tramite HACS (Consigliato)

1. Apri **HACS** nella tua istanza di Home Assistant.
2. Clicca sui **3 puntini** in alto a destra e seleziona **Repository personalizzati**.
3. Inserisci l'URL del repository:
   ```text
   https://github.com/ale8730/simple-power-flow-card
   ```
4. Seleziona la categoria **Dashboard** (Lovelace) e clicca **Aggiungi**.
5. Cerca **Simple Power Flow Card**, clicca su **Scarica** e ricarica la dashboard Lovelace.

### Metodo 2: Installazione Manuale

1. Scarica il file `simple-power-flow-card.js` dall'ultima [Release](https://github.com/ale8730/simple-power-flow-card/releases).
2. Copia il file nella cartella `/config/www/simple-power-flow-card.js` di Home Assistant.
3. Vai in **Impostazioni** > **Dashboard** > **Tre puntini (in alto a destra)** > **Risorse** e aggiungi:
   - **URL**: `/local/simple-power-flow-card.js`
   - **Tipo**: `JavaScript Module`

---

## 🛠️ Esempi di Configurazione YAML

### 1. Configurazione Completa con Effetti Visivi & Carichi
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
  state_of_charge: sensor.battery_soc
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
  - id: ac
    name: "Clima Salotto"
    entity: sensor.ac_power
    icon: "mdi:air-conditioner"
    color: "#38bdf8"
    include_in_home: true

# Effetti Visivi Wow Factor (Opzionali)
effects:
  meteor_trail:
    enabled: true
    tail_length: 0.08
    glow_intensity: 1.5
  living_icons:
    enabled: true
    battery_type: liquid
    battery_animated: true
    load_animation: rotate
  glassmorphism:
    enabled: true
    intensity: 50
    neon_core: true
  impact_ripples:
    enabled: true
    ripple_size: 18

# Personalizzazione Stile & Routing (Opzionali)
styles:
  line_routing_mode: orthogonal_bus
  bus_lane_spacing: 8
  bus_corner_radius: 20
  node_radius_primary: 36
  node_radius_secondary: 28
  icon_size_primary: 18
  icon_size_secondary: 16
```

### 2. Configurazione con Coppie Direzionali (Import/Export e Carica/Scarica)
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
  state_of_charge: sensor.battery_soc_percent
stroke_mode: watt
speed_mode: absolute
layout_mode: auto
```

---

## ⚙️ Opzioni di Configurazione

### Configurazione Principale

| Parametro | Tipo | Default | Descrizione |
|---|---|---|---|
| `title` | `string` | `Power Flow` | Titolo visualizzato nell'intestazione della card |
| `solar` | `SourceDescriptor` | - | Configurazione del nodo Solare |
| `grid` | `SourceDescriptor` | - | Configurazione del nodo Rete |
| `battery` | `SourceDescriptor` | - | Configurazione del nodo Batteria |
| `home` | `SourceDescriptor` | - | Configurazione del nodo Casa |
| `devices` | `IndividualDeviceConfig[]` | `[]` | Lista dei carichi secondari individuali |
| `layout_mode` | `'auto' \| 'horizontal' \| 'vertical'` | `'auto'` | Modalità di disposizione grafica |
| `stroke_mode` | `'fixed' \| 'watt' \| 'ampere'` | `'watt'` | Modalità di calcolo dello spessore delle linee |
| `speed_mode` | `'absolute' \| 'relative'` | `'absolute'` | Modalità di calcolo della velocità delle particelle |
| `scale_curve` | `'linear' \| 'sqrt' \| 'log'` | `'sqrt'` | Curva matematica di scaling spessore/velocità |
| `min_duration` | `number` | `0.8` | Durata minima particella in secondi (flusso rapido) |
| `max_duration` | `number` | `5.5` | Durata massima particella in secondi (flusso lento) |
| `min_stroke` | `number` | `2.0` | Spessore minimo della linea in px |
| `max_stroke` | `number` | `7.0` | Spessore massimo della linea in px |
| `max_total_particles`| `number` | `30` | Tetto massimo globale di particelle attive |
| `display_zero_tolerance` | `number` | `0` | Soglia in Watt sotto la quale il flusso è considerato zero |
| `w_to_kw_threshold` | `number` | `1000` | Soglia in Watt per il passaggio automatico a kW |
| `decimals` | `number` | `2` | Numero di cifre decimali |
| `residual_handling` | `'clamp' \| 'absorb' \| 'unbalanced'` | `'clamp'` | Gestione del residuo matematico dei sensori |
| `styles` | `CardStylesConfig` | `{}` | Personalizzazione avanzata di stile e dimensioni |
| `effects` | `VisualEffectsConfig` | `{}` | Abilitazione e regolazione degli effetti visivi |

---

### Descrittore di Sorgente (`SourceDescriptor`)

Ciascun nodo (`solar`, `grid`, `battery`, `home`, `devices`) supporta:
- `entity`: `string` (entità principale con segno +/-)
- `entity_import` / `entity_export`: `string` (per rete con sensori separati)
- `entity_charge` / `entity_discharge`: `string` (per batteria con sensori separati)
- `state_of_charge`: `string` (entità SoC percentuale per la batteria)
- `entity_amperage`: `string` (entità opzionale per la corrente in Ampere)
- `invert`: `boolean` (inverte il segno per entità singola)
- `name`: `string` (etichetta personalizzata)
- `icon`: `string` (icona MDI personalizzata)
- `color`: `string` (colore base/principale CSS personalizzato o HEX)
- `color_charge`: `string` (colore personalizzato durante la carica batteria, default `#4caf50`)
- `color_discharge`: `string` (colore personalizzato durante la scarica batteria, default `#9c27b0`)
- `use_idle_color`: `boolean` (attiva colore dedicato per batteria a 0 W / inattiva, default `false`)
- `color_idle`: `string` (colore personalizzato batteria inattiva / idle, default `#94a3b8`)
- `include_in_home`: `boolean` (solo per `devices`: se `true` include il consumo nel totale Casa, default `true`)

---

### Effetti Visivi (`effects`)

```yaml
effects:
  meteor_trail:
    enabled: boolean       # default: false - Coda a cometa per le particelle
    tail_length: number    # default: 0.08 - Lunghezza coda (0.02 - 0.25)
    glow_intensity: number # default: 1.5 - Intensità bagliore (0.5 - 3.0)
  living_icons:
    enabled: boolean       # default: false - Animazioni carichi e batteria dinamica
    battery_type: string   # default: 'gradient' - 'liquid' (onda animata) o 'gradient'
    battery_animated: bool # default: true - Movimento continuo onde/gradiente
    load_animation: string # default: 'rotate' - 'rotate', 'pulse' o 'none'
  glassmorphism:
    enabled: boolean       # default: false - Riflesso vetro 3D e neon ring
    intensity: number      # default: 50 - Intensità effetto (0 - 100%)
    neon_core: boolean     # default: true - Anello concentrico interno Neon
  impact_ripples:
    enabled: boolean       # default: false - Onde d'urto all'arrivo nei nodi
    ripple_size: number    # default: 18 - Espansione onda in px (5 - 40)
    ripple_color: string   # default: '' - Colore personalizzato (vuoto = colore arco)
```

---

### Personalizzazione Stile (`styles`)

```yaml
styles:
  line_routing_mode: string     # default: 'bezier_curved' - 'bezier_curved' o 'orthogonal_bus'
  bus_lane_spacing: number      # default: 8 - Spaziatura corsie bus (px)
  bus_corner_radius: number     # default: 20 - Raggio curve 90° bus (px)
  node_radius_primary: number   # default: 36 - Raggio nodi principali (px)
  node_radius_secondary: number # default: 28 - Raggio carichi secondari (px)
  node_border_width: number     # default: 2.5 - Spessore bordo nodi (px)
  icon_size_primary: number     # default: 18 - Dimensione icone principali (px)
  icon_size_secondary: number   # default: 16 - Dimensione icone secondarie (px)
  spacing_horizontal: number    # default: 120 - Spaziatura orizzontale colonne (px)
  spacing_vertical: number      # default: 85 - Spaziatura verticale righe (px)
  node_shadow_blur: number      # default: 10 - Sfocatura ombra cerchi (px)
  node_shadow_opacity: number   # default: 0.35 - Opacità ombra cerchi (0.0 - 1.0)
  node_shadow_offset_y: number  # default: 4 - Offset verticale ombra (px)
  show_home_mix_ring: boolean   # default: true - Mostra anello quote su nodo Casa
  home_glow_mode: string        # default: 'predominant' - 'predominant' o 'custom'
```

---

## 📄 Licenza

Rilasciato sotto licenza [MIT](LICENSE).
