import { useState } from 'react'
import { Link } from 'react-router-dom'

// 导航栏组件
export function 导航栏() {
  const [菜单展开, 设置菜单展开] = useState(false)

  const 切换菜单 = () => {
    设置菜单展开(!菜单展开)
  }

  const 关闭菜单 = () => {
    设置菜单展开(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-md3-surface border-b border-md3-outline-variant backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={关闭菜单}
          >
            <div className="w-10 h-10 rounded-full bg-md3-primary-container flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-2xl">📦</span>
            </div>
            <span className="text-xl font-semibold text-md3-on-surface">
              七辰资源库
            </span>
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-md3-on-surface-variant hover:text-md3-primary transition-colors duration-200 px-4 py-2 rounded-full hover:bg-md3-secondary-container"
            >
              首页
            </Link>
            <Link 
              to="/categories" 
              className="text-md3-on-surface-variant hover:text-md3-primary transition-colors duration-200 px-4 py-2 rounded-full hover:bg-md3-secondary-container"
            >
              分类
            </Link>
            <Link 
              to="/about" 
              className="text-md3-on-surface-variant hover:text-md3-primary transition-colors duration-200 px-4 py-2 rounded-full hover:bg-md3-secondary-container"
            >
              关于
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-md3-secondary-container transition-colors duration-200"
            onClick={切换菜单}
            aria-label={菜单展开 ? '关闭菜单' : '打开菜单'}
          >
            {菜单展开 ? (
              <svg className="w-6 h-6 text-md3-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-md3-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 移动端菜单内容 */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            菜单展开 ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-md3-outline-variant space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-3 text-md3-on-surface-variant hover:text-md3-primary hover:bg-md3-secondary-container rounded-lg transition-all duration-200"
              onClick={关闭菜单}
            >
              首页
            </Link>
            <Link 
              to="/categories" 
              className="block px-4 py-3 text-md3-on-surface-variant hover:text-md3-primary hover:bg-md3-secondary-container rounded-lg transition-all duration-200"
              onClick={关闭菜单}
            >
              分类
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-md3-on-surface-variant hover:text-md3-primary hover:bg-md3-secondary-container rounded-lg transition-all duration-200"
              onClick={关闭菜单}
            >
              关于
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
