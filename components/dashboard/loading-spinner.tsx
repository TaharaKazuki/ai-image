import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center">
      <Loader2 className="mr-2 animate-spin" />
      <span>生成中...</span>
    </div>
  );
};

export default LoadingSpinner;
