import { toast } from '@/hooks/use-toast';

export const downloadImage = (imageUrl: string, fileName: string): void => {
  try {
    const base64Data = imageUrl.split(',')[1];

    const blob = new Blob([Buffer.from(base64Data, 'base64')], {
      type: 'image/png',
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: 'ダウンロード完了',
      description: '画像のダウンロードが完了しました。',
    });
  } catch (error) {
    console.error('Download error:', error);
    toast({
      title: 'エラー',
      description: 'ダウンロードに失敗しました。',
      variant: 'destructive',
    });
  }
};
