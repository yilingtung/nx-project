import { twMerge } from 'tailwind-merge';
interface IndexProps {
  className?: string;
}

export function Index({ className }: IndexProps) {
  return (
    <div className={twMerge('bg-gray-50 h-[200vh]', className)}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-9xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">This is Blog</span>
        </h2>
      </div>
    </div>
  );
}

export default Index;
