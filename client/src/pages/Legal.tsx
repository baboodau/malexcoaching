import { useEffect } from "react";
import { ArrowLeft, Mail } from "lucide-react";

type LegalSection = {
  heading: string;
  body?: string;
  items?: string[];
};

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
};

const EFFECTIVE_DATE = "October 28, 2026";
const SUPPORT_EMAIL = "maho@malexcoaching.com";

function LegalPage({ title, effectiveDate, sections }: LegalPageProps) {
  useEffect(() => {
    document.title = `${title} | Malex Coaching`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-yellow-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Malex Coaching
        </a>

        <article className="glass-card p-6 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-yellow-400">Malex Coaching</p>
          <h1 className="mb-3 text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mb-10 text-sm text-gray-400">Effective Date: {effectiveDate}</p>

          <div className="space-y-8 text-gray-300">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-3 text-xl font-semibold text-white">{section.heading}</h2>
                {section.body && <p className="leading-7">{section.body}</p>}
                {section.items && (
                  <ul className="ml-5 list-disc space-y-2 leading-7">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        <footer className="mt-10 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p className="mb-1">Contact us for support</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-yellow-400"
          >
            <Mail className="h-4 w-4" />
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-3">© 2026 Malex Coaching. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate={EFFECTIVE_DATE}
      sections={[
        {
          heading: "1. Agreement to Terms",
          body: "By accessing or purchasing from Malex Coaching (www.malexcoaching.com), you agree to be bound by these Terms of Service. If you do not agree, please do not purchase our coaching programs or services.",
        },
        {
          heading: "2. Digital Coaching & Services",
          body: "Our offerings consist of digital coaching, community access via Skool, custom dashboard tracking via Notion, and training program delivery via Trainerize. Purchases grant a personal, non-exclusive, non-transferable license to access the program materials. Unauthorized sharing, distribution, or resale of coaching content is strictly prohibited.",
        },
        {
          heading: "3. Results & Medical Disclaimer",
          body: "Fitness, physique, and performance results vary based on individual effort, genetics, adherence, and starting point. We do not guarantee specific physical outcomes. Malex Coaching providers are not licensed medical professionals; always consult a physician before beginning any intense physical training or nutrition regimen.",
        },
        {
          heading: "4. Limitation of Liability",
          body: "Malex Coaching shall not be held liable for any indirect, incidental, or physical injuries sustained while utilizing our training frameworks. Clients assume full responsibility for their personal health and safety during training.",
        },
      ]}
    />
  );
}

export function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      effectiveDate={EFFECTIVE_DATE}
      sections={[
        {
          heading: "All Sales Are Final",
          body: "Due to the highly personalized, immediate digital delivery, and intensive nature of 1:1 online coaching programs, all sales are final. Once your onboarding materials are issued, account access is provisioned via Skool, Notion, and Trainerize, and the initial coaching framework is delivered, no refunds will be issued.",
        },
        {
          heading: "Chargebacks",
          body: "Chargeback abuse or fraudulent chargeback claims filed after receiving digital access and coaching services will be contested using our fulfillment logs and client agreements.",
        },
        {
          heading: "Acknowledgment",
          body: "By completing your checkout, you explicitly acknowledge and agree to this no-refund policy.",
        },
      ]}
    />
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate={EFFECTIVE_DATE}
      sections={[
        {
          heading: "1. Information We Collect",
          body: "When you purchase coaching or fill out intake forms, we collect personal information such as your name, email address, phone number, payment details, and fitness/nutritional metrics necessary for coaching customization.",
        },
        {
          heading: "2. How We Use Your Information",
          items: [
            "Set up and manage your coaching accounts and dashboards through Trainerize, Skool, Notion, and related services.",
            "Communicate updates, program adjustments, and check-ins via email or phone messaging.",
            "Process secure transactions through our payment gateway providers.",
          ],
        },
        {
          heading: "3. Data Protection",
          body: "We implement strict administrative and technical security measures to protect your personal information. We do not sell, trade, or rent your private data to third parties.",
        },
      ]}
    />
  );
}
