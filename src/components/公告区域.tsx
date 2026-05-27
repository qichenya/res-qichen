import { useState } from 'react'

// 搜索区域组件 - MD3 Filled Search Bar
export function 搜索区域({ on搜索 }: { on搜索?: (关键词: string) => void }) {
  const [搜索词, set搜索词] = useState('')

  const 处理搜索 = (e: React.FormEvent) => {
    e.preventDefault()
    if (on搜索) {
      on搜索(搜索词)
    }
  }

  return (
    <section className="py-8 bg-md3-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MD3 Filled Search Bar */}
        <form onSubmit={处理搜索} className="max-w-2xl mx-auto">
          <div 
            className="group relative rounded-[28px] overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: 'var(--md3-surface-container-high, #e7e0ec)',
              boxShadow: 'inset 0 2px 1px 0 rgba(0,0,0,0.05)'
            }}
          >
            {/* 左侧搜索图标 */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                className="w-5 h-5 transition-colors duration-200" 
                style={{ color: 'var(--md3-on-surface-variant, #49454f)' }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* 输入框 - MD3风格 */}
            <input
              type="text"
              value={搜索词}
              onChange={(e) => set搜索词(e.target.value)}
              placeholder="搜索软件名称、描述或标签..."
              className="w-full pl-12 pr-28 py-4 text-base rounded-[28px] transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--md3-on-surface, #1c1b1f)'
              }}
            />
            
            {/* 搜索按钮 - MD3 Tonal Button */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-[20px] font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: 'var(--md3-secondary-container, #e8def8)',
                color: 'var(--md3-on-secondary-container, #1d192b)'
              }}
            >
              搜索
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
