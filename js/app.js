// app.js — wires form, destiny engine, rendering and live i18n switching.
(function () {
  "use strict";

  const LOC_FALLBACK = { zh: "故乡", en: "your hometown", es: "tu lugar" };
  let currentLang = "zh";
  let lastResult = null; // { result, inputs }

  const $ = (id) => document.getElementById(id);

  // ---- populate month / day selects ----
  function populateSelects() {
    const dict = I18N[currentLang];
    const monthSel = $("birthMonth");
    for (let m = 1; m <= 12; m++) {
      const o = document.createElement("option");
      o.value = String(m);
      o.textContent = m + " · " + dict.months[m - 1];
      monthSel.appendChild(o);
    }
    const daySel = $("birthDay");
    for (let d = 1; d <= 31; d++) {
      const o = document.createElement("option");
      o.value = String(d);
      o.textContent = String(d);
      daySel.appendChild(o);
    }
  }

  // ---- apply UI text for current language ----
  function applyUI() {
    const dict = I18N[currentLang];
    const ui = dict.ui;
    document.documentElement.lang = currentLang;
    document.title = ui.appTitle;

    $("appTitle").textContent = ui.appTitle;
    $("appSubtitle").textContent = ui.appSubtitle;
    $("disclaimer").textContent = ui.disclaimer;

    $("lblYear").textContent = ui.lblYear;
    $("lblMonth").textContent = ui.lblMonth;
    $("lblDay").textContent = ui.lblDay;
    $("lblTime").textContent = ui.lblTime;
    $("lblDontRemember").textContent = ui.lblDontRemember;
    $("lblLocation").textContent = ui.lblLocation;
    $("birthLocation").placeholder = ui.locationPlaceholder;
    $("lblGender").textContent = ui.lblGender;
    $("lblMale").textContent = ui.lblMale;
    $("lblFemale").textContent = ui.lblFemale;
    $("calcBtn").textContent = ui.calcBtn;
    $("resetBtn").textContent = ui.resetBtn;
    $("footNote").textContent = ui.footNote;

    // language switch active state
    document.querySelectorAll("#langSwitch button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === currentLang);
    });
  }

  // ---- template helpers ----
  function fill(tpl, dict, inputs, age) {
    const loc =
      inputs.location && inputs.location.trim()
        ? inputs.location.trim()
        : LOC_FALLBACK[currentLang];
    const pron = dict.pron[inputs.gender] || "";
    return tpl
      .replace(/\{loc\}/g, loc)
      .replace(/\{pron\}/g, pron)
      .replace(/\{age\}/g, age != null ? dict.ageUnit(age) : "");
  }

  function pick(pool, idx) {
    return pool[idx % pool.length];
  }

  // ---- render results ----
  function render() {
    if (!lastResult) return;
    const dict = I18N[currentLang];
    const ui = dict.ui;
    const { result, inputs } = lastResult;
    const R = result;

    const section = (label, tpl) => {
      const p = document.createElement("div");
      p.className = "section";
      const h = document.createElement("h3");
      h.innerHTML = '<span class="dot"></span>' + label;
      const para = document.createElement("p");
      para.textContent = fill(tpl, dict, inputs, null);
      p.appendChild(h);
      p.appendChild(para);
      return p;
    };

    const root = $("result");
    root.innerHTML = "";
    root.classList.remove("hidden");

    // heading
    const hTitle = document.createElement("h2");
    hTitle.textContent = ui.resultTitle;
    hTitle.style.margin = "0 0 16px";
    root.appendChild(hTitle);

    // overview summary
    const sum = document.createElement("div");
    sum.className = "summary";
    const sTitle = document.createElement("h2");
    sTitle.textContent = ui.summaryTitle;
    sum.appendChild(sTitle);

    const grid = document.createElement("div");
    grid.className = "stat-grid";
    const childVal =
      R.numChildren === 0
        ? ui.childNone
        : R.numChildren;
    const firstChildVal = R.firstChildAge == null ? "—" : dict.ageUnit(R.firstChildAge);
    const stats = [
      [ui.statLifespan, dict.ageUnit(R.lifespan)],
      [ui.statMarriage, dict.ageUnit(R.marriageAge)],
      [ui.statFirstChild, firstChildVal],
      [ui.statChildren, childVal],
      [ui.statDeath, dict.ageUnit(R.deathAge)]
    ];
    stats.forEach(([k, v]) => {
      const s = document.createElement("div");
      s.className = "stat";
      const kk = document.createElement("div");
      kk.className = "k";
      kk.textContent = k;
      const vv = document.createElement("div");
      vv.className = "v";
      vv.textContent = v;
      s.appendChild(kk);
      s.appendChild(vv);
      grid.appendChild(s);
    });
    sum.appendChild(grid);
    root.appendChild(sum);

    // four life stages
    const stagesWrap = document.createElement("div");
    stagesWrap.className = "section";
    const sh = document.createElement("h3");
    sh.innerHTML = '<span class="dot"></span>' + ui.stagesHeading;
    stagesWrap.appendChild(sh);
    stagesWrap.appendChild(section(ui.lblYouth, pick(dict.t.youth, R.idx.youth)));
    stagesWrap.appendChild(section(ui.lblYoung, pick(dict.t.young, R.idx.young)));
    stagesWrap.appendChild(section(ui.lblMiddle, pick(dict.t.middle, R.idx.middle)));
    stagesWrap.appendChild(section(ui.lblOld, pick(dict.t.old, R.idx.old)));
    root.appendChild(stagesWrap);

    // luck section
    const luckWrap = document.createElement("div");
    luckWrap.className = "section";
    const lh = document.createElement("h3");
    lh.innerHTML = '<span class="dot"></span>' + ui.luckHeading;
    luckWrap.appendChild(lh);
    const luckTimeline = document.createElement("div");
    luckTimeline.className = "timeline";
    [0, 1].forEach((i) => {
      const ev = document.createElement("div");
      ev.className = "event luck";
      const badge = document.createElement("span");
      badge.className = "age-badge";
      badge.textContent = ui.lblLuck + " · " + dict.ageUnit(R.luckAges[i]);
      const txt = document.createElement("div");
      txt.textContent = fill(pick(dict.t.luck, R.idx["luck" + (i + 1)]), dict, inputs, R.luckAges[i]);
      ev.appendChild(badge);
      ev.appendChild(txt);
      luckTimeline.appendChild(ev);
    });
    luckWrap.appendChild(luckTimeline);
    root.appendChild(luckWrap);

    // crisis section
    const crisisWrap = document.createElement("div");
    crisisWrap.className = "section";
    const ch = document.createElement("h3");
    ch.innerHTML = '<span class="dot"></span>' + ui.crisisHeading;
    crisisWrap.appendChild(ch);
    const criTimeline = document.createElement("div");
    criTimeline.className = "timeline";
    [0, 1].forEach((i) => {
      const ev = document.createElement("div");
      ev.className = "event crisis";
      const badge = document.createElement("span");
      badge.className = "age-badge";
      badge.textContent = ui.lblCrisis + " · " + dict.ageUnit(R.crisisAges[i]);
      const txt = document.createElement("div");
      txt.textContent = fill(pick(dict.t.crisis, R.idx["crisis" + (i + 1)]), dict, inputs, R.crisisAges[i]);
      const adv = document.createElement("div");
      adv.className = "advice";
      adv.textContent = fill(pick(dict.t.advice, R.idx["advice" + (i + 1)]), dict, inputs, R.crisisAges[i]);
      ev.appendChild(badge);
      ev.appendChild(txt);
      ev.appendChild(adv);
      criTimeline.appendChild(ev);
    });
    crisisWrap.appendChild(criTimeline);
    root.appendChild(crisisWrap);

    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---- read form ----
  function readInputs() {
    const year = parseInt($("birthYear").value, 10);
    const month = parseInt($("birthMonth").value, 10);
    const day = parseInt($("birthDay").value, 10);
    const rememberTime = !$("dontRemember").checked;
    const time = rememberTime ? $("birthTime").value || null : null;
    const location = $("birthLocation").value || "";
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : null;
    return { year, month, day, rememberTime, time, location, gender };
  }

  function missingFields(inp) {
    const m = [];
    if (!inp.year || inp.year < 1900 || inp.year > 2026) m.push("year");
    if (!inp.month) m.push("month");
    if (!inp.day) m.push("day");
    if (!inp.gender) m.push("gender");
    return m;
  }

  function clearInvalid() {
    document.querySelectorAll(".invalid").forEach((e) => e.classList.remove("invalid"));
  }

  function highlightMissing(missing) {
    clearInvalid();
    const map = { year: "birthYear", month: "birthMonth", day: "birthDay" };
    missing.forEach((k) => {
      if (k === "gender") {
        const row = document.querySelector(".radio-row");
        if (row) row.classList.add("invalid");
      } else if (map[k]) {
        const el = $(map[k]);
        if (el) el.classList.add("invalid");
      }
    });
  }

  // ---- events ----
  function bind() {
    document.querySelectorAll("#langSwitch button").forEach((b) => {
      b.addEventListener("click", () => {
        currentLang = b.dataset.lang;
        applyUI();
        render(); // re-render last result in new language
      });
    });

    $("dontRemember").addEventListener("change", (e) => {
      $("birthTime").disabled = e.target.checked;
      if (e.target.checked) $("birthTime").value = "";
    });

    $("destinyForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const inp = readInputs();
      const missing = missingFields(inp);
      if (missing.length) {
        const dict = I18N[currentLang].ui;
        const names = missing.map((k) => dict["req" + k[0].toUpperCase() + k.slice(1)]);
        const sep = { zh: "、", en: ", ", es: ", " }[currentLang];
        $("formError").textContent = dict.formErrorTpl.replace("{fields}", names.join(sep));
        highlightMissing(missing);
        return;
      }
      clearInvalid();
      $("formError").textContent = "";
      const result = compute(inp);
      lastResult = { result, inputs: inp };
      render();
    });

    $("destinyForm").addEventListener("input", clearInvalid);
    $("destinyForm").addEventListener("reset", () => {
      lastResult = null;
      clearInvalid();
      $("result").classList.add("hidden");
      $("result").innerHTML = "";
      $("formError").textContent = "";
      $("birthTime").disabled = false;
    });
  }

  // ---- init ----
  populateSelects();
  applyUI();
  bind();
})();
