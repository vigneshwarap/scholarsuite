import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BaseLayout from '@/components/Layout/Base';
import nextAuthConfig from '@/lib/auth';
import type { FC } from 'react';

const Page: FC = async () => {
  const session = await getServerSession(nextAuthConfig);
  if (session?.user.role !== 0) notFound();

  return (
    <BaseLayout
      title="Administration"
      description="Manage your school"
      sectionClassName="flex flex-wrap gap-4"
    >
      <div className="w-52 rounded bg-white p-4 shadow dark:bg-gray-800 dark:shadow-none">
        <h2 className="text-xl font-bold">Manage Students</h2>
        <Link
          href="/administration/students"
          className="block text-brand-500 hover:underline"
        >
          View Students
        </Link>
        <Link
          href="/administration/students/add"
          className="block text-brand-500 hover:underline"
        >
          Add Student
        </Link>
      </div>
      <div className="w-52 rounded bg-white p-4 shadow dark:bg-gray-800 dark:shadow-none">
        <h2 className="text-xl font-bold">Manage Classes</h2>
        <Link
          href="/administration/classes"
          className="block text-brand-500 hover:underline"
        >
          View Classes
        </Link>
        <Link
          href="/administration/classes/add"
          className="block text-brand-500 hover:underline"
        >
          Add Class
        </Link>
      </div>
      <div className="w-52 rounded bg-white p-4 shadow dark:bg-gray-800 dark:shadow-none">
        <h2 className="text-xl font-bold">Manage TimeSlots</h2>
        <Link
          href="/administration/timeSlot"
          className="block text-brand-500 hover:underline"
        >
          Manage TimeSlots
        </Link>
      </div>
      <div className="w-52 rounded bg-white p-4 shadow dark:bg-gray-800 dark:shadow-none">
        <h2 className="text-xl font-bold">Manage Users</h2>
        <Link
          href="/administration/users"
          className="block text-brand-500 hover:underline"
        >
          View Users
        </Link>
        <Link
          href="/administration/users/add"
          className="block text-brand-500 hover:underline"
        >
          Add User
        </Link>
      </div>
      <div className="w-52 rounded bg-white p-4 shadow dark:bg-gray-800 dark:shadow-none">
        <h2 className="text-xl font-bold">School Levels</h2>
        <Link
          href="/administration/schoolLevels"
          className="block text-brand-500 hover:underline"
        >
          View Levels
        </Link>
        <Link
          href="/administration/schoolLevels/add"
          className="block text-brand-500 hover:underline"
        >
          Add Level
        </Link>
      </div>
    </BaseLayout>
  );
};

export default Page;
