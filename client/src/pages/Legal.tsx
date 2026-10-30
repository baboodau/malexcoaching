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

const EFFECTIVE_DATE = "October 30, 2026";
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
          heading: "2. Who We Are",
          body: "Malex Coaching is an online fitness coaching business operated by Abdul Rahman Fata Nahas (Malaysia) and Aleksandr Harrison (United Kingdom). In these terms, \"we\", \"us\" and \"our\" mean Malex Coaching, and \"you\" means the person using our website or buying our coaching.",
        },
        {
          heading: "3. Our Services",
          body: "Our coaching is delivered online and includes a personalised training program, nutrition plan and habits in Trainerize, a personalised Notion tracking dashboard, community access via Skool, and weekly check-ins by WhatsApp message or call. Services count as delivered once you have been given access to your program and dashboard, whether or not you use them.",
        },
        {
          heading: "4. Your Coaching Agreement",
          body: "Before you start, you sign a coaching agreement that sets out your program length, price and payment schedule. If anything in these terms differs from your signed agreement, your signed agreement applies.",
        },
        {
          heading: "5. Payments",
          body: "Payments are processed through Whop, Stripe, PayPal, Skool, UK bank transfer or another method agreed in writing. If a payment fails or is late, we may pause access to your program until it is paid. The full balance remains owed for the agreed term, including if you stop using the coaching early.",
        },
        {
          heading: "6. Refunds & Results Guarantee",
          body: "Refunds are available within 14 business days of purchase. After that, refunds are only given under our results guarantee: if you complete at least 90% of the program and can show you followed it, but did not achieve results as reasonably expected. Full details are in our Refund Policy.",
        },
        {
          heading: "7. Pauses, Cancellation & Termination",
          items: [
            "You may request one pause of up to 2 weeks for illness, injury or an emergency, with written notice. Your end date is extended by the same period; payments due are not paused.",
            "You may end your coaching early at any time, but this does not cancel any amount owed for the agreed term.",
            "We may end your coaching immediately, without refund, if you are abusive, share program materials, or fail to pay.",
          ],
        },
        {
          heading: "8. Health & Medical Disclaimer",
          body: "Our coaching is for educational and informational purposes only. We are not medical professionals, and our services are not a substitute for medical advice, diagnosis or treatment. Please consult a doctor before starting any new training or nutrition program, tell us about any injuries or medical conditions, and stop exercising if you feel pain, discomfort or dizziness.",
        },
        {
          heading: "9. Results Disclaimer",
          body: "Fitness, physique and performance results vary based on individual effort, adherence, genetics and starting point. The client results shown on this website are real and shared with each client's permission, but they are not a promise of the same outcome for you.",
        },
        {
          heading: "10. Assumption of Risk & Limitation of Liability",
          body: "Exercise carries risks, including muscle strain and injury. You take part voluntarily and are responsible for your own health and safety while training. To the extent permitted by law, Malex Coaching is not liable for any injury, loss or damage arising from your participation. Nothing in these terms limits liability that cannot be limited by law.",
        },
        {
          heading: "11. Personal Use & Intellectual Property",
          body: "All programs, plans, videos, dashboards and content are for your personal use only. You may not share, resell or publish them.",
        },
        {
          heading: "12. Governing Law",
          body: "These terms are governed by the laws of England and Wales.",
        },
        {
          heading: "13. Changes & Contact",
          body: "We may update these terms from time to time; the effective date above shows the latest version. Questions? Email us at maho@malexcoaching.com.",
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
          heading: "1. 14-Day Refund Window",
          body: "You can request a refund within 14 business days of your purchase.",
        },
        {
          heading: "2. Our Results Guarantee",
          body: "After the 14-day window, refunds are only available under our results guarantee: if you have completed at least 90% of your program, can show you followed it (logged workouts, nutrition and weekly check-ins), and did not achieve results as reasonably expected, you are entitled to a refund.",
        },
        {
          heading: "3. What Does Not Qualify",
          items: [
            "Missed sessions, check-ins or unused time, unless a pause was agreed in writing.",
            "Ending your coaching early or deciding to stop the program.",
            "Programs, plans and dashboards that have already been delivered, outside the cases above.",
          ],
        },
        {
          heading: "4. Cancelling Within 14 Days of Signing",
          body: "Our coaching starts immediately at your request. If you cancel within 14 days of signing your agreement, you pay for the services provided up to the date you cancel.",
        },
        {
          heading: "5. How to Request a Refund",
          body: "Email maho@malexcoaching.com with your full name, purchase date and the reason for your request. For a results guarantee claim, include your program logs and check-ins.",
        },
        {
          heading: "6. Disputes & Chargebacks",
          body: "Before opening a dispute or chargeback with your bank or payment provider, please contact us in writing and give us at least 7 days to resolve it. A chargeback for services that were delivered as described is a breach of your coaching agreement, and we may share your signed agreement and delivery records with the payment provider as evidence.",
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
          heading: "1. Who We Are",
          body: "Malex Coaching is operated by Abdul Rahman Fata Nahas (Malaysia) and Aleksandr Harrison (United Kingdom). We are responsible for the personal information described in this policy. Contact: maho@malexcoaching.com.",
        },
        {
          heading: "2. Information We Collect",
          items: [
            "Contact details: your name, email address, phone number and Instagram handle.",
            "Booking details you enter when you schedule a call through Calendly.",
            "Payment details, which are handled by our payment providers. We do not store your full card details.",
            "Health and fitness information you choose to give us so we can coach you: weight, measurements, training logs, nutrition, sleep, injuries, medical conditions and progress photos.",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          items: [
            "To set up and deliver your coaching, including your Trainerize program, Notion dashboard and Skool community access.",
            "To communicate with you about check-ins, program changes and support by email, WhatsApp or phone.",
            "To process payments and keep business and tax records.",
            "To improve our coaching and services.",
          ],
        },
        {
          heading: "4. Health Information & Consent",
          body: "Your health and fitness information is sensitive. We only collect it with your consent and only use it to coach you. You can withdraw your consent at any time by emailing us, but we may not be able to continue coaching you without it.",
        },
        {
          heading: "5. Progress Photos & Testimonials",
          body: "Your progress photos and results stay confidential. We never share them publicly, including on this website or social media, without your separate written consent, and you choose how they are shown (full face, face hidden or numbers only). You can withdraw that consent at any time and we will stop using them in new content.",
        },
        {
          heading: "6. Who We Share Information With",
          body: "We share information only with the services we use to run the coaching: Trainerize, Skool, Notion, Calendly, WhatsApp, Zoho Mail, and our payment providers (Whop, Stripe and PayPal). We do not sell, trade or rent your personal information.",
        },
        {
          heading: "7. International Transfers",
          body: "Our team works from Malaysia and the United Kingdom, and our service providers may store data in other countries. We only use providers that protect personal information appropriately.",
        },
        {
          heading: "8. How Long We Keep It",
          body: "We keep your information for as long as you are a client and afterwards only as long as needed for legal, tax and accounting purposes. Progress photos and health information are deleted on request once you are no longer a client.",
        },
        {
          heading: "9. Your Rights",
          body: "You can ask to access, correct or delete your personal information, withdraw consent, or object to how we use it, by emailing maho@malexcoaching.com. If you are in the UK, you can also complain to the Information Commissioner's Office (ICO).",
        },
        {
          heading: "10. Cookies & Embedded Content",
          body: "This website embeds YouTube videos and a Calendly booking calendar. These services may set their own cookies and collect usage data under their own privacy policies.",
        },
        {
          heading: "11. Security & Changes",
          body: "We use reasonable administrative and technical measures to protect your information. We may update this policy from time to time; the effective date above shows the latest version.",
        },
      ]}
    />
  );
}
