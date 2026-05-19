<template>
  <div class="achievement-container">
    <div class="header">
      <h1>ENI电子提单系统项目</h1>
      <p class="subtitle">Electronic Negotiable Instrument System</p>
    </div>

    <div class="description">
      <p>成功邀请楼小二董事长（有阿里入资，曾有京东刘强东和陶陶居老板主动谈合作）、汉柏科技联合创始人广财数智学院第一届学生会主席马力师兄（曾带领团队完成累计4亿元融资，公司估值达20亿元，成为细分领域独角兽企业）、前朗新科技子公司涵谷科技董事长林志峰哥一起去峰哥公司开会聊天两个多小时关于ENI电子提单系统方面项目</p>
      <p>成功撮合邀请楼小二董事长马力,前朗新科技子公司执行董事林志峰一起商谈开会。成功受ENI CEO Arion邀请拉小群商谈ENI×丽迅科技电子提单项目规划</p>
    </div>
    
    <div class="featured-image">
      <img :src="featuredImage" alt="ENI项目重点展示" />
    </div>
    

    
    <div class="image-gallery">
      <div v-for="(img, index) in images" :key="index" class="image-item">
        <img :src="img.url" :alt="`ENI项目图片 ${index + 1}`" />
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
