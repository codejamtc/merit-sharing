
// Sections that show name only (no merit text) + two-column layout
const NAME_ONLY_IDS = ['s10','s11','s12'];

// Section IDs that have a dedicated icon
const ICONS = {
  s1:true,s2:true,s3:true,s4:true,s5:true,s6:true,
  s7:true,s8:true,s9:true,s10:true,s11:true,s12:true,s13:true
};

// ---- Default sections ----
// Default section background images (GitHub raw URLs)
const DEFAULT_BG_IMAGES = {
  's1': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/morning-dana.png',
  's2': 'https://github.com/codejamtc/merit-sharing/blob/add-split-function-to-the-other-section/assets/img/lunch-dana.png',
  's3': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/dhamma-hall.png',
  's4': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/sound-led.png',
  's5': 'https://github.com/codejamtc/merit-sharing/blob/add-split-function-to-the-other-section/assets/img/ice-cream.png',
  's6': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/banana.png',
  's7': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/Gilanpasa.png',
  's8': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/flowers.png',
  's9': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/transportation.jpeg',
  's10': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/monk-transport.png',
  's11': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/other-contribution.png',
  's12': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/organizing%20committee.png',
  's13': 'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/img/special-thanks.png',
};

const DEFAULT_SECTIONS = [
  {id:'s1', title:'උදෑසන දානය සඳහා දායකත්වය'},
  {id:'s2', title:'දහවල් දානය සඳහා දායකත්වය'},
  {id:'s3', title:'ධර්ම ශාලාව සඳහා දායකත්වය'},
  {id:'s4', title:'LED තිරය සදහා ශබ්ද විකාශනය සදහා'},
  {id:'s5', title:'අයිස් ක්‍රීම් දන්සැල සඳහා දායකත්වය'},
  {id:'s6', title:'කෙසෙල් දන්සැල සඳහා දායකත්වය'},
  {id:'s7', title:'සවස ගිලන්පස සඳහා දායකත්වය'},
  {id:'s8', title:'මල් සඳහා දායකත්වය'},
  {id:'s9', title:'ප්‍රවාහණ කටයුතු දායකත්වය'},
  {id:'s10',title:'ස්වාමින්වහන්සේලා සදහා ප්‍රවාහණ කටයුතු දායකත්වය'},
  {id:'s11',title:'සෙසු දායකත්වයන්'},
  {id:'s12',title:'සංවිධායක කමිටුව'},
  {id:'s13',title:'විශේෂ ස්තුතිය'},
];

// Runtime sections array (loaded from storage or defaults)
let SECTIONS = DEFAULT_SECTIONS.map(s => ({...s, entries:[]}));

let settings = {
  speed:10, sectionsPerSlide:2, linesPerSlide:15, autoLoop:true,
  autoPlayMusic:true, loopMusic:true, volume:0.6, musicUrl:'https://raw.githubusercontent.com/codejamtc/merit-sharing/add-split-function-to-the-other-section/assets/sound/scott-buckley-reverie(chosic.com).mp3',
  sectionVisibility:{},
  eventTitle:'වෙසක් පොහෝ දින පුණ්‍යාණුමෝදනාව',
  subLine1:'නිවනට බීජයක් බඳු වූ, ඔබ රැස් කරගත් මෙම උදාරතර භූමි පූජාමය පුණ්‍ය සම්භාරයෙන්, ඔබත් ඔබගේ පවුලේ සියලු දෙනාත්',
  subLine2:'නිදුක් වෙත්වා..! නිරෝගී වෙත්වා..! සුවපත් වෙත්වා..! දීර්ඝායුෂ ලබත්වා...!',
  subLine3:'උතුම් චතුරාර්ය සත්‍යය අවබෝධය පිණිසම හේතු වාසනා වේවා!',
  footerText:'කෝට්ටේ මහමෙව්නාව ඉංග්‍රීසි දහම් මධ්‍යස්ථානය',
  colorTitle:'#D4AF37', colorSubtitle:'#C8A96E', colorSectionTitle:'#F0D060', colorMerit:'#C8A96E',
  hideSubtitleAfter:1, showSectionBgImage:true, showSectionDharmaWheel:true, sectionIconHidden:{}, sectionBgImage:{}, sectionBgImageEnabled:{}, sectionBgImageOpacity:{},
  ttsEnabled:false, ttsRate:0.85, ttsPitch:1.0, ttsVoiceURI:'', ttsGender:'female', ttsVolume:1.0, ttsReadMerit:true,
  autoSplitSections:true,
  slideManagerEnabled:false,
  slideManagerConfig:[
    {label:'Slide 1', sectionIds:['s1','s2']},
    {label:'Slide 2', sectionIds:['s3','s4','s5']},
    {label:'Slide 3', sectionIds:['s6','s7','s8']},
    {label:'Slide 4', sectionIds:['s9','s10','s11']},
    {label:'Slide 5', sectionIds:['s12']},
    {label:'Slide 6', sectionIds:['s13']}
  ],
  sectionRowLimits:{},   // {secId: maxNamesPerSlide}
  fontScaleTitle:1, fontScaleSubtitle:1, fontScaleSection:1, fontScaleName:1, fontScaleMerit:1,
  contentPaddingX:1,
};

let scrollTimer=null, slideGroups=[], currentSlide=0, musicPlaying=false;
let localMusicBlobUrl = null;  // kept in memory; not persisted
const audio = document.getElementById('bgMusic');

// ---- CSV Export / Import (with full config) ----

function csvCell(val) {
  const s = String(val == null ? '' : val).replace(/"/g, '""');
  return (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) ? `"${s}"` : s;
}

function csvRow(arr) { return arr.map(csvCell).join(','); }

function exportCSV() {
  collectEditorData();

  const lines = [];

  // ── 1. Section data ──────────────────────────────────────────
  lines.push(csvRow(['section_id','section_title','name','merit','custom']));
  SECTIONS.forEach(sec => {
    if (sec.entries.length === 0) {
      lines.push(csvRow([sec.id, sec.title, '', '', sec.custom ? '1' : '0']));
    } else {
      sec.entries.forEach(e => {
        lines.push(csvRow([sec.id, sec.title, e.name||'', e.merit||'', sec.custom ? '1' : '0']));
      });
    }
  });

  // ── 2. Config block (clearly separated) ──────────────────────
  lines.push('');
  lines.push(csvRow(['__CONFIG__','key','value']));

  // 2a. Section visibility: {id: bool, ...}
  lines.push(csvRow(['__CONFIG__', 'visibility', JSON.stringify(settings.sectionVisibility||{})]));

  // 2b. Section icon hidden: {id: bool, ...}
  lines.push(csvRow(['__CONFIG__', 'icon_hidden', JSON.stringify(settings.sectionIconHidden||{})]));

  // 2c. Slide Manager: [{label, sectionIds:[...]}, ...]
  lines.push(csvRow(['__CONFIG__', 'slide_manager_enabled', settings.slideManagerEnabled ? '1' : '0']));
  lines.push(csvRow(['__CONFIG__', 'slide_manager', JSON.stringify(settings.slideManagerConfig||[])]));
  lines.push(csvRow(['__CONFIG__', 'section_row_limits', JSON.stringify(settings.sectionRowLimits||{})]));
  lines.push(csvRow(['__CONFIG__', 'section_bg_image', JSON.stringify(settings.sectionBgImage||{})]));
  lines.push(csvRow(['__CONFIG__', 'section_bg_enabled', JSON.stringify(settings.sectionBgImageEnabled||{})]));
  lines.push(csvRow(['__CONFIG__', 'section_bg_opacity', JSON.stringify(settings.sectionBgImageOpacity||{})]));

  // 2d. Display settings (text, colors, subtitles, visibility)
  const displaySettings = {
    eventTitle:       settings.eventTitle,
    subLine1:         settings.subLine1,
    subLine2:         settings.subLine2,
    subLine3:         settings.subLine3,
    footerText:       settings.footerText,
    colorTitle:       settings.colorTitle,
    colorSubtitle:    settings.colorSubtitle,
    colorSectionTitle:settings.colorSectionTitle,
    colorMerit:       settings.colorMerit,
    hideSubtitleAfter:settings.hideSubtitleAfter,
  };
  lines.push(csvRow(['__CONFIG__', 'display', JSON.stringify(displaySettings)]));

  // 2e. Scroll / timing settings
  const scrollSettings = {
    speed:              settings.speed,
    linesPerSlide:      settings.linesPerSlide,
    sectionsPerSlide:   settings.sectionsPerSlide,
    autoLoop:           settings.autoLoop,
    autoSplitSections:  settings.autoSplitSections,
    hideSubtitleAfter:  settings.hideSubtitleAfter,
    showSectionBgImage: settings.showSectionBgImage,
    showSectionDharmaWheel: settings.showSectionDharmaWheel,
  };
  lines.push(csvRow(['__CONFIG__', 'scroll', JSON.stringify(scrollSettings)]));

  // 2f. Music settings
  const musicSettings = {
    musicUrl:      settings.musicUrl,
    autoPlayMusic: settings.autoPlayMusic,
    loopMusic:     settings.loopMusic,
    volume:        settings.volume,
  };
  lines.push(csvRow(['__CONFIG__', 'music', JSON.stringify(musicSettings)]));

  // 2g. TTS settings
  const ttsSettings = {
    ttsEnabled:   settings.ttsEnabled,
    ttsRate:      settings.ttsRate,
    ttsPitch:     settings.ttsPitch,
    ttsVolume:    settings.ttsVolume,
    ttsGender:    settings.ttsGender,
    ttsVoiceURI:  settings.ttsVoiceURI,
    ttsReadMerit: settings.ttsReadMerit,
  };
  lines.push(csvRow(['__CONFIG__', 'tts', JSON.stringify(ttsSettings)]));

  // 2h. Font scale settings
  const fontSettings = {
    fontScaleTitle: settings.fontScaleTitle,
    fontScaleSubtitle: settings.fontScaleSubtitle,
    fontScaleSection: settings.fontScaleSection,
    fontScaleName: settings.fontScaleName,
    fontScaleMerit: settings.fontScaleMerit,
    contentPaddingX: settings.contentPaddingX,
  };
  lines.push(csvRow(['__CONFIG__', 'fonts', JSON.stringify(fontSettings)]));

  const csv = '\uFEFF' + lines.join('\n');
  const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'poya_merit_config_' + new Date().toISOString().slice(0,10) + '.csv';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
  setCsvStatus('✓ Exported data + full configuration', true);
}

function importCSV(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const text = e.target.result.replace(/^\uFEFF/, '');
      const rawLines = text.split(/\r?\n/);

      // Split into data lines and config lines
      const dataLines   = [];
      const configLines = [];
      let headerFound   = false;
      let ci            = {};

      rawLines.forEach(line => {
        if (!line.trim()) return;
        const cells = parseCSVRow(line);
        if (cells[0] === '__CONFIG__') {
          configLines.push(cells);
          return;
        }
        if (!headerFound) {
          // This is the header row
          const h = cells.map(c => c.toLowerCase().trim());
          ci = {
            id:     h.indexOf('section_id'),
            title:  h.indexOf('section_title'),
            name:   h.indexOf('name'),
            merit:  h.indexOf('merit'),
            custom: h.indexOf('custom'),
          };
          if (ci.id < 0 || ci.title < 0) throw new Error('Missing section_id or section_title columns');
          headerFound = true;
          return;
        }
        dataLines.push(cells);
      });

      if (!headerFound) throw new Error('No header row found');

      // ── 1. Restore section data ──────────────────────────────
      SECTIONS = DEFAULT_SECTIONS.map(s => ({...s, entries:[]}));
      dataLines.forEach(cells => {
        const sid    = (cells[ci.id]    || '').trim();
        const stitle = (cells[ci.title] || '').trim();
        const name   = ci.name  >= 0 ? (cells[ci.name]  || '').trim() : '';
        const merit  = ci.merit >= 0 ? (cells[ci.merit] || '').trim() : '';
        const isCustom = ci.custom >= 0 ? (cells[ci.custom]||'').trim() === '1' : false;
        if (!sid) return;
        let sec = SECTIONS.find(s => s.id === sid);
        if (!sec) {
          sec = {id: sid, title: stitle || sid, entries: [], custom: isCustom};
          SECTIONS.push(sec);
        }
        if (stitle) sec.title = stitle;
        if (name || merit) sec.entries.push({name, merit});
      });

      // Ensure visibility keys for all sections
      SECTIONS.forEach(s => {
        if (settings.sectionVisibility[s.id] === undefined)
          settings.sectionVisibility[s.id] = true;
      });

      // ── 2. Restore config ────────────────────────────────────
      let configApplied = [];
      configLines.forEach(cells => {
        const key = (cells[1] || '').trim();
        const val = (cells[2] || '').trim();
        try {
          switch (key) {
            case 'visibility':
              settings.sectionVisibility = JSON.parse(val);
              configApplied.push('visibility');
              break;
            case 'icon_hidden':
              settings.sectionIconHidden = JSON.parse(val);
              configApplied.push('icons');
              break;
            case 'slide_manager_enabled':
              settings.slideManagerEnabled = val === '1';
              configApplied.push('slide_mgr_flag');
              break;
            case 'slide_manager':
              settings.slideManagerConfig = JSON.parse(val);
              configApplied.push('slide_mgr');
              break;
            case 'display': {
              const d = JSON.parse(val);
              Object.assign(settings, d);
              configApplied.push('display');
              break;
            }
            case 'scroll': {
              const sc = JSON.parse(val);
              Object.assign(settings, sc);
              configApplied.push('scroll');
              break;
            }
            case 'music': {
              const m = JSON.parse(val);
              Object.assign(settings, m);
              configApplied.push('music');
              break;
            }
            case 'tts': {
              const t = JSON.parse(val);
              Object.assign(settings, t);
              configApplied.push('tts');
              break;
            }
            case 'fonts': {
              const f = JSON.parse(val);
              Object.assign(settings, f);
              configApplied.push('fonts');
              break;
            }
            case 'section_row_limits':
              settings.sectionRowLimits = JSON.parse(val);
              configApplied.push('row_limits');
              break;
            case 'section_bg_opacity':
              settings.sectionBgImageOpacity = JSON.parse(val);
              configApplied.push('bg_opacity');
              break;
            case 'section_bg_image':
              settings.sectionBgImage = JSON.parse(val);
              configApplied.push('bg_image');
              break;
            case 'section_bg_enabled':
              settings.sectionBgImageEnabled = JSON.parse(val);
              configApplied.push('bg_enabled');
              break;
          }
        } catch(parseErr) {
          console.warn('Config parse error for key:', key, parseErr);
        }
      });

      // ── 3. Apply everything ──────────────────────────────────
      saveState();
      applyDisplaySettings();
      applyColors();
      applyMusic();
      populateAdmin();         // refresh all admin fields
      buildScrollTrack();
      applySectionBgImage();
      applyFontScales();
      applyContentPadding();
      ttsInit();

      const total = SECTIONS.reduce((a,s) => a+s.entries.length, 0);
      const configNote = configApplied.length
        ? ` + config: [${configApplied.join(', ')}]`
        : ' (no config block found)';
      setCsvStatus('✓ Imported ' + total + ' entries' + configNote, true);

    } catch(err) {
      setCsvStatus('✗ Error: ' + err.message, false);
    }
    event.target.value = '';
  };
  reader.readAsText(file, 'UTF-8');
}

function setCsvStatus(msg, ok) {
  const el = document.getElementById('csv-status');
  if (!el) return;
  el.textContent = msg;
  el.style.color = ok ? '#8dcc55' : '#f08888';
  setTimeout(() => { el.textContent = ''; }, 5000);
}

// Auto-export CSV whenever data is saved
function autoExportHint() {
  setCsvStatus('💾 Data saved to browser storage. Use Export to save as file.', true);
}

// ---- Persistence ----
function loadState() {
  try {
    const s = localStorage.getItem('poya_settings');
    if (s) settings = {...settings, ...JSON.parse(s)};
    const d = localStorage.getItem('poya_data');
    if (d) {
      const saved = JSON.parse(d);
      // Rebuild SECTIONS: merge saved data with DEFAULT_SECTIONS titles as fallback
      SECTIONS = saved.map(sd => {
        const def = DEFAULT_SECTIONS.find(ds => ds.id === sd.id);
        return {
          id: sd.id,
          title: (sd.title && sd.title !== 'undefined') ? sd.title : (def ? def.title : sd.id),
          entries: sd.entries || [],
          custom: sd.custom || false
        };
      });
      // Ensure all default sections exist in case new ones were added in code
      DEFAULT_SECTIONS.forEach(def => {
        if (!SECTIONS.find(s => s.id === def.id)) {
          SECTIONS.push({id: def.id, title: def.title, entries: [], custom: false});
        }
      });
    }
    // Ensure visibility keys exist for all sections
    SECTIONS.forEach(s => {
      if (settings.sectionVisibility[s.id] === undefined)
        settings.sectionVisibility[s.id] = true;
    });

    // Initialize default background images if not set by user
    if (!settings.sectionBgImage) settings.sectionBgImage = {};
    if (!settings.sectionBgImageEnabled) settings.sectionBgImageEnabled = {};
    if (!settings.sectionBgImageOpacity) settings.sectionBgImageOpacity = {};

    // Apply default background images for each section that doesn't have a custom image
    Object.keys(DEFAULT_BG_IMAGES).forEach(secId => {
      // Set default image if user hasn't uploaded a custom one
      if (!settings.sectionBgImage[secId]) {
        settings.sectionBgImage[secId] = DEFAULT_BG_IMAGES[secId];
        // Also enable it by default
        settings.sectionBgImageEnabled[secId] = true;
      }
      // Set default opacity to 20% (0.2) if not set
      if (settings.sectionBgImageOpacity[secId] === undefined) {
        settings.sectionBgImageOpacity[secId] = 0.2;
      }
    });
  } catch(e) {}
}

function saveState() {
  localStorage.setItem('poya_settings', JSON.stringify(settings));
  localStorage.setItem('poya_data', JSON.stringify(
    SECTIONS.map(s => ({id:s.id, title:s.title, entries:s.entries, custom:s.custom||false}))
  ));
}

function adminSave() {
  collectEditorData();

  // Gather row limits from any open inputs
  if (!settings.sectionRowLimits) settings.sectionRowLimits = {};
  document.querySelectorAll('[id^="rowlimit-"]').forEach(el => {
    const sid = el.id.replace('rowlimit-', '');
    const v = parseInt(el.value) || 0;
    if (v > 0) settings.sectionRowLimits[sid] = v;
    else delete settings.sectionRowLimits[sid];
  });

  // Gather checkbox states that may not be live-updated
  const autoLoop = document.getElementById('autoLoop');
  if (autoLoop) settings.autoLoop = autoLoop.checked;
  const autoSplit = document.getElementById('autoSplitSections');
  if (autoSplit) settings.autoSplitSections = autoSplit.checked;
  const smEnabled = document.getElementById('slideManagerEnabled');
  if (smEnabled) settings.slideManagerEnabled = smEnabled.checked;

  saveState();
  buildScrollTrack();
  setCsvStatus('✓ All changes saved', true);
}

function adminSaveAndDisplay() {
  adminSave();
  setTimeout(() => {
    showDisplay();
  }, 300);
}

function clearStorage() {
  if (confirm('Are you sure you want to clear ALL data? This cannot be undone.')) {
    localStorage.removeItem('poya_settings');
    localStorage.removeItem('poya_data');
    location.reload();
  }
}


// ════════════════════════════════════════════════════════════
// TTS ENGINE  (Web Speech API – free, built into Chrome/Edge)
// ════════════════════════════════════════════════════════════
let ttsVoices = [];
let ttsSpeaking = false;
let ttsQueue    = [];

function ttsInit() {
  if (!window.speechSynthesis) return;
  const load = () => {
    ttsVoices = window.speechSynthesis.getVoices();
    populateTtsVoices();
  };
  load();
  window.speechSynthesis.onvoiceschanged = load;
}

function populateTtsVoices() {
  const sel = document.getElementById('ttsVoiceSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">-- Auto (browser default) --</option>';
  // Prefer Sinhala, then show all
  const si  = ttsVoices.filter(v => v.lang.startsWith('si'));
  const all  = ttsVoices.filter(v => !v.lang.startsWith('si'));
  if (si.length) {
    const grp = document.createElement('optgroup');
    grp.label = '🇱🇰 Sinhala Voices';
    si.forEach(v => {
      const o = document.createElement('option');
      o.value = v.voiceURI;
      o.textContent = v.name + (v.localService ? ' (local)' : ' (online)');
      if (v.voiceURI === settings.ttsVoiceURI) o.selected = true;
      grp.appendChild(o);
    });
    sel.appendChild(grp);
  }
  const grp2 = document.createElement('optgroup');
  grp2.label = '🌐 Other Voices';
  all.forEach(v => {
    const o = document.createElement('option');
    o.value = v.voiceURI;
    o.textContent = `${v.name} (${v.lang})`;
    if (v.voiceURI === settings.ttsVoiceURI) o.selected = true;
    grp2.appendChild(o);
  });
  sel.appendChild(grp2);

  // Gender filter – if no manual voice chosen, try to auto-pick
  if (!settings.ttsVoiceURI) autoPickVoice();
}

function autoPickVoice() {
  const gender = settings.ttsGender || 'female';
  // Try Sinhala first, gender hint from name
  let pick = ttsVoices.find(v =>
    v.lang.startsWith('si') && v.name.toLowerCase().includes(gender === 'female' ? 'female' : 'male')
  ) || ttsVoices.find(v => v.lang.startsWith('si'))
    || ttsVoices.find(v => v.name.toLowerCase().includes(gender === 'female' ? 'female' : 'male'))
    || null;
  settings.ttsVoiceURI = pick ? pick.voiceURI : '';
}

function ttsSpeak(text) {
  if (!settings.ttsEnabled || !window.speechSynthesis || !text.trim()) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text.trim());
  // Pick voice
  const voice = settings.ttsVoiceURI
    ? ttsVoices.find(v => v.voiceURI === settings.ttsVoiceURI)
    : (autoPickVoice(), ttsVoices.find(v => v.voiceURI === settings.ttsVoiceURI));
  if (voice) utt.voice = voice;
  utt.rate   = settings.ttsRate   || 0.85;
  utt.pitch  = settings.ttsPitch  || 1.0;
  utt.volume = settings.ttsVolume || 1.0;
  utt.lang   = (voice && voice.lang) || 'si-LK';
  window.speechSynthesis.speak(utt);
}

// Build the text to speak for a given slide group of sections
function slideToSpeechText(slideEl) {
  const lines = [];
  slideEl.querySelectorAll('.section-title-bar h2').forEach(el => {
    lines.push(el.textContent.trim());
  });
  slideEl.querySelectorAll('.entry-card').forEach(card => {
    const name  = card.querySelector('.entry-name')?.textContent.trim();
    const merit = card.querySelector('.entry-merit')?.textContent.trim();
    if (name) lines.push(name);
    if (merit && settings.ttsReadMerit) lines.push(merit);
  });
  return lines.join('. ');
}

function ttsPreview() {
  const text = document.getElementById('ttsPreviewText')?.value.trim();
  if (!text) { alert('Enter some text to preview'); return; }
  // Temporarily force enable for preview
  const was = settings.ttsEnabled;
  settings.ttsEnabled = true;
  ttsSpeak(text);
  settings.ttsEnabled = was;
}

function ttsStop() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function updateTtsVoice() {
  const sel = document.getElementById('ttsVoiceSelect');
  if (sel) settings.ttsVoiceURI = sel.value;
}
function updateTtsRate() {
  const v = parseFloat(document.getElementById('ttsRateSlider')?.value || 0.85);
  settings.ttsRate = v;
  const el = document.getElementById('ttsRateVal');
  if (el) el.textContent = v.toFixed(2) + 'x';
}
function updateTtsPitch() {
  const v = parseFloat(document.getElementById('ttsPitchSlider')?.value || 1.0);
  settings.ttsPitch = v;
  const el = document.getElementById('ttsPitchVal');
  if (el) el.textContent = v.toFixed(1);
}
function updateTtsVolume() {
  const v = parseFloat(document.getElementById('ttsVolumeSlider')?.value || 100) / 100;
  settings.ttsVolume = v;
  const el = document.getElementById('ttsVolumeVal');
  if (el) el.textContent = Math.round(v*100) + '%';
}


// ════════════════════════════════════════════════════════════
// SLIDE MANAGER
// settings.slideManagerConfig = [{label, sectionIds:[]}]
// When slideManagerEnabled=true, buildScrollTrack uses this
// config instead of the auto-packing algorithm.
// ════════════════════════════════════════════════════════════

function smGetConfig() {
  return settings.slideManagerConfig || [];
}

function smSave() {
  // Read all slides from DOM
  const config = [];
  document.querySelectorAll('.sm-slide-block').forEach(block => {
    const label = block.querySelector('.sm-slide-label')?.value.trim() || 'Slide';
    const ids = [];
    block.querySelectorAll('.sm-section-chip[data-id]').forEach(chip => {
      ids.push(chip.dataset.id);
    });
    config.push({label, sectionIds: ids});
  });
  settings.slideManagerConfig = config;
  settings.slideManagerEnabled = document.getElementById('slideManagerEnabled')?.checked || false;
}

function smSaveAndApply() {
  smSave();
  saveState();
  buildScrollTrack();
  applySectionBgImage();
  setCsvStatus('✓ Slide Manager saved & display updated', true);
}

function smToggleEnabled() {
  const on = document.getElementById('slideManagerEnabled')?.checked;
  document.getElementById('sm-auto-note').style.display = on ? 'none' : 'block';
  document.getElementById('sm-unassigned-wrap').style.display = on ? 'block' : 'none';
  smRefreshUnassigned();
}

function smReset() {
  if (!confirm('Reset Slide Manager? This clears all manual slide assignments.')) return;
  settings.slideManagerConfig = [];
  settings.slideManagerEnabled = false;
  document.getElementById('slideManagerEnabled').checked = false;
  smToggleEnabled();
  smBuildUI();
  saveState();
  buildScrollTrack();
}

function smAddSlide(afterIdx) {
  const config = smGetConfig();
  const newSlide = {label: 'Slide ' + (config.length + 1), sectionIds: []};
  if (afterIdx !== undefined) config.splice(afterIdx + 1, 0, newSlide);
  else config.push(newSlide);
  settings.slideManagerConfig = config;
  smBuildUI();
  smRefreshUnassigned();
  // Scroll to new slide
  const blocks = document.querySelectorAll('.sm-slide-block');
  const target = afterIdx !== undefined ? blocks[afterIdx + 1] : blocks[blocks.length - 1];
  if (target) setTimeout(() => target.scrollIntoView({behavior:'smooth', block:'nearest'}), 100);
}

function smRemoveSlide(idx) {
  const config = smGetConfig();
  config.splice(idx, 1);
  settings.slideManagerConfig = config;
  smBuildUI();
  smRefreshUnassigned();
}

function smMoveSlide(idx, dir) {
  const config = smGetConfig();
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= config.length) return;
  [config[idx], config[newIdx]] = [config[newIdx], config[idx]];
  settings.slideManagerConfig = config;
  smBuildUI();
}

function smAddSectionToSlide(slideIdx) {
  const sel = document.getElementById('sm-sec-select-' + slideIdx);
  if (!sel || !sel.value) return;
  const config = smGetConfig();
  if (!config[slideIdx]) return;
  if (!config[slideIdx].sectionIds.includes(sel.value)) {
    config[slideIdx].sectionIds.push(sel.value);
    settings.slideManagerConfig = config;
    smBuildSlideBlock(slideIdx);
    smRefreshUnassigned();
  }
  sel.value = '';
}

function smRemoveSectionFromSlide(slideIdx, secId) {
  const config = smGetConfig();
  if (!config[slideIdx]) return;
  config[slideIdx].sectionIds = config[slideIdx].sectionIds.filter(id => id !== secId);
  settings.slideManagerConfig = config;
  smBuildSlideBlock(slideIdx);
  smRefreshUnassigned();
}

function smAssignUnassigned(secId) {
  // Add to last slide, or create one if none
  const config = smGetConfig();
  if (!config.length) {
    config.push({label: 'Slide 1', sectionIds: [secId]});
  } else {
    if (!config[config.length-1].sectionIds.includes(secId))
      config[config.length-1].sectionIds.push(secId);
  }
  settings.slideManagerConfig = config;
  smBuildUI();
  smRefreshUnassigned();
}

function smGetAssignedIds() {
  return (settings.slideManagerConfig || []).flatMap(s => s.sectionIds);
}

function smRefreshUnassigned() {
  const wrap = document.getElementById('sm-unassigned-chips');
  if (!wrap) return;
  const assigned = smGetAssignedIds();
  const unassigned = SECTIONS.filter(s =>
    s.entries.length > 0 &&
    settings.sectionVisibility[s.id] !== false &&
    !assigned.includes(s.id)
  );
  if (!unassigned.length) {
    wrap.innerHTML = '<span style="font-size:12px;color:#8dcc55;font-family:sans-serif;">✓ All visible sections are assigned</span>';
  } else {
    wrap.innerHTML = unassigned.map(s =>
      `<span class="sm-unassigned-chip" onclick="smAssignUnassigned('${s.id}')" title="Click to add to last slide">${s.title}</span>`
    ).join('');
  }
}

function smBuildSlideBlock(slideIdx) {
  const container = document.getElementById('sm-slides-container');
  const config = smGetConfig();
  const slide = config[slideIdx];
  if (!slide) return;

  const existing = document.getElementById('sm-block-' + slideIdx);
  const newBlock = smCreateSlideBlockEl(slideIdx, slide, config.length);
  if (existing) existing.replaceWith(newBlock);
  else container.appendChild(newBlock);
}

function smCreateSlideBlockEl(idx, slide, total) {
  const block = document.createElement('div');
  block.className = 'sm-slide-block';
  block.id = 'sm-block-' + idx;

  // Header row
  const header = document.createElement('div');
  header.className = 'sm-slide-header';

  const moveUp = document.createElement('button');
  moveUp.className = 'btn-secondary';
  moveUp.style.cssText = 'width:auto;margin:0;padding:6px 10px;font-size:12px;';
  moveUp.textContent = '▲';
  moveUp.title = 'Move up';
  moveUp.disabled = idx === 0;
  moveUp.addEventListener('click', () => { smSave(); smMoveSlide(idx, -1); });

  const moveDown = document.createElement('button');
  moveDown.className = 'btn-secondary';
  moveDown.style.cssText = 'width:auto;margin:0;padding:6px 10px;font-size:12px;';
  moveDown.textContent = '▼';
  moveDown.title = 'Move down';
  moveDown.disabled = idx === total - 1;
  moveDown.addEventListener('click', () => { smSave(); smMoveSlide(idx, 1); });

  const labelInput = document.createElement('input');
  labelInput.className = 'sm-slide-label';
  labelInput.type = 'text';
  labelInput.value = slide.label || ('Slide ' + (idx + 1));
  labelInput.placeholder = 'Slide name…';

  const badge = document.createElement('span');
  badge.className = 'sm-badge';
  badge.textContent = (slide.sectionIds?.length || 0) + ' section' + (slide.sectionIds?.length === 1 ? '' : 's');

  const addAfterBtn = document.createElement('button');
  addAfterBtn.className = 'btn-secondary';
  addAfterBtn.style.cssText = 'width:auto;margin:0;padding:6px 12px;font-size:12px;';
  addAfterBtn.textContent = '+ After';
  addAfterBtn.title = 'Insert new slide after this one';
  addAfterBtn.addEventListener('click', () => { smSave(); smAddSlide(idx); });

  const delBtn = document.createElement('button');
  delBtn.className = 'btn-remove';
  delBtn.style.cssText = 'padding:6px 10px;font-size:13px;';
  delBtn.textContent = '🗑';
  delBtn.title = 'Delete this slide';
  delBtn.addEventListener('click', () => { smSave(); smRemoveSlide(idx); });

  header.append(moveUp, moveDown, labelInput, badge, addAfterBtn, delBtn);
  block.appendChild(header);

  // Section chips list
  const list = document.createElement('div');
  list.className = 'sm-section-list';
  list.id = 'sm-list-' + idx;

  if (!slide.sectionIds?.length) {
    const empty = document.createElement('div');
    empty.className = 'sm-empty';
    empty.textContent = 'No sections assigned — add from dropdown below';
    list.appendChild(empty);
  } else {
    slide.sectionIds.forEach(secId => {
      const sec = SECTIONS.find(s => s.id === secId);
      const chip = document.createElement('div');
      chip.className = 'sm-section-chip';
      chip.dataset.id = secId;
      const nameSpan = document.createElement('span');
      nameSpan.textContent = sec ? sec.title : secId;
      const removeBtn = document.createElement('button');
      removeBtn.className = 'sm-chip-remove';
      removeBtn.textContent = '✕';
      removeBtn.title = 'Remove from this slide';
      removeBtn.addEventListener('click', () => { smSave(); smRemoveSectionFromSlide(idx, secId); });
      chip.append(nameSpan, removeBtn);
      list.appendChild(chip);
    });
  }
  block.appendChild(list);

  // Add section dropdown
  const addRow = document.createElement('div');
  addRow.className = 'sm-add-section-row';

  const sel = document.createElement('select');
  sel.id = 'sm-sec-select-' + idx;
  const defOpt = document.createElement('option');
  defOpt.value = '';
  defOpt.textContent = '— Add a section to this slide —';
  sel.appendChild(defOpt);

  SECTIONS.forEach(sec => {
    if (sec.entries.length === 0 && settings.sectionVisibility[sec.id] === false) return;
    const opt = document.createElement('option');
    opt.value = sec.id;
    const already = slide.sectionIds?.includes(sec.id);
    opt.textContent = (already ? '✓ ' : '') + sec.title;
    opt.disabled = already;
    sel.appendChild(opt);
  });

  const addBtn2 = document.createElement('button');
  addBtn2.textContent = '+ Add';
  addBtn2.addEventListener('click', () => { smSave(); smAddSectionToSlide(idx); smRefreshUnassigned(); });

  addRow.append(sel, addBtn2);
  block.appendChild(addRow);

  return block;
}

function smBuildUI() {
  const container = document.getElementById('sm-slides-container');
  if (!container) return;
  container.innerHTML = '';
  const config = smGetConfig();
  const enabled = settings.slideManagerEnabled || false;
  const enEl = document.getElementById('slideManagerEnabled');
  if (enEl) enEl.checked = enabled;

  document.getElementById('sm-auto-note').style.display = enabled ? 'none' : 'block';
  document.getElementById('sm-unassigned-wrap').style.display = enabled ? 'block' : 'none';

  if (config.length === 0 && enabled) {
    // Auto-generate one slide per section as starting point
    SECTIONS.filter(s => s.entries.length > 0).forEach((sec, i) => {
      config.push({label: 'Slide ' + (i + 1), sectionIds: [sec.id]});
    });
    settings.slideManagerConfig = config;
  }

  config.forEach((slide, idx) => {
    container.appendChild(smCreateSlideBlockEl(idx, slide, config.length));
  });

  smRefreshUnassigned();
}

// Called when the tab is switched to
function initSlideManagerTab() {
  smBuildUI();
  buildSectionRowLimitsUI();
}

// ---- Build display ----
// Each "line" = 1 name-only entry (counts as 1) or 1 name+merit entry (counts as 2)
// Section title itself counts as 1 line.
function calcEntryLines(entry, nameOnly) {
  if (nameOnly) return 1;
  return (entry.merit && entry.merit.trim()) ? 2 : 1;
}

function buildSectionHTML(sec) {
  const nameOnly = NAME_ONLY_IDS.includes(sec.id) || sec.nameOnly;
  const hasIcon = ICONS[sec.id] !== undefined;
  const iconHidden = settings.sectionIconHidden && settings.sectionIconHidden[sec.id];
  const iconClass = (hasIcon && !iconHidden) ? `section-icon-${sec.id}` : '';
  const iconSpan = hasIcon
    ? `<span class="section-icon-img${iconHidden?' hidden':''}"></span>`
    : '';
  const titlePad = hasIcon ? 'padding-left:76px;' : '';
  const contBadge = sec._continued
    ? `<span style="font-size:0.5em;opacity:.5;margin-left:14px;font-weight:400;vertical-align:middle;background:rgba(212,175,55,.1);padding:2px 8px;border-radius:4px;">continued</span>`
    : '';

  // Section background image
  const bgEnabled = settings.sectionBgImageEnabled && settings.sectionBgImageEnabled[sec.id];
  const bgImage = settings.sectionBgImage && settings.sectionBgImage[sec.id];
  const bgOpacity = settings.sectionBgImageOpacity && settings.sectionBgImageOpacity[sec.id] !== undefined
    ? settings.sectionBgImageOpacity[sec.id]
    : 0.2; // Default 20%
  const bgStyle = (bgEnabled && bgImage)
    ? `background-image:url(${bgImage});background-size:cover;background-position:center;opacity:${bgOpacity};position:absolute;top:0;left:0;right:0;bottom:0;z-index:0;`
    : '';
  const bgContainer = bgStyle ? `<div style="${bgStyle}"></div>` : '';

  let h = `<div class="section-container" style="position:relative;">${bgContainer}`;
  h += `<div class="section-title-bar ${iconClass}" style="${titlePad}">${iconSpan}<h2>${sec.title}${contBadge}</h2></div>`;
  if (nameOnly) {
    h += '<div class="names-two-col">';
    sec.entries.forEach(e => {
      h += `<div class="entry-card no-merit"><div class="entry-name">${e.name||''}</div></div>`;
    });
    h += '</div>';
  } else {
    sec.entries.forEach(e => {
      const hasMerit = !!(e.merit && e.merit.trim());
      h += `<div class="entry-card${hasMerit?'':' no-merit'}">
        <div class="entry-name${hasMerit?' has-merit':''}">${e.name||''}</div>
        ${hasMerit?`<div class="entry-merit">${e.merit}</div>`:''}
      </div>`;
    });
  }
  h += '</div>';
  return h;
}

function sectionLineCount(sec) {
  const nameOnly = NAME_ONLY_IDS.includes(sec.id) || sec.nameOnly;
  // section title = 1 line; name-only: 1 line per name (not 0.5), merit entries count 2
  let lines = 1;
  if (nameOnly) {
    lines += sec.entries.length; // each name counts as 1 line for limiting purposes
  } else {
    sec.entries.forEach(e => { lines += calcEntryLines(e, false); });
  }
  return lines;
}

// Split a section into chunks that each fit within maxLines.
// For sections with a row limit: use per-section limit; otherwise use global maxLines.
// Returns array of virtual section objects with a subset of entries.
function splitSectionIntoChunks(sec, maxLines) {
  const nameOnly = NAME_ONLY_IDS.includes(sec.id) || sec.nameOnly;

  // Per-section row limit overrides global lines budget for any section that has it set
  const perSecLimit = (settings.sectionRowLimits && settings.sectionRowLimits[sec.id])
    ? parseInt(settings.sectionRowLimits[sec.id])
    : null;

  const chunks = [];
  let chunk = [];
  let lines = 1; // 1 for the title bar

  for (const entry of sec.entries) {
    // For name-only: each name costs 1 line (not 0.5) so that "lines per slide" setting limits names properly
    const cost = nameOnly ? 1 : calcEntryLines(entry, false);

    // Use per-section limit if set, otherwise use global maxLines
    // For name-only: each entry costs 1 line, so limit = perSecLimit + 1 (for title)
    // For regular: perSecLimit entries, each costs 2 lines max, so limit = perSecLimit*2 + 1
    const limit = perSecLimit !== null
      ? (nameOnly ? (perSecLimit + 1) : (perSecLimit * 2 + 1))
      : maxLines;

    if (chunk.length > 0 && lines + cost > limit) {
      chunks.push({...sec, entries: chunk, _continued: true});
      chunk = [entry];
      lines = 1 + cost;
    } else {
      chunk.push(entry);
      lines += cost;
    }
  }
  if (chunk.length) chunks.push({...sec, entries: chunk, _continued: chunks.length > 0});
  return chunks.length ? chunks : [{...sec, entries: sec.entries}];
}

function buildScrollTrack() {
  const track = document.getElementById('scroll-track');
  track.innerHTML=''; slideGroups=[]; currentSlide=0;
  if (scrollTimer) clearInterval(scrollTimer);

  const visible = SECTIONS.filter(s =>
    settings.sectionVisibility[s.id] !== false && s.entries.length > 0
  );

  if (!visible.length) {
    track.innerHTML='<div style="text-align:center;color:var(--text-muted);padding:80px 20px;font-size:20px;font-family:\'Noto Sans Sinhala\',sans-serif;">දත්ත නොමැත. Admin Panel හරහා දත්ත ඇතුළත් කරන්න.</div>';
    return;
  }

  let slides = [];

  if (settings.slideManagerEnabled && settings.slideManagerConfig && settings.slideManagerConfig.length) {
    // ── Manual Slide Manager mode ──
    settings.slideManagerConfig.forEach(slideConf => {
      const group = slideConf.sectionIds
        .map(id => SECTIONS.find(s => s.id === id))
        .filter(sec => sec && sec.entries.length > 0 && settings.sectionVisibility[sec.id] !== false);
      if (group.length) slides.push(group);
    });
    // Append any visible sections not assigned to any slide
    const assigned = settings.slideManagerConfig.flatMap(s => s.sectionIds);
    const unassigned = visible.filter(s => !assigned.includes(s.id));
    if (unassigned.length) slides.push(unassigned);
  } else {
    // ── Auto mode: pack by lines ──
    const maxLines = settings.linesPerSlide || 15;
    const doSplit  = settings.autoSplitSections !== false;
    const expandedSections = [];
    visible.forEach(sec => {
      if (doSplit) splitSectionIntoChunks(sec, maxLines).forEach(chunk => expandedSections.push(chunk));
      else expandedSections.push(sec);
    });
    let currentSlideGroup = [];
    let currentLines = 0;
    expandedSections.forEach(sec => {
      const secLines = sectionLineCount(sec);
      if (currentSlideGroup.length > 0 && currentLines + secLines > maxLines) {
        slides.push(currentSlideGroup);
        currentSlideGroup = [sec];
        currentLines = secLines;
      } else {
        currentSlideGroup.push(sec);
        currentLines += secLines;
      }
    });
    if (currentSlideGroup.length) slides.push(currentSlideGroup);
  }

  slides.forEach(group => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide-group';
    group.forEach(sec => {
      const block = document.createElement('div');
      block.className = 'section-block';
      block.innerHTML = buildSectionHTML(sec);
      slideDiv.appendChild(block);
    });
    track.appendChild(slideDiv);
    slideGroups.push(slideDiv);
  });

  if (!slideGroups.length) return;
  showSlide(0, true);
  if (slideGroups.length>1||settings.autoLoop)
    scrollTimer = setInterval(nextSlide, settings.speed*1000);
}

function showSlide(idx, instant) {
  slideGroups.forEach((g,i) => {
    g.classList.remove('active','visible','leaving');
    if (i!==idx) g.style.display='none';
  });
  const slide = slideGroups[idx];
  slide.style.display='flex'; slide.classList.add('active');
  if (instant) slide.classList.add('visible');
  else requestAnimationFrame(()=>requestAnimationFrame(()=>slide.classList.add('visible')));
  currentSlide=idx;

  // Speak slide content
  if (settings.ttsEnabled && window.speechSynthesis) {
    setTimeout(() => {
      const slideEl = slideGroups[idx];
      if (slideEl) ttsSpeak(slideToSpeechText(slideEl));
    }, 600); // slight delay so transition finishes first
  }

  // Hide/show subtitles based on slide index
  const hideAfter = settings.hideSubtitleAfter;
  const subsEl = document.getElementById('subtitle-wrap');
  if (subsEl) {
    const shouldHide = (hideAfter > 0 && idx >= hideAfter);
    subsEl.style.maxHeight = shouldHide ? '0' : '';
    subsEl.style.opacity   = shouldHide ? '0' : '';
    subsEl.style.marginBottom = shouldHide ? '0' : '';
  }
}

function nextSlide() {
  const cur = slideGroups[currentSlide];
  if (!cur) return;
  let next = currentSlide+1;
  if (next>=slideGroups.length) {
    if (!settings.autoLoop) { clearInterval(scrollTimer); return; }
    next=0;
  }
  cur.classList.add('leaving');
  setTimeout(()=>{
    cur.classList.remove('active','visible','leaving');
    cur.style.display='none';
    showSlide(next,false);
  },600);
}

function prevSlide() {
  const cur = slideGroups[currentSlide];
  if (!cur) return;
  let prev = currentSlide - 1;
  if (prev < 0) {
    if (!settings.autoLoop) { clearInterval(scrollTimer); return; }
    prev = slideGroups.length - 1;
  }
  cur.classList.add('leaving');
  setTimeout(()=>{
    cur.classList.remove('active','visible','leaving');
    cur.style.display='none';
    showSlide(prev, false);
  }, 600);
}

function applyDisplaySettings() {
  const set=(id,val)=>{ const el=document.getElementById(id); if(el) el.textContent=val; };
  set('display-title', settings.eventTitle);
  set('sub1', settings.subLine1);
  set('sub2', settings.subLine2);
  set('sub3', settings.subLine3);
  set('display-footer', settings.footerText);
}

function applyColors() {
  const root = document.documentElement;
  if (settings.colorTitle)        root.style.setProperty('--color-title',        settings.colorTitle);
  if (settings.colorSubtitle)     root.style.setProperty('--color-subtitle',     settings.colorSubtitle);
  if (settings.colorSectionTitle) root.style.setProperty('--color-section-title',settings.colorSectionTitle);
  if (settings.colorMerit)        root.style.setProperty('--color-merit',        settings.colorMerit);
}

function toggleSectionIcon(secId, show) {
  if (!settings.sectionIconHidden) settings.sectionIconHidden={};
  settings.sectionIconHidden[secId] = !show;
  saveState();
  buildScrollTrack(); // rebuild display with updated icons
}

function toggleSectionBgImage() {
  const cb = document.getElementById('showSectionBgImage');
  settings.showSectionBgImage = cb ? cb.checked : true;
  const track = document.getElementById('scroll-track');
  if (track) {
    if (settings.showSectionBgImage) track.classList.remove('section-bg-off');
    else track.classList.add('section-bg-off');
  }
}

function toggleSectionDharmaWheel() {
  const cb = document.getElementById('showSectionDharmaWheel');
  settings.showSectionDharmaWheel = cb ? cb.checked : true;
  const track = document.getElementById('scroll-track');
  if (track) {
    if (settings.showSectionDharmaWheel) track.classList.remove('dharma-wheel-off');
    else track.classList.add('dharma-wheel-off');
  }
}

function applySectionBgImage() {
  const track = document.getElementById('scroll-track');
  if (!track) return;
  if (settings.showSectionBgImage !== false) track.classList.remove('section-bg-off');
  else track.classList.add('section-bg-off');
  if (settings.showSectionDharmaWheel !== false) track.classList.remove('dharma-wheel-off');
  else track.classList.add('dharma-wheel-off');
}

function applyFontScales() {
  const root = document.documentElement;
  const ts = settings.fontScaleTitle || 1;
  const ss = settings.fontScaleSubtitle || 1;
  const scs = settings.fontScaleSection || 1;
  const ns = settings.fontScaleName || 1;
  const ms = settings.fontScaleMerit || 1;
  root.style.setProperty('--font-scale-title', ts);
  root.style.setProperty('--font-scale-subtitle', ss);
  root.style.setProperty('--font-scale-section', scs);
  root.style.setProperty('--font-scale-name', ns);
  root.style.setProperty('--font-scale-merit', ms);
}
function applyContentPadding() {
  const root = document.documentElement;
  const p = settings.contentPaddingX || 1;
  root.style.setProperty('--content-padding-x', p);
}

// ---- Admin navigation ----
function showAdmin() {
  ttsStop();
  document.getElementById('display-view').style.display='none';
  document.getElementById('admin-view').style.display='block';
  populateAdmin();
}
function showDisplay() {
  document.getElementById('admin-view').style.display='none';
  document.getElementById('display-view').style.display='flex';
  buildScrollTrack(); applySectionBgImage(); applyDisplaySettings();
}

function populateAdmin() {
  document.getElementById('speedSlider').value = settings.speed;
  document.getElementById('sectionsPerSlide').value = settings.sectionsPerSlide||2;
  document.getElementById('autoLoop').checked = settings.autoLoop;
  document.getElementById('autoPlayMusic').checked = settings.autoPlayMusic;
  document.getElementById('loopMusic').checked = settings.loopMusic;
  document.getElementById('volumeSlider').value = Math.round(settings.volume*100);
  document.getElementById('eventTitle').value = settings.eventTitle;
  document.getElementById('subLine1').value = settings.subLine1;
  document.getElementById('subLine2').value = settings.subLine2;
  document.getElementById('subLine3').value = settings.subLine3;
  document.getElementById('footerText').value = settings.footerText;
  document.getElementById('musicUrl').value = settings.musicUrl||'';
  const lps=document.getElementById('linesPerSlide'); if(lps) lps.value=settings.linesPerSlide||15;
  const hsa=document.getElementById('hideSubtitleAfter'); if(hsa){hsa.value=settings.hideSubtitleAfter||1; updateHideSubtitle();}
  const ass=document.getElementById('autoSplitSections'); if(ass) ass.checked=settings.autoSplitSections!==false;
  const mfStatus=document.getElementById('music-file-status');
  if(mfStatus && localMusicBlobUrl && settings.musicUrl && settings.musicUrl.startsWith('(local:')) mfStatus.textContent='✓ '+settings.musicUrl.slice(7,settings.musicUrl.length-1)+' (loaded in memory)';
  const sbg2=document.getElementById('showSectionBgImage'); if(sbg2) sbg2.checked=settings.showSectionBgImage!==false;
  const sdw=document.getElementById('showSectionDharmaWheel'); if(sdw) sdw.checked=settings.showSectionDharmaWheel!==false;
  const ct=document.getElementById('colorTitle');         if(ct)  ct.value=settings.colorTitle||'#D4AF37';
  const cs=document.getElementById('colorSubtitle');      if(cs)  cs.value=settings.colorSubtitle||'#C8A96E';
  const cst=document.getElementById('colorSectionTitle'); if(cst) cst.value=settings.colorSectionTitle||'#F0D060';
  const cm=document.getElementById('colorMerit');         if(cm)  cm.value=settings.colorMerit||'#C8A96E';
  updateSpeed(); updateSectionsPerSlide(); updateLinesPerSlide(); updateVolume(); updateFontScale(); updateContentPadding();
  buildSectionRowLimitsUI();
  // TTS
  const ttsEn=document.getElementById('ttsEnabled'); if(ttsEn) ttsEn.checked=settings.ttsEnabled||false;
  const ttsR=document.getElementById('ttsRateSlider'); if(ttsR){ttsR.value=settings.ttsRate||0.85; updateTtsRate();}
  const ttsP=document.getElementById('ttsPitchSlider'); if(ttsP){ttsP.value=settings.ttsPitch||1.0; updateTtsPitch();}
  const ttsVol=document.getElementById('ttsVolumeSlider'); if(ttsVol){ttsVol.value=Math.round((settings.ttsVolume||1)*100); updateTtsVolume();}
  const ttsG=document.getElementById('ttsGender'); if(ttsG) ttsG.value=settings.ttsGender||'female';
  const ttsRM=document.getElementById('ttsReadMerit'); if(ttsRM) ttsRM.checked=settings.ttsReadMerit!==false;
  populateTtsVoices();
  buildSectionToggles(); buildSectionEditors();
}

function saveAndRefresh() {
  collectEditorData();
  settings.speed            = parseInt(document.getElementById('speedSlider').value);
  settings.sectionsPerSlide = parseInt(document.getElementById('sectionsPerSlide').value);
  settings.autoLoop          = document.getElementById('autoLoop').checked;
  settings.autoSplitSections  = document.getElementById('autoSplitSections')?.checked ?? true;
  settings.slideManagerEnabled = document.getElementById('slideManagerEnabled')?.checked ?? false;
  // Row limits saved live via saveRowLimitsAndApply() — read any open inputs here too
  if (!settings.sectionRowLimits) settings.sectionRowLimits={};
  document.querySelectorAll('[id^="rowlimit-"]').forEach(el=>{ const sid=el.id.replace('rowlimit-',''); const v=parseInt(el.value)||0; if(v>0) settings.sectionRowLimits[sid]=v; else delete settings.sectionRowLimits[sid]; });
  settings.autoPlayMusic    = document.getElementById('autoPlayMusic').checked;
  settings.loopMusic        = document.getElementById('loopMusic').checked;
  settings.volume           = parseInt(document.getElementById('volumeSlider').value)/100;
  settings.eventTitle       = document.getElementById('eventTitle').value;
  settings.subLine1         = document.getElementById('subLine1').value;
  settings.subLine2         = document.getElementById('subLine2').value;
  settings.subLine3         = document.getElementById('subLine3').value;
  settings.footerText       = document.getElementById('footerText').value;
  settings.linesPerSlide      = parseInt(document.getElementById('linesPerSlide').value)||15;
  settings.hideSubtitleAfter  = parseInt(document.getElementById('hideSubtitleAfter').value)||0;
  const sbg=document.getElementById('showSectionBgImage'); if(sbg) settings.showSectionBgImage=sbg.checked;
  const sdw=document.getElementById('showSectionDharmaWheel'); if(sdw) settings.showSectionDharmaWheel=sdw.checked;
  // sectionIconHidden is updated live via toggleSectionIcon(), no extra read needed
  settings.ttsEnabled   = document.getElementById('ttsEnabled')?.checked ?? false;
  settings.ttsRate      = parseFloat(document.getElementById('ttsRateSlider')?.value || 0.85);
  settings.ttsPitch     = parseFloat(document.getElementById('ttsPitchSlider')?.value || 1.0);
  settings.ttsVolume    = parseFloat(document.getElementById('ttsVolumeSlider')?.value || 100)/100;
  settings.ttsGender    = document.getElementById('ttsGender')?.value || 'female';
  settings.ttsReadMerit = document.getElementById('ttsReadMerit')?.checked ?? true;
  const ttsV = document.getElementById('ttsVoiceSelect');
  if (ttsV) settings.ttsVoiceURI = ttsV.value;
  if (!settings.ttsVoiceURI) autoPickVoice();
  const ct=document.getElementById('colorTitle');        if(ct) settings.colorTitle=ct.value;
  const cs=document.getElementById('colorSubtitle');     if(cs) settings.colorSubtitle=cs.value;
  const cst=document.getElementById('colorSectionTitle');if(cst) settings.colorSectionTitle=cst.value;
  const cm=document.getElementById('colorMerit');        if(cm) settings.colorMerit=cm.value;
  settings.fontScaleTitle = parseFloat(document.getElementById('fontScaleTitle')?.value || 1);
  settings.fontScaleSubtitle = parseFloat(document.getElementById('fontScaleSubtitle')?.value || 1);
  settings.fontScaleSection = parseFloat(document.getElementById('fontScaleSection')?.value || 1);
  settings.fontScaleName = parseFloat(document.getElementById('fontScaleName')?.value || 1);
  settings.fontScaleMerit = parseFloat(document.getElementById('fontScaleMerit')?.value || 1);
  settings.contentPaddingX = parseFloat(document.getElementById('contentPaddingX')?.value || 1);
  const mUrl = document.getElementById('musicUrl').value.trim();
  if (mUrl) settings.musicUrl=mUrl;
  SECTIONS.forEach(sec=>{
    const cb=document.getElementById('toggle-'+sec.id);
    if (cb) settings.sectionVisibility[sec.id]=cb.checked;
  });
  saveState(); autoExportHint(); applyDisplaySettings(); applyColors(); applyMusic(); buildScrollTrack(); applySectionBgImage(); applyFontScales(); applyContentPadding();
}

function collectEditorData() {
  SECTIONS.forEach(sec=>{
    // Also save edited title
    const titleEl=document.getElementById('sectitle-'+sec.id);
    if (titleEl && titleEl.value.trim()) sec.title=titleEl.value.trim();
    const container=document.getElementById('entries-'+sec.id);
    if (!container) return;
    sec.entries=[];
    container.querySelectorAll('.entry-row').forEach(row=>{
      const name  = row.querySelector('.entry-name-input')?.value.trim()||'';
      const merit = row.querySelector('.entry-merit-input')?.value.trim()||'';
      if (name||merit) sec.entries.push({name,merit});
    });
  });
}

// ---- Add / Delete custom sections ----
function addNewSection() {
  const input = document.getElementById('newSectionTitle');
  const title = input.value.trim();
  if (!title) { alert('Please enter a section title.'); return; }
  const id = 'custom_' + Date.now();
  const newSec = { id, title, entries:[], custom:true };
  SECTIONS.push(newSec);
  settings.sectionVisibility[id] = true;
  input.value='';
  saveState(); autoExportHint();
  buildSectionEditors();
  buildSectionToggles();
  // scroll to new section
  const el=document.getElementById('editor-block-'+id);
  if (el) el.scrollIntoView({behavior:'smooth'});
}

function deleteSection(id) {
  const sec=SECTIONS.find(s=>s.id===id);
  const name=sec?sec.title:id;
  if (!confirm('Delete section "'+name+'" and all its entries?')) return;
  SECTIONS = SECTIONS.filter(s=>s.id!==id);
  delete settings.sectionVisibility[id];
  saveState(); buildSectionEditors(); buildSectionToggles();
}

// ---- Build admin UI ----
function buildSectionRowLimitsUI() {
  const c = document.getElementById('section-row-limits');
  if (!c) return;
  c.innerHTML = '';

  // Show all visible sections with entries (for setting row limits)
  const targets = SECTIONS.filter(sec =>
    sec.entries.length > 0 && settings.sectionVisibility[sec.id] !== false
  );

  if (!targets.length) {
    c.innerHTML = '<p style="font-size:12px;color:var(--text-muted);font-family:sans-serif;">No visible sections with entries found.</p>';
    return;
  }

  targets.forEach(sec => {
    const current = (settings.sectionRowLimits && settings.sectionRowLimits[sec.id]) || 0;
    const nameOnly = NAME_ONLY_IDS.includes(sec.id) || sec.nameOnly;
    const tag = nameOnly
      ? '<span style="font-size:10px;background:rgba(212,175,55,.15);color:var(--gold);padding:2px 7px;border-radius:8px;margin-left:8px;font-family:sans-serif;">2-col names</span>'
      : '';

    const row = document.createElement('div');
    row.style.cssText = 'display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;padding:12px 0;border-bottom:1px solid rgba(212,175,55,.07);';

    const labelWrap = document.createElement('div');
    labelWrap.innerHTML = `<div style="font-size:13px;color:var(--text-main);font-family:'Noto Serif Sinhala',serif;line-height:1.4;">${sec.title}${tag}</div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:3px;font-family:'Noto Sans Sinhala',sans-serif;">${sec.entries.length} entries total</div>`;

    const inputWrap = document.createElement('div');
    inputWrap.style.cssText = 'display:flex;align-items:center;gap:8px;flex-shrink:0;';

    const numIn = document.createElement('input');
    numIn.type = 'number';
    numIn.id = 'rowlimit-' + sec.id;
    numIn.value = current;
    numIn.min = 0;
    numIn.max = 200;
    numIn.style.cssText = 'width:70px;margin-bottom:0;text-align:center;';
    numIn.title = '0 = use global setting';

    const hint = document.createElement('span');
    hint.style.cssText = 'font-size:11px;color:var(--text-muted);font-family:sans-serif;white-space:nowrap;';
    hint.textContent = 'names/slide (0=auto)';

    inputWrap.append(numIn, hint);
    row.append(labelWrap, inputWrap);
    c.appendChild(row);
  });
}

function saveRowLimitsAndApply() {
  if (!settings.sectionRowLimits) settings.sectionRowLimits = {};
  document.querySelectorAll('[id^="rowlimit-"]').forEach(el => {
    const secId = el.id.replace('rowlimit-', '');
    const val = parseInt(el.value) || 0;
    if (val > 0) settings.sectionRowLimits[secId] = val;
    else delete settings.sectionRowLimits[secId];
  });
  saveState();
  buildScrollTrack();
  applySectionBgImage();
  setCsvStatus('✓ Row limits saved & display updated', true);
}

function buildSectionToggles() {
  const c = document.getElementById('section-toggles');
  c.innerHTML='';
  SECTIONS.forEach(sec=>{
    const row=document.createElement('div');
    row.style.cssText='display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:0;padding:8px 0;border-bottom:1px solid rgba(212,175,55,.07);';
    const vis=settings.sectionVisibility[sec.id]!==false;
    const iconHidden=settings.sectionIconHidden&&settings.sectionIconHidden[sec.id];
    const badge=sec.custom?'<span style="font-size:10px;background:rgba(212,175,55,.2);color:var(--gold);padding:2px 7px;border-radius:10px;margin-left:6px;font-family:sans-serif;">custom</span>':'';
    const hasIcon=ICONS[sec.id]!==undefined;

    const label=document.createElement('span');
    label.className='toggle-label';
    label.innerHTML=sec.title+badge;

    const visSwitch=document.createElement('label');
    visSwitch.className='toggle-switch';
    visSwitch.style.margin='0 12px';
    visSwitch.innerHTML=`<input type="checkbox" id="toggle-${sec.id}" ${vis?'checked':''}><span class="toggle-slider"></span>`;

    const iconSwitch=document.createElement('label');
    iconSwitch.className='toggle-switch';
    iconSwitch.style.opacity=hasIcon?'1':'0.25';
    iconSwitch.title=hasIcon?'Toggle section icon':'No icon for this section';
    const iconChecked=hasIcon&&!iconHidden;
    iconSwitch.innerHTML=`<input type="checkbox" id="icon-toggle-${sec.id}" ${iconChecked?'checked':''} ${hasIcon?'':'disabled'} onchange="toggleSectionIcon('${sec.id}',this.checked)"><span class="toggle-slider"></span>`;

    row.appendChild(label);
    row.appendChild(visSwitch);
    row.appendChild(iconSwitch);
    c.appendChild(row);
  });
  buildSectionBgImages();
}

// Section background image handling
function buildSectionBgImages() {
  const c = document.getElementById('section-bg-images');
  if (!c) return;
  c.innerHTML = '';
  SECTIONS.forEach(sec => {
    const row = document.createElement('div');
    row.style.cssText = 'padding:10px 0;border-bottom:1px solid rgba(212,175,55,.07);';

    const enabled = settings.sectionBgImageEnabled && settings.sectionBgImageEnabled[sec.id];
    const bgImage = settings.sectionBgImage && settings.sectionBgImage[sec.id];
    const opacity = settings.sectionBgImageOpacity && settings.sectionBgImageOpacity[sec.id] !== undefined
      ? settings.sectionBgImageOpacity[sec.id]
      : 0.2;

    row.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;">
        <span style="font-size:13px;color:var(--text-main);font-family:'Noto Sans Sinhala',sans-serif;flex:1;">${sec.title}</span>
        <label class="toggle-switch" style="flex-shrink:0;">
          <input type="checkbox" id="bg-enabled-${sec.id}" ${enabled ? 'checked' : ''} onchange="toggleSectionBgEnabled('${sec.id}', this.checked)">
          <span class="toggle-slider"></span>
        </label>
      </div>
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px;">
        <input type="file" id="bg-upload-${sec.id}" accept="image/*" style="display:none;" onchange="handleSectionBgUpload('${sec.id}', this)">
        <button onclick="document.getElementById('bg-upload-${sec.id}').click()" style="padding:6px 12px;background:rgba(212,175,55,.1);border:1px solid rgba(212,175,55,.25);border-radius:5px;color:var(--gold);cursor:pointer;font-size:12px;">📁 Upload</button>
        <input type="text" id="bg-url-${sec.id}" value="${bgImage || ''}" placeholder="Or paste image URL..." style="flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(212,175,55,.15);border-radius:4px;color:var(--text-main);padding:5px 8px;font-size:12px;" onchange="setSectionBgUrl('${sec.id}', this.value)">
        ${bgImage ? `<img src="${bgImage}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;border:1px solid rgba(212,175,55,.3);">` : ''}
        ${bgImage ? `<button onclick="clearSectionBg('${sec.id}')" style="padding:4px 8px;background:rgba(200,50,50,.1);border:1px solid rgba(200,50,50,.3);border-radius:4px;color:#cc4444;cursor:pointer;font-size:11px;">✕</button>` : ''}
      </div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
        <span style="font-size:11px;color:var(--text-muted);font-family:sans-serif;white-space:nowrap;">Opacity:</span>
        <input type="range" id="bg-opacity-${sec.id}" min="0" max="100" value="${Math.round(opacity * 100)}" style="flex:1;height:4px;cursor:pointer;" onchange="setSectionBgOpacity('${sec.id}', this.value)">
        <span id="bg-opacity-val-${sec.id}" style="font-size:11px;color:var(--gold);font-family:sans-serif;min-width:35px;">${Math.round(opacity * 100)}%</span>
      </div>
    `;
    c.appendChild(row);
  });
}

function toggleSectionBgEnabled(secId, enabled) {
  if (!settings.sectionBgImageEnabled) settings.sectionBgImageEnabled = {};
  settings.sectionBgImageEnabled[secId] = enabled;
  saveState();
  buildScrollTrack();
  applySectionBgImage(); // Apply the background image to display
  setCsvStatus('✓ Section background updated', true);
}

function setSectionBgOpacity(secId, value) {
  const opacity = parseInt(value) / 100;
  if (!settings.sectionBgImageOpacity) settings.sectionBgImageOpacity = {};
  settings.sectionBgImageOpacity[secId] = opacity;
  document.getElementById('bg-opacity-val-' + secId).textContent = value + '%';
  saveState();
  buildScrollTrack();
  applySectionBgImage();
  setCsvStatus('✓ Opacity updated', true);
}

function handleSectionBgUpload(secId, input) {
  const file = input.files[0];
  if (!file) return;

  // Validate file type
  if (!file.type.match(/image.*/)) {
    setCsvStatus('⚠️ Please select a valid image file', false);
    return;
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    setCsvStatus('⚠️ Image too large (max 5MB)', false);
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    if (!settings.sectionBgImage) settings.sectionBgImage = {};
    settings.sectionBgImage[secId] = e.target.result;
    saveState();
    buildSectionBgImages();
    buildScrollTrack();
    applySectionBgImage(); // Apply the background image to display
    // Clear the file input so the same file can be selected again
    input.value = '';
    setCsvStatus('✓ Background image uploaded', true);
  };
  reader.onerror = function() {
    setCsvStatus('⚠️ Error reading file', false);
  };
  reader.readAsDataURL(file);
}

function setSectionBgUrl(secId, url) {
  if (!url.trim()) {
    clearSectionBg(secId);
    return;
  }

  // Basic URL validation
  try {
    new URL(url.trim());
  } catch (e) {
    // Not a valid URL, treat as plain string (could be base64 or relative path)
  }

  if (!settings.sectionBgImage) settings.sectionBgImage = {};
  settings.sectionBgImage[secId] = url.trim();
  saveState();
  buildSectionBgImages();
  buildScrollTrack();
  applySectionBgImage(); // Apply the background image to display
  setCsvStatus('✓ Background URL saved', true);
}

function clearSectionBg(secId) {
  if (settings.sectionBgImage && settings.sectionBgImage[secId]) {
    delete settings.sectionBgImage[secId];
  }
  if (settings.sectionBgImageEnabled && settings.sectionBgImageEnabled[secId]) {
    settings.sectionBgImageEnabled[secId] = false;
  }
  saveState();
  buildSectionBgImages();
  buildScrollTrack();
  applySectionBgImage(); // Apply the background image to display
  setCsvStatus('✓ Background cleared', true);
}

function buildSectionEditors() {
  const c=document.getElementById('section-editors');
  c.innerHTML='';
  SECTIONS.forEach(sec=>{
    const block=document.createElement('div');
    block.className='section-editor-block';
    block.id='editor-block-'+sec.id;
    const nameOnly = NAME_ONLY_IDS.includes(sec.id) || sec.nameOnly;
    const badge = nameOnly
      ? '<span style="font-size:10px;background:rgba(212,175,55,.15);color:var(--gold);padding:2px 7px;border-radius:10px;font-family:sans-serif;">name only</span>'
      : '';

    // Header with editable title
    const header = document.createElement('div');
    header.className = 'section-editor-header';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'section-title-input';
    titleInput.id = 'sectitle-' + sec.id;
    titleInput.value = sec.title;
    titleInput.placeholder = 'Section title…';
    titleInput.addEventListener('change', () => updateSectionTitle(sec.id, titleInput.value));

    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;align-items:center;gap:8px;flex-shrink:0;margin-left:10px;';
    controls.innerHTML = badge +
      `<span style="font-size:12px;color:var(--text-muted);font-family:'Noto Sans Sinhala',sans-serif;">${sec.entries.length} entries</span>`;

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-delete-section';
    delBtn.title = 'Delete section';
    delBtn.textContent = '🗑';
    delBtn.addEventListener('click', () => deleteSection(sec.id));
    controls.appendChild(delBtn);

    header.appendChild(titleInput);
    header.appendChild(controls);
    block.appendChild(header);

    const entriesContainer = document.createElement('div');
    entriesContainer.id = 'entries-' + sec.id;
    block.appendChild(entriesContainer);

    const addBtn = document.createElement('button');
    addBtn.className = 'btn-add-entry';
    addBtn.textContent = '+ Add Entry';
    addBtn.addEventListener('click', () => addEntry(sec.id));
    block.appendChild(addBtn);

    c.appendChild(block);
    if (!sec.entries.length) addEntryRow(entriesContainer, {}, nameOnly);
    else sec.entries.forEach(e => addEntryRow(entriesContainer, e, nameOnly));
  });
}

function updateSectionTitle(secId, newTitle) {
  const sec = SECTIONS.find(s=>s.id===secId);
  if (sec) { sec.title = newTitle.trim(); saveState(); buildSectionToggles(); }
}

function addEntry(secId) {
  const sec=SECTIONS.find(s=>s.id===secId);
  const nameOnly = sec && (NAME_ONLY_IDS.includes(secId)||sec.nameOnly);
  addEntryRow(document.getElementById('entries-'+secId),{},nameOnly);
}
function addEntryRow(container,entry,nameOnly) {
  const row=document.createElement('div');
  row.className='entry-row';
  const meritField = nameOnly ? '' : `
      <div class="entry-sub-label">පිනට සාදු / Merit Sharing</div>
      <textarea class="entry-merit-input" placeholder="e.g. ඔබට හා ඔබේ පවුලේ සියලු දෙනාට ත්‍රිවිධ රත්නයේ ආශිර්වාදය ලැබේවා…">${entry.merit||''}</textarea>`;
  row.innerHTML=`
    <div class="entry-fields">
      <div class="entry-sub-label">නම (Name)</div>
      <input type="text" class="entry-name-input" placeholder="e.g. සෝමා ජයතිලක" value="${entry.name||''}">${meritField}
    </div>
    <button class="btn-remove" onclick="this.parentElement.remove()" title="Remove">✕</button>`;
  container.appendChild(row);
}

// ---- Helpers ----
function updateSpeed() {
  settings.speed=parseInt(document.getElementById('speedSlider').value);
  document.getElementById('speedVal').textContent=settings.speed+'s per slide';
}
function updateSectionsPerSlide() {
  document.getElementById('sectionsPerSlideVal').textContent=
    document.getElementById('sectionsPerSlide').value+' per slide';
}
function updateHideSubtitle() {
  const v=parseInt(document.getElementById('hideSubtitleAfter')?.value||0);
  const el=document.getElementById('hideSubtitleVal');
  if(el) el.textContent = v===0 ? 'Always show' : 'After slide '+v;
}
function updateLinesPerSlide() {
  const el=document.getElementById('linesPerSlideVal');
  const v=document.getElementById('linesPerSlide')?.value||15;
  if(el) el.textContent=v+' lines';
}
function updateVolume() {
  const v=parseInt(document.getElementById('volumeSlider').value);
  document.getElementById('volVal').textContent=v+'%';
  audio.volume=v/100;
}
function updateFontScale() {
  const ids = ['fontScaleTitle','fontScaleSubtitle','fontScaleSection','fontScaleName','fontScaleMerit'];
  const keys = ['fontScaleTitle','fontScaleSubtitle','fontScaleSection','fontScaleName','fontScaleMerit'];
  ids.forEach((id,i) => {
    const el = document.getElementById(id);
    const disp = document.getElementById(id+'Val');
    if(el && disp) {
      const v = parseFloat(el.value);
      disp.textContent = Math.round(v*100)+'%';
      settings[keys[i]] = v;
    }
  });
  applyFontScales();
  buildScrollTrack();
}
function resetFontScales() {
  settings.fontScaleTitle = 1;
  settings.fontScaleSubtitle = 1;
  settings.fontScaleSection = 1;
  settings.fontScaleName = 1;
  settings.fontScaleMerit = 1;
  populateAdmin();
  applyFontScales();
  buildScrollTrack();
}
function updateContentPadding() {
  const el = document.getElementById('contentPaddingX');
  const disp = document.getElementById('contentPaddingXVal');
  if(el && disp) {
    const v = parseFloat(el.value);
    disp.textContent = Math.round(v*100)+'%';
    settings.contentPaddingX = v;
    applyContentPadding();
    buildScrollTrack();
  }
}
function applyMusic() {
  audio.loop   = settings.loopMusic;
  audio.volume = settings.volume;

  if (localMusicBlobUrl) {
    // Local file loaded this session — restore src if cleared
    if (!audio.src || audio.src === window.location.href) audio.src = localMusicBlobUrl;
    if (settings.autoPlayMusic && !musicPlaying) {
      audio.play().catch(()=>{});
      musicPlaying = true; updateMusicBtn();
    }
  } else if (settings.musicUrl && !settings.musicUrl.startsWith('(local')) {
    // Always set src so the play button works even when autoPlay is off
    if (!audio.src || audio.src === window.location.href || audio.src !== settings.musicUrl) {
      audio.src = settings.musicUrl;
    }
    if (settings.autoPlayMusic && !musicPlaying) {
      // Browsers block autoplay without user interaction — we try and silently catch
      audio.play().then(() => {
        musicPlaying = true; updateMusicBtn();
      }).catch(() => {
        // Autoplay blocked — user must click the 🎵 button to start
        musicPlaying = false; updateMusicBtn();
      });
    }
  }
}
function toggleMusic() {
  // Restore local blob if src was lost
  if (localMusicBlobUrl && (!audio.src || audio.src === window.location.href)) {
    audio.src = localMusicBlobUrl;
  }
  if (!audio.src || audio.src === window.location.href) {
    alert('Please set a music URL or upload a file in Admin → Settings → Music');
    return;
  }
  if (musicPlaying) {
    audio.pause(); musicPlaying=false;
  } else {
    audio.play().catch(e => alert('Cannot play: ' + e.message));
    musicPlaying=true;
  }
  updateMusicBtn();
}
function updateMusicBtn() {
  document.getElementById('musicBtn').classList.toggle('playing',musicPlaying);
  document.getElementById('musicBtn').textContent=musicPlaying?'🔊':'🎵';
}
function previewMusic() {
  const url=document.getElementById('musicUrl').value.trim();
  if (!url) return;
  audio.src=url; settings.musicUrl=url;
  audio.play().catch(e=>alert('Cannot play: '+e.message));
  musicPlaying=true; updateMusicBtn();
}
function loadMusicFile() {
  const file=document.getElementById('musicFile').files[0];
  if (!file) return;
  // Revoke previous blob to free memory
  if (localMusicBlobUrl) URL.revokeObjectURL(localMusicBlobUrl);
  localMusicBlobUrl = URL.createObjectURL(file);
  audio.src = localMusicBlobUrl;
  audio.loop = document.getElementById('loopMusic')?.checked ?? true;
  audio.volume = parseInt(document.getElementById('volumeSlider')?.value||60)/100;
  settings.musicUrl = '(local:' + file.name + ')';
  document.getElementById('musicUrl').value = '(local file: ' + file.name + ')';
  // Status
  const statusEl = document.getElementById('music-file-status');
  if (statusEl) statusEl.textContent = '✓ "' + file.name + '" loaded. Press 🎵 to play.';
}
function switchTab(id,btn) {
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (btn) btn.classList.add('active');
  if (id === 'tab-slidemanager') { initSlideManagerTab(); buildSectionRowLimitsUI(); }
}

// ---- Google Sheet import ----
async function importFromSheet() {
  const url=document.getElementById('sheetUrl').value.trim();
  const status=document.getElementById('sheet-status');
  if (!url) {status.innerHTML='<div class="status-msg status-err">Please enter a CSV URL</div>';return;}
  status.innerHTML='<div class="status-msg" style="color:var(--text-muted);">Importing…</div>';
  try {
    const resp=await fetch(url);
    if (!resp.ok) throw new Error('HTTP '+resp.status);
    parseCSV(await resp.text());
    saveState(); buildSectionEditors(); buildSectionToggles(); buildScrollTrack();
    const total=SECTIONS.reduce((a,s)=>a+s.entries.length,0);
    status.innerHTML=`<div class="status-msg status-ok">✓ Imported! ${total} entries across ${SECTIONS.filter(s=>s.entries.length).length} sections.</div>`;
  } catch(e) {
    status.innerHTML=`<div class="status-msg status-err">Error: ${e.message}. Make sure the sheet is published as CSV.</div>`;
  }
}

function parseCSV(text) {
  const colS=parseInt(document.getElementById('colSection').value),
        colN=parseInt(document.getElementById('colName').value),
        colM=parseInt(document.getElementById('colMerit').value),
        skip=parseInt(document.getElementById('skipRows').value);
  // Reset default sections; keep custom sections but clear their entries
  SECTIONS.forEach(s=>s.entries=[]);
  text.split('\n').slice(skip).forEach(row=>{
    if (!row.trim()) return;
    const cells=parseCSVRow(row);
    const sHint=(cells[colS]||'').trim();
    const name=(cells[colN]||'').trim();
    const merit=(cells[colM]||'').trim();
    if (!name&&!merit) return;
    let sec=matchSection(sHint);
    if (!sec) {
      // Auto-create section from sheet if title is new
      if (sHint) {
        const newId='sheet_'+btoa(sHint).replace(/[^a-zA-Z0-9]/g,'').slice(0,12);
        sec=SECTIONS.find(s=>s.id===newId);
        if (!sec) {
          sec={id:newId,title:sHint,entries:[],custom:true};
          SECTIONS.push(sec);
          settings.sectionVisibility[newId]=true;
        }
      } else {
        sec=SECTIONS.find(s=>s.id==='s11')||SECTIONS[SECTIONS.length-1];
      }
    }
    sec.entries.push({name,merit});
  });
}

function parseCSVRow(row) {
  const r=[]; let c='',q=false;
  for (const ch of row) {
    if (ch==='"') q=!q;
    else if (ch===','&&!q) {r.push(c);c='';}
    else c+=ch;
  }
  r.push(c);
  return r.map(s=>s.replace(/^"|"$/g,''));
}

function matchSection(hint) {
  if (!hint) return null;
  const h=hint.toLowerCase().trim();
  return SECTIONS.find(s=>
    s.title.toLowerCase()===h||
    s.title.toLowerCase().includes(h)||
    h.includes(s.title.toLowerCase())||
    h===s.id
  );
}

function loadSampleData() {
  SECTIONS.find(s=>s.id==='s1').entries=[
    {name:'සෝමා ජයතිලක',merit:'ඔබට හා ඔබේ පවුලේ සියලු දෙනාට ත්‍රිවිධ රත්නයේ ආශිර්වාදය ලැබේවා'},
    {name:'නිමල් පෙරේරා',merit:'දිව්‍ය සැපය ලැබේවා'},
  ];
  SECTIONS.find(s=>s.id==='s2').entries=[
    {name:'කමල් සිරිවර්ධන',merit:'නිරෝගී දීර්ඝ ආයු ලැබේවා'},
  ];
  SECTIONS.find(s=>s.id==='s12').entries=[
    {name:'සංවිධායක කමිටු සාමාජිකයින්',merit:'ඔබ සැමගේ නිරතුරු දායකත්වයට ශ්‍රේෂ්ඨ පිනක් ලැබේවා'},
  ];
  saveState(); buildSectionEditors(); buildSectionToggles(); buildScrollTrack();
  document.getElementById('sheet-status').innerHTML='<div class="status-msg status-ok">✓ Sample data loaded!</div>';
}

// One-time fix: clear corrupted data where titles were saved as 'undefined'
(function() {
  try {
    const d = localStorage.getItem('poya_data');
    if (d) {
      const saved = JSON.parse(d);
      const hasBad = saved.some(s => !s.title || s.title === 'undefined');
      if (hasBad) {
        // Keep entries but fix titles from DEFAULT_SECTIONS
        const fixed = saved.map(sd => {
          const def = DEFAULT_SECTIONS.find(ds => ds.id === sd.id);
          return { ...sd, title: (sd.title && sd.title !== 'undefined') ? sd.title : (def ? def.title : sd.id) };
        });
        localStorage.setItem('poya_data', JSON.stringify(fixed));
      }
    }
  } catch(e) {}
})();

// Version guard: clear localStorage if built with broken older version
(function() {
  const CURRENT_VERSION = '2.5';
  const stored = localStorage.getItem('poya_app_version');
  if (stored !== CURRENT_VERSION) {
    // Don't clear data — just mark the new version
    localStorage.setItem('poya_app_version', CURRENT_VERSION);
  }
})();

loadState();
applyDisplaySettings();
applyColors();
buildScrollTrack();
applySectionBgImage();
applyFontScales();
applyContentPadding();
applyMusic();
ttsInit();
