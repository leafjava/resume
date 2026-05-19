<template>
  <div class="achievement-container">
    <div class="header">
      <h1>openclaw主题交流活动</h1>
      <p class="subtitle">OpenClaw & AI Era Discussion</p>
    </div>
    
    <div class="description">
      <p>很荣幸受邀作为嘉宾，参加Agent主题交流。与ClawOS联合创始人兼OpenClaw早期发起人Vito、至诚无间创始人方天义哥、万维肆零合伙人Patrick & Robin、Resomate创始人渡文、CpAi+ Advisor Loyal路遥、模力社区发起人江明超等几位大咖同台分享经验，收获颇多。</p>
      <p>活动结束后还一起聚餐聊天，感受到大家对AI时代的热情与思考。感谢主办方和各位前辈的分享与指点，希望未来能与大家继续交流，共同拥抱AI时代！</p>
    </div>
    
    <div class="image-gallery">
      <div v-for="index in 10" :key="index" class="image-item">
        <img :src="getImageUrl(index)" :alt="`OpenClaw活动图片 ${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievement4',
  methods: {
    getImageUrl(index) {
      return new URL(`../assets/image/openclaw/${index}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
    
    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #fff, #f0f0f0, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    
    .subtitle {
      font-size: 20px;
      color: #e0e0e0;
      letter-spacing: 2px;
    }
  }
  
  .description {
    max-width: 900px;
    margin: 0 auto 60px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    
    p {
      color: #ffffff;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 16px;
      text-align: justify;
      
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
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: rgba(255, 255, 255, 0.1);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 48px rgba(255, 255, 255, 0.3);
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
    padding: 20px 10px;
    
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
