import { useState, useEffect } from 'react'
import { 导航栏 } from '../components/导航栏'
import { 搜索区域 } from '../components/公告区域'
import { 分类筛选 } from '../components/分类筛选'
import { 软件卡片 } from '../components/软件卡片'
import { 分类列表, 筛选软件, 搜索软件, 软件资源 } from '../data/软件数据'

// 首页组件
export function 首页() {
  const [当前分类, set当前分类] = useState('全部')
  const [搜索关键词, set搜索关键词] = useState('')
  const [显示软件列表, set显示软件列表] = useState<软件资源[]>([])
  const [已加载, set已加载] = useState(false)

  // 初始加载动画
  useEffect(() => {
    set已加载(true)
  }, [])

  // 筛选和搜索逻辑
  useEffect(() => {
    let 结果列表: 软件资源[]
    
    if (搜索关键词.trim()) {
      结果列表 = 搜索软件(搜索关键词)
    } else {
      结果列表 = 筛选软件(当前分类)
    }
    
    set显示软件列表(结果列表)
  }, [当前分类, 搜索关键词])

  const 处理搜索 = (关键词: string) => {
    set搜索关键词(关键词)
    if (关键词.trim()) {
      set当前分类('全部')
    }
  }

  const 处理分类选择 = (分类: string) => {
    console.log('分类选择:', 分类)
    set当前分类(分类)
    set搜索关键词('')
  }

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${已加载 ? 'opacity-100' : 'opacity-0'} pb-16`}>
      <导航栏 />
      
      <搜索区域 on搜索={处理搜索} />
      
      <分类筛选 
        分类列表={分类列表}
        当前分类={当前分类}
        on分类选择={处理分类选择}
      />
      
      {/* 软件列表 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 结果统计 */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-md3-on-surface">
              {搜索关键词 ? `搜索结果` : 当前分类 === '全部' ? '全部软件' : 当前分类}
            </h2>
            <p className="text-sm text-md3-on-surface-variant mt-1">
              共找到 {显示软件列表.length} 个软件
            </p>
          </div>
          
          {搜索关键词 && (
            <button
              onClick={() => {
                set搜索关键词('')
                set当前分类('全部')
              }}
              className="px-4 py-2 rounded-lg bg-md3-secondary-container text-md3-on-secondary-container hover:bg-md3-primary hover:text-md3-on-primary transition-all duration-200 text-sm font-medium"
            >
              清除搜索
            </button>
          )}
        </div>

        {/* 网格布局 */}
        {显示软件列表.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {显示软件列表.map((软件, 索引) => (
              <软件卡片 
                key={软件.id} 
                软件={软件}
                index={索引}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-md3-on-surface mb-2">
              未找到相关软件
            </h3>
            <p className="text-md3-on-surface-variant">
              尝试更换关键词或选择其他分类
            </p>
          </div>
        )}
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
    </div>
  )
}
