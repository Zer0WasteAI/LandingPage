interface ChartShellProps {
  title: string;
  children: React.ReactNode;
}

export default function ChartShell({ title, children }: ChartShellProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
      <div className="h-64">{children}</div>
    </div>
  );
}
