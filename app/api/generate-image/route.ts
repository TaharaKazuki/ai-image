import axios from 'axios';
import FormData from 'form-data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { keyword } = await request.json();

  try {
    const payload = {
      prompt: `Create Image with ${keyword}`,
      output_format: 'png',
    };

    const formData = new FormData();
    formData.append('prompt', payload.prompt);
    formData.append('output_format', payload.output_format);

    const response = await axios.post(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      formData,
      {
        validateStatus: undefined,
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: 'image/*',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`API error: ${process.env.STABILITY_API_KEY}`);
    }

    const base64Image = Buffer.from(response.data).toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;
    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error(`Error generate image:${error}`);

    return NextResponse.json(
      {
        error: 'Failed to generate image',
      },
      {
        status: 500,
      }
    );
  }
}
