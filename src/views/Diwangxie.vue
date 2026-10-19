<template>
  <div class="diwangxie-container">
    <div class="header">
      <h1>NetEase Zhipin × ClawHive King Crab · National Skill Competition</h1>
      <p class="subtitle">Zhenjiang, Jiangsu Stop · Runner-up</p>
    </div>

    <div class="description">
      <p>
        In September 2026, I was invited to participate in the <strong>NetEase Zhipin × ClawHive King Crab</strong> <strong>National Skill Competition</strong> held in Zhenjiang, Jiangsu, standing out among outstanding developers nationwide to win <strong>Runner-up</strong>.
      </p>
      <p>
        The competition, themed <strong>"AI Empowerment · A New Journey Forward"</strong>, focused on AI skill development and industrial implementation. I took the stage as a featured guest to share and was recognized by judges and peers for my Skill-building capabilities.
      </p>

      <div class="link-button">
        <a
          href="https://m.alltuu.com/album/cd0ee08c49ea1e3d4746068ada5b8c9e/?from=qrCode&menu=live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="icon">📷</span>
          <span class="text">View Official Event Album</span>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <div class="info-icon">🏆</div>
        <div class="info-label">Award</div>
        <div class="info-value">Runner-up</div>
      </div>
      <div class="info-card">
        <div class="info-icon">📅</div>
        <div class="info-label">Date</div>
        <div class="info-value">September 2026</div>
      </div>
      <div class="info-card">
        <div class="info-icon">📍</div>
        <div class="info-label">Location</div>
        <div class="info-value">Zhenjiang, Jiangsu</div>
      </div>
      <div class="info-card">
        <div class="info-icon">🎯</div>
        <div class="info-label">Theme</div>
        <div class="info-value">AI Empowerment · A New Journey Forward</div>
      </div>
    </div>

    <h2 class="block-title">
      <span class="bar"></span>
      Award Certificate & Crystal Trophy
      <span class="bar"></span>
    </h2>

    <div class="award-row">
      <div class="award-card">
        <div class="image-wrap">
          <img :src="awardCert" alt="Award Certificate" loading="lazy" />
        </div>
        <div class="award-caption">
          <span class="caption-tag">Certificate</span>
          <span class="caption-title">NetEase Zhipin King Crab ClawHive · National Skill Competition (Zhenjiang Stop) · Runner-up</span>
        </div>
      </div>
      <div class="award-card">
        <div class="image-wrap">
          <img :src="awardTrophy" alt="Crystal Trophy" loading="lazy" />
        </div>
        <div class="award-caption">
          <span class="caption-tag">Trophy</span>
          <span class="caption-title">ClawHive King Crab · National Skill Competition (Zhenjiang Stop) · 2026.09</span>
        </div>
      </div>
    </div>

    <h2 class="block-title">
      <span class="bar"></span>
      Onsite Highlights
      <span class="bar"></span>
    </h2>

    <div class="gallery-row">
      <div class="gallery-card">
        <div class="image-wrap">
          <img :src="onStage" alt="Award Ceremony" loading="lazy" />
        </div>
        <div class="gallery-caption">
          <span class="caption-tag">Award Ceremony</span>
          <span class="caption-title">On stage with the certificate and trophy</span>
        </div>
      </div>
      <div class="gallery-card">
        <div class="image-wrap">
          <img :src="speaking" alt="Keynote Speech" loading="lazy" />
        </div>
        <div class="gallery-caption">
          <span class="caption-tag">Keynote</span>
          <span class="caption-title">Onsite keynote · AI Empowerment</span>
        </div>
      </div>
    </div>

    <div class="closing">
      <p>
        Starting from the Zhenjiang stop of <strong>NetEase Zhipin × ClawHive King Crab</strong>, competing on the same stage with top developers nationwide, I gained not just a runner-up certificate but also real-world experience of <strong>building Skills from 0 to 1, from idea to implementation</strong>.
      </p>
      <div class="hashtags">
        <span>#NetEaseZhipin</span>
        <span>#ClawHive</span>
        <span>#KingCrab</span>
        <span>#SkillCompetition</span>
        <span>#RunnerUp</span>
        <span>#AIEmpowerment</span>
        <span>#AI</span>
        <span>#Zhenjiang</span>
      </div>
    </div>
  </div>
</template>

<script>
import awardCert from '../assets/image/diwangxie/1.jpg'
import awardTrophy from '../assets/image/diwangxie/3.jpg'
import onStage from '../assets/image/diwangxie/2.jpg'
import speaking from '../assets/image/diwangxie/4.jpg'

export default {
  name: 'Diwangxie',
  data() {
    return {
      awardCert,
      awardTrophy,
      onStage,
      speaking
    }
  }
}
</script>

<style lang="scss" scoped>
.diwangxie-container {
  min-height: 100vh;
  padding: 100px 20px 60px;
  background: linear-gradient(135deg, #1a0a0a 0%, #4a0e1f 35%, #8b1e2d 70%, #2a0a14 100%);
  color: #ffe6e0;

  .header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 38px;
      font-weight: 800;
      margin-bottom: 14px;
      background: linear-gradient(90deg, #ff6b6b, #ffa07a, #ffd86f, #ffa07a, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 2px 12px rgba(255, 107, 107, 0.35));
      letter-spacing: 1px;
    }

    .subtitle {
      font-size: 18px;
      color: #ffb8a0;
      letter-spacing: 2px;
    }
  }

  .description {
    max-width: 900px;
    margin: 0 auto 40px;
    padding: 28px 32px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 107, 107, 0.25);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(139, 30, 45, 0.25);

    p {
      color: #ffe6e0;
      font-size: 15.5px;
      line-height: 1.85;
      margin-bottom: 14px;
      text-align: justify;

      &:last-of-type {
        margin-bottom: 0;
      }

      strong {
        color: #ffb8a0;
        font-weight: 600;
      }
    }

    .link-button {
      margin-top: 22px;
      display: flex;
      justify-content: center;

      a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 12px 24px;
        background: linear-gradient(135deg, #ff6b6b, #ff8e53);
        color: #ffffff;
        text-decoration: none;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.35);
        transition: transform 0.25s ease, box-shadow 0.25s ease;

        .icon {
          font-size: 18px;
        }

        .arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255, 107, 107, 0.5);

          .arrow {
            transform: translateX(4px);
          }
        }
      }
    }
  }

  .info-grid {
    max-width: 1100px;
    margin: 0 auto 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;

    .info-card {
      padding: 22px 18px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 107, 107, 0.25);
      border-radius: 14px;
      text-align: center;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 107, 107, 0.6);
        box-shadow: 0 12px 30px rgba(255, 107, 107, 0.25);
      }

      .info-icon {
        font-size: 28px;
        margin-bottom: 6px;
      }

      .info-label {
        font-size: 12px;
        color: #ffb8a0;
        letter-spacing: 2px;
        margin-bottom: 8px;
        text-transform: uppercase;
        opacity: 0.8;
      }

      .info-value {
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.5px;
      }
    }
  }

  .block-title {
    max-width: 1100px;
    margin: 50px auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;

    .bar {
      flex: 0 0 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ff6b6b);

      &:last-child {
        background: linear-gradient(90deg, #ff6b6b, transparent);
      }
    }
  }

  .award-row,
  .gallery-row {
    max-width: 1200px;
    margin: 0 auto 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 24px;
  }

  .award-card,
  .gallery-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 107, 107, 0.25);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(255, 107, 107, 0.6);
      box-shadow: 0 16px 40px rgba(255, 107, 107, 0.3);

      .image-wrap img {
        transform: scale(1.04);
      }
    }

    .image-wrap {
      width: 100%;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: #0f0a0a;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }
    }

    .award-caption,
    .gallery-caption {
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-top: 1px solid rgba(255, 107, 107, 0.15);

      .caption-tag {
        flex-shrink: 0;
        padding: 0.3rem 0.7rem;
        background: rgba(255, 107, 107, 0.15);
        border: 1px solid rgba(255, 107, 107, 0.4);
        border-radius: 999px;
        font-size: 11px;
        color: #ffb8a0;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .caption-title {
        font-size: 13px;
        color: #ffe6e0;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }

  .closing {
    max-width: 900px;
    margin: 60px auto 0;
    padding: 28px 32px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 107, 107, 0.2);
    border-radius: 16px;
    text-align: center;

    p {
      color: #ffe6e0;
      font-size: 15px;
      line-height: 1.85;
      margin-bottom: 20px;

      strong {
        color: #ffb8a0;
        font-weight: 600;
      }
    }

    .hashtags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      justify-content: center;

      span {
        padding: 0.4rem 0.9rem;
        background: rgba(255, 107, 107, 0.12);
        border: 1px solid rgba(255, 107, 107, 0.35);
        border-radius: 999px;
        font-size: 0.85rem;
        color: #ffb8a0;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 768px) {
  .diwangxie-container {
    padding: 100px 10px 30px;

    .header {
      margin-bottom: 28px;

      h1 {
        font-size: 22px;
        letter-spacing: 0;
      }

      .subtitle {
        font-size: 13px;
      }
    }

    .description {
      padding: 20px;
      margin-bottom: 28px;

      p {
        font-size: 14px;
        line-height: 1.7;
      }

      .link-button a {
        font-size: 12px;
        padding: 10px 18px;
      }
    }

    .info-grid {
      gap: 12px;
      margin-bottom: 30px;

      .info-card {
        padding: 16px 12px;

        .info-icon {
          font-size: 24px;
        }

        .info-value {
          font-size: 13px;
        }
      }
    }

    .block-title {
      font-size: 16px;
      letter-spacing: 1.5px;
      margin: 36px auto 16px;
      gap: 10px;

      .bar {
        flex: 0 0 24px;
      }
    }

    .award-row,
    .gallery-row {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .closing {
      padding: 20px;
      margin-top: 40px;

      p {
        font-size: 14px;
        text-align: left;
      }
    }
  }
}
</style>
