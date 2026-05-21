import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "문의하기 - KR Tools",
  description: "KR Tools에 대한 문의, 제안, 피드백을 보내주세요. 빠른 시일 내에 답변 드리겠습니다.",
}

const contactMethods = [
  {
    name: "이메일 문의",
    description: "일반적인 문의사항이나 제휴 관련 문의는 이메일로 보내주세요.",
    contact: "contact@krtools.cloud",
    icon: Mail,
  },
  {
    name: "서비스 피드백",
    description: "서비스 개선 아이디어나 버그 신고는 언제든 환영합니다.",
    contact: "feedback@krtools.cloud",
    icon: MessageSquare,
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                문의하기
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                KR Tools에 대한 문의, 제안, 피드백을 보내주세요.<br />
                빠른 시일 내에 답변 드리겠습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {contactMethods.map((method) => (
                  <Card key={method.name} className="bg-card">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                        <method.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <CardTitle className="mt-4">{method.name}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={`mailto:${method.contact}`}
                        className="text-sm font-medium text-foreground hover:underline"
                      >
                        {method.contact}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Response Time Notice */}
              <div className="mt-12 rounded-xl bg-muted/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-card">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">답변 안내</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      문의하신 내용은 영업일 기준 1-2일 이내에 답변 드립니다.
                      긴급한 문의의 경우 이메일 제목에 [긴급]을 표기해 주시면 
                      우선적으로 처리해 드립니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  자주 묻는 질문
                </h2>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">서비스 이용에 비용이 드나요?</h3>
                    <p className="mt-2 text-muted-foreground">
                      아니요, KR Tools의 모든 도구는 무료로 이용하실 수 있습니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">회원가입이 필요한가요?</h3>
                    <p className="mt-2 text-muted-foreground">
                      회원가입 없이 바로 이용하실 수 있습니다. 별도의 앱 설치도 필요 없습니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">새로운 도구를 제안하고 싶어요.</h3>
                    <p className="mt-2 text-muted-foreground">
                      feedback@krtools.cloud로 아이디어를 보내주세요. 검토 후 개발 계획에 반영하겠습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
