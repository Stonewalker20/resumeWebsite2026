(function(){
  const root = document.documentElement;

  // Theme persistence
  const saved = localStorage.getItem("theme");
  if(saved){ root.setAttribute("data-theme", saved); }

  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    themeBtn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme") || "day";
      const next = (cur === "night") ? "day" : "night";
      if(next === "day") root.removeAttribute("data-theme");
      else root.setAttribute("data-theme","night");
      localStorage.setItem("theme", next);
      themeBtn.setAttribute("aria-pressed", next === "night" ? "true" : "false");
    });
  }

  // Copy email helper
  const copyBtn = document.getElementById("copyEmail");
  if(copyBtn){
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.getAttribute("data-email");
      try{
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = "Copied ✔";
        setTimeout(()=> copyBtn.textContent = "Copy Email", 1200);
      }catch(e){
        window.location.href = "mailto:" + email;
      }
    });
  }

  // Tabs
  document.querySelectorAll("[data-tabs]").forEach(tabsEl=>{
    const tabs = Array.from(tabsEl.querySelectorAll("[role='tab']"));
    const panes = Array.from(document.querySelectorAll(tabsEl.getAttribute("data-tabs-target")));

    function activate(id){
      tabs.forEach(t=>{
        const selected = (t.getAttribute("aria-controls") === id);
        t.setAttribute("aria-selected", selected ? "true":"false");
      });
      panes.forEach(p=>{
        p.classList.toggle("active", p.id === id);
      });
    }

    tabs.forEach(t=>{
      t.addEventListener("click", ()=> activate(t.getAttribute("aria-controls")));
      t.addEventListener("keydown", (e)=>{
        const idx = tabs.indexOf(t);
        if(e.key === "ArrowRight"){ tabs[(idx+1)%tabs.length].focus(); }
        if(e.key === "ArrowLeft"){ tabs[(idx-1+tabs.length)%tabs.length].focus(); }
      });
    });

    // Default first tab
    if(tabs.length) activate(tabs[0].getAttribute("aria-controls"));
  });

  // Keyboard shortcuts (g = GitHub, r = Resume)
  window.addEventListener("keydown",(e)=>{
    if(e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
    if(e.key.toLowerCase() === "r"){
      const a = document.querySelector("a[href$='Resume.pdf']");
      if(a) a.click();
    }
    if(e.key.toLowerCase() === "g"){
      const gh = document.querySelector("a[data-link='github']");
      if(gh) gh.click();
    }
  });
})();


/* =========================
   KMEANS_DEMO + ADE + TS  (KMEANS_DEMO)
   ========================= */
(function(){
  const adeInput = document.getElementById("adeInput");
  const adeOut = document.getElementById("adeOutput");
  const adeRun = document.getElementById("adeRun");
  const adeKeywords = ["dizzy","dizziness","nausea","nauseous","headache","rash","fatigue","vomiting","cramps","itching"];

  function escapeHtml(s){
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }
  function highlight(text){
    const safe = escapeHtml(text);
    const re = new RegExp("\\b(" + adeKeywords.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|") + ")\\b","gi");
    return safe.replace(re, (m)=> `<span style="border: var(--line); background: rgba(215,180,76,.22); padding: 1px 4px; box-shadow: var(--shadow2); font-family: var(--mono); text-transform: uppercase;">${m}</span>`);
  }
  function runADE(){
    if(!adeInput || !adeOut) return;
    const t = adeInput.value.trim();
    adeOut.innerHTML = t ? highlight(t) : "<span class='muted'>Type something above, then hit Highlight.</span>";
  }
  if(adeRun){ adeRun.addEventListener("click", runADE); }
  if(adeInput){ adeInput.addEventListener("keydown",(e)=>{ if(e.key==="Enter" && (e.metaKey || e.ctrlKey)) runADE(); }); }

  const canvas = document.getElementById("kmCanvas");
  const kmRun = document.getElementById("kmRun");
  const kmRegen = document.getElementById("kmRegen");
  const kmK = document.getElementById("kmK");
  const kmKVal = document.getElementById("kmKVal");
  const kmSeed = document.getElementById("kmSeed");

  function mulberry32(a){
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }

  let points = [];
  function regenPoints(seed){
    if(!canvas) return;
    const rng = mulberry32(seed|0);
    const w = canvas.width, h = canvas.height;
    points = [];
    const centers = [
      {x:w*0.25,y:h*0.35},
      {x:w*0.70,y:h*0.40},
      {x:w*0.50,y:h*0.75}
    ];
    for(let i=0;i<180;i++){
      const c = centers[Math.floor(rng()*centers.length)];
      const dx = (rng()-0.5) * 110;
      const dy = (rng()-0.5) * 90;
      points.push({x: c.x+dx, y: c.y+dy, a:0});
    }
  }

  function kmeans(k, seed){
    const rng = mulberry32(seed|0);
    const centroids = [];
    for(let i=0;i<k;i++){
      const p = points[Math.floor(rng()*points.length)];
      centroids.push({x:p.x, y:p.y});
    }
    function assign(){
      for(const p of points){
        let best = 0, bestd = Infinity;
        for(let i=0;i<k;i++){
          const dx = p.x-centroids[i].x, dy = p.y-centroids[i].y;
          const d = dx*dx+dy*dy;
          if(d<bestd){bestd=d; best=i;}
        }
        p.a = best;
      }
    }
    function update(){
      const sx = Array(k).fill(0), sy = Array(k).fill(0), ct = Array(k).fill(0);
      for(const p of points){ sx[p.a]+=p.x; sy[p.a]+=p.y; ct[p.a]++; }
      for(let i=0;i<k;i++){
        if(ct[i]===0) continue;
        centroids[i].x = sx[i]/ct[i];
        centroids[i].y = sy[i]/ct[i];
      }
    }
    for(let it=0; it<12; it++){ assign(); update(); }
    return centroids;
  }

  function draw(centroids){
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0,0,w,h);
    const colors = ["#2f5e3b","#b0784b","#d7b44c","#6f8b5b","#5a3f2b","#b9c77f"];
    for(const p of points){
      const c = colors[p.a % colors.length];
      ctx.fillStyle = c;
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.2, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    for(let i=0;i<centroids.length;i++){
      const c = colors[i % colors.length];
      ctx.strokeStyle = "#12110f";
      ctx.fillStyle = c;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.rect(centroids[i].x-6, centroids[i].y-6, 12, 12);
      ctx.fill();
      ctx.stroke();
    }
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = "#12110f";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5,0.5,w-1,h-1);
  }

  function runKM(){
    if(!canvas) return;
    const k = parseInt(kmK?.value || "3",10);
    const seed = parseInt(kmSeed?.value || "7",10);
    if(kmKVal) kmKVal.textContent = String(k);
    const centroids = kmeans(k, seed);
    draw(centroids);
  }

  if(canvas){
    const seed = parseInt(kmSeed?.value || "7",10);
    regenPoints(seed);
    runKM();
  }
  if(kmK){ kmK.addEventListener("input", ()=>{ if(kmKVal) kmKVal.textContent = kmK.value; runKM(); }); }
  if(kmRun){ kmRun.addEventListener("click", runKM); }
  if(kmRegen){
    kmRegen.addEventListener("click", ()=>{
      const seed = parseInt(kmSeed?.value || "7",10);
      regenPoints(seed);
      runKM();
    });
  }
  if(kmSeed){
    kmSeed.addEventListener("change", ()=>{
      const seed = parseInt(kmSeed.value || "7",10);
      regenPoints(seed);
      runKM();
    });
  }

  const tsSvg = document.getElementById("tsSvg");
  const tsRun = document.getElementById("tsRun");
  const tsWin = document.getElementById("tsWin");
  const tsWinVal = document.getElementById("tsWinVal");

  function movingAvg(arr, w){
    const out = [];
    let s = 0;
    for(let i=0;i<arr.length;i++){
      s += arr[i];
      if(i>=w) s -= arr[i-w];
      out.push(s / Math.min(i+1, w));
    }
    return out;
  }
  function toPath(arr, w, h, pad=18){
    const n = arr.length;
    const min = Math.min(...arr), max = Math.max(...arr);
    const sx = (w-2*pad)/(n-1);
    const sy = (h-2*pad)/((max-min) || 1);
    let d = "";
    for(let i=0;i<n;i++){
      const x = pad + i*sx;
      const y = h - pad - (arr[i]-min)*sy;
      d += (i===0 ? "M":"L") + x.toFixed(2) + " " + y.toFixed(2) + " ";
    }
    return d.trim();
  }
  function drawTS(){
    if(!tsSvg) return;
    const w = 900, h = 260;
    const win = parseInt(tsWin?.value || "6",10);
    if(tsWinVal) tsWinVal.textContent = String(win);

    const seed = Date.now() & 0xffffffff;
    const rng = mulberry32(seed);
    const arr = [];
    let v = 0;
    for(let i=0;i<90;i++){
      v += (rng()-0.5)*0.35;
      const trend = Math.sin(i/10)*1.2;
      arr.push(v + trend + (rng()-0.5)*0.8);
    }
    const smooth = movingAvg(arr, win);

    const rawPath = toPath(arr, w, h);
    const smPath  = toPath(smooth, w, h);

    tsSvg.innerHTML = `
      <path d="${rawPath}" stroke="#5a3f2b" stroke-width="3" fill="none" opacity=".55" />
      <path d="${smPath}" stroke="#2f5e3b" stroke-width="4" fill="none" opacity=".95" />
      <g opacity=".28" stroke="#12110f">
        ${Array.from({length:6}).map((_,i)=>`<line x1="${18}" y1="${18+i*44}" x2="${w-18}" y2="${18+i*44}" />`).join("")}
      </g>
      <text x="22" y="28" font-family="var(--mono)" font-size="14" fill="rgba(18,17,15,.75)">raw (soil) vs smooth (moss)</text>
    `;
  }
  if(tsSvg){ drawTS(); }
  if(tsRun){ tsRun.addEventListener("click", drawTS); }
  if(tsWin){ tsWin.addEventListener("input", ()=>{ if(tsWinVal) tsWinVal.textContent = tsWin.value; drawTS(); }); }
})();


/* =========================
   REVEAL_OBSERVER + TOPO_PARALLAX  (REVEAL_OBSERVER)
   ========================= */
(function(){
  // Scroll reveal
  const els = Array.from(document.querySelectorAll(".reveal"));
  if(els.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    const io = new IntersectionObserver((entries)=>{
      for(const e of entries){
        if(e.isIntersecting){
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    }, {threshold: 0.12});
    els.forEach(el=>io.observe(el));
  }else{
    els.forEach(el=>el.classList.add("is-in"));
  }

  // Subtle topo parallax (mouse)
  const topo = document.querySelector(".topo");
  if(topo && !window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove",(e)=>{
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      tx = x * 10;
      ty = y * 8;
    }, {passive:true});

    function tick(){
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      topo.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(tick);
    }
    tick();
  }
})();


/* =========================
   CASE_STUDY_DRAWER  (CASE_STUDY_DRAWER)
   ========================= */
(function(){
  const drawer = document.getElementById("caseDrawer");
  if(!drawer) return;

  const title = document.getElementById("drawerTitle");
  const kicker = document.getElementById("drawerKicker");
  const problem = document.getElementById("drawerProblem");
  const role = document.getElementById("drawerRole");
  const learned = document.getElementById("drawerLearned");
  const approach = document.getElementById("drawerApproach");
  const tools = document.getElementById("drawerTools");
  const link = document.getElementById("drawerLink");

  const DATA = {
    ade: {
      kicker: "NLP • Human-centered signal",
      title: "ADE Detection (NLP)",
      problem: "Real-world text is messy. The challenge was turning noisy posts and notes into clean, consistent labels without losing meaning.",
      approach: [
        "Normalize and clean text (URLs, emojis, casing) without flattening important context.",
        "Train/evaluate sequence tagging models and compare against lighter baselines for speed.",
        "Use clear metrics and error checks to avoid “pretty” numbers that hide failures."
      ],
      role: "I owned the end-to-end pipeline: data prep, modeling, evaluation, and reporting. I focused on repeatable runs and readable outputs.",
      tools: ["Python","PyTorch / Transformers","Pandas","Sklearn","Jupyter"],
      learned: "Small decisions in preprocessing and labeling rules have a huge effect. If the pipeline isn’t stable and explainable, results don’t travel."
    },
    stock: {
      kicker: "Data engineering • Reliability",
      title: "Algorithmic Trading Data Pipeline",
      problem: "I needed a system that could ingest lots of tickers, keep historical data organized, and update safely without corrupting files.",
      approach: [
        "Store data per ticker with consistent columns and strong validation.",
        "Compute indicators (SMA/EMA/RSI/MACD/ATR) and append only new rows.",
        "Add defensive checks (existing sheets, date parsing, corruption handling)."
      ],
      role: "Built the pipeline and the guardrails: update logic, indicator computation, and file safety so the backtest workflow stays dependable.",
      tools: ["Python","Pandas","OpenPyXL","APIs (market data)","Backtesting"],
      learned: "Automation is only useful when it’s safe. A little paranoia (checks + logging) saves you from losing weeks of work."
    },
    ops: {
      kicker: "Hands-on • Systems thinking",
      title: "Facilities / HVAC + Electrical Troubleshooting",
      problem: "When building systems misbehave, you need a calm process: diagnose fast, keep people safe, and restore reliable operation.",
      approach: [
        "Start with symptoms → isolate the subsystem → verify with measurements.",
        "Stabilize first (safe operation), then fix root causes.",
        "Document what happened so it’s easier the next time."
      ],
      role: "On-site troubleshooting, repairs, and preventative work across HVAC/electrical systems, plus documenting issues and improvements.",
      tools: ["Electrical test tools","BAS / automation","HVAC equipment","Preventative maintenance"],
      learned: "A good fix doesn’t just work today — it prevents the same failure from showing up next month."
    },
    dl: {
      kicker: "Deep learning • Efficiency",
      title: "Deep Learning Compression",
      problem: "Models can be accurate and still be unusable on real hardware. The goal was to reduce size/latency while keeping performance stable.",
      approach: [
        "Compare pruning, distillation, and quantization under consistent settings.",
        "Run ablations to understand what actually moves the needle.",
        "Benchmark latency to keep the work grounded in reality."
      ],
      role: "Implemented compression methods, ran controlled experiments, and wrote up results in a clean, reviewable format.",
      tools: ["PyTorch","CNNs","Quantization","Ablation studies","Latency tests"],
      learned: "Compression isn’t one trick — it’s trade-offs. The best solution depends on constraints, not ego."
    },
    cars: {
      kicker: "Hands-on • Diagnosis",
      title: "Cars: Diagnosis & Repair",
      problem: "A car rarely fails in a clean way. The challenge is separating symptoms from causes and fixing the right thing the first time.",
      approach: [
        "Start with the basics and verify assumptions (air/fuel/spark, sensors, mechanical).",
        "Use evidence: listen, inspect, measure, and confirm before swapping parts.",
        "After the fix, test in real conditions and note what changed."
      ],
      role: "Hands-on troubleshooting and repair. I treat it like engineering: be patient, be methodical, and learn from every failure mode.",
      tools: ["Diagnostic mindset","Basic test tools","Manuals/notes","Patience"],
      learned: "The fastest fix is usually the one that’s measured. Guessing costs time."
    },
    edge: {
      kicker: "Edge AI • Systems",
      title: "Edge / FPGA ideas",
      problem: "Some decisions need to happen close to the sensor. The challenge is balancing compute, latency, and reliability when resources are tight.",
      approach: [
        "Design around constraints first (latency, power, bandwidth).",
        "Push the right parts of the pipeline to the edge and keep the system debuggable.",
        "Prototype quickly and validate with real timing measurements."
      ],
      role: "Exploration and design thinking: what should run where, and why. I like building the bridge between hardware reality and ML ambition.",
      tools: ["Edge AI","Optimization mindset","Hardware awareness","Profiling"],
      learned: "Constraints aren’t a limitation — they’re the design spec."
    }
  };

  function setTools(list){
    tools.innerHTML = "";
    list.forEach(t=>{
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = t;
      tools.appendChild(span);
    });
  }
  function setApproach(list){
    approach.innerHTML = "";
    list.forEach(a=>{
      const li = document.createElement("li");
      li.textContent = a;
      approach.appendChild(li);
    });
  }

  let lastFocus = null;
  function openDrawer(key){
    const d = DATA[key];
    if(!d) return;
    lastFocus = document.activeElement;

    kicker.textContent = d.kicker;
    title.textContent = d.title;
    problem.textContent = d.problem;
    role.textContent = d.role;
    learned.textContent = d.learned;
    setApproach(d.approach);
    setTools(d.tools);

    // link: keep user in flow
    link.setAttribute("href", key === "ade" ? "#demos" : "#demos");

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";

    // focus close button
    const closeBtn = drawer.querySelector('[data-drawer-close]');
    if(closeBtn) closeBtn.focus();
  }

  function closeDrawer(){
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }

  drawer.addEventListener("click",(e)=>{
    const t = e.target;
    if(t && t.hasAttribute && t.hasAttribute("data-drawer-close")) closeDrawer();
  });
  window.addEventListener("keydown",(e)=>{
    if(e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  document.querySelectorAll(".case-card").forEach(btn=>{
    btn.addEventListener("click", ()=> openDrawer(btn.getAttribute("data-case")));
    btn.addEventListener("keydown",(e)=>{
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openDrawer(btn.getAttribute("data-case"));
      }
    });
  });
})();


/* =========================
   CURSOR_GLOW  (CURSOR_GLOW)
   ========================= */
(function(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  let x = window.innerWidth * 0.4, y = window.innerHeight * 0.35;
  let tx = x, ty = y;

  window.addEventListener("mousemove",(e)=>{
    tx = e.clientX; ty = e.clientY;
  }, {passive:true});

  function tick(){
    x += (tx - x) * 0.10;
    y += (ty - y) * 0.10;
    glow.style.left = x + "px";
    glow.style.top  = y + "px";
    requestAnimationFrame(tick);
  }
  tick();
})();


/* --- Case study drawer + engineer-grade demos (site) --- */
(function(){
  const CASES = {
    ade: {
      kicker: "Case study • NLP",
      title: "ADE Detection (NLP) — Cross-domain sequence tagging",
      problem: "Unstructured text contains noisy, inconsistent mentions of adverse drug events. Cross-domain generalization is hard because label schemes, tokenization, and writing style differ across sources.",
      approach: [
        "Standardized preprocessing: normalization, URL/emoji removal, and consistent token handling",
        "Aligned token-level labels across datasets (label harmonization + token alignment)",
        "Compared transformer-based tagging with classical sequence models and inspected error patterns",
        "Validated results with per-class metrics and targeted error analysis (confusions, boundary errors)"
      ],
      role: "Owned the end-to-end pipeline: dataset preparation, labeling alignment, training/evaluation loops, and error analysis write-up.",
      tools: ["Python","PyTorch","Transformers","CRF","Pandas","NumPy"],
      learned: "Most performance regressions were data-contract issues (token alignment, label drift). Building explicit checks and repeatable preprocessing improved stability and made evaluation defensible.",
      link: "Cordell_Stonecipher_Resume.pdf"
    },
    stock: {
      kicker: "Case study • Data Engineering",
      title: "Algorithmic Trading Data Pipeline — Incremental updates with guardrails",
      problem: "Large-scale time series ingestion can silently corrupt downstream modeling if updates overwrite or misalign dates, columns, or indicators.",
      approach: [
        "Implemented safe incremental updates (append-only by date)",
        "Added validation checks (schema, monotonic dates, duplicates) before writing",
        "Separated long-horizon backtesting data from current-year live-calculation data",
        "Computed indicators over defined windows to keep calculations consistent"
      ],
      role: "Designed the update logic, validation checks, and file-structure strategy for maintainable long-running data collection.",
      tools: ["Python","Pandas","OpenPyXL","Validation","Automation"],
      learned: "Reliability came from guardrails: schema checks, idempotent writes, and clear separation of concerns. One good run isn’t enough—pipelines must stay correct over time.",
      link: "Cordell_Stonecipher_Resume.pdf"
    },
    dl: {
      kicker: "Case study • Deep Learning",
      title: "CNN Compression — Accuracy/latency trade-offs with ablations",
      problem: "Edge settings often require faster inference and smaller models. Compression methods can degrade accuracy unless comparisons are controlled and evaluated consistently.",
      approach: [
        "Implemented pruning, distillation, and quantization paths",
        "Ran controlled comparisons with ablations and consistent evaluation",
        "Benchmarked runtime/latency behavior and documented trade-offs",
        "Prioritized interpretability in reporting (what changed, why it changed)"
      ],
      role: "Implemented compression methods, designed comparisons, and wrote the evaluation narrative.",
      tools: ["PyTorch","CNN","Ablations","Benchmarking"],
      learned: "Compression is an engineering decision: accuracy alone isn’t the metric. Stable evaluation and honest trade-off reporting is what makes results usable.",
      link: "Cordell_Stonecipher_Resume.pdf"
    },
    ops: {
      kicker: "Case study • Reliability",
      title: "Facilities / Controls — Root-cause troubleshooting with sensor trends",
      problem: "Operational systems fail in messy ways. Symptoms shift, constraints are real (time, safety), and fixes must survive handoff.",
      approach: [
        "Used BAS/controls data trends to identify anomalies and root causes",
        "Applied systematic troubleshooting (isolate subsystems, test hypotheses)",
        "Documented changes and recommendations for reliability over time"
      ],
      role: "Hands-on troubleshooting and reliability improvements across HVAC/electrical systems with a data-driven approach.",
      tools: ["BAS/Controls","Diagnostics","Documentation","Safety"],
      learned: "The most valuable fixes are safe, repeatable, and documented. This mindset transfers directly to ML systems reliability.",
      link: "Cordell_Stonecipher_Resume.pdf"
    }
  };

  function openDrawer(key){
    const d = document.getElementById("caseDrawer");
    if(!d) return;
    const c = CASES[key];
    if(!c) return;
    const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
    set("drawerKicker", c.kicker);
    set("drawerTitle", c.title);
    set("drawerProblem", c.problem);
    set("drawerRole", c.role);
    set("drawerLearned", c.learned);

    const ul = document.getElementById("drawerApproach");
    if(ul){
      ul.innerHTML = "";
      c.approach.forEach(x=>{
        const li = document.createElement("li");
        li.textContent = x;
        ul.appendChild(li);
      });
    }
    const tools = document.getElementById("drawerTools");
    if(tools){
      tools.innerHTML = "";
      c.tools.forEach(t=>{
        const s = document.createElement("span");
        s.className = "chip";
        s.textContent = t;
        tools.appendChild(s);
      });
    }
    const link = document.getElementById("drawerLink");
    if(link){ link.href = c.link || "#"; link.style.display = c.link ? "inline-flex" : "none"; }
    d.style.display = "block";
    d.scrollIntoView({behavior:"smooth", block:"start"});
  }

  // Case-card click binding (robust)
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest && e.target.closest(".case-card");
    if(!btn) return;
    const key = btn.getAttribute("data-case");
    if(key) openDrawer(key);
  });

  // Keyboard shortcuts handled globally in the main header script.

  // Engineer-grade ADE demo: show preprocessing steps and highlight
  const adeInput = document.getElementById("adeInput");
  const adeRun = document.getElementById("adeRun");
  const adeOut = document.getElementById("adeOutput");
  if(adeRun && adeInput && adeOut){
    const keywords = ["nausea","vomiting","rash","hives","dizziness","headache","insomnia","fatigue","anxiety","pain","bleeding","swelling","itching","shortness of breath","palpitations"];
    function normalize(text){
      return text
        .replace(/https?:\/\/\S+/g,"")
        .replace(/[^\w\s'-]/g," ")
        .replace(/\s+/g," ")
        .trim()
        .toLowerCase();
    }
    adeRun.addEventListener("click", ()=>{
      const raw = adeInput.value || "";
      const norm = normalize(raw);
      let marked = raw;
      // basic phrase match in raw (case-insensitive)
      const hits = [];
      keywords.forEach(k=>{
        const re = new RegExp("\\b"+k.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")+"\\b","ig");
        if(re.test(raw)){
          hits.push(k);
          marked = marked.replace(re, (m)=>`<mark style="background:rgba(133,255,190,.18); color:var(--ink); border:1px solid rgba(133,255,190,.28); padding:0 4px; border-radius:8px">${m}</mark>`);
        }
      });
      adeOut.innerHTML = `
        <div class="kicker">Pipeline view</div>
        <div class="grid auto" style="margin-top:10px">
          <div class="cell tight round"><b>Normalized</b><div class="muted" style="margin-top:6px">${norm || "<span class='muted'>(empty)</span>"}</div></div>
          <div class="cell tight round"><b>Signals</b><div class="muted" style="margin-top:6px">${hits.length ? hits.join(", ") : "none detected"}</div></div>
        </div>
        <div class="hr"></div>
        <div class="kicker">Highlighted text</div>
        <div style="margin-top:8px; line-height:1.7">${marked.replace(/\n/g,"<br/>") || "<span class='muted'>(type a sentence above)</span>"}</div>
      `;
    });
  }

})();


/* --- Hire-ready demo controller --- */
(function(){
  // Demo tab switching
  const tabs = Array.from(document.querySelectorAll(".demo-tab"));
  const panels = Array.from(document.querySelectorAll(".demo-panel"));
  if(tabs.length && panels.length){
    tabs.forEach(t=>{
      t.addEventListener("click", ()=>{
        const key = t.getAttribute("data-demo");
        tabs.forEach(x=>x.classList.toggle("active", x===t));
        panels.forEach(p=>p.classList.toggle("active", p.getAttribute("data-demo-panel")===key));
      });
    });
  }

  // Eval sub-tabs
  const miniTabs = Array.from(document.querySelectorAll(".mini-tab"));
  const evalPanels = Array.from(document.querySelectorAll(".eval-mode"));
  if(miniTabs.length && evalPanels.length){
    miniTabs.forEach(t=>{
      t.addEventListener("click", ()=>{
        const key = t.getAttribute("data-eval-mode");
        miniTabs.forEach(x=>x.classList.toggle("active", x===t));
        evalPanels.forEach(p=>{
          const is = p.getAttribute("data-eval-panel")===key;
          p.style.display = is ? "block" : "none";
          p.classList.toggle("active", is);
        });
      });
    });
  }

  // Utilities
  const clamp = (x,a,b)=>Math.max(a,Math.min(b,x));
  const mean = (arr)=>arr.reduce((s,x)=>s+x,0)/Math.max(1,arr.length);
  const std = (arr)=>{
    const m = mean(arr);
    return Math.sqrt(mean(arr.map(x=>(x-m)*(x-m))) || 0);
  };

  // SVG plot helper (simple)
  function svgPlotLines(svg, series, opts={}){
    if(!svg) return;
    const w = 900, h = (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.height) ? svg.viewBox.baseVal.height : 240;
    svg.innerHTML = "";
    const pad = 28;
    const all = series.flatMap(s=>s.y);
    const xMax = Math.max(...series.flatMap(s=>s.x));
    const xMin = Math.min(...series.flatMap(s=>s.x));
    const yMax = Math.max(...all);
    const yMin = Math.min(...all);
    const sx = (x)=> pad + ( (x - xMin) / Math.max(1e-9,(xMax-xMin)) ) * (w-2*pad);
    const sy = (y)=> h-pad - ( (y - yMin) / Math.max(1e-9,(yMax-yMin)) ) * (h-2*pad);

    // grid
    for(let i=0;i<5;i++){
      const y = pad + i*(h-2*pad)/4;
      const l = document.createElementNS("http://www.w3.org/2000/svg","line");
      l.setAttribute("x1", pad); l.setAttribute("x2", w-pad);
      l.setAttribute("y1", y); l.setAttribute("y2", y);
      l.setAttribute("stroke", "rgba(192,255,206,.10)");
      svg.appendChild(l);
    }

    series.forEach((s, idx)=>{
      const path = document.createElementNS("http://www.w3.org/2000/svg","path");
      let d = "";
      s.x.forEach((x,i)=>{
        d += (i===0 ? "M":"L") + sx(x) + "," + sy(s.y[i]) + " ";
      });
      path.setAttribute("d", d.trim());
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", idx===0 ? "rgba(133,255,190,.92)" : "rgba(96,220,255,.90)");
      path.setAttribute("stroke-width", "2.6");
      svg.appendChild(path);
    });
  }

  // --- KMeans: generate points + run + inertia sweep
  function seededRand(seed){
    let s = (seed>>>0) + 0x9e3779b9;
    return function(){
      s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
      return ((s>>>0) / 4294967296);
    }
  }
  function genBlobs(n, seed){
    const r = seededRand(seed);
    const centers = [
      {x: 0.25, y: 0.35},
      {x: 0.68, y: 0.28},
      {x: 0.55, y: 0.72},
      {x: 0.32, y: 0.72},
    ];
    const pts = [];
    for(let i=0;i<n;i++){
      const c = centers[Math.floor(r()*centers.length)];
      // Box-Muller-ish
      const u = Math.max(1e-9, r()); const v = Math.max(1e-9, r());
      const z = Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);
      const u2 = Math.max(1e-9, r()); const v2 = Math.max(1e-9, r());
      const z2 = Math.sqrt(-2*Math.log(u2))*Math.sin(2*Math.PI*v2);
      pts.push({x: c.x + z*0.07, y: c.y + z2*0.07});
    }
    return pts.map(p=>({x: clamp(p.x,0.02,0.98), y: clamp(p.y,0.02,0.98)}));
  }
  function kmeans(points, k, seed, iters=20){
    const r = seededRand(seed);
    const cent = [];
    for(let i=0;i<k;i++){
      const p = points[Math.floor(r()*points.length)];
      cent.push({x:p.x,y:p.y});
    }
    let assign = new Array(points.length).fill(0);
    for(let t=0;t<iters;t++){
      // assign
      for(let i=0;i<points.length;i++){
        let best=0, bd=1e9;
        for(let j=0;j<k;j++){
          const dx=points[i].x-cent[j].x, dy=points[i].y-cent[j].y;
          const d=dx*dx+dy*dy;
          if(d<bd){bd=d;best=j;}
        }
        assign[i]=best;
      }
      // update
      const sx=new Array(k).fill(0), sy=new Array(k).fill(0), cnt=new Array(k).fill(0);
      for(let i=0;i<points.length;i++){
        const a=assign[i]; sx[a]+=points[i].x; sy[a]+=points[i].y; cnt[a]++;
      }
      for(let j=0;j<k;j++){
        if(cnt[j]>0){ cent[j].x=sx[j]/cnt[j]; cent[j].y=sy[j]/cnt[j]; }
      }
    }
    let inertia=0;
    for(let i=0;i<points.length;i++){
      const c=cent[assign[i]];
      const dx=points[i].x-c.x, dy=points[i].y-c.y;
      inertia += dx*dx+dy*dy;
    }
    return {centroids:cent, assign, inertia};
  }
  function drawKMeans(canvas, points, assign, centroids){
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    const w=canvas.width, h=canvas.height;
    ctx.clearRect(0,0,w,h);
    // background subtle
    ctx.fillStyle="rgba(10,14,16,.60)";
    ctx.fillRect(0,0,w,h);
    const colors = [
      "rgba(133,255,190,.9)",
      "rgba(96,220,255,.9)",
      "rgba(201,255,123,.9)",
      "rgba(255,206,110,.9)",
      "rgba(255,140,210,.9)",
      "rgba(180,140,255,.9)",
      "rgba(255,110,110,.9)",
      "rgba(110,255,230,.9)",
    ];
    // points
    for(let i=0;i<points.length;i++){
      const a = assign ? assign[i] : 0;
      const x = points[i].x*w, y = points[i].y*h;
      ctx.beginPath();
      ctx.fillStyle = colors[a % colors.length];
      ctx.globalAlpha = 0.8;
      ctx.arc(x,y,3.6,0,Math.PI*2);
      ctx.fill();
    }
    ctx.globalAlpha=1;
    // centroids
    if(centroids){
      centroids.forEach((c, j)=>{
        const x=c.x*w, y=c.y*h;
        ctx.beginPath();
        ctx.strokeStyle = colors[j % colors.length];
        ctx.lineWidth = 3;
        ctx.rect(x-7,y-7,14,14);
        ctx.stroke();
      });
    }
  }

  let KM_POINTS = null;
  function kmRefresh(){
    const nEl = document.getElementById("kmN");
    const seedEl = document.getElementById("kmSeed");
    const n = clamp(parseInt(nEl?.value||"160",10),60,600);
    const seed = parseInt(seedEl?.value||"7",10) || 7;
    KM_POINTS = genBlobs(n, seed*17+3);
    drawKMeans(document.getElementById("kmCanvas"), KM_POINTS, KM_POINTS.map(_=>0), null);
    const s = document.getElementById("kmSummary");
    if(s) s.textContent = "Regenerated points. Click Run to cluster and compute inertia.";
    const svg = document.getElementById("kmInertiaSvg");
    if(svg) svg.innerHTML = "";
  }
  function kmRun(){
    if(!KM_POINTS) kmRefresh();
    const k = parseInt(document.getElementById("kmK")?.value||"3",10);
    const seed = parseInt(document.getElementById("kmSeed")?.value||"7",10) || 7;
    const res = kmeans(KM_POINTS, k, seed, 24);
    drawKMeans(document.getElementById("kmCanvas"), KM_POINTS, res.assign, res.centroids);
    const s = document.getElementById("kmSummary");
    if(s){
      s.innerHTML = `<div class="kicker">Run metrics</div>
        <div class="grid auto" style="margin-top:10px">
          <div class="cell tight round"><b>Inertia</b><div class="muted" style="margin-top:6px">${res.inertia.toFixed(4)}</div></div>
          <div class="cell tight round"><b>k</b><div class="muted" style="margin-top:6px">${k}</div></div>
          <div class="cell tight round"><b>seed</b><div class="muted" style="margin-top:6px">${seed}</div></div>
        </div>
        <div class="hr"></div>
        <div class="muted">Engineer note: if inertia changes significantly with different seeds, the clustering is unstable—add repeats and report variance.</div>`;
    }
  }
  function kmSweep(){
    if(!KM_POINTS) kmRefresh();
    const seed = parseInt(document.getElementById("kmSeed")?.value||"7",10) || 7;
    const ks = [];
    const inert = [];
    for(let k=2;k<=8;k++){
      const res = kmeans(KM_POINTS, k, seed, 24);
      ks.push(k); inert.push(res.inertia);
    }
    const svg = document.getElementById("kmInertiaSvg");
    if(svg) svgPlotLines(svg, [{x:ks,y:inert}], {});
  }

  const kmK = document.getElementById("kmK");
  const kmKVal = document.getElementById("kmKVal");
  if(kmK && kmKVal) kmK.addEventListener("input", ()=> kmKVal.textContent = kmK.value);
  const kmRegen = document.getElementById("kmRegen");
  if(kmRegen) kmRegen.addEventListener("click", kmRefresh);
  const kmRunBtn = document.getElementById("kmRun");
  if(kmRunBtn) kmRunBtn.addEventListener("click", kmRun);
  const kmSweepBtn = document.getElementById("kmSweep");
  if(kmSweepBtn) kmSweepBtn.addEventListener("click", kmSweep);
  // init
  if(document.getElementById("kmCanvas")) kmRefresh();

  // --- Time series lab ---
  let TS = null;
  function genSeries(n=120, seed=11){
    const r = seededRand(seed*31+9);
    let y=0;
    const out=[];
    for(let i=0;i<n;i++){
      // trend + seasonal + noise
      const trend = i*0.015;
      const season = Math.sin(i/6)*0.45 + Math.cos(i/11)*0.25;
      const noise = (r()-0.5)*0.55;
      y = 2.5 + trend + season + noise;
      out.push(y);
    }
    return out;
  }
  function movingAvg(arr, w){
    const out=[];
    for(let i=0;i<arr.length;i++){
      const s = Math.max(0,i-w+1);
      const chunk = arr.slice(s,i+1);
      out.push(mean(chunk));
    }
    return out;
  }
  function expSmooth(arr, alpha){
    const out=[];
    let s = arr[0] ?? 0;
    for(let i=0;i<arr.length;i++){
      s = alpha*arr[i] + (1-alpha)*s;
      out.push(s);
    }
    return out;
  }
  function forecastES(lastS, alpha, steps){
    // simple: hold smoothed level
    const out=[];
    for(let i=0;i<steps;i++) out.push(lastS);
    return out;
  }
  function drawTS(){
    const svg = document.getElementById("tsSvg");
    const resSvg = document.getElementById("tsResSvg");
    const diag = document.getElementById("tsDiag");
    if(!TS){ TS = genSeries(120, 11); }
    const w = parseInt(document.getElementById("tsWin")?.value||"6",10);
    const alpha = clamp(parseInt(document.getElementById("tsAlpha")?.value||"35",10)/100, 0.01, 0.95);
    const h = clamp(parseInt(document.getElementById("tsH")?.value||"12",10), 4, 60);
    const ma = movingAvg(TS, w);
    const es = expSmooth(TS, alpha);
    const f = forecastES(es[es.length-1], alpha, h);

    const x = Array.from({length: TS.length}, (_,i)=>i);
    const xf = Array.from({length: h}, (_,i)=>TS.length + i);
    // plot: raw + smoothed + forecast
    svgPlotLines(svg, [
      {x, y: TS},
      {x, y: es},
      {x: xf, y: f},
    ]);

    // residuals between raw and es
    const res = TS.map((v,i)=>v - es[i]);
    svgPlotLines(resSvg, [{x, y: res}]);

    const z = res.map(v=>Math.abs(v));
    const thr = mean(z) + 2.5*std(z);
    const spikes = res
      .map((v,i)=>({i,v:Math.abs(v)}))
      .filter(o=>o.v>thr)
      .slice(0,8);

    if(diag){
      diag.innerHTML = `
        <div class="grid auto">
          <div class="cell tight round"><b>α</b><div class="muted" style="margin-top:6px">${alpha.toFixed(2)}</div></div>
          <div class="cell tight round"><b>window</b><div class="muted" style="margin-top:6px">${w}</div></div>
          <div class="cell tight round"><b>forecast</b><div class="muted" style="margin-top:6px">${h} steps</div></div>
        </div>
        <div class="hr"></div>
        <div class="kicker">Anomaly flags</div>
        <div class="muted">${spikes.length ? spikes.map(s=>`index ${s.i}`).join(", ") : "none flagged (residuals within tolerance)"}</div>
        <div class="hr"></div>
        <div class="muted">Engineer note: investigate flagged points for data quality, regime shift, or model mismatch.</div>
      `;
    }
  }
  const tsWin = document.getElementById("tsWin"), tsWinVal = document.getElementById("tsWinVal");
  if(tsWin && tsWinVal) tsWin.addEventListener("input", ()=> tsWinVal.textContent = tsWin.value);
  const tsAlpha = document.getElementById("tsAlpha"), tsAlphaVal = document.getElementById("tsAlphaVal");
  if(tsAlpha && tsAlphaVal) tsAlpha.addEventListener("input", ()=> tsAlphaVal.textContent = (parseInt(tsAlpha.value,10)/100).toFixed(2));
  const tsRegen = document.getElementById("tsRegen");
  if(tsRegen) tsRegen.addEventListener("click", ()=>{ TS = genSeries(120, Math.floor(Math.random()*1000)); drawTS(); });
  const tsSpike = document.getElementById("tsSpike");
  if(tsSpike) tsSpike.addEventListener("click", ()=>{
    if(!TS) TS = genSeries(120, 11);
    const i = Math.floor(TS.length*(0.2+Math.random()*0.6));
    TS[i] += (Math.random()>0.5?1:-1) * (1.2 + Math.random()*1.5);
    drawTS();
  });
  const tsRun = document.getElementById("tsRun");
  if(tsRun) tsRun.addEventListener("click", drawTS);
  if(document.getElementById("tsSvg")) drawTS();

  // --- Evaluation toolkit ---
  function buildConfusion(labels, pairs){
    const idx = new Map(labels.map((l,i)=>[l,i]));
    const m = Array.from({length: labels.length}, ()=>Array(labels.length).fill(0));
    pairs.forEach(([t,p])=>{
      const i = idx.get(t), j = idx.get(p);
      if(i===undefined || j===undefined) return;
      m[i][j] += 1;
    });
    return m;
  }
  function metricsFromMatrix(labels, m){
    const n = labels.length;
    const tp = new Array(n).fill(0);
    const fp = new Array(n).fill(0);
    const fn = new Array(n).fill(0);
    let total = 0, correct = 0;
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        const v = m[i][j];
        total += v;
        if(i===j) correct += v;
      }
    }
    for(let c=0;c<n;c++){
      tp[c] = m[c][c];
      fp[c] = m.reduce((s,row,i)=> s + (i!==c ? row[c] : 0), 0);
      fn[c] = m[c].reduce((s,v,j)=> s + (j!==c ? v : 0), 0);
    }
    const per = labels.map((l,c)=>{
      const prec = tp[c]/Math.max(1,(tp[c]+fp[c]));
      const rec  = tp[c]/Math.max(1,(tp[c]+fn[c]));
      const f1   = (2*prec*rec)/Math.max(1e-9,(prec+rec));
      const supp = m[c].reduce((s,v)=>s+v,0);
      return {label:l, precision:prec, recall:rec, f1, support:supp};
    });
    const acc = correct/Math.max(1,total);
    const macro = {
      precision: mean(per.map(x=>x.precision)),
      recall: mean(per.map(x=>x.recall)),
      f1: mean(per.map(x=>x.f1)),
    };
    const wsum = per.reduce((s,x)=>s+x.support,0) || 1;
    const weighted = {
      precision: per.reduce((s,x)=>s+x.precision*x.support,0)/wsum,
      recall: per.reduce((s,x)=>s+x.recall*x.support,0)/wsum,
      f1: per.reduce((s,x)=>s+x.f1*x.support,0)/wsum,
    };
    return {acc, per, macro, weighted, total};
  }
  function renderMatrix(container, labels, m){
    if(!container) return;
    let html = `<table class="matrix"><thead><tr><th>True \\ Pred</th>${labels.map(l=>`<th>${l}</th>`).join("")}</tr></thead><tbody>`;
    for(let i=0;i<labels.length;i++){
      html += `<tr><th>${labels[i]}</th>`;
      for(let j=0;j<labels.length;j++){
        const cls = (i===j) ? "diag" : "";
        html += `<td class="${cls}">${m[i][j]}</td>`;
      }
      html += `</tr>`;
    }
    html += `</tbody></table>`;
    container.innerHTML = html;
  }
  function evalRun(){
    const out = document.getElementById("evalOut");
    const mv = document.getElementById("evalMatrixView");
    if(!out || !mv) return;
    // Determine mode from active mini-tab
    const active = document.querySelector(".mini-tab.active");
    const mode = active ? active.getAttribute("data-eval-mode") : "pairs";
    let labels = [];
    let m = [];
    try{
      if(mode==="pairs"){
        const txt = (document.getElementById("evalPairs")?.value||"").trim();
        const lines = txt.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
        const pairs = lines.map(line=>line.split(",").map(s=>s.trim())).filter(a=>a.length>=2);
        const all = new Set();
        pairs.forEach(([t,p])=>{ all.add(t); all.add(p); });
        labels = Array.from(all);
        labels.sort();
        m = buildConfusion(labels, pairs);
      }else{
        const raw = (document.getElementById("evalMatrix")?.value||"").trim();
        const obj = JSON.parse(raw);
        labels = obj.labels;
        m = obj.m;
        if(!Array.isArray(labels) || !Array.isArray(m) || m.length!==labels.length) throw new Error("Matrix shape mismatch");
      }
      const met = metricsFromMatrix(labels, m);
      renderMatrix(mv, labels, m);
      out.innerHTML = `
        <div class="grid auto">
          <div class="cell tight round"><b>Accuracy</b><div class="muted" style="margin-top:6px">${met.acc.toFixed(4)}</div></div>
          <div class="cell tight round"><b>Total</b><div class="muted" style="margin-top:6px">${met.total}</div></div>
          <div class="cell tight round"><b>Macro F1</b><div class="muted" style="margin-top:6px">${met.macro.f1.toFixed(4)}</div></div>
          <div class="cell tight round"><b>Weighted F1</b><div class="muted" style="margin-top:6px">${met.weighted.f1.toFixed(4)}</div></div>
        </div>
        <div class="hr"></div>
        <div class="kicker">Per-class</div>
        <div style="overflow:auto">
          <table class="matrix">
            <thead><tr><th>Class</th><th>Precision</th><th>Recall</th><th>F1</th><th>Support</th></tr></thead>
            <tbody>
              ${met.per.map(x=>`<tr><th>${x.label}</th><td>${x.precision.toFixed(4)}</td><td>${x.recall.toFixed(4)}</td><td>${x.f1.toFixed(4)}</td><td>${x.support}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="hr"></div>
        <div class="muted">Engineer note: inspect off-diagonal cells, then run targeted error analysis by slice (source, length, vocabulary).</div>
      `;
    }catch(err){
      mv.innerHTML = "—";
      out.innerHTML = `<b>Parse error</b><div class="muted" style="margin-top:6px">${String(err.message || err)}</div>`;
    }
  }
  const evalRunBtn = document.getElementById("evalRun");
  if(evalRunBtn) evalRunBtn.addEventListener("click", evalRun);
  const evalClear = document.getElementById("evalClear");
  if(evalClear) evalClear.addEventListener("click", ()=>{
    const a = document.getElementById("evalPairs"); if(a) a.value="";
    const b = document.getElementById("evalMatrix"); if(b) b.value="";
    const out = document.getElementById("evalOut"); if(out) out.textContent="Paste input and compute metrics.";
    const mv = document.getElementById("evalMatrixView"); if(mv) mv.textContent="—";
  });

  // --- Pipeline validator ---
  function parseCSV(text){
    const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    if(lines.length<2) return {header:[], rows:[]};
    const header = lines[0].split(",").map(s=>s.trim());
    const rows = lines.slice(1).map(l=>l.split(",").map(s=>s.trim()));
    return {header, rows};
  }
  function isISODate(s){
    return /^\d{4}-\d{2}-\d{2}$/.test(s);
  }
  function pvRun(){
    const out = document.getElementById("pvOut");
    const txt = (document.getElementById("pvInput")?.value||"").trim();
    const req = (document.getElementById("pvCols")?.value||"").split(",").map(s=>s.trim()).filter(Boolean);
    const dateCol = (document.getElementById("pvDateCol")?.value||"date").trim();
    if(!out) return;
    try{
      const {header, rows} = parseCSV(txt);
      const missingCols = req.filter(c=>!header.includes(c));
      const idx = new Map(header.map((h,i)=>[h,i]));
      const dateIdx = idx.get(dateCol);
      const issues = [];
      if(missingCols.length) issues.push(`Missing required columns: ${missingCols.join(", ")}`);
      if(dateIdx===undefined) issues.push(`Date column '${dateCol}' not found.`);

      let dup=0, nonMono=0, badDate=0, missing=0;
      const seen = new Set();
      const dates = [];
      rows.forEach(r=>{
        header.forEach((h,i)=>{
          if(req.includes(h) && (r[i]===undefined || r[i]==="")) missing++;
        });
        if(dateIdx!==undefined){
          const d = r[dateIdx] || "";
          if(!isISODate(d)) badDate++;
          if(seen.has(d)) dup++;
          seen.add(d);
          dates.push(d);
        }
      });
      // monotonic check (lexicographic works for ISO dates)
      for(let i=1;i<dates.length;i++){
        if(dates[i] < dates[i-1]) nonMono++;
      }
      const ok = issues.length===0 && dup===0 && nonMono===0 && badDate===0 && missing===0;
      out.innerHTML = `
        <div class="grid auto">
          <div class="cell tight round"><b>Status</b><div class="muted" style="margin-top:6px">${ok ? "PASS ✅" : "CHECK ⚠️"}</div></div>
          <div class="cell tight round"><b>Rows</b><div class="muted" style="margin-top:6px">${rows.length}</div></div>
          <div class="cell tight round"><b>Columns</b><div class="muted" style="margin-top:6px">${header.length}</div></div>
        </div>
        <div class="hr"></div>
        <div class="kicker">Findings</div>
        <ul class="list">
          ${issues.map(x=>`<li><b>Schema:</b> ${x}</li>`).join("") || "<li><b>Schema:</b> OK</li>"}
          <li><b>Missing values:</b> ${missing}</li>
          <li><b>Duplicate dates:</b> ${dup}</li>
          <li><b>Non‑monotonic order:</b> ${nonMono}</li>
          <li><b>Bad date format:</b> ${badDate}</li>
        </ul>
        <div class="hr"></div>
        <div class="muted">Engineer note: log this report per run and fail the pipeline on schema/date violations.</div>
      `;
    }catch(err){
      out.innerHTML = `<b>Error</b><div class="muted" style="margin-top:6px">${String(err.message||err)}</div>`;
    }
  }
  const pvRunBtn = document.getElementById("pvRun");
  if(pvRunBtn) pvRunBtn.addEventListener("click", pvRun);
  const pvClear = document.getElementById("pvClear");
  if(pvClear) pvClear.addEventListener("click", ()=>{
    const a=document.getElementById("pvInput"); if(a) a.value="";
    const o=document.getElementById("pvOut"); if(o) o.textContent="Paste a CSV sample and validate.";
  });

  // --- CV dataset QA ---
  function cvRun(){
    const out = document.getElementById("cvOut");
    const txt = (document.getElementById("cvCounts")?.value||"").trim();
    if(!out) return;
    try{
      const lines = txt.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
      const data = lines.map(l=>l.split(",").map(s=>s.trim())).filter(a=>a.length>=2).map(([c,n])=>({c, n: parseFloat(n)})).filter(o=>isFinite(o.n));
      if(!data.length) throw new Error("No valid class,count lines found.");
      const total = data.reduce((s,o)=>s+o.n,0);
      const maxC = Math.max(...data.map(o=>o.n));
      const minC = Math.min(...data.map(o=>o.n));
      const ratio = maxC/Math.max(1e-9,minC);
      const sorted = [...data].sort((a,b)=>b.n-a.n);
      const train = parseFloat(document.getElementById("cvTrainPct")?.value||"80");
      const val = parseFloat(document.getElementById("cvValPct")?.value||"10");
      const test = parseFloat(document.getElementById("cvTestPct")?.value||"10");
      const sum = train+val+test;

      const rec = [];
      if(ratio >= 5) rec.push("High imbalance: consider class-aware sampling, focal loss, or targeted augmentation.");
      if(minC < 30) rec.push("Low-count classes: prioritize annotation/augmentation to avoid brittle performance.");
      if(Math.abs(sum-100)>0.01) rec.push("Split percentages do not sum to 100.");
      if(test < 5) rec.push("Test split is small; consider increasing to improve confidence intervals.");
      if(!rec.length) rec.push("Looks reasonable. Still inspect per-class metrics and hard negatives.");

      out.innerHTML = `
        <div class="grid auto">
          <div class="cell tight round"><b>Total</b><div class="muted" style="margin-top:6px">${total}</div></div>
          <div class="cell tight round"><b>Classes</b><div class="muted" style="margin-top:6px">${data.length}</div></div>
          <div class="cell tight round"><b>Imbalance</b><div class="muted" style="margin-top:6px">${ratio.toFixed(2)}×</div></div>
        </div>
        <div class="hr"></div>
        <div class="kicker">Top classes</div>
        <ul class="list">${sorted.slice(0,6).map(o=>`<li><b>${o.c}</b>: ${o.n} (${(100*o.n/total).toFixed(1)}%)</li>`).join("")}</ul>
        <div class="hr"></div>
        <div class="kicker">Recommendations</div>
        <ul class="list">${rec.map(x=>`<li>${x}</li>`).join("")}</ul>
      `;
    }catch(err){
      out.innerHTML = `<b>Error</b><div class="muted" style="margin-top:6px">${String(err.message||err)}</div>`;
    }
  }
  const cvRunBtn = document.getElementById("cvRun");
  if(cvRunBtn) cvRunBtn.addEventListener("click", cvRun);
  const cvClear = document.getElementById("cvClear");
  if(cvClear) cvClear.addEventListener("click", ()=>{
    const a=document.getElementById("cvCounts"); if(a) a.value="";
    const o=document.getElementById("cvOut"); if(o) o.textContent="Enter class counts to analyze.";
  });

  // --- Compression planner (estimate) ---
  function cpEstimate(){
    const out = document.getElementById("cpOut");
    const svg = document.getElementById("cpSvg");
    const acc0 = parseFloat(document.getElementById("cpAcc")?.value||"0.84");
    const lat0 = parseFloat(document.getElementById("cpLat")?.value||"22");
    const size0 = parseFloat(document.getElementById("cpSize")?.value||"35");
    const prune = parseInt(document.getElementById("cpPrune")?.value||"30",10);
    const q = document.getElementById("cpQ")?.value||"int8";
    const pruneVal = document.getElementById("cpPruneVal");
    if(pruneVal) pruneVal.textContent = String(prune);

    // heuristic factors (planning only)
    const pruneSizeFactor = 1 - prune/100 * 0.70;
    const pruneLatFactor  = 1 - prune/100 * 0.35;

    let qSize=1, qLat=1, qAccPenalty=0;
    if(q==="fp16"){ qSize=0.55; qLat=0.92; qAccPenalty=0.004; }
    if(q==="int8"){ qSize=0.30; qLat=0.80; qAccPenalty=0.010; }
    if(q==="fp32"){ qSize=1.00; qLat=1.00; qAccPenalty=0.0; }

    const size1 = size0 * pruneSizeFactor * qSize;
    const lat1 = lat0 * pruneLatFactor * qLat;
    const acc1 = clamp(acc0 - (prune/100)*0.03 - qAccPenalty, 0, 1);

    if(out){
      out.innerHTML = `
        <div class="grid auto">
          <div class="cell tight round"><b>Accuracy</b><div class="muted" style="margin-top:6px">${acc1.toFixed(4)} <span class="muted">(est.)</span></div></div>
          <div class="cell tight round"><b>Latency</b><div class="muted" style="margin-top:6px">${lat1.toFixed(2)} ms <span class="muted">(est.)</span></div></div>
          <div class="cell tight round"><b>Size</b><div class="muted" style="margin-top:6px">${size1.toFixed(2)} MB <span class="muted">(est.)</span></div></div>
        </div>
        <div class="hr"></div>
        <div class="muted">Next step: benchmark on target hardware and report measured latency/accuracy. This tool helps you choose experiments to run.</div>
      `;
    }
    // chart: baseline vs estimate
    if(svg){
      svgPlotLines(svg, [
        {x:[0,1], y:[acc0, acc1]},
        {x:[0,1], y:[1/Math.max(1e-9,lat0), 1/Math.max(1e-9,lat1)]},
      ]);
    }
  }
  const cpRun = document.getElementById("cpRun");
  if(cpRun) cpRun.addEventListener("click", cpEstimate);
  const cpPrune = document.getElementById("cpPrune");
  const cpPruneVal = document.getElementById("cpPruneVal");
  if(cpPrune && cpPruneVal) cpPrune.addEventListener("input", ()=> cpPruneVal.textContent = cpPrune.value);
  const cpClear = document.getElementById("cpClear");
  if(cpClear) cpClear.addEventListener("click", ()=>{
    const a=document.getElementById("cpAcc"); if(a) a.value="0.84";
    const b=document.getElementById("cpLat"); if(b) b.value="22";
    const c=document.getElementById("cpSize"); if(c) c.value="35";
    const p=document.getElementById("cpPrune"); if(p) p.value="30";
    const q=document.getElementById("cpQ"); if(q) q.value="int8";
    cpEstimate();
  });
  if(document.getElementById("cpSvg")) cpEstimate();

})();
