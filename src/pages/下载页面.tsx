import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 查找软件 } from '../data/软件数据'
import { 导航栏 } from '../components/导航栏'

export function 下载页面() {
  const { id } = useParams<{ id: string }>()
  const 软件 = id ? 查找软件(id) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!软件) {
    return (
      <div className="min-h-screen bg-md3-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">📦</div>
          <h1 className="text-2xl font-bold text-md3-on-surface mb-4">
            资源库貌似没有初始化哦~
          </h1>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-md3-primary text-md3-on-primary hover:bg-opacity-90 transition-all duration-200 font-medium"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-md3-background pb-16">
      <导航栏 />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to={`/software/${软件.id}`}
          className="inline-flex items-center text-md3-on-surface-variant hover:text-md3-primary mb-6 transition-colors duration-200 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回详情页
        </Link>

        <div className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8 mb-8" style={{ animation: 'fadeInDown 0.5s ease-out forwards' }}>
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={软件.icon}
              alt={软件.name}
              className="w-16 h-16 rounded-xl object-cover bg-md3-surface-variant p-2"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/64?text=Icon'
              }}
            />
            <div>
              <h1 className="text-2xl font-bold text-md3-on-surface">
                下载 {软件.name}
              </h1>
              <p className="text-md3-on-surface-variant">
                版本 {软件.version}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-md3-primary-container text-md3-on-primary-container text-sm font-medium">
              {软件.category}
            </span>
            {软件.tags.slice(0, 2).map((标签) => (
              <span
                key={标签}
                className="px-3 py-1 rounded-full bg-md3-secondary-container text-md3-on-secondary-container text-sm"
              >
                {标签}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-md3-surface-variant rounded-2xl p-6 mb-8" style={{ animation: 'fadeInUp 0.5s ease-out forwards', animationDelay: '0.1s', opacity: 0 }}>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-md3-on-surface mb-1">下载提示</h3>
              <p className="text-sm text-md3-on-surface-variant">
                点击下方按钮将跳转到官方下载页面。请根据您的操作系统选择合适的版本进行下载。
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-md3-on-surface mb-4 flex items-center">
            <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3">
              📥
            </span>
            选择下载平台
          </h2>

          {软件.downloadLinks.map((下载链接, 索引) => (
            <a
              key={下载链接.platform}
              href={下载链接.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{
                animationDelay: `${索引 * 100}ms`,
                animation: 'fadeInUp 0.4s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="bg-md3-surface border-2 border-md3-outline-variant rounded-xl p-6 transition-all duration-300 hover:border-md3-primary hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {下载链接.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-md3-on-surface mb-1 group-hover:text-md3-primary transition-colors duration-200">
                      {下载链接.platform}
                    </h3>
                    {下载链接.description && (
                      <p className="text-sm text-md3-on-surface-variant">
                        {下载链接.description}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center group-hover:bg-md3-primary group-hover:text-md3-on-primary transition-all duration-300 shadow-md group-hover:shadow-xl">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-md3-outline-variant" style={{ animation: 'fadeInUp 0.5s ease-out forwards', animationDelay: '0.3s', opacity: 0 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {软件.developer && (
              <div>
                <span className="font-medium text-md3-on-surface">开发者：</span>
                <span className="text-md3-on-surface-variant">{软件.developer}</span>
              </div>
            )}

            <div>
              <span className="font-medium text-md3-on-surface">版本：</span>
              <span className="text-md3-on-surface-variant">{软件.version}</span>
            </div>

            <div>
              <span className="font-medium text-md3-on-surface">更新时间：</span>
              <span className="text-md3-on-surface-variant">{软件.updatedAt}</span>
            </div>

            <div>
              <span className="font-medium text-md3-on-surface">支持平台：</span>
              <span className="text-md3-on-surface-variant">
                {软件.downloadLinks.map(d => d.platform).join('、')}
              </span>
            </div>
          </div>

          {软件.website && (
            <div className="mt-6">
              <a
                href={软件.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-md3-primary hover:text-md3-on-primary hover:bg-md3-primary px-4 py-2 rounded-full transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                访问官方网站
              </a>
            </div>
          )}
        </div>
      </main>

      {/* 页脚 - 固定在屏幕底部 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-md3-surface-variant border-t border-md3-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-md3-on-surface-variant">
            <p className="text-xs">
              所有下载链接均来自软件官方网站
            </p>
          </div>
        </div>
      </footer>

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
