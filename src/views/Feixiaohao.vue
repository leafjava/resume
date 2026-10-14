<template>
  <div class="achievement-container">
    <div class="header">
      <h1>非小号 · Feixiaohao</h1>
      <p class="subtitle">特邀嘉宾 · 黑客松战队 · 创新论坛</p>
    </div>

    <div class="gallery-section">
      <h2 class="gallery-title">
        <span class="title-bar"></span>
        <span class="title-text">直播现场</span>
        <span class="title-sub">Live Highlights</span>
        <span class="title-bar"></span>
      </h2>
      <p class="gallery-desc">三期《K 博士侃币》直播官方海报 · 含主持人、特邀嘉宾与冠名赞助</p>
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

    <div class="description">
      <p>
        与 <strong>非小号（Feixiaohao）</strong> 长期合作：作为 <strong>《K 博士侃币》特邀嘉宾</strong> 参与多期深度话题直播，并组建 <strong>WayAgent FX 黑客松战队</strong>，代表非小号 × WayToWeb4 出战 GWDC 2026 KOREA Hackathon，持续深耕 AI × Web3 交叉领域。
      </p>
    </div>

    <!-- 议题一 -->
    <div class="episode">
      <div class="episode-meta">
        <span class="episode-date">2026 · 08 · 14（周五）</span>
        <span class="episode-tag">AI Agent</span>
      </div>
      <h2 class="episode-title">
        《扎克伯格说人人都有超级助手：普通人终于有私人助理，还是把整个人生交给 AI 平台？》
      </h2>

      <div class="episode-body">
        <h3>话题核心</h3>
        <p>
          扎克伯格描绘的"人人拥有个人超级智能"，AI 不再只是回答问题的聊天机器人，而是长期理解用户目标、习惯、生活背景的个人助手。
        </p>
        <p>
          支持者视其为能力平权，反对者则担忧隐私、单点风险与平台锁定。
        </p>

        <h3>作为 AI 全栈开发工程师的观点</h3>
        <ul>
          <li><strong>技术本质</strong>：超级助手 = LLM Agent + 多模态感知 + 工具调用 + 长记忆，四件事缺一不可。</li>
          <li><strong>真正的瓶颈不是能力，而是数据所有权</strong>：AI 越懂你，就越需要读取你的人生。问题不在 AI，而在数据归属与流转的架构。</li>
          <li><strong>Web3 是天然解药</strong>：本地化推理 + 链上身份 + 可验证授权 + 可迁移数据，让 AI 助手"属于用户"而不是平台。</li>
          <li><strong>开发者该做的事</strong>：做开源、可审计、可迁移的 Agent，而不是又一座数据孤岛；让"换平台能带走记忆"成为默认能力。</li>
          <li><strong>责任边界</strong>：买错东西、转错账、决策失误，必须有可追责的 Agent 行为日志，而不是让用户和模型互相甩锅。</li>
        </ul>
        <p class="episode-vote">
          我的态度：<strong>YES，但需要主权架构</strong>。愿意把日程、购物、支付交给 AI 助手，但前提是助手归我、记忆可带走、权限可审计。
        </p>
      </div>
    </div>

    <!-- 议题二 -->
    <div class="episode">
      <div class="episode-meta">
        <span class="episode-date">2026 · 08 · 17（周一）</span>
        <span class="episode-tag">Meme / 注意力经济</span>
      </div>
      <h2 class="episode-title">
        《热点被不断金融化，Meme 币的注意力经济是否已经走到极限？》
      </h2>

      <div class="episode-body">
        <h3>话题核心</h3>
        <p>
          热点一出圈，同名 Meme 币立即批量上线；一句名人互动，可能被市场解读为"站台"并快速拉升。
          热点生命周期变短、同质化代币变多、资金被持续分散，普通用户往往错过最早一轮行情。
        </p>

        <h3>作为 AI 全栈开发工程师的观点</h3>
        <ul>
          <li><strong>注意力经济本质是流量→情绪→资本的转化漏斗</strong>，Meme 币只是这套模型的链上化。</li>
          <li><strong>从产品迭代看</strong>：Meme 币不���消失，只会换叙事、换平台、换玩法。"到极限"是个伪命题，下一轮总会用新外壳复活。</li>
          <li><strong>AI Agent 正在改变 Meme 玩法</strong>：自动监控热点、自动生成叙事、自动做市、自动跟单，这会进一步压缩普通人的反应窗口。</li>
          <li><strong>开发者能做的事</strong>：构建更透明的资金流向工具、更公平的发射机制，把"信息不对称"从收割工具变成保护工具。</li>
          <li><strong>真正的护城河</strong>：不是判断下一个 Meme 是哪个，而是构建长期沉淀社区与文化的项目，让注意力变成留存，而不是流量。</li>
        </ul>
        <p class="episode-vote">
          我的态度：<strong>NO，远未到极限</strong>。叙事会迭代，工具在升级，注意力经济只会越来越成熟，而不是枯竭。
        </p>
      </div>
    </div>

    <!-- 议题三 -->
    <div class="episode">
      <div class="episode-meta">
        <span class="episode-date">2026 · 08 · 12（周三）</span>
        <span class="episode-tag">RWA × Meme</span>
      </div>
      <h2 class="episode-title">
        《美股代币给 Meme 币当底池：是 RWA 创新，还是让土狗穿上西装？》
      </h2>

      <div class="episode-body">
        <h3>话题核心</h3>
        <p>
          Four.meme 推出 Stock Meme 玩法，过去 Meme 币底池是"币对 BNB 或稳定币"，现在可以用 NVDAb、SPCXb 等代币化股票作为交易对另一端。
        </p>
        <p>
          美股财报、公司新闻、SpaceX 发射等现实事件，可能影响底池资产、社区讨论和交易热度。
        </p>

        <h3>作为 AI 全栈开发工程师的观点</h3>
        <ul>
          <li><strong>底池创新本质是流动性的重新组合</strong>，交易对变了，定价机制没变：依然是情绪 + 资金 + 流量。</li>
          <li><strong>警惕"标签式 RWA"</strong>：用美股代币买 Meme，不等于持有英伟达股票，没有股权、分红、现金流、赎回权。本质上还是用故事讲故事。</li>
          <li><strong>真正的 RWA 应该具备四件事</strong>：可验证资产、链上可追溯、清晰赎回机制、合规框架，否则只是穿了西装的土狗。</li>
          <li><strong>从开发者视角看机会</strong>：需要更稳健的预言机、更透明的智能合约、更公平的反作弊机制，而不是只换交易对。</li>
          <li><strong>Meme 与 RWA 的真正结合点</strong>：不是给 Meme 找"体面外衣"，而是让链上资产获得"消费场景"——这才是双向的价值放大。</li>
        </ul>
        <p class="episode-vote">
          我的态度：<strong>NO，本质仍是情绪炒作</strong>。底池的另一边换了，不给 Meme 带来股权、分红或赎回价值。交易对变了，"土狗"还是"土狗"，只是西装换了颜色。
        </p>
      </div>
    </div>

    <!-- WayAgent FX 黑客松战队 -->
    <div class="team-section">
      <h2 class="team-section-title">
        <span class="title-bar"></span>
        <span class="title-text">WayAgent FX 黑客松战队</span>
        <span class="title-sub">非小号 × WayToWeb4 出征 GWDC 2026 KOREA</span>
        <span class="title-bar"></span>
      </h2>
      <p class="team-section-desc">
        成立 <strong>WayAgent FX 黑客军团</strong>，代表 <strong>非小号 × WayToWeb4</strong> 赴韩国首尔参加 GWDC 2026 KOREA Hackathon。
        以 48 小时实战形式，在 <strong>AI × Blockchain × Finance</strong> 方向持续探索与共建。
      </p>

      <div class="team-meta-grid">
        <div class="team-meta-card">
          <div class="meta-icon">🏆</div>
          <div class="meta-label">赛事</div>
          <div class="meta-value">GWDC 2026 KOREA</div>
        </div>
        <div class="team-meta-card">
          <div class="meta-icon">📅</div>
          <div class="meta-label">时间</div>
          <div class="meta-value">2026 · 09 · 28 – 30</div>
        </div>
        <div class="team-meta-card">
          <div class="meta-icon">📍</div>
          <div class="meta-label">地点</div>
          <div class="meta-value">韩国首尔 aT Center</div>
        </div>
        <div class="team-meta-card">
          <div class="meta-icon">🎯</div>
          <div class="meta-label">任务</div>
          <div class="meta-value">FURIOSA · DELEGATED FINANCE AGENT</div>
        </div>
      </div>

      <div class="team-poster">
        <a href="https://feixiaohao.ai/news/163379?tab=article" target="_blank" rel="noopener">
          <img :src="teamMain" alt="WayAgent FX 出征海报" loading="lazy" />
        </a>
      </div>

      <h3 class="sub-block-title">
        <span class="sub-icon">📰</span>
        媒体报道 · Media Coverage
      </h3>
      <div class="media-grid">
        <a
          href="https://feixiaohao.ai/news/163379?tab=article"
          target="_blank"
          rel="noopener"
          class="media-item"
        >
          <div class="media-image">
            <img :src="teamImg1" alt="非小号官方新闻" loading="lazy" />
          </div>
          <div class="media-info">
            <span class="media-source">
              <span class="source-tag">官方</span>
              feixiaohao.ai
            </span>
            <span class="media-title">
              GWDC 黑客松倒计时：WayAgent FX 代表非小号 × WayToWeb4 集结出征
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
            <img :src="teamImg2" alt="金色财经报道" loading="lazy" />
          </div>
          <div class="media-info">
            <span class="media-source">
              <span class="source-tag">财经</span>
              jinse.com · 金色财经
            </span>
            <span class="media-title">
              GWDC 黑客松倒计时：WayAgent FX 代表非小号 × WayToWeb4 集结出征
            </span>
            <span class="media-date">2026 · 09 · 29</span>
          </div>
        </a>
      </div>

      <h3 class="sub-block-title">
        <span class="sub-icon">🤝</span>
        社区与行业支持 · Community Partners
      </h3>
      <div class="support-grid">
        <div class="support-item">
          <div class="support-image">
            <img :src="teamImg3" alt="TinTinLand 社区支持" loading="lazy" />
          </div>
          <div class="support-info">
            <span class="support-name">TinTinLand</span>
            <span class="support-role">社区合作伙伴 · Community Partner</span>
          </div>
        </div>
        <div class="support-item">
          <div class="support-image">
            <img :src="teamImg4" alt="大树财经 Tree Finance" loading="lazy" />
          </div>
          <div class="support-info">
            <span class="support-name">大树财经 Tree Finance</span>
            <span class="support-role">社区合作伙伴 · Community Partner</span>
          </div>
        </div>
        <div class="support-item">
          <div class="support-image">
            <img :src="teamImg5" alt="王岳华 DraperDragon 祝福" loading="lazy" />
          </div>
          <div class="support-info">
            <span class="support-name">王岳华 · DraperDragon</span>
            <span class="support-role">行业祝福 · Industry Wishes</span>
          </div>
        </div>
      </div>

      <h3 class="sub-block-title">
        <span class="sub-icon">📸</span>
        首尔现场实况 · Live from Seoul
      </h3>
      <div class="live-grid">
        <div class="live-item">
          <div class="live-image">
            <img :src="teamImg6" alt="现场参会" loading="lazy" />
          </div>
          <div class="live-caption">aT Center · 参会团队合影</div>
        </div>
        <div class="live-item live-item-wide">
          <div class="live-image">
            <img :src="teamImg7" alt="非小号×GWDC 2026 创新论坛" loading="lazy" />
          </div>
          <div class="live-caption">
            非小号 × GWDC 2026 创新论坛 · 9.29 韩国首尔 aT Center
          </div>
        </div>
      </div>
    </div>

    <div class="description closing">
      <p>
        从《K 博士侃币》直播的议题交锋，到 GWDC 2026 KOREA 的 48 小时极限 Build，与 <strong>非小号</strong> 的合作让我对 <strong>AI × Web3</strong> 的交叉领域有了更深的思考。
        期待未来继续与非小号、WayToWeb4 及各位行业伙伴一起，探讨真正有价值的技术与产品。
      </p>
      <div class="hashtags">
        <span>#feixiaohao</span>
        <span>#非小号</span>
        <span>#K博士侃币</span>
        <span>#WayAgentFX</span>
        <span>#WayToWeb4</span>
        <span>#GWDC2026</span>
        <span>#黑客松</span>
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
      gallery: [
        {
          id: 1,
          image: img1,
          date: '2026 · 08 · 10',
          topic: '预测市场',
          tag: 'Prediction',
          title: '五秒钟改写预测市场输赢'
        },
        {
          id: 2,
          image: img2,
          date: '2026 · 08 · 17',
          topic: 'Meme · 注意力经济',
          tag: 'Meme',
          title: '热点一夜变成 Meme 币'
        },
        {
          id: 3,
          image: img3,
          date: '2026 · 08 · 14',
          topic: 'AI Agent',
          tag: 'AI Agent',
          title: '人人都有超级助手'
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
      margin-bottom: 30px;

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