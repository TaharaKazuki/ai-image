import { notFound } from 'next/navigation';

import PageContainer from '@/components/dashboard/page-container';
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
    <PageContainer>
      <h2>{tool.title}</h2>
    </PageContainer>
  );
};

export default ToolPage;
