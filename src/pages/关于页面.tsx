import { useEffect, useState } from 'react'
import { 导航栏 } from '../components/导航栏'

// 关于页面组件
export function 关于页面() {
  const [已加载, set已加载] = useState(false)

  useEffect(() => {
    set已加载(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={`min-h-screen bg-md3-background transition-opacity duration-500 ${已加载 ? 'opacity-100' : 'opacity-0'}`}>
      <导航栏 />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="mb-12" style={{ animation: 'fadeInDown 0.5s ease-out forwards' }}>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-md3-primary-container flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-md3-on-surface">关于我们</h1>
              <p className="text-md3-on-surface-variant">了解 RES-QICHEN 的更多信息</p>
            </div>
          </div>
        </div>

        {/* 关于内容 */}
        <div className="space-y-8">
          {/* 项目介绍 */}
          <section 
            className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards', animationDelay: '0.1s', opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-md3-on-surface mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3">
                📖
              </span>
              项目介绍
            </h2>
            <p className="text-md3-on-surface-variant leading-relaxed">
              RES-QICHEN 是一个精选优质软件的在线平台，旨在帮助用户发现和下载各类优秀的软件工具。我们收录了开发工具、设计工具、生产力软件等多个领域的优质资源，为用户提供便捷的软件查找和下载体验。
            </p>
          </section>

          {/* 功能特点 */}
          <section 
            className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-md3-on-surface mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3">
                ✨
              </span>
              功能特点
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '🔍', title: '智能搜索', desc: '支持关键词搜索，快速找到所需软件' },
                { icon: '📁', title: '分类浏览', desc: '按类别浏览，轻松发现同类软件' },
                { icon: '📱', title: '响应式设计', desc: '适配各种设备，随时随地访问' },
                { icon: '⚡', title: '快速下载', desc: '一键跳转官方下载页面' },
                { icon: '🎨', title: '精美界面', desc: '采用 MD3 设计规范，美观简洁' },
                { icon: '🔄', title: '持续更新', desc: '定期更新软件信息和版本' },
              ].map((特点, 索引) => (
                <div 
                  key={特点.title}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-md3-surface-variant hover:bg-md3-secondary-container transition-colors duration-200"
                  style={{ animation: 'fadeInUp 0.3s ease-out forwards', animationDelay: `${0.25 + 索引 * 0.05}s`, opacity: 0 }}
                >
                  <span className="text-2xl">{特点.icon}</span>
                  <div>
                    <h3 className="font-semibold text-md3-on-surface">{特点.title}</h3>
                    <p className="text-sm text-md3-on-surface-variant">{特点.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 技术栈 */}
          <section 
            className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards', animationDelay: '0.3s', opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-md3-on-surface mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3">
                💻
              </span>
              技术栈
            </h2>
            <div className="flex flex-wrap gap-3">
              {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Material Design 3'].map((技术) => (
                <span 
                  key={技术}
                  className="px-4 py-2 rounded-full bg-md3-primary-container text-md3-on-primary-container font-medium"
                >
                  {技术}
                </span>
              ))}
            </div>
          </section>

          {/* 联系方式 */}
          <section 
            className="bg-md3-primary-container rounded-2xl p-8 text-center"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards', animationDelay: '0.4s', opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-md3-on-primary-container mb-4">
              联系我们
            </h2>
            <p className="text-md3-on-primary-container mb-6">
              如果您有任何建议或问题，欢迎与我们联系
            </p>
            <a 
              href="mailto:contact@softwarerepo.example.com"
              className="inline-flex items-center px-6 py-3 rounded-full bg-md3-primary text-md3-on-primary hover:opacity-90 transition-all duration-200 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              发送邮件
            </a>
          </section>
        </div>

        {/* 页脚 */}
        <footer className="bg-md3-surface-variant border-t border-md3-outline-variant mt-16 py-8">
          <div className="text-center text-md3-on-surface-variant">
            <p className="text-sm">
              © 2024 RES-QICHEN. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
