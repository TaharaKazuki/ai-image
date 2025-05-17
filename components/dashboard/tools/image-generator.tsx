/* eslint-disable @next/next/no-img-element */
'use client';

import { Download, ImageIcon } from 'lucide-react';
import { useActionState } from 'react';

import { generateImage } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { GenerateImageState } from '@/types/actions';

import LoadingSpinner from '../loading-spinner';

const ImageGenerator = () => {
  const initialState: GenerateImageState = {
    status: 'idle',
  };

  const [state, formAction, pending] = useActionState(
    generateImage,
    initialState
  );

  const handleDownload = async () => {
    if (!state.imageUrl) return;
    try {
      const base64Data = state.imageUrl.split(',')[1];
      const blob = new Blob([Buffer.from(base64Data, 'base64')], {
        type: 'image/png',
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${state.keyword}.png`;
      document.body.appendChild(link);
      link.click();

      // ダウンロード後にlink要素を削除
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: 'エラー',
        description: 'ダウンロードに失敗しました',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">キーワード</Label>
            <Input
              id="keyword"
              name="keyword"
              placeholder="作成したい画像のキーワードを入力"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={pending}
            className={cn('w-full duration-200', pending && 'bg-primary/80')}
          >
            {pending ? (
              <LoadingSpinner />
            ) : (
              <>
                <ImageIcon className="mr-2" />
                画像を生成する
              </>
            )}
          </Button>
        </form>
      </div>

      {state.imageUrl && (
        <div className="space-y-4">
          <div className="bg-background overflow-hidden rounded-lg border">
            <div className="relative aspect-video">
              <img
                src={state.imageUrl}
                alt="Generated image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <Button
            className="w-full"
            variant={'outline'}
            onClick={handleDownload}
          >
            <Download className="mr-2" />
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
