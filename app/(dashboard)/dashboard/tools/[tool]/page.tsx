import { notFound } from 'next/navigation';

import PageContainer from '@/components/dashboard/page-container';
import PageHeader from '@/components/dashboard/page-header';
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
      <PageHeader title={tool.title} description={tool.description} />
      <div>
        <ToolComponent />
      </div>
    </PageContainer>
  );
};

export default ToolPage;
