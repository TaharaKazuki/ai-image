import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ImageGenerator = () => {
  async function generateImage(formData: FormData) {
    'use server';
    const keyword = formData.get('keyword');
    const response = await fetch(`${process.env.BASE_URL}/api/generate-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword }),
    });

    console.log('ああああ', response);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form action={generateImage} className="space-y-4">
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
    </div>
  );
};

export default ImageGenerator;
