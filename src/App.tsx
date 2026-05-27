import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 首页 } from './pages/首页'
import { 软件详情 } from './pages/软件详情'
import { 下载页面 } from './pages/下载页面'
import { 分类页面 } from './pages/分类页面'
import { 关于页面 } from './pages/关于页面'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-md3-background">
        <Routes>
          <Route path="/" element={<首页 />} />
          <Route path="/categories" element={<分类页面 />} />
          <Route path="/about" element={<关于页面 />} />
          <Route path="/software/:id" element={<软件详情 />} />
          <Route path="/software/:id/download" element={<下载页面 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
