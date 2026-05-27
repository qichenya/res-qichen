import { Link } from 'react-router-dom'
import type { 软件资源 } from '../data/软件数据'

export function 软件卡片({ 软件, index = 0 }: { 软件: 软件资源; index?: number }) {
  return (
    <Link
      to={`/software/${软件.id}`}
      className="group block"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInScale 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="bg-md3-surface rounded-xl border border-md3-outline-variant overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-md3-primary hover:-translate-y-1">
        <div className="p-6 flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={软件.icon}
              alt={软件.name}
              className="w-16 h-16 rounded-xl object-cover bg-md3-surface-variant p-2 transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/64?text=Icon'
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-md3-on-surface mb-1 group-hover:text-md3-primary transition-colors duration-200">
              {软件.name}
            </h3>
            <p className="text-sm text-md3-on-surface-variant line-clamp-2 mb-3">
              {软件.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {软件.tags.slice(0, 3).map((标签) => (
                <span
                  key={标签}
                  className="text-xs px-2.5 py-1 rounded-full bg-md3-secondary-container text-md3-on-secondary-container font-medium"
                >
                  {标签}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-md3-surface-variant border-t border-md3-outline-variant flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-md3-on-surface-variant">
            <span className="bg-md3-primary-container text-md3-on-primary-container px-2 py-1 rounded text-xs font-medium">
              {软件.category}
            </span>
          </div>

          <div className="flex items-center space-x-1 text-md3-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">查看详情</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Link>
  )
}
