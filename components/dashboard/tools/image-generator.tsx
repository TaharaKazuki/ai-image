/* eslint-disable @next/next/no-img-element */
'use client';

import { useActionState } from 'react';

import { generateImage } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GenerateImageState } from '@/types/actions';

const ImageGenerator = () => {
  const initialState: GenerateImageState = {
    status: 'idle',
  };

  const [state, formAction] = useActionState(generateImage, initialState);

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
          <Button>画像を生成する</Button>
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
          <Button className="w-full" variant={'outline'}>
            ダウンロード
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
