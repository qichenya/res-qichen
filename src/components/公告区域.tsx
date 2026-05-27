import { useState } from 'react'

// 搜索区域组件
export function 搜索区域({ on搜索 }: { on搜索?: (关键词: string) => void }) {
  const [搜索词, set搜索词] = useState('')

  const 处理搜索 = (e: React.FormEvent) => {
    e.preventDefault()
    if (on搜索) {
      on搜索(搜索词)
    }
  }

  return (
    <section className="py-8 bg-md3-surface border-b border-md3-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 搜索框 - MD3 圆角矩形样式 */}
        <form onSubmit={处理搜索} className="max-w-2xl mx-auto">
          <div className="relative">
            {/* 搜索框容器 */}
            <div className="flex items-center bg-md3-surface border border-md3-outline rounded-full px-4 py-1.5 focus-within:border-md3-primary focus-within:ring-2 focus-within:ring-md3-primary/20 transition-all duration-200">
              {/* 左侧搜索图标 */}
              <svg className="w-5 h-5 text-md3-on-surface-variant mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              {/* 输入框 */}
              <input
                type="text"
                value={搜索词}
                onChange={(e) => set搜索词(e.target.value)}
                placeholder="搜索软件名称、描述或标签..."
                className="flex-1 bg-transparent text-md3-on-surface placeholder-md3-on-surface-variant focus:outline-none py-2"
              />
              
              {/* 搜索按钮 */}
              <button
                type="submit"
                className="ml-3 px-5 py-2 bg-md3-primary text-md3-on-primary rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 font-medium text-sm"
              >
                搜索
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
