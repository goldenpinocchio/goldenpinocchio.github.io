---
permalink: /froggies/
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Froggies — Bitcoin-native pond collection</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #07130b;
        --bg2: #102415;
        --panel: rgba(9, 22, 13, 0.78);
        --panel2: rgba(5, 13, 8, 0.94);
        --ink: #f2ffed;
        --muted: #bad0bb;
        --soft: #7f9b82;
        --line: rgba(191, 255, 185, 0.15);
        --lime: #a7ff83;
        --gold: #ffd86b;
        --orange: #ff9c45;
        --shadow: rgba(0, 0, 0, 0.34);
      }

      * { box-sizing: border-box; }
      html, body { margin: 0; min-height: 100%; }
      body {
        background:
          radial-gradient(circle at 16% 10%, rgba(167,255,131,.16), transparent 27%),
          radial-gradient(circle at 82% 4%, rgba(255,156,69,.10), transparent 24%),
          linear-gradient(180deg, var(--bg2), var(--bg));
        color: var(--ink);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-image:
          linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.016) 1px, transparent 1px);
        background-size: 34px 34px;
        mask-image: linear-gradient(to bottom, black, transparent 78%);
      }
      a { color: inherit; text-decoration: none; }
      .wrap {
        position: relative;
        width: min(1120px, calc(100% - 32px));
        margin: 0 auto;
        padding: 34px 0 42px;
      }
      .shell {
        border: 1px solid var(--line);
        border-radius: 30px;
        background: linear-gradient(180deg, rgba(10, 26, 14, .88), rgba(5, 13, 8, .96));
        box-shadow: 0 24px 70px var(--shadow);
        overflow: hidden;
      }
      .hero {
        display: grid;
        grid-template-columns: 1.25fr .75fr;
        gap: 22px;
        padding: 36px;
        border-bottom: 1px solid var(--line);
      }
      .eyebrow {
        display: inline-flex;
        color: var(--gold);
        text-transform: uppercase;
        letter-spacing: .18em;
        font-size: 12px;
        font-weight: 800;
        margin-bottom: 14px;
      }
      h1 {
        margin: 0;
        font-size: clamp(46px, 7vw, 88px);
        line-height: .92;
        letter-spacing: -.065em;
      }
      .lede {
        max-width: 68ch;
        margin: 17px 0 0;
        color: var(--muted);
        font-size: 16px;
        line-height: 1.68;
      }
      .pills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
      .pill {
        border: 1px solid var(--line);
        border-radius: 999px;
        background: rgba(255,255,255,.035);
        color: #eaffdf;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 700;
      }
      .aside {
        border: 1px solid var(--line);
        border-radius: 22px;
        background: var(--panel2);
        padding: 18px;
        align-self: stretch;
        display: grid;
        align-content: center;
      }
      .asideLabel {
        color: var(--gold);
        letter-spacing: .16em;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 800;
      }
      .big {
        margin-top: 8px;
        font-size: clamp(44px, 5vw, 70px);
        line-height: .95;
        letter-spacing: -.06em;
        font-weight: 900;
      }
      .aside p { margin: 10px 0 0; color: var(--muted); line-height: 1.55; font-size: 13px; }
      .content { padding: 28px 36px 36px; display: grid; gap: 18px; }
      .storyGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .card {
        border: 1px solid var(--line);
        border-radius: 22px;
        background: var(--panel);
        padding: 18px;
      }
      .kicker {
        margin: 0 0 10px;
        color: var(--gold);
        letter-spacing: .15em;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 850;
      }
      h2, h3 { margin: 0; letter-spacing: -.025em; }
      h2 { font-size: clamp(26px, 4vw, 44px); line-height: 1; }
      h3 { font-size: 16px; }
      .card p { margin: 10px 0 0; color: var(--muted); line-height: 1.62; font-size: 14px; }
      .traitIntro { display: flex; justify-content: space-between; gap: 18px; align-items: end; margin-bottom: 16px; }
      .traitIntro p { max-width: 54ch; margin: 8px 0 0; color: var(--muted); line-height: 1.58; }
      .traitGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
      .traitCard h3 { margin-bottom: 12px; color: #f6ffef; }
      .traits { display: flex; flex-wrap: wrap; gap: 8px; }
      .trait {
        border: 1px solid rgba(191,255,185,.12);
        border-radius: 999px;
        background: rgba(255,255,255,.035);
        color: var(--muted);
        padding: 8px 10px;
        font-size: 12px;
        line-height: 1;
      }
      .trait.rare { color: #fff0b6; border-color: rgba(255,216,107,.24); background: rgba(255,216,107,.06); }
      .footer {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        flex-wrap: wrap;
        color: var(--soft);
        font-size: 12px;
        padding-top: 4px;
      }
      .footer a {
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 9px 12px;
        color: var(--ink);
        background: rgba(255,255,255,.035);
      }
      @media (max-width: 900px) {
        .hero, .storyGrid, .traitGrid { grid-template-columns: 1fr; }
        .hero, .content { padding-left: 20px; padding-right: 20px; }
      }
      @media (max-width: 560px) {
        .wrap { width: min(100% - 18px, 1120px); padding-top: 16px; }
        .traitIntro { display: block; }
      }
    </style>
  </head>
  <body>
    <main class="wrap">
      <section class="shell" aria-labelledby="title">
        <div class="hero">
          <div>
            <div class="eyebrow">Froggies</div>
            <h1 id="title">A Bitcoin-native pond collection.</h1>
            <p class="lede">
              Froggies is a clean, collectible pond world built from Bitcoin block data. Each frog is generated from
              deterministic trait logic, with rare bodies, laser eyes, crown props, swamp accessories, and atmospheric
              backgrounds emerging from the chain.
            </p>
            <div class="pills">
              <span class="pill">4032 Froggies</span>
              <span class="pill">2 fc difficulty windows</span>
              <span class="pill">block hash traits</span>
              <span class="pill">pond-first art direction</span>
            </div>
          </div>
          <aside class="aside">
            <div class="asideLabel">Supply</div>
            <div class="big">4032</div>
            <p>Two Bitcoin difficulty windows. One block per Froggie. A small pond with a native source of rarity.</p>
          </aside>
        </div>

        <div class="content">
          <section class="storyGrid" aria-label="Collection notes">
            <article class="card">
              <div class="kicker">The pond</div>
              <h3>Simple, readable, collectible.</h3>
              <p>One hero frog per token, built around clear silhouettes, expressive traits, and a calm swamp mood.</p>
            </article>
            <article class="card">
              <div class="kicker">The chain</div>
              <h3>Bitcoin data sets the traits.</h3>
              <p>The collection uses matching <strong>fc</strong> difficulty windows and block hashes as the source of generation.</p>
            </article>
            <article class="card">
              <div class="kicker">The rarity</div>
              <h3>Rare traits are discovered.</h3>
              <p>Gold, diamond, laser, crown, and aura traits are tied to low hash rolls rather than hand-picked supply.</p>
            </article>
          </section>

          <section class="card" aria-labelledby="traits-title">
            <div class="traitIntro">
              <div>
                <div class="kicker">Trait matrix</div>
                <h2 id="traits-title">Current trait set</h2>
              </div>
              <p>Common traits keep the pond grounded. Rare traits add the sparkle.</p>
            </div>

            <div class="traitGrid">
              <article class="card traitCard">
                <h3>Body Color</h3>
                <div class="traits">
                  <span class="trait">swamp green</span><span class="trait">pastel green</span><span class="trait">turquoise</span><span class="trait">toxic yellow</span><span class="trait">neon pink</span><span class="trait">night black</span><span class="trait">albino white</span><span class="trait">ghost</span><span class="trait rare">gold body</span><span class="trait rare">diamond body</span>
                </div>
              </article>

              <article class="card traitCard">
                <h3>Eyes</h3>
                <div class="traits">
                  <span class="trait">wide sleepy</span><span class="trait">one-eye wink</span><span class="trait">bulging</span><span class="trait">hypnotic spiral</span><span class="trait">gold eyes</span><span class="trait rare">diamond eyes</span><span class="trait rare">laser eyes</span>
                </div>
              </article>

              <article class="card traitCard">
                <h3>Mouth / Expression</h3>
                <div class="traits">
                  <span class="trait">grin</span><span class="trait">croak</span><span class="trait">deadpan</span><span class="trait">shocked</span><span class="trait">frog tongue</span><span class="trait rare">chewing bug</span>
                </div>
              </article>

              <article class="card traitCard">
                <h3>Headgear / Props</h3>
                <div class="traits">
                  <span class="trait">none</span><span class="trait">leaf cap</span><span class="trait">ribbit hoodie</span><span class="trait">bandana</span><span class="trait">goggles</span><span class="trait">pirate hat</span><span class="trait">wizard hat</span><span class="trait">pin wheel hat</span><span class="trait rare">crown</span>
                </div>
              </article>

              <article class="card traitCard">
                <h3>Swamp Accessories</h3>
                <div class="traits">
                  <span class="trait">lily pad</span><span class="trait">fly</span><span class="trait">bubble</span><span class="trait">mushrooms</span><span class="trait">lightning bug</span><span class="trait">bones</span><span class="trait">fishing hook</span><span class="trait rare">coin stack</span>
                </div>
              </article>

              <article class="card traitCard">
                <h3>Background / Aura</h3>
                <div class="traits">
                  <span class="trait">murky pond</span><span class="trait">sunrise marsh</span><span class="trait">moonlit swamp</span><span class="trait">rainy night</span><span class="trait">toxic swamp mist</span><span class="trait">Bitcoin orange glow</span><span class="trait rare">neon vapor</span>
                </div>
              </article>
            </div>
          </section>

          <div class="footer">
            <span>Froggies lives at <strong>/froggies/</strong>.</span>
            <a href="../">Back to home</a>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
