<template>
  <div class="achievement-container">
    <div class="header">
      <h1>TON AI Builders Day</h1>
      <p class="subtitle">Hong Kong Web3 Festival · SkillsBay Demo</p>
    </div>
    
    <div class="description">
      <p>与 TON 链团队 Yuki 深度交流，促成 <strong>TON 基金会亚太团队</strong> 与区块谷团队正式会谈近一小时，深入讨论 SkillsBay 产品。</p>
      <p>受 TON 基金会亚太团队邀请，在香港 Web3 嘉年华中参与 TON AI Builders Day 活动现场 Demo 演示团队产品 SkillsBay。</p>
    </div>
    
    <div class="image-gallery">
      <div v-for="index in 5" :key="index" class="image-item">
        <img :src="getImageUrl(index)" :alt="`TON活动图片 ${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievement5',
  methods: {
    getImageUrl(index) {
      return new URL(`../assets/image/TON/${index}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #0088cc 0%, #005f99 50%, #003d66 100%);
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
    
    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #00d4ff, #0088cc, #00ffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 2px 10px rgba(0, 212, 255, 0.3));
    }
    
    .subtitle {
      font-size: 20px;
      color: #b0e0ff;
      letter-spacing: 2px;
    }
  }
  
  .description {
    max-width: 900px;
    margin: 0 auto 60px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(0, 212, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    
    p {
      color: #ffffff;
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
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(0, 212, 255, 0.2);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 48px rgba(0, 212, 255, 0.4);
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
