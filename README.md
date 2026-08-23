# ⚡ Simple Power Flow Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/ale8730/simple-power-flow-card?color=brightgreen&label=version)](https://github.com/ale8730/simple-power-flow-card/releases)

Una card Lovelace per **Home Assistant** ultra-moderna, fluida e ad altissime prestazioni, progettata per monitorare e visualizzare in tempo reale i flussi energetici tra **Fotovoltaico**, **Rete Elettrica**, **Batteria di Accumulo**, **Consumo Casa** e **Carichi Secondari Individuali**.

Offre **curve di Bézier intelligenti**, **canale centrale a Bus ortogonale**, **motore particellare continuo a 60/120fps (RAF Engine)** con velocità normalizzata per lunghezza del cavo, **effetti visivi dinamici**, **anello mix energetico multi-colore**, **controllo interattivo dei dispositivi con badge e gesture**, e **layout adattivo orizzontale/verticale a 2 colonne**.

---

## ✨ Caratteristiche Principali

- 📐 **Routing Linee Intelligente & Tracciati SVG**:
  - **Curve di Bézier Parametriche (`bezier_curved`)**: Linee morbide, armoniose e non sovrapposte tra tutte le fonti energetiche e i carichi.
  - **Canale a Bus Ortogonale (`orthogonal_bus`)**: Fascio centrale a corsie parallele separate con raccordi a 90°, raggio d'angolo personalizzabile (`bus_corner_radius`), spaziatura corsie (`bus_lane_spacing`) e inversione dell'ordine delle corsie (`invert_bus_lane_order`).
- 🚀 **Motore Particellare Continuo a 60/120fps (RAF Engine)**:
  - **Zero Glitch & Zero Salti**: Le particelle transitano continuamente senza mai riavviarsi o scattare al cambio di potenza o al refresh dei sensori.
  - **Normalizzazione Velocità per Lunghezza (`normalize_speed_by_length`)**: Le particelle viaggiano alla stessa velocità lineare reale (px/s) su tutti i cavi, indipendentemente dalla loro lunghezza geometrica.
  - **Dinamica Avanzata**: Modalità di velocità assoluta o relativa (`speed_mode`), curve di scala matematiche (`sqrt`, `linear`, `log`), spessore dinamico in Watt, Ampere o fisso (`stroke_mode`), particelle con nucleo luminoso (`particle_inner_glow`) e bordo morbido radiale (`particle_soft_edge`).
  - **Cavi Inattivi Configurabili**: Stile personalizzato per cavi a flusso zero (`dashed`, `solid`, `hidden`) con opacità regolabile.
- ✨ **Effetti Visivi "Wow Factor" (Tutti opzionali e modulari)**:
  - ☄️ **Meteor Trail (Coda a Cometa)**: Coda luminescente per le particelle con gradienti direzionali calcolati in tempo reale lungo il percorso.
  - 🌀 **Icone Vive (Living Icons)**:
    - Rotazione continua o pulsazione energetica per le icone dei carichi attivi.
    - Livello batteria liquido con onda animata continua (`battery_type: 'liquid'`) o gradiente radiale energetico (`battery_type: 'gradient'`).
  - 💎 **Glassmorphism 3D & Neon Core**: Riflesso di luce bombato in puro SVG e anello concentrico interno Neon ad alta luminosità.
  - 💥 **Onde d'Urto all'Arrivo (Impact Ripples)**: Micro-onde d'urto ad espansione sul perimetro dei nodi all'arrivo dei flussi (GPU accelerated con pool ad alte prestazioni).
  - 🌟 **Bagliore all'Hover (Hover Glow)**: Glow perimetrale illuminato al passaggio del cursore su ciascun nodo.
  - 🌑 **Ombre 3D dei Nodi**: Ombreggiature volumetriche configurabili in sfocatura, opacità, offset e raggio.
- 🏠 **Anello Multi-Colore Mix Energetico Casa (Home Energy Mix Ring)**:
  - Visualizza in tempo reale sul perimetro del cerchio Casa la ripartizione proporzionale esatta dell'energia consumata (Solare, Batteria e Rete).
  - **Colore Predominante Dinamico**: Il cerchio e l'hover glow della Casa assumono automaticamente il colore della fonte energetica prevalente.
  - **Rilevamento Sovraccarico Dispositivi**: Se $\sum P_{\text{dispositivi}} > P_{\text{casa}}$, la card calcola l'eccedenza ed evidenzia visivamente l'anomalia (`⚠️ +X W`).
  - **Consumo Non Tracciato & Residuo Unbalanced**: Calcolo del carico residuo non monitorato (`not_tracked`) e gestione del disallineamento sensori (`residual_handling: 'unbalanced'`).
- 🔋 **Supporto Completo a Nodi Primari & Dispositivi**:
  - **Sensori Singoli o Coppie Direzionali**: Supporto nativo sia per sensori unici con segno (+/-) che per coppie dedicate (Prelievo/Immissione per Rete, Carica/Scarica per Batteria) con precedenza automatica.
  - **Stato di Carica (SoC %)**: Supporto universale per sensori SoC (scala 0–100 o 0–1) con precedenza assoluta su `state_of_charge`.
  - **Corrente in Ampere (`entity_amperage`)**: Visualizzazione del valore in Ampere formattato all'interno dei nodi.
  - **Colore Batteria Idle**: Colore personalizzato dedicato quando la batteria è a riposo (`use_idle_color`).
  - **Controllo Visibilità a Flusso Zero (`display_zero`)**: Possibilità di nascondere singoli nodi o carichi a zero Watt (`display_zero: false`), preservando la linea rete-casa come salvaguardia.
- 🏷️ **Tipografia & Etichette Stile Chip/Tag**:
  - Personalizzazione granulare dei font (valori, etichette, info secondarie, direzionali, top info, unità).
  - Sfondo stile **Chip / Tag** (`label_chip_enabled`) con colore coordinato all'entità, opacità, padding, raggio bordi e spessore linea regolabili.
  - Varie modalità colore per le etichette (`auto_contrast`, `white`, `black`, `match_entity`, `secondary`, `custom`).
- 🔘 **Badge di Stato & Controlli Interattivi (Gesture Actions)**:
  - Badge perimetrali sui nodi (`dot`, `icon`, `text`) con colore On/Off, dimensione, posizione e pulsazione energetica sincronizzata.
  - Supporto `badge_quick_toggle`: disattivabile per aprire direttamente la scheda `more-info` senza invertire lo stato dell'interruttore.
  - Gesture su ciascun nodo: Tocco singolo (`tap_action`), Pressione prolungata (`hold_action`) e Doppio tocco (`double_tap_action`).
- 📱 **Layout Responsive & Adaptive ViewBox**:
  - **Orizzontale (`horizontal`)**: Ideale per Tablet e Desktop.
  - **Verticale (`vertical`)**: Ideale per Smartphone con carichi secondari organizzati in griglia a 2 colonne.
  - **Auto Switch (`auto`)**: Passaggio dinamico tra orizzontale e verticale in base alla larghezza effettiva della card (`auto_layout_breakpoint`).
  - **Adaptive ViewBox**: Calcolo geometrico dinamico che evita qualsiasi taglio o clipping di nodi ed etichette con dimensioni personalizzate.
- 🎛️ **Visual Card Editor Completo**: Configurazione guidata tramite interfaccia grafica divisa in schede intuitive: *Generale*, *Nodi Principali*, *Dispositivi*, *Stile, Dimensioni & Tipografia* (con 9 sezioni tematiche chiare), *Effetti Visivi ✨*, *Avanzate & Motore*.
- 🛡️ **Massima Robustezza & Accessibilità**:
  - Protezione totale contro valori non finiti (`NaN`, `Infinity`) e zero crash in fase di digitazione.
  - Rilevamento automatico di unità errate (es. sensori in `kWh` o `%` configurati come potenza) e ID duplicati con avvisi `<ha-alert>`.
  - Migrazione automatica e trasparente delle configurazioni legacy (`migrateConfig`).
  - Rispetto rigoroso di `@media (prefers-reduced-motion: reduce)`.

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

### 1. Configurazione Completa con Effetti Visivi, Bus Ortogonale & Carichi
```yaml
type: custom:simple-power-flow-card
title: "Flusso Energetico Casa"
layout_mode: auto
auto_layout_breakpoint: 520
stroke_mode: watt
speed_mode: absolute
normalize_speed_by_length: true

solar:
  entity: sensor.solar_power
  name: "Fotovoltaico"
  color: "#ff9800"

grid:
  entity_import: sensor.grid_imported_power
  entity_export: sensor.grid_exported_power
  entity_amperage: sensor.grid_current
  name: "Rete Elettrica"

battery:
  entity_charge: sensor.battery_charge_power
  entity_discharge: sensor.battery_discharge_power
  state_of_charge: sensor.battery_soc
  entity_amperage: sensor.battery_current
  name: "Batteria"
  use_idle_color: true
  color_idle: "#64748b"

home:
  entity: sensor.home_power
  name: "Casa"

devices:
  - id: heatpump
    name: "Pompa di Calore"
    entity: sensor.heatpump_power
    switch_entity: switch.heatpump_power
    icon: "mdi:heat-pump"
    color: "#00bcd4"
    badge_enabled: true
    badge_style: icon
    badge_pulse: true
    include_in_home: true
  - id: ev_charger
    name: "Auto Elettrica"
    entity: sensor.ev_charger_power
    switch_entity: switch.ev_charger
    icon: "mdi:car-electric"
    color: "#22c55e"
    badge_enabled: true
    badge_style: dot
    include_in_home: true
  - id: kitchen
    name: "Induzione"
    entity: sensor.kitchen_power
    icon: "mdi:stove"
    color: "#f59e0b"
    include_in_home: true
  - id: air_conditioner
    name: "Climatizzatore"
    entity: sensor.ac_power
    icon: "mdi:air-conditioner"
    color: "#38bdf8"
    include_in_home: true

# Stile & Tracciati Cavi
styles:
  line_routing_mode: orthogonal_bus
  bus_lane_spacing: 8
  bus_corner_radius: 20
  invert_bus_lane_order: false
  node_radius_primary: 38
  node_radius_secondary: 28
  hover_glow_radius: 12
  show_node_shadows: true
  label_chip_enabled: true
  label_chip_opacity: 0.18
  label_border_radius: 6

# Effetti Visivi Wow Factor
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
```

### 2. Configurazione con Sensori Unici Invertibili & Chip Tags
```yaml
type: custom:simple-power-flow-card
title: "Monitoraggio Energetico"
solar:
  entity: sensor.inverter_power
grid:
  entity: sensor.main_power_meter # Positivo = Prelievo, Negativo = Immissione
battery:
  entity: sensor.battery_power    # Positivo = Carica, Negativo = Scarica
  state_of_charge: sensor.battery_state_of_charge
home:
  # Omettendo l'entità casa, il consumo viene derivato matematicamente
  name: "Abitazione"
styles:
  label_chip_enabled: true
  label_color_mode: auto_contrast
  inactive_wire_style: dashed
```

---

## ⚙️ Riferimento Completo delle Opzioni di Configurazione

### Configurazione Principale (Radice)

| Parametro | Tipo | Default | Descrizione |
|---|---|---|---|
| `title` | `string` | `Power Flow` | Titolo visualizzato nell'intestazione della card |
| `solar` | `SourceDescriptor` | - | Configurazione del nodo Solare / Fotovoltaico |
| `grid` | `SourceDescriptor` | - | Configurazione del nodo Rete Elettrica |
| `battery` | `SourceDescriptor` | - | Configurazione del nodo Batteria / Accumulo |
| `home` | `SourceDescriptor` | - | Configurazione del nodo Casa / Abitazione |
| `devices` | `IndividualDeviceConfig[]` | `[]` | Lista dei carichi secondari individuali |
| `layout_mode` | `'auto' \| 'horizontal' \| 'vertical'` | `'auto'` | Disposizione grafica della card |
| `auto_layout_breakpoint` | `number` | `520` | Larghezza in px per il passaggio automatico a layout verticale |
| `stroke_mode` | `'watt' \| 'ampere' \| 'fixed'` | `'watt'` | Modalità di calcolo dello spessore dei cavi |
| `speed_mode` | `'absolute' \| 'relative'` | `'absolute'` | Modalità di calcolo della velocità delle particelle |
| `normalize_speed_by_length` | `boolean` | `true` | Normalizza la velocità delle particelle in proporzione alla lunghezza del cavo (velocità lineare uniforme) |
| `scale_curve` | `'linear' \| 'sqrt' \| 'log'` | `'sqrt'` | Curva matematica di modulazione per spessore e velocità |
| `min_duration` | `number` | `0.8` | Durata minima particella in secondi (flusso massimo/rapido) |
| `max_duration` | `number` | `5.5` | Durata massima particella in secondi (flusso minimo/lento) |
| `min_stroke` | `number` | `2.0` | Spessore minimo della linea in px |
| `max_stroke` | `number` | `7.0` | Spessore massimo della linea in px |
| `scale_min` | `number` | `50` | Potenza minima in Watt per la scala dinamica |
| `scale_max` | `number` | `6000` | Potenza massima in Watt per la scala dinamica |
| `max_total_particles` | `number` | `30` | Tetto massimo globale di particelle attive contemporaneamente |
| `display_zero_tolerance` | `number` | `1` | Soglia in Watt sotto la quale un flusso è considerato inattivo (0 W) |
| `w_to_kw_threshold` | `number` | `1000` | Soglia in Watt per la conversione automatica dell'unità in kW |
| `decimals` | `number` | `2` | Numero di cifre decimali visualizzate per i valori di potenza |
| `smoothing_factor` | `number` | `0.35` | Fattore di interpolazione esponenziale (EMA) per transizioni fluide |
| `residual_handling` | `'clamp' \| 'absorb' \| 'unbalanced'` | `'clamp'` | Gestione del residuo matematico da campionamento asincrono |
| `residual_absorb_target` | `'grid' \| 'battery'` | `'grid'` | Nodo su cui assorbire il residuo in modalità `absorb` |
| `styles` | `CardStylesConfig` | `{}` | Personalizzazione avanzata di stile, dimensioni, spaziature e tipografia |
| `effects` | `VisualEffectsConfig` | `{}` | Abilitazione e regolazione degli effetti visivi speciali |

---

### Descrittore di Sorgente (`SourceDescriptor` & `IndividualDeviceConfig`)

Ciascun nodo primario (`solar`, `grid`, `battery`, `home`) e dispositivo in `devices` supporta:

| Parametro | Tipo | Default | Descrizione |
|---|---|---|---|
| `entity` | `string` | - | Entità sensore di potenza principale (con segno +/-) |
| `entity_import` / `entity_export` | `string` | - | Coppia entità separate per Rete (Prelievo / Immissione) |
| `entity_charge` / `entity_discharge` | `string` | - | Coppia entità separate per Batteria (Carica / Scarica) |
| `state_of_charge` | `string` | - | Entità sensore SoC percentuale per la batteria (supporta scale 0–1 e 0–100) |
| `entity_amperage` | `string` | - | Entità sensore corrente in Ampere |
| `switch_entity` | `string` | - | Entità switch/presa/clima associata per controllo interattivo |
| `invert` | `boolean` | `false` | Inverte il segno del sensore per entità singola |
| `name` | `string` | - | Etichetta/nome personalizzato del nodo |
| `icon` | `string` | - | Icona MDI personalizzata (es. `mdi:solar-power`) |
| `color` | `string` | - | Colore base CSS / HEX per il nodo |
| `color_charge` | `string` | `#4caf50` | Colore personalizzato durante la carica della batteria |
| `color_discharge` | `string` | `#9c27b0` | Colore personalizzato durante la scarica della batteria |
| `use_idle_color` | `boolean` | `false` | Attiva colore dedicato quando la batteria è a riposo (0 W) |
| `color_idle` | `string` | `#94a3b8` | Colore personalizzato batteria a riposo |
| `display_zero` | `boolean` | `true` | Se impostato a `false`, nasconde l'arco di connessione quando il flusso è a 0 W |
| `show_label` | `boolean` | `true` | Mostra o nasconde l'etichetta testuale del nodo |
| `label_font_size` | `number` | `10` | Dimensione del font dell'etichetta per questo nodo (px) |
| `label_spacing_below_node` | `number` | `14` | Distanza verticale tra cerchio ed etichetta per questo nodo (px) |
| `label_chip_enabled` | `boolean` | `false` | Attiva sfondo stile Chip/Tag per l'etichetta di questo nodo |
| `label_chip_opacity` | `number` | `0.18` | Opacità dello sfondo del chip per questo nodo |
| `label_chip_padding_x` / `_y` | `number` | `8` / `3.5` | Padding orizzontale e verticale del chip (px) |
| `label_border_radius` | `number` | `6` | Raggio arrotondamento bordi del chip per questo nodo (px) |
| `label_border_width` | `number` | `1` | Spessore bordo del chip per questo nodo (px) |
| `label_color_mode` | `string` | `'auto_contrast'` | Modalità colore testo (`auto_contrast`, `match_entity`, `white`, `black`, `secondary`, `custom`) |
| `label_color` | `string` | `''` | Colore testo personalizzato per l'etichetta |
| `badge_enabled` | `boolean` | - | Attiva badge di stato switch sul perimetro del nodo |
| `badge_style` | `'dot' \| 'icon' \| 'text'` | `'dot'` | Stile grafico del badge |
| `badge_position` | `string` | `'top_right'` | Posizione del badge (`top_right`, `top_left`, `bottom_right`, `bottom_left`) |
| `badge_size` | `number` | `9` / `15` | Dimensione in pixel del badge |
| `badge_color_on` / `_off` | `string` | `#4caf50` / `#64748b` | Colori per stato acceso e spento |
| `badge_pulse` | `boolean` | `true` | Pulsazione energetica animata del badge quando acceso |
| `badge_quick_toggle` | `boolean` | `true` | Se `false`, il click sul badge apre la scheda `more-info` anziché invertire lo switch |
| `tap_action` / `hold_action` / `double_tap_action` | `ActionConfig` | - | Azioni interattive Lovelace sul nodo |
| `secondary_info` | `SecondaryInfoConfig` | - | Configurazione entità secondaria visualizzata sotto l'icona |
| `include_in_home` | `boolean` | `true` | *(Solo per `devices`)*: Se `true`, include il consumo nel calcolo del totale Casa |

---

### Personalizzazione Stile & Dimensioni (`styles`)

```yaml
styles:
  # Dimensioni Nodi & Icone
  node_radius_primary: 36        # Raggio nodi principali (px)
  node_radius_secondary: 28      # Raggio dispositivi secondari (px)
  node_border_width: 2.5         # Spessore bordo dei nodi (px)
  icon_size_primary: 18          # Dimensione icone nodi principali (px)
  icon_size_secondary: 16        # Dimensione icone dispositivi secondari (px)

  # Ombre 3D & Bagliore Hover
  show_node_shadows: true        # Attiva ombreggiatura tridimensionale
  node_shadow_blur: 10           # Raggio sfocatura ombra (px)
  node_shadow_opacity: 0.35      # Opacità ombra cerchi (0.0 - 1.0)
  node_shadow_offset_y: 4        # Spostamento verticale ombra (px)
  hover_glow_radius: 10          # Raggio bagliore al passaggio del mouse (px)

  # Tipografia & Spaziature Testo
  font_size_value: 10            # Dimensione testo potenza principale (px)
  font_size_unit: 8              # Dimensione testo unità di misura (px)
  font_size_label: 10            # Dimensione etichette dei nodi (px)
  font_size_sub: 9               # Dimensione testo secondario (px)
  font_size_directional: 8.5     # Dimensione frecce direzionali rete/batteria (px)
  font_size_top_info: 8          # Dimensione testo superiore SoC/Ampere (px)
  spacing_text_above_icon: 4     # Spazio tra testo superiore e icona (px)
  spacing_text_below_icon: 4     # Spazio tra icona e valore di potenza (px)

  # Etichette & Chip Tags
  show_labels: true              # Mostra/nasconde globalmente le etichette
  spacing_label_below_node: 14   # Distanza tra cerchio del nodo ed etichetta (px)
  label_chip_enabled: false      # Attiva sfondo chip/tag per le etichette
  label_chip_opacity: 0.18       # Opacità sfondo chip calcolata su colore entità
  label_chip_padding_x: 8        # Padding orizzontale chip (px)
  label_chip_padding_y: 3.5      # Padding verticale chip (px)
  label_border_radius: 6         # Raggio bordi arrotondati chip (px)
  label_border_width: 1          # Spessore bordino chip (px)
  label_color_mode: auto_contrast # 'auto_contrast' | 'match_entity' | 'white' | 'black' | 'secondary' | 'custom'
  label_color: ""                # Colore personalizzato (con label_color_mode: custom)

  # Anello Mix Casa & Hover Glow
  show_home_mix_ring: true       # Mostra anello quote multi-colore sul nodo Casa
  home_glow_mode: predominant    # 'predominant' (colore fonte principale) o 'custom'

  # Tracciati Cavi & Canale Bus
  line_routing_mode: bezier_curved # 'bezier_curved' o 'orthogonal_bus'
  bus_lane_spacing: 8            # Spaziatura corsie parallele nel canale bus (px)
  bus_corner_radius: 20          # Raggio di curvatura angoli a 90° nel canale bus (px)
  invert_bus_lane_order: false   # Inverte l'assegnazione delle corsie interne/esterne
  spacing_horizontal: 120        # Spaziatura orizzontale tra colonne (px)
  spacing_vertical: 85           # Spaziatura verticale tra righe (px)

  # Cavi & Conduttori
  inactive_wire_style: dashed    # 'dashed' | 'solid' | 'hidden'
  inactive_wire_opacity: 0.35    # Opacità cavi a flusso zero (0.0 - 1.0)

  # Particelle
  particles_per_arc: 3           # Numero di particelle per ciascun cavo attivo
  particle_size_offset: 1.8      # Incremento raggio particella rispetto al cavo (px)
  particle_inner_glow: true      # Nucleo bianco brillante al centro della particella
  particle_soft_edge: true       # Bordo sfumato radiale morbido
```

---

### Effetti Visivi Modulari (`effects`)

```yaml
effects:
  # Coda a cometa luminescente
  meteor_trail:
    enabled: true                # Attiva l'effetto cometa sulle particelle
    tail_length: 0.08            # Lunghezza della scia (0.02 - 0.25)
    glow_intensity: 1.5          # Intensità del bagliore (0.5 - 3.0)

  # Icone vive & Batteria dinamica
  living_icons:
    enabled: true                # Attiva animazioni su icone carichi e batteria
    battery_type: liquid         # 'liquid' (onda liquida) o 'gradient' (radiale)
    battery_animated: true       # Animazione continua del livello liquido
    load_animation: rotate       # 'rotate' (rotazione), 'pulse' (pulsazione) o 'none'

  # Vetro bombato 3D & Neon
  glassmorphism:
    enabled: true                # Attiva riflesso bombato in vetro 3D sui cerchi
    intensity: 50                # Intensità dell'effetto riflesso (0 - 100%)
    neon_core: true              # Anello concentrico interno Neon

  # Onde d'urto all'arrivo dei flussi
  impact_ripples:
    enabled: true                # Attiva onde d'urto ad espansione all'arrivo nei nodi
    ripple_size: 18              # Raggio di espansione dell'onda d'urto in px
    ripple_color: ""             # Colore onda (vuoto = eredita colore della particella)
```

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza [MIT](LICENSE).
