'use client';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import Button from '@/components/Common/Button';
import type { FC } from 'react';

const BackTo: FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const from = searchParams.get('from');

  if (!from) return null;

  return (
    <Button onClick={() => router.push(from)}>
      <ArrowLeft className="size-5" />
      <span className="ml-2">Back</span>
    </Button>
  );
};

export default BackTo;
