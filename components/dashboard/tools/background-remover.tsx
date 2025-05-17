'use client';

import { ImageIcon } from 'lucide-react';
import { useActionState } from 'react';

import { generateImage } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { GenerateImageState } from '@/types/actions';

import LoadingSpinner from '../loading-spinner';

import { ImageDisplay } from './(image-generator)/image-display';

const ImageGenerator = () => {
  const initialState: GenerateImageState = {
    status: 'idle',
  };

  const [state, formAction, pending] = useActionState(
    generateImage,
    initialState
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">キーワード</Label>
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
        <ImageDisplay
          imageUrl={state.imageUrl}
          keyword={state.keyword || 'generated'}
        />
      )}
    </div>
  );
};

export default ImageGenerator;
