// ======================
// 暗色模式组件
// 所有页面通用
// ======================

class DarkModeComponent {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.loadDarkModePreference();
  }
  
  // 设置事件监听
  setupEventListeners() {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', () => this.toggleDarkMode());
    }
  }
  
  // 切换暗色模式
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // 更新开关状态
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
      checkbox.checked = isDarkMode;
    }
  }
  
  // 加载用户偏好
  loadDarkModePreference() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const checkbox = document.getElementById('checkbox');
    
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
      if (checkbox) checkbox.checked = true;
    }
    
    // 如果系统偏好是暗色且用户未设置过，则使用系统偏好
    if (!localStorage.getItem('darkMode') && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
      if (checkbox) checkbox.checked = true;
      localStorage.setItem('darkMode', true);
    }
  }
}