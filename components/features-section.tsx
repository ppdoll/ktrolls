import { Zap, Shield, Smartphone, Clock } from "lucide-react"

const features = [
  {
    name: "빠른 속도",
    description: "최적화된 서버와 코드로 언제 어디서나 빠르게 이용할 수 있습니다.",
    icon: Zap,
  },
  {
    name: "안전한 서비스",
    description: "개인정보를 수집하지 않으며 모든 데이터는 안전하게 처리됩니다.",
    icon: Shield,
  },
  {
    name: "모바일 최적화",
    description: "스마트폰에서도 편리하게 사용할 수 있도록 반응형으로 설계되었습니다.",
    icon: Smartphone,
  },
  {
    name: "24시간 이용",
    description: "별도의 설치 없이 웹브라우저에서 언제든지 무료로 이용 가능합니다.",
    icon: Clock,
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            왜 KR Tools인가요?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            사용자 경험을 최우선으로 생각하는 서비스
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-card shadow-sm border border-border">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
