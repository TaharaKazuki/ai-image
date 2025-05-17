export type GenerateImageState = {
  imageUrl?: string;
  error?: string;
  status: 'idle' | 'success' | 'error';
  keyword?: string;
};
