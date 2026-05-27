import { useEffect, useState } from 'react'
import { 导航栏 } from '../components/导航栏'
import { 软件卡片 } from '../components/软件卡片'
import { 分类列表, 软件数据列表, 软件资源 } from '../data/软件数据'

export function 分类页面() {
  const [已加载, set已加载] = useState(false)

  useEffect(() => {
    set已加载(true)
    window.scrollTo(0, 0)
  }, [])

  const 获取分类软件数量 = (分类: string): number => {
    return 软件数据列表.filter(软件 => 软件.category === 分类).length
  }

  const 获取分类软件 = (分类: string): 软件资源[] => {
    return 软件数据列表.filter(软件 => 软件.category === 分类)
  }

  return (
    <div className={`min-h-screen bg-md3-background transition-opacity duration-500 ${已加载 ? 'opacity-100' : 'opacity-0'} pb-16`}>
      <导航栏 />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-md3-on-surface mb-2">软件分类</h1>
          <p className="text-md3-on-surface-variant">浏览不同类别的软件资源</p>
        </div>

        <div className="space-y-12">
          {分类列表.filter(c => c !== '全部').map((分类, 索引) => {
            const 软件列表 = 获取分类软件(分类)
            if (软件列表.length === 0) return null

            return (
              <section
                key={分类}
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${索引 * 100}ms`,
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-md3-primary-container flex items-center justify-center">
                      <span className="text-xl">📁</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-md3-on-surface">{分类}</h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-md3-secondary-container text-md3-on-secondary-container text-sm font-medium">
                    {获取分类软件数量(分类)} 个软件
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {软件列表.map((软件, 软件索引) => (
                    <软件卡片
                      key={软件.id}
                      软件={软件}
                      index={软件索引}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>

      {/* 页脚 - 固定在屏幕底部 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-md3-surface-variant border-t border-md3-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-md3-on-surface-variant">
            <p className="text-xs">
              © 2026 七辰资源库. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
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
