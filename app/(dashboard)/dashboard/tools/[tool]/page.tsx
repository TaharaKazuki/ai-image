import { notFound } from 'next/navigation';

import { tools, ToolType } from '@/config/tools';

type Props = {
  params: {
    tool: string;
  };
};

const ToolPage = ({ params }: Props) => {
  const toolType = params.tool as ToolType;
  const tool = tools[toolType];

  if (!tool) return notFound();

  return (
    <div>
      <h2>{tool.title}</h2>
    </div>
  );
};

export default ToolPage;
