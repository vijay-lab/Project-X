interface GlassCardProps {
  children: React.ReactNode
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
      {children}
    </div>
  )
}
