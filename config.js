// ======================
// 个人门户配置文件
// ======================

const CONFIG = {
  // 您的网站基础URL（非常重要！）
  // 示例: "https://您的用户名.github.io/您的仓库名/"
  // 注意：URL必须以斜杠结尾！
  SITE_BASE_URL: "https://dongfangmingjian.github.io/blog/",
  
  // 网站信息
  SITE_NAME: "我的数字空间",
  AUTHOR: "您的大名",
  DESCRIPTION: "个人门户网站，整合博客、书架、图床等功能",
  
  // 联系信息
  CONTACT: {
    email: "your-email@example.com",
    github: "https://github.com/yourusername",
    weibo: "#"
  },
  
  // 功能配置
  FEATURES: {
    darkMode: true,        // 启用暗色模式
    greeting: true,        // 启用时间问候语
    animation: true        // 启用动画效果
  },
  
  // 各页面配置
  PAGES: {
    cardsPerPage: 6,       // 博客每页显示文章数
    booksPerPage: 12,      // 书架每页显示书籍数
    imagesPerPage: 12      // 图床每页显示图片数
  },
  
  // 默认分类和标签
  DEFAULTS: {
    category: "all",
    tag: "all"
  }
};

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}