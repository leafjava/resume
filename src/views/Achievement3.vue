<template>
  <div class="achievement-container">
    <div class="header">
      <h1>ENI Electronic Negotiable Instrument System Project</h1>
      <p class="subtitle">Electronic Negotiable Instrument System</p>
    </div>

    <div class="description">
      <p>Successfully brought together the Chairman of Louxiaoer (with Alibaba investment; previously attracted proactive collaboration talks from Liu Qiangdong of JD.com and the owner of Tao Tao Ju), Ma Li — Co-founder of Hanbai Technology and Chairman of the first Student Union of the School of Digital Intelligence at Guangdong University of Finance & Economics (who led his team to a cumulative ¥400M in funding with a ¥2B valuation, becoming a niche-sector unicorn), and Lin Zhifeng — former Chairman of Hangu Technology, a subsidiary of Longshine Technology — for a 2+ hour meeting at Brother Feng's company to discuss the ENI Electronic Negotiable Instrument project.</p>
      <p>Successfully facilitated a meeting between Ma Li (Chairman of Louxiaoer) and Lin Zhifeng (former Executive Director of a Longshine Technology subsidiary). Successfully invited by ENI CEO Arion to a small group discussion on the ENI × Lixun Technology Electronic Negotiable Instrument project plan.</p>
    </div>
    
    <div class="featured-image">
      <img :src="featuredImage" alt="ENI Project Highlight" />
    </div>
    

    
    <div class="image-gallery">
      <div v-for="(img, index) in images" :key="index" class="image-item">
        <img :src="img.url" :alt="`ENI Project Image ${index + 1}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievement3',
  data() {
    return {
      featuredImage: new URL('../assets/image/ENI/8.jpg', import.meta.url).href,
      images: [
        { url: new URL('../assets/image/ENI/1.jpg', import.meta.url).href },
        { url: new URL('../assets/image/ENI/2.jpg', import.meta.url).href },
        { url: new URL('../assets/image/ENI/3.jpg', import.meta.url).href },
        { url: new URL('../assets/image/ENI/4.jpg', import.meta.url).href },
        { url: new URL('../assets/image/ENI/5.png', import.meta.url).href },
        { url: new URL('../assets/image/ENI/6.png', import.meta.url).href },
        { url: new URL('../assets/image/ENI/7.png', import.meta.url).href },
        { url: new URL('../assets/image/ENI/9.png', import.meta.url).href },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
    
    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #3498db, #2ecc71, #1abc9c);
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
  
  .featured-image {
    max-width: 1200px;
    margin: 0 auto 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
    border: 3px solid rgba(52, 152, 219, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 20px 60px rgba(52, 152, 219, 0.4);
    }
    
    img {
      width: 100%;
      height: auto;
      display: block;
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
        box-shadow: 0 12px 48px rgba(52, 152, 219, 0.3);
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
    
    .featured-image {
      margin-bottom: 30px;
      border-radius: 12px;
      border-width: 2px;
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
