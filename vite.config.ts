import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // for GitHub pages
  base: '/example-ui/',
  plugins: [react(),
  visualizer({
    gzipSize: true,
    brotliSize: true,
    emitFile: false,
    filename: "stats.html", //分析图生成的文件名
    open: true //如果存在本地服务端口，将在打包后自动展示
  })],
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src'),
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  esbuild: { legalComments: 'none' },
})
