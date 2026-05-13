<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">联系我</h2>
        <p class="section-subtitle">Get In Touch</p>
        <p class="contact-intro">期待与您探讨 AI + Web3 领域的合作机会</p>
      </div>

      <div class="contact-grid">
        <a v-for="contact in contacts" :key="contact.name" 
           :href="contact.link" 
           class="contact-card"
           target="_blank"
           rel="noopener noreferrer">
          <div class="contact-icon" v-html="contact.icon"></div>
          <div class="contact-info">
            <h3 class="contact-name">{{ contact.name }}</h3>
            <p class="contact-value">{{ contact.value }}</p>
          </div>
          <div class="contact-arrow">→</div>
        </a>
      </div>

      <div class="resume-download">
        <button @click="downloadResume" class="download-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 15L8 11H11V3H13V11H16L12 15Z" fill="currentColor"/>
            <path d="M20 18H4V20H20V18Z" fill="currentColor"/>
          </svg>
          <span>下载完整 PDF 简历</span>
        </button>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2026 林燊 | Lin Shen. All Rights Reserved.</p>
        <p class="footer-tagline">Built with passion for Web3 & AI 🚀</p>
      </div>
    </footer>
  </section>
</template>

<script setup>
const contacts = [
  {
    name: 'X / Twitter',
    value: '@linshen',
    link: 'https://twitter.com/linshen',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
  },
  {
    name: 'LinkedIn',
    value: 'Lin Shen',
    link: 'https://linkedin.com/in/linshen',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
  },
  {
    name: '微信',
    value: 'linshen_web3',
    link: '#',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>'
  },
  {
    name: 'Email',
    value: 'linshen@web3.com',
    link: 'mailto:linshen@web3.com',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>'
  },
  {
    name: 'GitHub',
    value: '@linshen',
    link: 'https://github.com/linshen',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
  },
  {
    name: 'Telegram',
    value: '@linshen_web3',
    link: 'https://t.me/linshen_web3',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
  }
]

const downloadResume = () => {
  alert('PDF 简历下载功能 - 请将您的简历 PDF 放在 public 文件夹中')
  // window.open('/resume.pdf', '_blank')
}
</script>

<style scoped>
.contact {
  padding: 8rem 2rem 0;
  background: var(--color-bg-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.contact-intro {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-card:hover {
  border-color: var(--color-cyan);
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 245, 255, 0.2);
}

.contact-icon {
  color: var(--color-cyan);
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
}

.contact-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.3rem;
}

.contact-value {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.contact-arrow {
  font-size: 1.5rem;
  color: var(--color-cyan);
  transition: transform 0.3s ease;
}

.contact-card:hover .contact-arrow {
  transform: translateX(5px);
}

.resume-download {
  text-align: center;
  padding: 3rem 0;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 3rem;
  background: var(--gradient-primary);
  color: var(--color-bg-primary);
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 245, 255, 0.4);
}

.footer {
  margin-top: 6rem;
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 245, 255, 0.1);
}

.footer-content {
  text-align: center;
}

.copyright {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  opacity: 0.7;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .download-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
