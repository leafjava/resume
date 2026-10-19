<template>
  <div class="achievement-container">
    <div class="header">
      <h1>Feixiaohao</h1>
      <p class="subtitle">Featured Guest · Hackathon Team · Innovation Forum</p>
    </div>

    <!-- Tab Navigation: one on each side, click to switch -->
    <div class="tab-nav" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        role="tab"
        :aria-selected="activeTab === tab.id"
        @click="switchTab(tab.id)"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-text">
          <span class="tab-label">{{ tab.label }}</span>
          <span class="tab-sub">{{ tab.sub }}</span>
        </span>
      </button>
    </div>

    <!-- Featured Guest Tab -->
    <transition name="fade" mode="out-in">
      <div v-if="activeTab === 'guest'" key="guest" class="tab-panel">
        <div class="description">
          <p>
            As a <strong>featured guest on "Dr. K's Crypto Talk"</strong>, I've joined multiple deep-dive livestreams alongside hosts Dr. Ken, 13Yi.Luffy, Lin Ye, and other industry leaders. Sharing technical and product insights from the perspective of an <strong>AI full-stack developer</strong>.
          </p>
        </div>

        <div class="gallery-section">
          <h2 class="gallery-title">
            <span class="title-bar"></span>
            <span class="title-text">Live Highlights</span>
            <span class="title-sub">Livestream Moments</span>
            <span class="title-bar"></span>
          </h2>
          <p class="gallery-desc">Official posters from 3 episodes of "Dr. K's Crypto Talk" · Featuring hosts, guests, and sponsors</p>
          <div class="image-gallery">
            <a
              v-for="item in gallery"
              :key="item.id"
              :href="item.image"
              target="_blank"
              rel="noopener"
              class="image-item"
            >
              <div class="image-wrap">
                <img :src="item.image" :alt="item.title" loading="lazy" />
                <div class="image-overlay">
                  <span class="overlay-date">{{ item.date }}</span>
                  <span class="overlay-topic">{{ item.topic }}</span>
                </div>
              </div>
              <div class="image-caption">
                <span class="caption-tag">{{ item.tag }}</span>
                <span class="caption-title">{{ item.title }}</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Episode 1 -->
        <div class="episode">
          <div class="episode-meta">
            <span class="episode-date">2026 · 08 · 14 (Fri)</span>
            <span class="episode-tag">AI Agent</span>
          </div>
          <h2 class="episode-title">
            "Zuckerberg Says Everyone Will Have a Super Assistant: Will Regular People Finally Get a Personal Assistant, or Hand Over Their Entire Lives to an AI Platform?"
          </h2>

          <div class="episode-body">
            <h3>Topic Core</h3>
            <p>
              Zuckerberg's vision of "personal superintelligence for everyone" — AI is no longer just a chatbot that answers questions, but a personal assistant that long-term understands user goals, habits, and life context.
            </p>
            <p>
              Supporters see it as capability equalization; opponents worry about privacy, single-point risks, and platform lock-in.
            </p>

            <h3>My View as an AI Full-Stack Developer</h3>
            <ul>
              <li><strong>Technical essence</strong>: A super assistant = LLM Agent + multi-modal perception + tool calling + long-term memory. All four are essential.</li>
              <li><strong>The real bottleneck isn't capability, but data ownership</strong>: The more an AI knows you, the more it needs to read your life. The issue isn't AI itself, but the architecture of data attribution and flow.</li>
              <li><strong>Web3 is the natural remedy</strong>: On-device inference + on-chain identity + verifiable authorization + portable data — making the AI assistant "belong to the user" rather than the platform.</li>
              <li><strong>What developers should do</strong>: Build open, auditable, portable Agents — not another data silo. Make "switching platforms while keeping your memory" the default.</li>
              <li><strong>Boundaries of responsibility</strong>: For wrong purchases, wrong transfers, or flawed decisions, we need accountable Agent behavior logs — not letting users and models blame each other.</li>
            </ul>
            <p class="episode-vote">
              My stance: <strong>YES, but with a sovereign architecture</strong>. I'm willing to hand schedules, shopping, and payments to an AI assistant — but only if it belongs to me, memory is portable, and permissions are auditable.
            </p>
          </div>
        </div>

        <!-- Episode 2 -->
        <div class="episode">
          <div class="episode-meta">
            <span class="episode-date">2026 · 08 · 17 (Mon)</span>
            <span class="episode-tag">Meme / Attention Economy</span>
          </div>
          <h2 class="episode-title">
            "Trends Keep Getting Financialized — Has the Meme Coin Attention Economy Already Hit Its Limit?"
          </h2>

          <div class="episode-body">
            <h3>Topic Core</h3>
            <p>
              As soon as a trend breaks out, same-name Meme coins are launched in bulk; a single celebrity interaction can be interpreted as "endorsement" and quickly pumps the price.
              Trend lifecycles are getting shorter, homogeneous tokens multiply, capital is continuously scattered, and regular users often miss the earliest wave.
            </p>

            <h3>My View as an AI Full-Stack Developer</h3>
            <ul>
              <li><strong>The attention economy is essentially a traffic → emotion → capital conversion funnel</strong>; Meme coins are just the on-chain version of this model.</li>
              <li><strong>From a product iteration view</strong>: Meme coins won't disappear — they'll just change narrative, platform, and gameplay. "Hitting the limit" is a false premise; the next cycle will always revive it in a new shell.</li>
              <li><strong>AI Agents are changing Meme gameplay</strong>: Auto-monitoring trends, auto-generating narratives, auto-market-making, auto-copy-trading — this further compresses the reaction window for ordinary people.</li>
              <li><strong>What developers can do</strong>: Build more transparent fund-flow tools and fairer launch mechanisms, turning "information asymmetry" from a harvesting tool into a protective one.</li>
              <li><strong>The real moat</strong>: It's not about guessing the next Meme, but building projects with long-term community and culture — turning attention into retention, not just traffic.</li>
            </ul>
            <p class="episode-vote">
              My stance: <strong>NO, far from the limit</strong>. Narratives iterate, tools upgrade — the attention economy will only mature, not dry up.
            </p>
          </div>
        </div>

        <!-- Episode 3 -->
        <div class="episode">
          <div class="episode-meta">
            <span class="episode-date">2026 · 08 · 12 (Wed)</span>
            <span class="episode-tag">RWA × Meme</span>
          </div>
          <h2 class="episode-title">
            "US Stock Tokens as Liquidity Pools for Meme Coins: RWA Innovation, or Just Rugged Memes in Suits?"
          </h2>

          <div class="episode-body">
            <h3>Topic Core</h3>
            <p>
              Four.meme launched the Stock Meme mechanic: previously, Meme coin pools were paired with BNB or stablecoins; now tokenized stocks like NVDAb and SPCXb can be used as the other side of the trading pair.
            </p>
            <p>
              Real-world events like US stock earnings, company news, and SpaceX launches may influence pool assets, community discussions, and trading heat.
            </p>

            <h3>My View as an AI Full-Stack Developer</h3>
            <ul>
              <li><strong>Pool innovation is essentially a recombination of liquidity</strong> — the trading pair changes, but the pricing mechanism doesn't: it's still emotion + capital + traffic.</li>
              <li><strong>Beware "label-style RWA"</strong>: Buying a Meme with a US stock token ≠ holding Nvidia stock — no equity, no dividends, no cash flow, no redemption rights. It's still storytelling wrapped in storytelling.</li>
              <li><strong>Real RWA should have four things</strong>: Verifiable assets, on-chain traceability, clear redemption mechanism, and a compliance framework. Otherwise it's just rugged memes in suits.</li>
              <li><strong>Developer perspective on opportunity</strong>: We need more robust oracles, more transparent smart contracts, fairer anti-cheat mechanisms — not just swapping trading pairs.</li>
              <li><strong>The true meeting point of Meme and RWA</strong>: It's not putting a "decent coat" on Meme, but giving on-chain assets real "consumption scenarios" — that's the real value amplification in both directions.</li>
            </ul>
            <p class="episode-vote">
              My stance: <strong>NO, it's still emotional speculation at its core</strong>. Changing the other side of the pool doesn't give Meme coins equity, dividends, or redemption value. The trading pair changed, but the rugged meme is still a rugged meme — just a different suit.
            </p>
          </div>
        </div>
      </div>

      <!-- Hackathon Team Tab -->
      <div v-else key="team" class="tab-panel">
        <div class="description">
          <p>
            Founded the <strong>WayAgent FX Hackathon Legion</strong>, representing <strong>Feixiaohao × WayToWeb4</strong> at the GWDC 2026 KOREA Hackathon in Seoul, South Korea — a 48-hour extreme build, continuing to explore and co-create in the <strong>AI × Blockchain × Finance</strong> direction.
          </p>
        </div>

        <div class="team-section">
          <h2 class="team-section-title">
            <span class="title-bar"></span>
            <span class="title-text">WayAgent FX Hackathon Team</span>
            <span class="title-sub">Feixiaohao × WayToWeb4 at GWDC 2026 KOREA</span>
            <span class="title-bar"></span>
          </h2>

          <div class="team-meta-grid">
            <div class="team-meta-card">
              <div class="meta-icon">🏆</div>
              <div class="meta-label">Event</div>
              <div class="meta-value">GWDC 2026 KOREA</div>
            </div>
            <div class="team-meta-card">
              <div class="meta-icon">📅</div>
              <div class="meta-label">Date</div>
              <div class="meta-value">2026 · 09 · 28 – 30</div>
            </div>
            <div class="team-meta-card">
              <div class="meta-icon">📍</div>
              <div class="meta-label">Location</div>
              <div class="meta-value">aT Center, Seoul, South Korea</div>
            </div>
            <div class="team-meta-card">
              <div class="meta-icon">🎯</div>
              <div class="meta-label">Mission</div>
              <div class="meta-value">FURIOSA · DELEGATED FINANCE AGENT</div>
            </div>
          </div>

          <div class="team-poster">
            <a href="https://feixiaohao.ai/news/163379?tab=article" target="_blank" rel="noopener">
              <img :src="teamMain" alt="WayAgent FX Departure Poster" loading="lazy" />
            </a>
          </div>

          <h3 class="sub-block-title">
            <span class="sub-icon">📰</span>
            Media Coverage
          </h3>
          <div class="media-grid">
            <a
              href="https://feixiaohao.ai/news/163379?tab=article"
              target="_blank"
              rel="noopener"
              class="media-item"
            >
              <div class="media-image">
                <img :src="teamImg1" alt="Feixiaohao Official News" loading="lazy" />
              </div>
              <div class="media-info">
                <span class="media-source">
                  <span class="source-tag">Official</span>
                  feixiaohao.ai
                </span>
                <span class="media-title">
                  GWDC Hackathon Countdown: WayAgent FX Represents Feixiaohao × WayToWeb4 on Departure
                </span>
                <span class="media-date">2026 · 09 · 26</span>
              </div>
            </a>
            <a
              href="https://www.jinse.com.cn/blockchain/3739063.html"
              target="_blank"
              rel="noopener"
              class="media-item"
            >
              <div class="media-image">
                <img :src="teamImg2" alt="Jinse Finance Report" loading="lazy" />
              </div>
              <div class="media-info">
                <span class="media-source">
                  <span class="source-tag">Finance</span>
                  jinse.com · Jinse Finance
                </span>
                <span class="media-title">
                  GWDC Hackathon Countdown: WayAgent FX Represents Feixiaohao × WayToWeb4 on Departure
                </span>
                <span class="media-date">2026 · 09 · 29</span>
              </div>
            </a>
          </div>

          <h3 class="sub-block-title">
            <span class="sub-icon">🤝</span>
            Community & Industry Support · Community Partners
          </h3>
          <div class="support-grid">
            <div class="support-item">
              <div class="support-image">
                <img :src="teamImg3" alt="TinTinLand Community Support" loading="lazy" />
              </div>
              <div class="support-info">
                <span class="support-name">TinTinLand</span>
                <span class="support-role">Community Partner</span>
              </div>
            </div>
            <div class="support-item">
              <div class="support-image">
                <img :src="teamImg4" alt="Dashu Finance Tree Finance" loading="lazy" />
              </div>
              <div class="support-info">
                <span class="support-name">Dashu Finance · Tree Finance</span>
                <span class="support-role">Community Partner</span>
              </div>
            </div>
            <div class="support-item">
              <div class="support-image">
                <img :src="teamImg5" alt="Wang Yuehua DraperDragon Wishes" loading="lazy" />
              </div>
              <div class="support-info">
                <span class="support-name">Wang Yuehua · DraperDragon</span>
                <span class="support-role">Industry Wishes</span>
              </div>
            </div>
          </div>

          <h3 class="sub-block-title">
            <span class="sub-icon">📸</span>
            Live from Seoul
          </h3>
          <div class="live-grid">
            <div class="live-item">
              <div class="live-image">
                <img :src="teamImg6" alt="Onsite Group Photo" loading="lazy" />
              </div>
              <div class="live-caption">aT Center · Group photo of attending teams</div>
            </div>
            <div class="live-item live-item-wide">
              <div class="live-image">
                <img :src="teamImg7" alt="Feixiaohao x GWDC 2026 Innovation Forum" loading="lazy" />
              </div>
              <div class="live-caption">
                Feixiaohao × GWDC 2026 Innovation Forum · Sep 29, aT Center, Seoul, South Korea
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="description closing">
      <p>
        From the topic clashes on "Dr. K's Crypto Talk" livestreams to the 48-hour extreme build at GWDC 2026 KOREA, my collaboration with <strong>Feixiaohao</strong> has given me deeper thinking on the intersection of <strong>AI × Web3</strong>. Looking forward to continuing to explore truly valuable technology and products with Feixiaohao, WayToWeb4, and all industry partners.
      </p>
      <div class="hashtags">
        <span>#feixiaohao</span>
        <span>#DrKTalksCrypto</span>
        <span>#WayAgentFX</span>
        <span>#WayToWeb4</span>
        <span>#GWDC2026</span>
        <span>#Hackathon</span>
        <span>#AI</span>
        <span>#AIAgent</span>
        <span>#Web3</span>
        <span>#Meme</span>
        <span>#RWA</span>
        <span>#FURIOSA</span>
        <span>#DelegatedFinanceAgent</span>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/image/feixiaohao/1.jpg'
import img2 from '../assets/image/feixiaohao/2.jpg'
import img3 from '../assets/image/feixiaohao/3.jpg'

import teamMain from '../assets/image/feixiaohao/team/4.jpg'
import teamImg1 from '../assets/image/feixiaohao/team/1.jpg'
import teamImg2 from '../assets/image/feixiaohao/team/2.jpg'
import teamImg3 from '../assets/image/feixiaohao/team/3.jpg'
import teamImg4 from '../assets/image/feixiaohao/team/4.jpg'
import teamImg5 from '../assets/image/feixiaohao/team/5.jpg'
import teamImg6 from '../assets/image/feixiaohao/team/6.jpg'
import teamImg7 from '../assets/image/feixiaohao/team/7.jpg'

export default {
  name: 'Feixiaohao',
  data() {
    return {
      activeTab: 'guest',
      tabs: [
        { id: 'guest', icon: '🎙️', label: 'Featured Guest', sub: 'Dr. K\'s Crypto Talk' },
        { id: 'team', icon: '🏆', label: 'Hackathon Team', sub: 'WayAgent FX' }
      ],
      gallery: [
        {
          id: 1,
          image: img1,
          date: '2026 · 08 · 10',
          topic: 'Prediction Markets',
          tag: 'Prediction',
          title: 'How 5 Seconds Can Rewrite a Prediction Market Outcome'
        },
        {
          id: 2,
          image: img2,
          date: '2026 · 08 · 17',
          topic: 'Meme · Attention Economy',
          tag: 'Meme',
          title: 'A Trending Topic Turns into a Meme Coin Overnight'
        },
        {
          id: 3,
          image: img3,
          date: '2026 · 08 · 14',
          topic: 'AI Agent',
          tag: 'AI Agent',
          title: 'Everyone Gets a Super Assistant'
        }
      ],
      teamMain,
      teamImg1,
      teamImg2,
      teamImg3,
      teamImg4,
      teamImg5,
      teamImg6,
      teamImg7
    }
  },
  methods: {
    switchTab(id) {
      this.activeTab = id
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 35%, #0f3460 70%, #1a1a2e 100%);

  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;

    h1 {
      font-size: 42px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #ff9a3c, #ffd86f, #ff9a3c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 2px 10px rgba(255, 154, 60, 0.3));
    }

    .subtitle {
      font-size: 18px;
      color: #ffd9b3;
      letter-spacing: 2px;
    }
  }

  .tab-nav {
    max-width: 900px;
    margin: 0 auto 40px;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;

    .tab-btn {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 22px 24px;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(10px);
      border: 1.5px solid rgba(255, 154, 60, 0.2);
      border-radius: 16px;
      color: #ffe6cf;
      cursor: pointer;
      text-align: left;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #ff9a3c, #ffd86f);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      &:hover {
        background: rgba(255, 154, 60, 0.08);
        border-color: rgba(255, 154, 60, 0.45);
        transform: translateY(-2px);
      }

      &.active {
        background: linear-gradient(135deg, rgba(255, 154, 60, 0.18), rgba(255, 216, 111, 0.1));
        border-color: rgba(255, 154, 60, 0.65);
        box-shadow: 0 10px 30px rgba(255, 154, 60, 0.25);

        &::before {
          transform: scaleX(1);
        }

        .tab-icon {
          transform: scale(1.1);
          background: linear-gradient(135deg, #ff9a3c, #ffd86f);
          box-shadow: 0 6px 18px rgba(255, 154, 60, 0.5);
        }

        .tab-label {
          color: #ffffff;
        }

        .tab-sub {
          color: #ffd9a8;
        }
      }

      .tab-icon {
        flex-shrink: 0;
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        background: rgba(255, 154, 60, 0.12);
        border-radius: 12px;
        transition: all 0.3s ease;
      }

      .tab-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }

      .tab-label {
        font-size: 18px;
        font-weight: 700;
        color: #ffe6cf;
        letter-spacing: 1.5px;
        transition: color 0.3s ease;
      }

      .tab-sub {
        font-size: 12px;
        color: #ffd9b3;
        letter-spacing: 1px;
        opacity: 0.75;
        transition: color 0.3s ease;
      }
    }
  }

  .tab-panel {
    min-height: 400px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .fade-enter-from {
    opacity: 0;
    transform: translateY(8px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  .description {
    max-width: 900px;
    margin: 0 auto 50px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 154, 60, 0.25);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    p {
      color: #ffe6cf;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 16px;
      text-align: justify;

      strong {
        color: #ff9a3c;
        font-weight: 600;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.closing {
      margin-top: 60px;
    }

    .hashtags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-top: 24px;
      justify-content: center;

      span {
        padding: 0.4rem 0.9rem;
        background: rgba(255, 154, 60, 0.12);
        border: 1px solid rgba(255, 154, 60, 0.35);
        border-radius: 999px;
        font-size: 0.85rem;
        color: #ffd9a8;
        font-weight: 500;
      }
    }
  }

  .episode {
    max-width: 900px;
    margin: 0 auto 50px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 154, 60, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

    .episode-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 16px;
    }

    .episode-date {
      display: inline-block;
      padding: 0.45rem 1rem;
      background: rgba(255, 154, 60, 0.12);
      border: 1px solid rgba(255, 154, 60, 0.35);
      border-radius: 999px;
      font-size: 0.85rem;
      color: #ffd9a8;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .episode-tag {
      display: inline-block;
      padding: 0.4rem 0.9rem;
      background: rgba(255, 216, 111, 0.1);
      border: 1px solid rgba(255, 216, 111, 0.3);
      border-radius: 999px;
      font-size: 0.8rem;
      color: #ffd86f;
      font-weight: 500;
    }

    .episode-title {
      font-size: 22px;
      font-weight: 700;
      line-height: 1.5;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .episode-body {
      h3 {
        font-size: 1.05rem;
        font-weight: 700;
        color: #ff9a3c;
        margin: 20px 0 10px;
        letter-spacing: 0.5px;

        &:first-child {
          margin-top: 0;
        }
      }

      p {
        color: #ffe6cf;
        font-size: 15px;
        line-height: 1.8;
        margin-bottom: 14px;
        text-align: justify;

        strong {
          color: #ffd86f;
          font-weight: 600;
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0 0 18px;

        li {
          position: relative;
          padding-left: 1.5rem;
          color: #ffe6cf;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 10px;
          text-align: justify;

          &::before {
            content: '▸';
            position: absolute;
            left: 0;
            top: 0;
            color: #ff9a3c;
            font-weight: 700;
          }

          strong {
            color: #ffd86f;
            font-weight: 600;
            margin-right: 4px;
          }
        }
      }

      .episode-vote {
        margin-top: 16px;
        padding: 14px 18px;
        background: rgba(255, 154, 60, 0.1);
        border-left: 3px solid #ff9a3c;
        border-radius: 8px;
        color: #ffffff;

        strong {
          color: #ffd86f;
          font-weight: 700;
        }
      }
    }
  }

  .gallery-section {
    max-width: 1400px;
    margin: 20px auto 50px;
    padding: 0 20px;

    .gallery-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-bottom: 12px;
      color: #ffffff;

      .title-bar {
        flex: 0 0 60px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ff9a3c);
        border-radius: 2px;

        &:last-child {
          background: linear-gradient(90deg, #ff9a3c, transparent);
        }
      }

      .title-text {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 4px;
        background: linear-gradient(90deg, #ff9a3c, #ffd86f, #ff9a3c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .title-sub {
        font-size: 13px;
        font-weight: 500;
        color: #ffd9b3;
        letter-spacing: 2px;
        opacity: 0.8;
      }
    }

    .gallery-desc {
      text-align: center;
      color: #ffd9b3;
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: 30px;
      opacity: 0.85;
    }
  }

  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    padding: 0;

    .image-item {
      display: block;
      text-decoration: none;
      color: inherit;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 154, 60, 0.2);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 48px rgba(255, 154, 60, 0.35);
        border-color: rgba(255, 154, 60, 0.55);

        .image-wrap img {
          transform: scale(1.06);
        }

        .image-overlay {
          opacity: 1;
        }
      }

      .image-wrap {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: #0f1224;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 16px 18px;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 18, 36, 0.92));
          opacity: 0;
          transition: opacity 0.3s ease;

          .overlay-date {
            font-size: 12px;
            color: #ffd86f;
            letter-spacing: 1px;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .overlay-topic {
            font-size: 15px;
            color: #ffffff;
            font-weight: 700;
            letter-spacing: 1px;
          }
        }
      }

      .image-caption {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 18px;
        border-top: 1px solid rgba(255, 154, 60, 0.15);

        .caption-tag {
          flex-shrink: 0;
          padding: 0.3rem 0.7rem;
          font-size: 11px;
          font-weight: 600;
          color: #ffd86f;
          background: rgba(255, 154, 60, 0.12);
          border: 1px solid rgba(255, 154, 60, 0.35);
          border-radius: 999px;
          letter-spacing: 0.5px;
        }

        .caption-title {
          font-size: 14px;
          color: #ffe6cf;
          font-weight: 500;
          line-height: 1.4;
        }
      }
    }
  }

  .team-section {
    max-width: 1400px;
    margin: 80px auto 0;
    padding: 0 20px;

    .team-section-title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 14px;
      color: #ffffff;

      .title-bar {
        flex: 0 0 60px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ff9a3c);
        border-radius: 2px;

        &:last-child {
          background: linear-gradient(90deg, #ff9a3c, transparent);
        }
      }

      .title-text {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 3px;
        background: linear-gradient(90deg, #ff9a3c, #ffd86f, #ff9a3c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .title-sub {
        font-size: 13px;
        font-weight: 500;
        color: #ffd9b3;
        letter-spacing: 2px;
        opacity: 0.85;
      }
    }

    .team-section-desc {
      max-width: 800px;
      margin: 0 auto 40px;
      text-align: center;
      color: #ffe6cf;
      font-size: 15px;
      line-height: 1.85;

      strong {
        color: #ffd86f;
        font-weight: 600;
      }
    }
  }

  .team-meta-grid {
    max-width: 1100px;
    margin: 0 auto 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;

    .team-meta-card {
      padding: 22px 20px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 154, 60, 0.2);
      border-radius: 14px;
      text-align: center;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 154, 60, 0.5);
        box-shadow: 0 10px 30px rgba(255, 154, 60, 0.2);
      }

      .meta-icon {
        font-size: 28px;
        margin-bottom: 6px;
      }

      .meta-label {
        font-size: 12px;
        color: #ffd9b3;
        letter-spacing: 2px;
        margin-bottom: 8px;
        text-transform: uppercase;
        opacity: 0.7;
      }

      .meta-value {
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.5px;
      }
    }
  }

  .team-poster {
    max-width: 1100px;
    margin: 0 auto 50px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 154, 60, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 24px 60px rgba(255, 154, 60, 0.3);
    }

    a {
      display: block;
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .sub-block-title {
    max-width: 1100px;
    margin: 50px auto 22px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5px;
    border-left: 3px solid #ff9a3c;
    padding-left: 14px;

    .sub-icon {
      font-size: 22px;
    }
  }

  .media-grid {
    max-width: 1100px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 22px;

    .media-item {
      display: flex;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 154, 60, 0.2);
      border-radius: 14px;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(255, 154, 60, 0.55);
        box-shadow: 0 14px 40px rgba(255, 154, 60, 0.25);

        .media-image img {
          transform: scale(1.04);
        }
      }

      .media-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: #0f1224;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
      }

      .media-info {
        padding: 16px 18px 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .media-source {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #ffd9b3;
          letter-spacing: 0.5px;
          font-weight: 600;

          .source-tag {
            padding: 0.2rem 0.55rem;
            background: rgba(255, 154, 60, 0.18);
            border: 1px solid rgba(255, 154, 60, 0.4);
            border-radius: 999px;
            font-size: 10px;
            color: #ffd86f;
            letter-spacing: 1px;
          }
        }

        .media-title {
          font-size: 14px;
          color: #ffe6cf;
          line-height: 1.6;
          font-weight: 500;
        }

        .media-date {
          font-size: 11px;
          color: #ffd9b3;
          opacity: 0.7;
          letter-spacing: 1px;
        }
      }
    }
  }

  .support-grid {
    max-width: 1100px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 22px;

    .support-item {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 154, 60, 0.2);
      border-radius: 14px;
      overflow: hidden;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 154, 60, 0.5);
        box-shadow: 0 12px 36px rgba(255, 154, 60, 0.2);
      }

      .support-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: #0f1224;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }

      .support-info {
        padding: 14px 18px;
        display: flex;
        flex-direction: column;
        gap: 4px;

        .support-name {
          font-size: 15px;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .support-role {
          font-size: 12px;
          color: #ffd9b3;
          letter-spacing: 0.5px;
          opacity: 0.8;
        }
      }
    }
  }

  .live-grid {
    max-width: 1100px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 22px;

    .live-item {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 154, 60, 0.2);
      border-radius: 14px;
      overflow: hidden;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

      &.live-item-wide {
        @media (min-width: 769px) {
          grid-column: span 2;
        }
      }

      &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 154, 60, 0.5);
        box-shadow: 0 12px 36px rgba(255, 154, 60, 0.2);
      }

      .live-image {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: #0f1224;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }

      .live-caption {
        padding: 12px 18px;
        font-size: 13px;
        color: #ffe6cf;
        letter-spacing: 0.5px;
        border-top: 1px solid rgba(255, 154, 60, 0.15);
      }
    }
  }
}

@media (max-width: 768px) {
  .achievement-container {
    padding: 100px 10px 20px;

    .header {
      margin-bottom: 24px;

      h1 {
        font-size: 26px;
      }

      .subtitle {
        font-size: 13px;
      }
    }

    .description {
      padding: 20px;
      margin-bottom: 30px;

      p {
        font-size: 14px;
        line-height: 1.6;
      }
    }

    .episode {
      padding: 22px;
      margin-bottom: 30px;

      .episode-title {
        font-size: 18px;
      }

      .episode-body {
        h3 {
          font-size: 0.95rem;
        }

        p,
        li {
          font-size: 13.5px;
          line-height: 1.65;
        }
      }
    }

    .image-gallery {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .tab-nav {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 24px;
      padding: 0 10px;

      .tab-btn {
        padding: 16px 18px;
        gap: 12px;

        .tab-icon {
          width: 42px;
          height: 42px;
          font-size: 22px;
        }

        .tab-label {
          font-size: 15px;
          letter-spacing: 1px;
        }

        .tab-sub {
          font-size: 11px;
        }
      }
    }

    .tab-panel {
      min-height: 300px;
    }

    .gallery-section {
      padding: 0 10px;
      margin-top: 40px;

      .gallery-title {
        gap: 10px;

        .title-bar {
          flex: 0 0 30px;
        }

        .title-text {
          font-size: 22px;
          letter-spacing: 2px;
        }

        .title-sub {
          font-size: 11px;
        }
      }

      .gallery-desc {
        font-size: 12px;
        margin-bottom: 20px;
      }
    }

    .team-section {
      padding: 0 10px;
      margin-top: 50px;

      .team-section-title {
        gap: 10px;
        flex-direction: row;

        .title-bar {
          flex: 0 0 24px;
        }

        .title-text {
          font-size: 20px;
          letter-spacing: 1.5px;
        }

        .title-sub {
          font-size: 10px;
          letter-spacing: 1px;
          flex-basis: 100%;
          text-align: center;
          margin-top: 2px;
        }
      }

      .team-section-desc {
        font-size: 13px;
        line-height: 1.7;
        margin-bottom: 30px;
      }
    }

    .team-meta-grid {
      gap: 12px;
      margin-bottom: 30px;

      .team-meta-card {
        padding: 18px 14px;

        .meta-icon {
          font-size: 24px;
        }

        .meta-value {
          font-size: 13px;
        }
      }
    }

    .team-poster {
      margin-bottom: 30px;
    }

    .sub-block-title {
      font-size: 15px;
      margin: 36px auto 16px;
      padding-left: 12px;
      letter-spacing: 1px;

      .sub-icon {
        font-size: 18px;
      }
    }

    .media-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .support-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .live-grid {
      grid-template-columns: 1fr;
      gap: 16px;

      .live-item.live-item-wide {
        grid-column: span 1;
      }
    }
  }
}
</style>