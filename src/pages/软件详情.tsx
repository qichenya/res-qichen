import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 查找软件 } from '../data/软件数据'
import { 截图轮播 } from '../components/截图轮播'
import { 导航栏 } from '../components/导航栏'

export function 软件详情() {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const 软件 = id ? 查找软件(id) : undefined

  return (
    <div className="min-h-screen bg-md3-background">
      <导航栏 />

      {!软件 ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center">
            <div className="text-8xl mb-6">📦</div>
            <h1 className="text-2xl font-bold text-md3-on-surface mb-4">
              资源库貌似没有初始化哦~
            </h1>
            <p className="text-md3-on-surface-variant mb-6">
              请检查软件数据配置
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-md3-primary text-md3-on-primary hover:bg-opacity-90 transition-all duration-200 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回首页
            </Link>
          </div>
        </div>
      ) : (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-md3-on-surface-variant hover:text-md3-primary mb-6 transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回列表
          </Link>

          <div className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={软件.icon}
                alt={软件.name}
                className="w-24 h-24 rounded-2xl object-cover bg-md3-surface-variant p-3 shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/96?text=Icon'
                }}
              />

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-md3-on-surface mb-2">
                  {软件.name}
                </h1>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-md3-primary-container text-md3-on-primary-container text-sm font-medium">
                    {软件.category}
                  </span>
                  {软件.tags.map((标签) => (
                    <span
                      key={标签}
                      className="px-3 py-1 rounded-full bg-md3-secondary-container text-md3-on-secondary-container text-sm"
                    >
                      {标签}
                    </span>
                  ))}
                </div>

                {软件.developer && (
                  <p className="text-md3-on-surface-variant mb-2">
                    <span className="font-medium">开发者：</span>
                    {软件.developer}
                  </p>
                )}

                <p className="text-md3-on-surface-variant">
                  <span className="font-medium">版本：</span>
                  {软件.version}
                </p>
              </div>

              <Link
                to={`/software/${id}/download`}
                className="w-full md:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-md3-primary text-md3-on-primary hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                下载
              </Link>
            </div>
          </div>

          <div className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8 mb-8">
            <h2 className="text-2xl font-bold text-md3-on-surface mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3 text-lg">
                📖
              </span>
              软件介绍
            </h2>
            <p className="text-md3-on-surface-variant leading-relaxed text-lg">
              {软件.description}
            </p>
          </div>

          {软件.screenshots && 软件.screenshots.length > 0 && (
            <div className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8 mb-8">
              <h2 className="text-2xl font-bold text-md3-on-surface mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3 text-lg">
                  🖼️
                </span>
                软件截图
              </h2>
              <截图轮播 截图列表={软件.screenshots} />
            </div>
          )}

          <div className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8 mb-8">
            <h2 className="text-2xl font-bold text-md3-on-surface mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3 text-lg">
                ✨
              </span>
              功能特性
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {软件.features.map((特性) => (
                <div
                  key={特性}
                  className="flex items-center p-4 rounded-xl bg-md3-surface-variant hover:bg-md3-secondary-container transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-md3-primary-container text-md3-on-primary-container flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-md3-on-surface font-medium">{特性}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-md3-primary-container rounded-2xl p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-md3-on-primary-container mb-4">
              立即下载
            </h2>
            <p className="text-md3-on-primary-container mb-6 opacity-90">
              支持 {软件.downloadLinks.length} 个平台
            </p>
            <Link
              to={`/software/${id}/download`}
              className="inline-flex items-center px-10 py-4 rounded-xl bg-md3-primary text-md3-on-primary hover:opacity-90 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl"
            >
              <svg className="w-7 h-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              前往下载页面
            </Link>
          </div>

          <div className="text-center text-sm text-md3-on-surface-variant">
            最后更新：{软件.updatedAt}
          </div>
        </main>
      )}
    </div>
  )
}
