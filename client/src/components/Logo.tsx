import logoPngPath from "@assets/Screenshot_2026-01-21_173308_1769096602561.png";

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img 
      src={logoPngPath} 
      alt="Bomb Rolls and Bowls Logo" 
      className={className}
      data-testid="img-logo"
    />
  );
}
