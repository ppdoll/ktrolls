import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "이용약관 - KR Tools",
  description: "KR Tools 서비스 이용약관입니다. 서비스 이용 전 반드시 읽어주시기 바랍니다.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              이용약관
            </h1>
            <p className="mt-4 text-muted-foreground">
              최종 수정일: 2024년 1월 1일
            </p>

            <div className="mt-12 space-y-12 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground">제1조 (목적)</h2>
                <p className="mt-4">
                  이 약관은 KR Tools(이하 &quot;회사&quot;)가 제공하는 온라인 도구 서비스(이하 &quot;서비스&quot;)의 
                  이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제2조 (정의)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>&quot;서비스&quot;란 회사가 웹사이트(krtools.cloud 및 그 하위 도메인)를 통해 제공하는 모든 온라인 도구를 의미합니다.</li>
                  <li>&quot;이용자&quot;란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제3조 (약관의 효력 및 변경)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</li>
                  <li>회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있습니다.</li>
                  <li>약관이 변경되는 경우 회사는 변경 사항을 서비스 내 공지사항을 통해 공지합니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제4조 (서비스의 제공)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>회사는 다음과 같은 서비스를 제공합니다:
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>네비게이션 주소 비교 도구 (네비 컴페어)</li>
                      <li>중고 컴퓨터 시세 계산 도구 (당근 컴퓨터 시세 계산기)</li>
                      <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 제공하는 서비스</li>
                    </ul>
                  </li>
                  <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
                  <li>회사는 서비스 제공에 필요한 경우 정기점검을 실시할 수 있으며, 이로 인해 서비스 이용이 일시적으로 중단될 수 있습니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제5조 (서비스 이용)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.</li>
                  <li>이용자는 서비스를 이용할 때 다음 각 호의 행위를 하여서는 안 됩니다:
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>서비스의 정상적인 운영을 방해하는 행위</li>
                      <li>다른 이용자의 서비스 이용을 방해하는 행위</li>
                      <li>서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 영리 목적으로 이용하는 행위</li>
                      <li>서비스를 범죄 행위에 이용하는 행위</li>
                      <li>기타 관련 법령에 위반되는 행위</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제6조 (서비스의 변경 및 중단)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>회사는 서비스 향상을 위하여 서비스의 전부 또는 일부를 수정, 변경하거나 중단할 수 있습니다.</li>
                  <li>서비스가 변경되거나 중단되는 경우 회사는 가능한 범위 내에서 이를 사전에 공지합니다.</li>
                  <li>무료로 제공되는 서비스의 변경 또는 중단으로 인해 발생하는 문제에 대해서 회사는 별도의 보상을 하지 않습니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제7조 (광고의 게재)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>회사는 서비스 운영을 위해 서비스 내에 광고를 게재할 수 있습니다.</li>
                  <li>회사는 Google AdSense 등 제3자 광고 서비스를 이용할 수 있으며, 이러한 광고 서비스는 별도의 이용약관 및 개인정보처리방침이 적용될 수 있습니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제8조 (저작권 및 지적재산권)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>서비스에서 제공하는 콘텐츠에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.</li>
                  <li>이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 해서는 안 됩니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제9조 (면책조항)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                  <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해서는 책임을 지지 않습니다.</li>
                  <li>서비스를 통해 제공되는 정보의 정확성, 신뢰성, 완전성에 대해서 회사는 보증하지 않으며, 이용자가 서비스를 통해 얻은 정보를 사용하여 발생하는 손해에 대해서 회사는 책임을 지지 않습니다.</li>
                  <li>회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">제10조 (분쟁해결)</h2>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 적용합니다.</li>
                  <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">부칙</h2>
                <p className="mt-4">
                  이 약관은 2024년 1월 1일부터 시행합니다.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
