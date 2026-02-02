// ======================
// 页脚组件
// 所有页面通用
// ======================

class FooterComponent {
  constructor(stats = {}) {
    this.stats = stats; // 页面统计数据
    this.init();
  }
  
  init() {
    this.render();
    this.setCurrentDate();
  }
  
  // 渲染页脚
  render() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
      <footer>
        <div class="container">
          <div class="footer-content">
            <ul class="footer-links">
              <li><a href="index.html">首页</a></li>
              <li><a href="bookshelf.html">书架</a></li>
              <li><a href="blog.html">博客</a></li>
              <li><a href="image-host.html">图床</a></li>
              <li><a href="about.html">关于</a></li>
              <li><a href="contact.html">联系</a></li>
            </ul>
            <p class="copyright">© ${currentYear} 个人门户 | 纯静态部署，支持夜间模式与移动端适配</p>
            <p class="copyright">最后更新: <span id="current-date"></span>${this.getStatsHTML()}</p>
          </div>
        </div>
      </footer>
    `;
    
    // 插入到页面末尾
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  
  // 获取统计信息HTML
  getStatsHTML() {
    if (Object.keys(this.stats).length === 0) {
      return '';
    }
    
    let statsHTML = ' | ';
    if (this.stats.articles) {
      statsHTML += `文章: ${this.stats.articles}篇`;
    }
    if (this.stats.books) {
      statsHTML += ` | 藏书: ${this.stats.books}本`;
    }
    if (this.stats.images) {
      statsHTML += ` | 图片: ${this.stats.images}张`;
    }
    
    return statsHTML;
  }
  
  // 设置当前日期
  setCurrentDate() {
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      currentDateElement.textContent = now.toLocaleDateString('zh-CN', options);
    }
  }
}