// 分类筛选组件
export function 分类筛选({ 
  分类列表, 
  当前分类, 
  on分类选择 
}: { 
  分类列表: string[]
  当前分类: string
  on分类选择: (分类: string) => void 
}) {
  return (
    <div className="py-6 bg-md3-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {分类列表.map((分类, 索引) => (
            <button
              key={分类}
              onClick={() => on分类选择(分类)}
              className={`
                px-5 py-2.5 rounded-full font-medium whitespace-nowrap
                transition-all duration-300 ease-out transform hover:scale-105
                ${当前分类 === 分类
                  ? 'bg-md3-primary text-md3-on-primary shadow-md3-level2'
                  : 'bg-md3-surface-variant text-md3-on-surface-variant hover:bg-md3-secondary-container hover:text-md3-on-secondary-container'
                }
              `}
              style={{ 
                animationDelay: `${索引 * 50}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.3s ease-out forwards'
              }}
            >
              {分类}
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
