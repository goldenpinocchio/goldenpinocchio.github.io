const projects = [
  {
    title: "About / Info",
    kind: "info",
    accent: "#8ddcff",
    tx: "0px",
    ty: "-296px",
    rot: "0deg",
    description: "Thanks for stopping by! The best place to reach me is on X. Have the best day :)",
    action: "dialog",
  },
  {
    title: "Donkey Kong Archive",
    kind: "donkey",
    accent: "#6fdb65",
    tx: "-270px",
    ty: "-176px",
    rot: "-5deg",
    description: "1982 Topps Donkey Kong - Released in 1982, Topps transformed Nintendo's arcade phenomenon into one of the earliest video game trading-card releases. The set features 32 sticker cards and 4 scratch-off cards.",
    href: "https://www.1982donkeykong.com/",
  },
  {
    title: "Weekly Habit Tracker",
    kind: "habit",
    accent: "#47bdd2",
    tx: "270px",
    ty: "-176px",
    rot: "4deg",
    description: "A tiny world for routines, streaks, and the week-at-a-glance flow.",
    href: "https://goldenpinocchio.github.io/weekly-habit-tracker/",
  },
  {
    title: "PixelCrafted Websites",
    kind: "pixel",
    accent: "#8ef0b6",
    tx: "-270px",
    ty: "176px",
    rot: "4deg",
    description: "Your website, handcrafted for your business",
    href: "https://goldenpinocchio.github.io/pixelcraftedwebsites/",
  },
  {
    title: "Pinocchio Artist Page",
    kind: "artist",
    accent: "#b8ffd9",
    tx: "270px",
    ty: "176px",
    rot: "-4deg",
    description: "A visual collective of my pieces of art; fake, common, fuax, original, water-colored, good vibes, and plenty of froggy behavior.",
    href: "",
  },
];

const orbit = document.getElementById("project-orbit");
const infoDialog = document.getElementById("info-dialog");
const projectPeek = document.getElementById("project-peek");
const projectPeekTitle = document.getElementById("project-peek-title");
const projectPeekDescription = document.getElementById("project-peek-description");
const projectPeekVisit = document.getElementById("project-peek-visit");
const projectPeekClose = document.getElementById("project-peek-close");
const socialTrigger = document.getElementById("social-trigger");
const mobilePeekQuery = window.matchMedia("(max-width: 700px)");
let activePortal = null;

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function iconWrap(defaultSvg, altSvg, ariaLabel) {
  return `
    <div class="portal__icon" aria-hidden="true">
      <div class="portal__spark portal__spark--1"></div>
      <div class="portal__spark portal__spark--2"></div>
      <div class="portal__spark portal__spark--3"></div>
      <div class="portal__spark portal__spark--4"></div>
      <div class="portal__art portal__art--default" aria-label="${esc(ariaLabel)}">${defaultSvg}</div>
      <div class="portal__art portal__art--alt" aria-label="${esc(ariaLabel)}">${altSvg}</div>
    </div>
  `;
}

function iconImage(path, ariaLabel) {
  const src = encodeURI(path);
  return `<img src="${src}" alt="${esc(ariaLabel)}" draggable="false" />`;
}

function iconInfoDefault() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="90" cy="90" r="54" fill="#f3f8ff" />
        <circle cx="90" cy="90" r="34" fill="#ffffff" />
        <path d="M90 74v18" fill="none" />
        <circle cx="90" cy="64" r="6" fill="#88c6ff" />
        <path d="M78 122h24" fill="none" />
        <path d="M62 62l-10-10" fill="none" />
        <path d="M128 62l10-10" fill="none" />
        <path d="M62 118l-10 10" fill="none" />
        <path d="M128 118l10 10" fill="none" />
      </g>
    </svg>
  `;
}

function iconInfoAlt() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="90" cy="90" r="54" fill="#fffaf4" />
        <circle cx="90" cy="90" r="34" fill="#ffffff" />
        <path d="M90 74v20" fill="none" />
        <circle cx="90" cy="64" r="6" fill="#f0a9e0" />
        <path d="M78 122h24" fill="none" />
        <path d="M60 62l-12-8" fill="none" />
        <path d="M130 62l12-8" fill="none" />
        <path d="M60 118l-12 8" fill="none" />
        <path d="M130 118l12 8" fill="none" />
        <path d="M100 74l14 14" fill="none" />
      </g>
    </svg>
  `;
}

function iconDonkeyDefault() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M42 123h96" fill="none" />
        <path d="M62 44h56c8 0 14 6 14 14v16H48V58c0-8 6-14 14-14Z" fill="#ff6477" />
        <path d="M52 57h76v16H52Z" fill="#d84d5f" />
        <circle cx="90" cy="89" r="29" fill="#f8d2a9" />
        <circle cx="80" cy="86" r="4" fill="#1f1d1b" stroke="none" />
        <circle cx="100" cy="86" r="4" fill="#1f1d1b" stroke="none" />
        <path d="M80 99c5 4 15 4 20 0" fill="none" />
        <path d="M68 120c5-13 13-19 22-19 9 0 17 6 22 19v16H68Z" fill="#6a8df2" />
        <path d="M60 126l-8 18" fill="none" />
        <path d="M120 126l8 18" fill="none" />
        <path d="M75 73h30" fill="none" />
        <path d="M90 66l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#ffe77b" />
      </g>
    </svg>
  `;
}

function iconDonkeyAlt() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M36 122h108" fill="none" />
        <path d="M60 40h60c8 0 14 6 14 14v16H46V54c0-8 6-14 14-14Z" fill="#ff7a86" />
        <path d="M48 54h84v18H48Z" fill="#e05a66" />
        <circle cx="88" cy="90" r="28" fill="#f8d2a9" />
        <circle cx="78" cy="87" r="4" fill="#1f1d1b" stroke="none" />
        <circle cx="98" cy="87" r="4" fill="#1f1d1b" stroke="none" />
        <path d="M79 100c4 4 13 4 18 0" fill="none" />
        <path d="M66 121c8-11 15-17 23-17 8 0 15 6 23 17v16H66Z" fill="#5b7ee6" />
        <path d="M58 122l-12 12" fill="none" />
        <path d="M122 122l12 12" fill="none" />
        <path d="M105 70l14-9-5 15 12 9-15 1-6 14-5-14-15-1 12-9-5-15z" fill="#ffe77b" />
        <path d="M112 39l10-7" fill="none" />
        <path d="M132 55l12 2" fill="none" />
      </g>
    </svg>
  `;
}

function iconHabitDefault() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="48" y="26" width="84" height="128" rx="24" fill="#fefefe" />
        <rect x="60" y="40" width="60" height="96" rx="14" fill="#f2fbff" />
        <rect x="66" y="46" width="48" height="14" rx="7" fill="#ffd6e0" />
        <path d="M69 76h15" fill="none" />
        <path d="M85 72l4 4 8-10" fill="none" />
        <path d="M69 100h15" fill="none" />
        <path d="M85 96l4 4 8-10" fill="none" />
        <path d="M69 124h15" fill="none" />
        <path d="M85 120l4 4 8-10" fill="none" />
        <circle cx="90" cy="127" r="6" fill="#1f1d1b" />
        <path d="M114 64c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10Z" fill="#ff98b0" />
        <path d="M109 74h10" fill="none" />
      </g>
    </svg>
  `;
}

function iconHabitAlt() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="50" y="24" width="80" height="132" rx="24" fill="#fffef9" />
        <rect x="61" y="38" width="58" height="100" rx="14" fill="#eef8ff" />
        <path d="M69 60h14" fill="none" />
        <path d="M84 56l5 5 8-11" fill="none" />
        <path d="M69 84h14" fill="none" />
        <path d="M84 80l5 5 8-11" fill="none" />
        <path d="M69 108h14" fill="none" />
        <path d="M84 104l5 5 8-11" fill="none" />
        <path d="M64 46h52" fill="none" />
        <circle cx="90" cy="128" r="6" fill="#1f1d1b" />
        <path d="M110 64c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10Z" fill="#88c6ff" />
        <path d="M110 68v10" fill="none" />
        <path d="M105 73h10" fill="none" />
        <path d="M103 116l10 10" fill="none" />
      </g>
    </svg>
  `;
}

function iconPixelDefault() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="36" y="42" width="108" height="68" rx="12" fill="#fefefe" />
        <rect x="47" y="52" width="86" height="48" rx="8" fill="#c8e5ff" />
        <rect x="56" y="60" width="28" height="18" rx="4" fill="#fff1b5" />
        <rect x="89" y="60" width="36" height="10" rx="4" fill="#ffb7d1" />
        <rect x="89" y="74" width="30" height="12" rx="4" fill="#c1f2c6" />
        <path d="M36 110h108l10 14H26Z" fill="#dfe8ff" />
        <path d="M58 124h64" fill="none" />
        <circle cx="89" cy="68" r="3.5" fill="#1f1d1b" stroke="none" />
        <path d="M100 67h16" fill="none" />
        <path d="M106 80h12" fill="none" />
      </g>
    </svg>
  `;
}

function iconPixelAlt() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="34" y="40" width="112" height="70" rx="12" fill="#fffdf9" />
        <rect x="46" y="50" width="88" height="50" rx="8" fill="#f7e8ff" />
        <rect x="54" y="58" width="30" height="18" rx="4" fill="#ffe77b" />
        <rect x="88" y="58" width="30" height="10" rx="4" fill="#88c6ff" />
        <rect x="88" y="72" width="28" height="12" rx="4" fill="#ffbd73" />
        <path d="M34 112h112l10 14H24Z" fill="#dfe8ff" />
        <path d="M58 126h64" fill="none" />
        <path d="M106 82l12-12" fill="none" />
        <path d="M112 70l6 0 0 6" fill="none" />
        <circle cx="90" cy="68" r="3.5" fill="#1f1d1b" stroke="none" />
        <path d="M97 90l16 0" fill="none" />
      </g>
    </svg>
  `;
}

function iconArtistDefault() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M54 36h64c10 0 18 8 18 18v72c0 10-8 18-18 18H54c-10 0-18-8-18-18V54c0-10 8-18 18-18Z" fill="#fff6f2" />
        <path d="M54 36v108" fill="none" />
        <path d="M66 68c8-8 20-12 32-12 12 0 22 4 30 12" fill="none" />
        <path d="M66 90c8-4 16-6 24-6s16 2 24 6" fill="none" />
        <path d="M66 110c9-6 18-8 24-8s15 2 24 8" fill="none" />
        <path d="M116 48l18-18" fill="none" />
        <circle cx="126" cy="32" r="5" fill="#ffb7d1" />
        <path d="M48 122h16" fill="none" />
        <path d="M132 42l8 8" fill="none" />
      </g>
    </svg>
  `;
}

function iconArtistAlt() {
  return `
    <svg viewBox="0 0 180 180" role="img">
      <g stroke="#1f1d1b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M52 34h66c10 0 18 8 18 18v74c0 10-8 18-18 18H52c-10 0-18-8-18-18V52c0-10 8-18 18-18Z" fill="#fffdf8" />
        <path d="M52 34v110" fill="none" />
        <path d="M66 66c8-8 20-12 32-12 12 0 22 4 30 12" fill="none" />
        <path d="M64 88c8-4 16-6 24-6s16 2 24 6" fill="none" />
        <path d="M64 110c9-6 18-8 24-8s15 2 24 8" fill="none" />
        <path d="M118 46l18-18" fill="none" />
        <path d="M126 38l12 12" fill="none" />
        <circle cx="128" cy="32" r="5" fill="#f0a9e0" />
        <path d="M46 124h16" fill="none" />
        <path d="M114 96l18 18" fill="none" />
        <path d="M96 116l-4 12 12-4" fill="none" />
      </g>
    </svg>
  `;
}

function getIconPair(kind) {
  const newIcons = {
    info: "Assets/Bubble Catagory Icons/Info : About Page Icon.png",
    donkey: "Assets/Bubble Catagory Icons/1982 Donkey Kong Page Icon.png",
    habit: "Assets/Bubble Catagory Icons/Weekly Habit Tracker Icon.png",
    pixel: "Assets/Bubble Catagory Icons/Pixelcraftedwebsites Page Icon.png",
    artist: "Assets/Bubble Catagory Icons/Pinocchio Artist Page Icon.png",
  };

  if (newIcons[kind]) {
    const icon = iconImage(newIcons[kind], projects.find((project) => project.kind === kind)?.title || "Project icon");
    return [icon, icon];
  }

  switch (kind) {
    case "donkey":
      return [iconDonkeyDefault(), iconDonkeyAlt()];
    default:
      return [iconInfoDefault(), iconInfoAlt()];
  }
}

function buildPortal(project) {
  const [defaultSvg, altSvg] = getIconPair(project.kind);

  if (project.action === "dialog") {
    return `
      <button
        class="portal portal--${project.kind}"
        type="button"
        data-open-info
        data-title="${esc(project.title)}"
        data-description="${esc(project.description)}"
        data-action="dialog"
        style="--tx:${project.tx}; --ty:${project.ty}; --rot:${project.rot}; --accent:${project.accent};"
        aria-label="Open ${esc(project.title)}"
        aria-expanded="false"
      >
        <div class="portal__frame">
          ${iconWrap(defaultSvg, altSvg, project.title)}
          <div class="portal__label">
            <span class="portal__name">${esc(project.title)}</span>
          </div>
        </div>
      </button>
    `;
  }

  const href = project.href || "#";
  const target = project.href ? ' target="_blank" rel="noopener noreferrer"' : "";

  return `
    <a
      class="portal portal--${project.kind}"
      href="${esc(href)}"
      ${target}
      data-href="${esc(project.href || "")}" data-title="${esc(project.title)}"
      data-description="${esc(project.description)}"
      data-action="project"
      style="--tx:${project.tx}; --ty:${project.ty}; --rot:${project.rot}; --accent:${project.accent};"
      aria-label="Open ${esc(project.title)}"
      aria-expanded="false"
    >
      <div class="portal__frame">
        ${iconWrap(defaultSvg, altSvg, project.title)}
        <div class="portal__label">
          <span class="portal__name">${esc(project.title)}</span>
        </div>
      </div>
    </a>
  `;
}


function openStubPortal(project) {
  const win = window.open("about:blank", "_blank");
  if (!win) return;

  const safeTitle = esc(project.title);
  const safeDesc = esc(project.description);
  win.document.open();
  win.document.write(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${safeTitle}</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: Trebuchet MS, Segoe UI, system-ui, sans-serif;
            background: linear-gradient(180deg, #fffaf4, #fffdf8);
            color: #1f1d1b;
          }
          .panel {
            max-width: 720px;
            margin: 24px;
            padding: 28px;
            border-radius: 28px;
            border: 2px solid rgba(31,29,27,0.12);
            background: rgba(255,255,255,0.9);
            box-shadow: 0 20px 50px rgba(31,29,27,0.12);
          }
          h1 {
            margin: 0;
            font-family: Comic Sans MS, Trebuchet MS, sans-serif;
            font-size: clamp(2rem, 6vw, 3.5rem);
            line-height: 0.95;
          }
          p, li {
            color: #6a6258;
            line-height: 1.6;
          }
          ul { padding-left: 18px; }
          .pill {
            display: inline-flex;
            padding: 0.45rem 0.78rem;
            border-radius: 999px;
            background: #fff1d6;
            border: 1px solid rgba(31,29,27,0.12);
            font-weight: 800;
            margin-bottom: 16px;
          }
        </style>
      </head>
      <body>
        <main class="panel">
          <div class="pill">Preview stub · wire a live URL later</div>
          <h1>${safeTitle}</h1>
          <p>${safeDesc}</p>
          <ul>
            <li>This portal is currently using a generated preview page.</li>
            <li>Replace the stub with a live destination whenever you’re ready.</li>
            <li>The homepage stays modular so more portals can be added later.</li>
          </ul>
        </main>
      </body>
    </html>
  `);
  win.document.close();
}

function closeInfoDialog() {
  if (!infoDialog) return;
  if (typeof infoDialog.close === "function" && infoDialog.open) {
    infoDialog.close();
  }
}

function closeProjectPeek() {
  if (!projectPeek) return;
  if (activePortal) {
    activePortal.classList.remove("portal--selected");
    activePortal.setAttribute("aria-expanded", "false");
  }
  activePortal = null;
  projectPeek.classList.remove("project-peek--open");
  projectPeek.hidden = true;
}

function openProjectPeek(portal) {
  if (!projectPeek || !projectPeekTitle || !projectPeekDescription || !projectPeekVisit) return;

  if (activePortal && activePortal !== portal) {
    activePortal.classList.remove("portal--selected");
    activePortal.setAttribute("aria-expanded", "false");
  }

  activePortal = portal;
  activePortal.classList.add("portal--selected");
  activePortal.setAttribute("aria-expanded", "true");

  projectPeekTitle.textContent = portal.dataset.title || "Project";
  projectPeekDescription.textContent = portal.dataset.description || "Take a closer look at this project.";
  projectPeekVisit.textContent = portal.dataset.action === "dialog" ? "View details" : "Visit site";
  projectPeek.hidden = false;
  requestAnimationFrame(() => projectPeek.classList.add("project-peek--open"));
}

function visitActiveProject() {
  if (!activePortal) return;

  if (activePortal.dataset.action === "dialog") {
    closeProjectPeek();
    if (infoDialog && typeof infoDialog.showModal === "function") infoDialog.showModal();
    return;
  }

  const href = activePortal.dataset.href || "";
  if (href) {
    window.open(href, "_blank", "noopener,noreferrer");
    return;
  }

  openStubPortal({
    title: activePortal.dataset.title || "Project",
    description: activePortal.dataset.description || "",
  });
}

function bindInteractions() {
  orbit.addEventListener("click", (event) => {
    const portal = event.target.closest(".portal");
    if (!portal) return;

    event.preventDefault();
    event.stopPropagation();
    if (portal.dataset.dragged === "true") {
      delete portal.dataset.dragged;
      return;
    }
    if (activePortal === portal) closeProjectPeek();
    else openProjectPeek(portal);
  });
}

projectPeekClose?.addEventListener("click", closeProjectPeek);
projectPeekVisit?.addEventListener("click", visitActiveProject);
mobilePeekQuery.addEventListener("change", closeProjectPeek);
socialTrigger?.addEventListener("click", () => {
  closeProjectPeek();
  if (infoDialog && typeof infoDialog.showModal === "function") infoDialog.showModal();
});

let bubblePhysics;

function initBubblePhysics() {
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let rafId = 0;
  let bubbles = [];
  let lastTime = 0;
  let activeDrag = null;

  const stop = () => {
    cancelAnimationFrame(rafId);
    rafId = 0;
  };

  const reset = () => {
    stop();
    bubbles = [];
    activeDrag = null;
    orbit.classList.remove("bubble-field--active");
    orbit.querySelectorAll(".portal").forEach((portal) => {
      portal.style.removeProperty("transform");
    });
  };

  const start = () => {
    reset();
    if (reduceMotionQuery.matches) return;

    const bounds = orbit.getBoundingClientRect();
    const portals = [...orbit.querySelectorAll(".portal")];
    const safeTop = 0;
    const safeBottom = 72;
    const placements = [
      [0.19, 0.25],
      [0.76, 0.22],
      [0.74, 0.65],
      [0.2, 0.69],
      [0.5, 0.47],
    ];

    bubbles = portals.map((element, index) => {
      const size = element.getBoundingClientRect().width;
      const [xRatio, yRatio] = placements[index] || [0.5, 0.5];
      return {
        element,
        size,
        x: Math.max(8, Math.min(bounds.width - size - 8, bounds.width * xRatio - size / 2)),
        y: Math.max(safeTop, Math.min(bounds.height - size - safeBottom, bounds.height * yRatio - size / 2)),
        vx: (index % 2 ? -1 : 1) * (15 + index * 1.7),
        vy: (index < 2 ? 1 : -1) * (12 + index * 1.5),
        dragging: false,
      };
    });

    bubbles.forEach((bubble) => {
      bubble.element.addEventListener("pointerdown", (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        const bounds = orbit.getBoundingClientRect();
        const pointX = event.clientX - bounds.left;
        const pointY = event.clientY - bounds.top;
        activeDrag = {
          bubble,
          pointerId: event.pointerId,
          offsetX: pointX - bubble.x,
          offsetY: pointY - bubble.y,
          startX: pointX,
          startY: pointY,
          moved: false,
          lastX: pointX,
          lastY: pointY,
          lastTime: performance.now(),
        };
        bubble.dragging = true;
        bubble.element.classList.add("portal--dragging");
        bubble.element.setPointerCapture?.(event.pointerId);
        event.preventDefault();
        event.stopPropagation();
      });

      bubble.element.addEventListener("pointermove", (event) => {
        if (!activeDrag || activeDrag.bubble !== bubble || activeDrag.pointerId !== event.pointerId) return;
        const bounds = orbit.getBoundingClientRect();
        const pointX = event.clientX - bounds.left;
        const pointY = event.clientY - bounds.top;
        if (Math.hypot(pointX - activeDrag.startX, pointY - activeDrag.startY) > 6) activeDrag.moved = true;
        const now = performance.now();
        const elapsed = Math.max((now - activeDrag.lastTime) / 1000, 0.016);
        bubble.x = Math.max(6, Math.min(orbit.clientWidth - bubble.size - 6, pointX - activeDrag.offsetX));
        bubble.y = Math.max(0, Math.min(orbit.clientHeight - bubble.size - 72, pointY - activeDrag.offsetY));
        bubble.vx = (pointX - activeDrag.lastX) / elapsed;
        bubble.vy = (pointY - activeDrag.lastY) / elapsed;
        activeDrag.lastX = pointX;
        activeDrag.lastY = pointY;
        activeDrag.lastTime = now;
        event.preventDefault();
      });

      const releaseDrag = (event) => {
        if (!activeDrag || activeDrag.bubble !== bubble || activeDrag.pointerId !== event.pointerId) return;
        if (activeDrag.moved) bubble.element.dataset.dragged = "true";
        bubble.dragging = false;
        bubble.element.classList.remove("portal--dragging");
        bubble.element.releasePointerCapture?.(event.pointerId);
        activeDrag = null;
      };

      bubble.element.addEventListener("pointerup", releaseDrag);
      bubble.element.addEventListener("pointercancel", releaseDrag);
    });

    orbit.classList.add("bubble-field--active");
    lastTime = performance.now();
    rafId = requestAnimationFrame(tick);
  };

  const tick = (now) => {
    const delta = Math.min((now - lastTime) / 1000, 0.04);
    lastTime = now;
    const width = orbit.clientWidth;
    const height = orbit.clientHeight;
    const top = 0;
    const bottom = 96;

    bubbles.forEach((bubble) => {
      if (bubble.dragging) return;
      bubble.x += bubble.vx * delta;
      bubble.y += bubble.vy * delta;

      if (bubble.x <= 6 || bubble.x + bubble.size >= width - 6) {
        bubble.vx *= -1;
        bubble.x = Math.max(6, Math.min(width - bubble.size - 6, bubble.x));
      }
      if (bubble.y <= top || bubble.y + bubble.size >= height - bottom) {
        bubble.vy *= -1;
        bubble.y = Math.max(top, Math.min(height - bubble.size - bottom, bubble.y));
      }
    });

    for (let i = 0; i < bubbles.length; i += 1) {
      for (let j = i + 1; j < bubbles.length; j += 1) {
        const a = bubbles[i];
        const b = bubbles[j];
        const ax = a.x + a.size / 2;
        const ay = a.y + a.size / 2;
        const bx = b.x + b.size / 2;
        const by = b.y + b.size / 2;
        const dx = bx - ax;
        const dy = by - ay;
        const distance = Math.hypot(dx, dy) || 0.01;
        const minimum = (a.size + b.size) / 2;

        if (distance < minimum) {
          const nx = dx / distance;
          const ny = dy / distance;
          const overlap = (minimum - distance) / 2;
          a.x -= nx * overlap;
          a.y -= ny * overlap;
          b.x += nx * overlap;
          b.y += ny * overlap;

          const relativeVelocity = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
          if (relativeVelocity > 0) {
            const impulse = relativeVelocity * 0.94;
            a.vx -= impulse * nx;
            a.vy -= impulse * ny;
            b.vx += impulse * nx;
            b.vy += impulse * ny;
          }
        }
      }
    }

    bubbles.forEach((bubble) => {
      bubble.element.style.transform = `translate3d(${bubble.x.toFixed(2)}px, ${bubble.y.toFixed(2)}px, 0)`;
    });
    rafId = requestAnimationFrame(tick);
  };

  const restart = () => window.requestAnimationFrame(start);
  window.addEventListener("resize", restart, { passive: true });
  mobileQuery.addEventListener("change", restart);
  reduceMotionQuery.addEventListener("change", restart);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else restart();
  });
  start();

  return { reset };
}

function render() {
  closeInfoDialog();
  closeProjectPeek();
  if (bubblePhysics) bubblePhysics.reset();
  orbit.innerHTML = projects.map(buildPortal).join("");
  bindInteractions();
  bubblePhysics = initBubblePhysics();
}

render();
window.addEventListener("pageshow", closeInfoDialog);
