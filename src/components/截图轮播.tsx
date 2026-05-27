import { useState } from 'react'

// 截图轮播组件
export function 截图轮播({ 截图列表 }: { 截图列表: string[] }) {
  const [当前索引, set当前索引] = useState(0)

  if (!截图列表 || 截图列表.length === 0) {
    return null
  }

  const 上一张 = () => {
    set当前索引((上一个) => (上一个 === 0 ? 截图列表.length - 1 : 上一个 - 1))
  }

  const 下一张 = () => {
    set当前索引((下一个) => (下一个 === 截图列表.length - 1 ? 0 : 下一个 + 1))
  }

  return (
    <div className="relative group">
      {/* 主图片 */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-md3-surface-variant">
        <img
          src={截图列表[当前索引]}
          alt={`截图 ${当前索引 + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Screenshot'
          }}
        />
        
        {/* 左右箭头 */}
        {截图列表.length > 1 && (
          <>
            <button
              onClick={上一张}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-md3-surface/90 backdrop-blur-sm text-md3-on-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-md3-primary hover:text-md3-on-primary shadow-lg"
              aria-label="上一张"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={下一张}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-md3-surface/90 backdrop-blur-sm text-md3-on-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-md3-primary hover:text-md3-on-primary shadow-lg"
              aria-label="下一张"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* 缩略图指示器 */}
      {截图列表.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {截图列表.map((_, 索引) => (
            <button
              key={索引}
              onClick={() => set当前索引(索引)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                索引 === 当前索引
                  ? 'bg-md3-primary w-8'
                  : 'bg-md3-outline-variant hover:bg-md3-primary/50'
              }`}
              aria-label={`跳转到截图 ${索引 + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
