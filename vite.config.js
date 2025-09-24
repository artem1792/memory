import Inspect from 'vite-plugin-inspect'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  base: "/memory/",
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      jpeg: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
    }),
  ],
}