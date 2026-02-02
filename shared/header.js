// ======================
// 导航栏组件
// 所有页面通用
// ======================

class HeaderComponent {
  constructor(pageName) {
    this.pageName = pageName; // 当前页面名称
    this.init();
  }
  
  init() {
    this.render();
    this.setActiveLink();
  }
  
  // 渲染导航栏
  render() {
    const headerHTML = `
      <header>
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <a href="index.html">
                <i class="fas fa-home logo-icon"></i>
                <h1>个人门户</h1>
              </a>
            </div>
            <div class="nav-controls">
              <ul class="nav-links">
                <li><a href="index.html" data-page="index">首页</a></li>
                <li><a href="bookshelf.html" data-page="bookshelf">书架</a></li>
                <li><a href="blog.html" data-page="blog">博客</a></li>
                <li><a href="image-host.html" data-page="image-host">图床</a></li>
                <li><a href="about.html" data-page="about">关于</a></li>
              </ul>
              <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider"></div>
                </label>
                <div class="theme-label">夜间模式</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
    
    // 插入到页面开头
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  
  // 设置当前页面链接为激活状态
  setActiveLink() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      const page = link.getAttribute('data-page');
      if (page === this.pageName) {
        link.classList.add('active');
      }
      
      // 添加点击事件
      link.addEventListener('click', function() {
        links.forEach(a => a.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
}