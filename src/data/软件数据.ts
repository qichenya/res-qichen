export interface 平台下载链接 {
  platform: string
  icon: string
  url: string
  description?: string
}

export interface 软件资源 {
  id: string
  name: string
  description: string
  icon: string
  category: string
  tags: string[]
  screenshots: string[]
  features: string[]
  version: string
  updatedAt: string
  developer?: string
  website?: string
  downloadLinks: 平台下载链接[]
}

export const 分类列表 = [
  '全部',
  '开发工具',
  '设计工具',
  '生产力',
  '娱乐',
  '系统工具',
  '其他',
]

// 动态导入所有软件 JSON 文件
const 软件模块列表 = import.meta.glob('./apps/*.json', { eager: true })

// 转换为数组并过滤掉模板文件
export const 软件数据列表: 软件资源[] = Object.entries(软件模块列表)
  .filter(([路径]) => !路径.includes('template'))
  .map(([, 模块]) => (模块 as { default: 软件资源 }).default)

// 根据 ID 查找软件
export function 查找软件(id: string): 软件资源 | undefined {
  return 软件数据列表.find((软件) => 软件.id === id)
}

// 根据分类筛选软件
export function 筛选软件(分类: string): 软件资源[] {
  if (分类 === '全部' || !分类) {
    return 软件数据列表
  }
  return 软件数据列表.filter((软件) => 软件.category === 分类)
}

// 搜索软件
export function 搜索软件(关键词: string): 软件资源[] {
  const 搜索词 = 关键词.toLowerCase()
  return 软件数据列表.filter(
    (软件) =>
      软件.name.toLowerCase().includes(搜索词) ||
      软件.description.toLowerCase().includes(搜索词) ||
      软件.tags.some((标签) => 标签.toLowerCase().includes(搜索词))
  )
}
