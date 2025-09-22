import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <div className="p-4 flex gap-4 items-center">
      <span className="text-sm text-muted-foreground">Theme Toggle:</span>
      <ThemeToggle />
    </div>
  );
}