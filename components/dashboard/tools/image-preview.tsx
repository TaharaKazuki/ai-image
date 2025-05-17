/* eslint-disable @next/next/no-img-element */
import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { downloadImage } from '@/lib/downloadImage';

type ImagePreview = {
  imageUrl: string;
  keyword: string;
};

export const ImagePreview = ({ imageUrl, keyword }: ImagePreview) => (
  <div className="space-y-4">
    <div className="bg-background overflow-hidden rounded-lg border">
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt="Generated image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
    <Button
      className="w-full"
      variant="outline"
      onClick={() => downloadImage(imageUrl, `${keyword}.png`)}
    >
      <Download className="mr-2" />
      ダウンロード
    </Button>
  </div>
);
