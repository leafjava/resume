<template>
  <div class="achievement-container">
    <div class="header">
      <h1>Web3Labs × Injective × Microsoft 新星计划</h1>
      <p class="subtitle">Injective Nova Program · Global Top 10</p>
    </div>

    <div class="description">
      <p>
        在 Injective、Microsoft 与 Web3Labs 联合举办的全球新星计划中，从 <strong>87 支队伍</strong>中脱颖而出，成功晋级 <strong>Top 10</strong>。
      </p>
      <p>
        该计划汇聚全球优秀 Web3 开发者与创业者，旨在发掘和培养下一代区块链与 AI 领域的创新力量。
      </p>
      <p>
        通过多轮筛选与项目展示，最终跻身十强，获得行业顶级资源对接与导师指导机会。
      </p>

      <div class="link-button">
        <a href="https://injective.com/zh/blog/injective-nova-program-cn" target="_blank" rel="noopener noreferrer">
          <span class="icon">🔗</span>
          <span class="text">查看官方介绍</span>
        </a>
      </div>
    </div>

    <div class="image-gallery">
      <div v-for="index in 7" :key="index" class="image-item">
        <img :src="getImageUrl(index)" :alt="`新星计划图片 ${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewStar',
  methods: {
    getImageUrl(index) {
      return new URL(`../assets/image/newStar/${index}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a1845 0%, #1e2a78 35%, #4a2b8a 70%, #2a1850 100%);

  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;

    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #00d4ff, #7b9cff, #b06cff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 2px 10px rgba(0, 212, 255, 0.3));
    }

    .subtitle {
      font-size: 20px;
      color: #b8c5e8;
      letter-spacing: 2px;
    }
  }

  .description {
    max-width: 900px;
    margin: 0 auto 60px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(123, 156, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    p {
      color: #e8edff;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 16px;
      text-align: justify;

      strong {
        color: #00d4ff;
        font-weight: 600;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .link-button {
      margin-top: 30px;
      text-align: center;

      a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 32px;
        background: linear-gradient(135deg, #00d4ff, #7b9cff);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 212, 255, 0.5);
          background: linear-gradient(135deg, #00e4ff, #8badff);
        }

        .icon {
          font-size: 18px;
        }

        .text {
          letter-spacing: 0.5px;
        }
      }
    }
  }

  .image-gallery {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    padding: 20px;

    .image-item {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(123, 156, 255, 0.2);

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 48px rgba(0, 212, 255, 0.3);
        border-color: rgba(0, 212, 255, 0.5);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.05);
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
        font-size: 28px;
      }

      .subtitle {
        font-size: 14px;
      }
    }

    .description {
      padding: 20px;
      margin-bottom: 40px;

      p {
        font-size: 14px;
        line-height: 1.6;
      }
    }

    .image-gallery {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 10px;
    }
  }
}
</style>