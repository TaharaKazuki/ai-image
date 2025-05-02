import BackgroundRemover from '@/components/dashboard/tools/background-remover';
import ImageGenerator from '@/components/dashboard/tools/image-generator';

export const tools = {
  'image-generator': {
    title: '画像生成',
    description: 'AIを使用してお好みの画像を生成',
    component: ImageGenerator,
  },
  'remove-bg': {
    title: '背景削除',
    description: '背景を削除して画像をクリーンにする',
    component: BackgroundRemover,
  },
  optimize: {
    title: '画像圧縮',
    description: '画像を圧縮して容量を節約',
    component: ImageGenerator,
  },
};

export type ToolType = keyof typeof tools;
