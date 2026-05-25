<template>
  <div class="achievement-container">
    <div class="header">
      <h1>开发者港湾：AI时代的香港机遇</h1>
      <p class="subtitle">Developer Harbor: Hong Kong Opportunities in the AI Era</p>
    </div>
    
    <div class="description">
      <p>很高兴能在"开发者港湾：AI时代的香港机遇"活动中接受媒体采访，并且和全国政协吴杰庄议员沟通好几分钟关于OpenClaw项目的想法，希望后续继续推进。</p>
      <p>和清华大学区块链协会、北京大学区块链协会沟通，与Web3Labs主办方CEO交流，还有OpenClaw成都负责人Timi沟通，和浙江大学区块链协会会长Freya沟通交流。</p>
    </div>
    
    <div class="image-gallery">
      <div v-for="(img, index) in images" :key="index" class="image-item">
        <img :src="img.url" :alt="`开发者港湾活动图片 ${index + 1}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievement2',
  data() {
    return {
      images: [
        { url: new URL('../assets/image/beijing/1.jpg', import.meta.url).href },
        { url: new URL('../assets/image/beijing/2.png', import.meta.url).href },
        { url: new URL('../assets/image/beijing/3.png', import.meta.url).href },
        { url: new URL('../assets/image/beijing/4.jpg', import.meta.url).href },
        { url: new URL('../assets/image/beijing/5.jpg', import.meta.url).href },
        { url: new URL('../assets/image/beijing/6.jpg', import.meta.url).href },
        { url: new URL('../assets/image/beijing/7.jpg', import.meta.url).href },
        { url: new URL('../assets/image/beijing/8.jpg', import.meta.url).href },
        { url: new URL('../assets/image/beijing/9.jpg', import.meta.url).href }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
    
    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #ffd700, #ff8c00, #ff6347);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .subtitle {
      font-size: 20px;
      color: #a0a0a0;
      letter-spacing: 2px;
    }
  }
  
  .description {
    max-width: 900px;
    margin: 0 auto 60px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    
    p {
      color: #e0e0e0;
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
      background: rgba(255, 255, 255, 0.05);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 48px rgba(255, 215, 0, 0.3);
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
