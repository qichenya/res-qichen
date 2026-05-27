import { useParams, Link } from 'react-router-dom'
import { 导航栏 } from '../components/导航栏'

export function 测试详情() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="min-h-screen bg-md3-background">
      <导航栏 />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-md3-on-surface-variant hover:text-md3-primary mb-6"
        >
          返回首页
        </Link>

        <div className="bg-md3-surface rounded-2xl border border-md3-outline-variant p-8">
          <h1 className="text-3xl font-bold text-md3-on-surface mb-4">
            测试页面
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">当前 ID：</span>
              <span className="text-md3-primary">{id}</span>
            </p>
            
            <div className="p-4 bg-md3-surface-variant rounded-xl">
              <p className="font-semibold mb-2">调试信息：</p>
              <p>路由参数已接收到 ID 值</p>
              <p>ID 长度：{id?.length || 0}</p>
              <p>ID 值：{id}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-md3-primary-container rounded-2xl text-center">
          <p className="text-lg text-md3-on-primary-container mb-4">
            如果您能看到此页面，说明路由配置正确
          </p>
          <p className="text-md3-on-primary-container opacity-90">
            问题可能在于数据查找函数
          </p>
        </div>
      </main>
    </div>
  )
}
