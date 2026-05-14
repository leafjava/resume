<template>
  <div class="gwdc-page">
    <div class="hero-section">
      <h1 class="title">GWDC 2025 Champion 🏆</h1>
      <p class="subtitle">Google Web Developer Challenge - Global Winner</p>
    </div>

    <section class="video-section">
      <h2>Competition Highlights</h2>
      <div class="video-container">
        <video controls>
          <source src="@/assets/video/gwdcRecord.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <section class="interview-section">
      <h2>Media Coverage</h2>
      <a 
        href="https://x.com/Web3Twinkle/status/2022987039571091961" 
        target="_blank" 
        rel="noopener noreferrer"
        class="interview-card"
      >
        <img src="@/assets/image/gwdc/interview.jpg" alt="金色财经采访">
        <div class="interview-overlay">
          <span>View Interview on X →</span>
        </div>
      </a>
      <a 
        href="https://x.com/Web3Twinkle/status/2022987039571091961" 
        target="_blank" 
        rel="noopener noreferrer"
        class="view-more-btn"
      >
        View Interview on X →
      </a>
    </section>

    <section class="gallery-section">
      <h2>Event Gallery</h2>
      <div class="gallery-grid">
        <!-- <img src="@/assets/image/gwdc/3.jpg" alt="GWDC Event 1"> -->
        <img src="@/assets/image/gwdc/champions2.jpg" alt="GWDC Champions 2">
        <img src="@/assets/image/gwdc/champions3.jpg" alt="GWDC Champions 3">
      </div>
      <a 
        href="https://m.piufoto.com/album/bf18fe1f1eb1be8fdfdebdff457e49df/1266520733?menu=live" 
        target="_blank" 
        rel="noopener noreferrer"
        class="view-more-btn"
      >
        View Official Photo Album →
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GWDC'
}
</script>

<style lang="scss" scoped>
.gwdc-page {
  padding-top: 100px;
  min-height: 100vh;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-cyan);
  text-align: center;
}

.video-section .video-container {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 245, 255, 0.2);
}

.video-section .video-container video {
  width: 100%;
  height: auto;
  display: block;
}

.interview-section .interview-card {
  display: block;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 245, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.interview-section .interview-card img {
  width: 100%;
  height: auto;
  display: block;
}

.interview-section .interview-card .interview-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.interview-section .interview-card .interview-overlay span {
  color: var(--color-cyan);
  font-size: 1.2rem;
  font-weight: 600;
}

.interview-section .interview-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 48px rgba(0, 245, 255, 0.3);
}

.interview-section .interview-card:hover .interview-overlay {
  transform: translateY(0);
}

.gallery-section .gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.gallery-section .gallery-grid img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 245, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-section .gallery-grid img:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 48px rgba(0, 245, 255, 0.3);
}

.interview-section .view-more-btn {
  display: block;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: var(--color-bg);
  font-weight: 600;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-section .view-more-btn {
  display: block;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: var(--color-bg);
  font-weight: 600;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.gallery-section .view-more-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 245, 255, 0.4);
}

@media (max-width: 768px) {
  .gwdc-page {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .gallery-section .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .gallery-section .gallery-grid img {
    height: 250px;
  }
}
</style>