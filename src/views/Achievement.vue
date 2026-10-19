<template>
  <div class="achievement-container">
    <div class="header">
      <h1>Light Crossing · LIGHT CROSSING</h1>
      <p class="subtitle">AI · THE LIGHT BETWEEN TWO WORLDS</p>
    </div>

    <div class="description">
      <p>Thanks to Dashu Finance for the invitation — honored to participate in this AI-themed discussion as a next-gen representative.</p>
      <p>Especially happy to have exchanged ideas with Mr. Han Feng, author of "Stablecoins" and a Harvard researcher. He participated in Justin Sun's closed-door meeting and patiently listened to my project idea demonstrated on iPad, offering valuable feedback.</p>
      <p>Also honored to have in-depth discussions with Dr. Cai Zhichuan, President of the Asian Blockchain Society.</p>
      <p>Very glad to engage with outstanding next-gen figures including key members of the Tsinghua University Blockchain Association and the President of the Guangzhou Blockchain Association. Looking forward to growing together with all the seniors and peers, and jointly driving innovation in AI and blockchain!</p>

      <div class="link-button">
        <a href="https://m.alltuu.com/album/ddfeaa668cd44df99abf3afdb001cb1c/?menu=live" target="_blank" rel="noopener noreferrer">
          <span class="icon">🔗</span>
          <span class="text">View Event Details</span>
        </a>
      </div>
    </div>

    <div class="image-gallery">
      <div v-for="index in 10" :key="index" class="image-item">
        <img :src="getImageUrl(index)" :alt="`Light Crossing Event Image ${index}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievement',
  methods: {
    getImageUrl(index) {
      return new URL(`../assets/image/media/${index}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-container {
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(135deg, #0a4d68 0%, #1a1a2e 50%, #4a1a3a 100%);
  
  .header {
    text-align: center;
    margin-bottom: 40px;
    color: white;
    
    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
      background: linear-gradient(90deg, #00d4ff, #7b2ff7, #ff006e);
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
    
    .link-button {
      margin-top: 30px;
      text-align: center;
      
      a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 32px;
        background: linear-gradient(135deg, #00d4ff, #7b2ff7);
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
          background: linear-gradient(135deg, #00e4ff, #8b3ff7);
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
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 48px rgba(0, 212, 255, 0.3);
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
        font-size: 32px;
      }
      
      .subtitle {
        font-size: 16px;
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