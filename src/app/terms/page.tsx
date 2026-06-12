import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service · Locket Security",
  description:
    "The terms and conditions for using Locket Security's website and services.",
};

const LAST_UPDATED = "May 14, 2026";
const EFFECTIVE_DATE = "May 14, 2026";

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "acceptance",
    title: "1. Welcome & Acceptance of Terms",
    body: (
      <>
        <p>
          Welcome to Locket! These Terms of Service (the &ldquo;Terms&rdquo;) are
          a legal agreement between you and{" "}
          <strong>Locket Security LLC</strong>, a Delaware limited liability
          company with its principal place of business in New York
          (&ldquo;Locket,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). They govern your access to and use of{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="https://locketsecurity.com"
          >
            locketsecurity.com
          </a>{" "}
          (the &ldquo;Site&rdquo;) and any consultations, audits, monitoring,
          digital products, or other services we provide (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          By visiting the Site, booking a consultation, purchasing a Service, or
          otherwise engaging with us, you agree to these Terms. If you do not
          agree, please do not use the Site or Services.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: (
      <>
        <p>
          You must be at least 18 years old and able to form a binding contract
          to purchase any paid Service. By using the Services, you represent
          that you meet these requirements and that the information you provide
          is accurate and complete.
        </p>
        <p>
          If you are purchasing on behalf of a business, brand, or another
          person, you represent that you are authorized to bind that entity or
          individual to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "3. The Services",
    body: (
      <>
        <p>
          Locket provides personal brand and digital-presence protection
          services, currently offered in the following tiers:
        </p>
        <ul className="list-none space-y-3 mt-3">
          <li className="flex items-start gap-3">
            <span className="text-[#C8553D] mt-1">★</span>
            <span>
              <strong>Cyber Cleanse</strong>: a one-time security audit of your
              social accounts, dark web exposure, third-party app access, and
              privacy settings, delivered with a personalized PDF report.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C8553D] mt-1">★</span>
            <span>
              <strong>Digital Detox</strong>: an ongoing monthly subscription
              that includes the Cyber Cleanse audit in your first month, plus
              24/7 dark web monitoring, breach alerts, impersonation detection,
              monthly threat reports, platform policy alerts, and business-hours
              email support.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C8553D] mt-1">★</span>
            <span>
              <strong>Protected Princess</strong>: our highest tier, including
              everything in Digital Detox plus active impersonation, brand, and
              link monitoring, priority incident support during business hours,
              direct Slack access during support hours, and a quarterly
              re-audit.
            </span>
          </li>
        </ul>
        <p>
          We may also offer digital products (such as guides, lookbooks, or
          toolkits) from time to time. The specific features of each Service
          are described on the relevant page of the Site and are incorporated
          into these Terms by reference. We may add, remove, or update Service
          features at our discretion, provided that we will not materially
          reduce the features of a Service you have already paid for during
          your active billing period.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "4. Scope of Work & What We Don't Do",
    body: (
      <>
        <p>
          Locket is a security and digital-presence advisory service. Our role
          is to <em>audit, monitor, advise, and guide</em>. To set expectations
          clearly, the following are <strong>not</strong> part of our Services
          unless we expressly agree otherwise in writing:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            Legal advice, legal takedowns, DMCA filings, or representation of
            any kind. We are not a law firm and nothing on the Site or in our
            deliverables is legal advice.
          </li>
          <li>
            Guaranteed recovery of hacked, suspended, or impersonating accounts.
            We can guide you and recommend escalation paths, but final outcomes
            are controlled by third-party platforms.
          </li>
          <li>
            24/7 emergency response. Support hours are Monday through Friday,
            9:00 AM to 7:00 PM Pacific Time, excluding U.S. federal holidays,
            unless your plan states otherwise.
          </li>
          <li>
            Performing offensive security, hacking, or any action on accounts or
            systems you do not own or have explicit written permission to
            access.
          </li>
          <li>
            Financial, tax, public-relations, medical, or mental-health advice.
          </li>
        </ul>
        <p>
          Where we recommend escalation to a lawyer, platform partner, public
          relations professional, or law enforcement, those services are
          provided by third parties and are not covered by Locket&rsquo;s fees.
        </p>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "5. Your Responsibilities",
    body: (
      <>
        <p>To get the most out of the Services, you agree to:</p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            Provide accurate, complete, and current information about yourself,
            your accounts, and the channels you want us to monitor or audit.
          </li>
          <li>
            Cooperate in good faith with our information requests and respond to
            us within a reasonable time so we can deliver on schedule.
          </li>
          <li>
            Keep your own credentials, two-factor codes, recovery emails, and
            backup codes confidential. Where you share access with us, do so
            through the methods we recommend.
          </li>
          <li>
            Implement the recommendations we provide. Locket&rsquo;s
            effectiveness depends in part on you actually applying the security
            steps we outline.
          </li>
          <li>
            Comply with the terms of service of any third-party platform (such
            as Instagram, TikTok, YouTube, X, or Pinterest) that we audit or
            monitor on your behalf.
          </li>
        </ul>
        <p>
          You are solely responsible for any content you post, share, or send
          through your accounts and for the actions taken from your accounts,
          including by anyone you authorize to access them.
        </p>
      </>
    ),
  },
  {
    id: "billing",
    title: "6. Pricing, Billing & Renewals",
    body: (
      <>
        <p>
          All prices are listed in U.S. dollars and are exclusive of any
          applicable taxes, which we may collect where required by law. Payment
          is processed by our third-party payment processor (currently Stripe,
          Inc.). By submitting payment information, you authorize us and our
          processor to charge the payment method you provide.
        </p>
        <p className="font-semibold text-blue-900 mt-3">One-time Services.</p>
        <p>
          Services billed as &ldquo;one-time&rdquo; (such as Cyber Cleanse) are
          charged in full at the time of purchase.
        </p>
        <p className="font-semibold text-blue-900 mt-3">
          Subscription Services.
        </p>
        <p>
          Subscription Services (such as Digital Detox and Protected Princess)
          renew automatically each month on the same day of the month you first
          subscribed, at the then-current rate, until you cancel. By starting a
          subscription you authorize recurring charges to your payment method
          until you cancel.
        </p>
        <p>
          If a payment fails, we may suspend or terminate access until payment
          is current. We may change subscription pricing with at least 30
          days&rsquo; advance notice by email, and the new price will take
          effect on your next renewal.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "7. Cancellation & Refunds",
    body: (
      <>
        <p className="font-semibold text-blue-900">Subscriptions.</p>
        <p>
          You may cancel a monthly subscription at any time by emailing{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="mailto:hello@locketsecurity.com"
          >
            hello@locketsecurity.com
          </a>{" "}
          with the subject line &ldquo;Cancel.&rdquo; Cancellation takes effect
          at the end of your then-current billing period; you will retain access
          through that period and will not be charged again. We do not provide
          partial-month refunds for unused time.
        </p>
        <p className="font-semibold text-blue-900 mt-3">One-time Services.</p>
        <p>
          Because Cyber Cleanse and similar one-time services involve immediate
          work performed on your behalf, they are generally non-refundable once
          we have begun the audit. If you cancel before any work has started, we
          will issue a full refund. After work has started, refunds are at our
          reasonable discretion.
        </p>
        <p className="font-semibold text-blue-900 mt-3">Digital Products.</p>
        <p>
          Digital downloads (such as the Lookbook PDF) are eligible for a refund
          within 14 days of purchase if they don&rsquo;t meet expectations.
          Email us at{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="mailto:hello@locketsecurity.com"
          >
            hello@locketsecurity.com
          </a>{" "}
          and we will process it without drama.
        </p>
      </>
    ),
  },
  {
    id: "access",
    title: "8. Access to Your Accounts",
    body: (
      <>
        <p>
          Some Services require you to grant Locket limited, supervised access
          to certain accounts (for example, by adding us as a business manager,
          sharing administrative dashboards, or providing temporary read-only
          credentials). You authorize us to access those accounts solely to
          perform the Services and only for the duration necessary.
        </p>
        <p>
          You represent that you are the legitimate owner of, or are authorized
          to grant access to, every account or asset you share with us. You
          remain responsible for revoking our access when our work is complete.
          We will not retain login credentials beyond what is reasonably
          necessary to deliver the Services.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "9. Confidentiality & Privacy",
    body: (
      <>
        <p>
          We treat the non-public information you share with us (including
          account details, audit findings, and any personal communications)
          as confidential. We will not disclose it to third parties except (a)
          to service providers we use to operate Locket (such as payment,
          monitoring, and infrastructure providers) under appropriate
          confidentiality terms, (b) as required by law or valid legal process,
          or (c) with your consent.
        </p>
        <p>
          Our handling of personal information is described in our Privacy
          Policy, which is incorporated into these Terms by reference once
          published. If a conflict arises between these Terms and the Privacy
          Policy, the Privacy Policy controls with respect to personal
          information.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "10. Intellectual Property",
    body: (
      <>
        <p>
          The Site, our brand (including the Locket name, logo, and visual
          identity), our written reports, templates, methodologies, and other
          materials are owned by Locket Security LLC or our licensors and are
          protected by intellectual property laws.
        </p>
        <p>
          Subject to your compliance with these Terms, we grant you a limited,
          non-exclusive, non-transferable, revocable license to use the
          deliverables we provide (such as your personalized PDF report or
          downloaded guides) for your own personal or internal business use.
          You may not resell, redistribute, sublicense, publish, or use them to
          provide competing security services without our prior written
          consent.
        </p>
        <p>
          Any feedback, ideas, or suggestions you send us about the Services may
          be used by Locket without obligation to you.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "11. Acceptable Use",
    body: (
      <>
        <p>You agree not to use the Site or Services to:</p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            Violate any law or the rights of any third party, including
            intellectual property, privacy, or publicity rights;
          </li>
          <li>
            Request or attempt to obtain unauthorized access to accounts,
            devices, or data that do not belong to you;
          </li>
          <li>
            Send us unlawful, infringing, harassing, or otherwise objectionable
            content;
          </li>
          <li>
            Interfere with or disrupt the Site, our systems, or our service
            providers; or
          </li>
          <li>
            Reverse engineer, scrape, or attempt to extract our underlying tools
            or methodologies, except as permitted by law.
          </li>
        </ul>
        <p>
          We may suspend or terminate access for any violation of this section,
          without refund where the violation is material.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "12. Third-Party Platforms & Tools",
    body: (
      <>
        <p>
          The Services depend on third-party platforms (Instagram, TikTok,
          YouTube, X, Pinterest, Stripe, dark web data providers, and others)
          that we do not control. Their availability, features, and policies
          can change without notice, and outages, rate limits, or policy
          changes may affect what we can deliver. We are not responsible for
          the acts, omissions, or failures of third-party platforms.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "13. Disclaimers",
    body: (
      <>
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-900">
          No Guarantee of Security.
        </p>
        <p>
          Cybersecurity is inherently best-effort. We use reasonable care and
          industry-standard methods, but{" "}
          <strong>
            we do not guarantee that your accounts, data, or online presence
            will be free from hacks, breaches, impersonation, fraud, or other
            harm.
          </strong>{" "}
          Following our recommendations reduces risk; it does not eliminate it.
        </p>
        <p className="uppercase tracking-wide text-sm font-semibold text-blue-900 mt-3">
          &ldquo;As Is&rdquo; Basis.
        </p>
        <p>
          The Site and Services are provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis. To the fullest extent permitted by
          law, Locket disclaims all warranties, express or implied, including
          warranties of merchantability, fitness for a particular purpose,
          non-infringement, accuracy, uninterrupted service, and any warranties
          arising from course of dealing or trade.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "14. Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, Locket and its members,
          managers, employees, and agents will not be liable for any indirect,
          incidental, special, consequential, exemplary, or punitive damages
          (including lost profits, lost revenue, lost data, loss of goodwill, or
          reputational harm) arising out of or relating to the Site, the
          Services, or these Terms, even if we have been advised of the
          possibility of such damages.
        </p>
        <p>
          Our total cumulative liability for all claims arising out of or
          relating to the Site, the Services, or these Terms is limited to the
          greater of (a) the amount you paid to Locket for the Services in the
          three (3) months immediately preceding the event giving rise to the
          claim, or (b) one hundred U.S. dollars ($100).
        </p>
        <p>
          Some jurisdictions do not allow certain limitations of liability, so
          some of these limits may not apply to you. Nothing in these Terms
          limits any liability that cannot lawfully be limited.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "15. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Locket and its
          members, managers, employees, and agents from and against any
          third-party claims, damages, liabilities, costs, and reasonable
          attorneys&rsquo; fees arising out of (a) your use of the Site or
          Services, (b) your breach of these Terms, (c) your violation of any
          law or third-party right, or (d) content or instructions you provide
          to us.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "16. Suspension & Termination",
    body: (
      <>
        <p>
          We may suspend or terminate your access to the Site or Services at
          any time, with or without notice, if we reasonably believe you have
          violated these Terms, if required by law, or if providing the
          Services to you would create risk to Locket or other users.
        </p>
        <p>
          You may stop using the Site at any time. To cancel a paid Service,
          follow the steps in Section 7. The sections of these Terms that by
          their nature should survive termination, including Sections 9 (in
          part), 10, 14, 15, 17, and 18, will survive.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "17. Governing Law & Dispute Resolution",
    body: (
      <>
        <p>
          These Terms are governed by the laws of the State of New York,
          without regard to its conflict-of-laws principles. The United Nations
          Convention on Contracts for the International Sale of Goods does not
          apply.
        </p>
        <p className="font-semibold text-blue-900 mt-3">
          Informal resolution first.
        </p>
        <p>
          Before filing any formal claim, you agree to email us at{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="mailto:hello@locketsecurity.com"
          >
            hello@locketsecurity.com
          </a>{" "}
          with a description of the dispute and to work in good faith for at
          least thirty (30) days to resolve it.
        </p>
        <p className="font-semibold text-blue-900 mt-3">Binding arbitration.</p>
        <p>
          If the dispute is not resolved informally, you and Locket agree to
          resolve it through final and binding arbitration administered by JAMS
          under its Streamlined Arbitration Rules then in effect, conducted in
          New York County, New York (or remotely, by mutual agreement). The
          arbitrator&rsquo;s decision is binding and may be entered as a
          judgment in any court of competent jurisdiction.
        </p>
        <p className="font-semibold text-blue-900 mt-3">No class actions.</p>
        <p>
          You and Locket agree to bring claims only in an individual capacity
          and not as a plaintiff or class member in any purported class,
          collective, or representative proceeding. Notwithstanding the above,
          either party may bring an individual action in small-claims court or
          seek injunctive relief in court to protect intellectual property
          rights or confidential information.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "18. Changes to These Terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time. If we make a material
          change, we&rsquo;ll let you know by posting a notice on the Site or
          emailing the address associated with your account at least 14 days
          before the change takes effect. Your continued use of the Site or
          Services after the effective date constitutes acceptance of the
          updated Terms. If you don&rsquo;t agree, please stop using the
          Services and cancel any active subscription.
        </p>
      </>
    ),
  },
  {
    id: "misc",
    title: "19. Miscellaneous",
    body: (
      <>
        <p>
          These Terms, together with any order or service-specific terms we
          present at checkout and our Privacy Policy, are the entire agreement
          between you and Locket regarding the Site and Services. If any
          provision is held unenforceable, the remainder will remain in effect.
          Our failure to enforce any provision is not a waiver. You may not
          assign these Terms without our consent; we may assign them in
          connection with a merger, acquisition, financing, or sale of assets.
          Headings are for convenience only.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "20. Contact Us",
    body: (
      <>
        <p>For questions about these Terms or the Services:</p>
        <ul className="list-none space-y-1 mt-2 text-blue-700/80">
          <li>
            <strong>Locket Security LLC</strong>
          </li>
          <li>
            Email:{" "}
            <a
              className="underline decoration-blue-300 hover:text-blue-900"
              href="mailto:hello@locketsecurity.com"
            >
              hello@locketsecurity.com
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              className="underline decoration-blue-300 hover:text-blue-900"
              href="https://instagram.com/locketsecurity"
              target="_blank"
              rel="noopener noreferrer"
            >
              @locketsecurity
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-10 sm:py-16">
      {/* Page header */}
      <div className="text-center mb-10 sm:mb-14">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-4"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ★ &nbsp; the fine print
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Terms of Service
        </h1>
        <p
          className="mt-3 text-blue-700/70 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          The rules, in plain English ✦
        </p>
        <p
          className="mt-3 text-xs tracking-[0.2em] uppercase text-blue-400"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          Effective {EFFECTIVE_DATE} · Last updated {LAST_UPDATED}
        </p>
        <div className="flex items-center justify-center gap-4 mt-5 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none" />
        <span className="absolute top-4 left-5 text-blue-200 text-xl select-none">
          ★
        </span>
        <span className="absolute top-4 right-5 text-blue-200 text-xl select-none">
          ★
        </span>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mb-10 rounded-2xl border border-blue-200 bg-white/60 p-5 sm:p-6"
        >
          <h2
            className="text-sm font-semibold text-blue-900 tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            What&rsquo;s inside
          </h2>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-blue-700/80">
            {sections.map((s) => (
              <li key={s.id} className="flex items-start gap-2">
                <span className="text-blue-300">·</span>
                <a
                  className="hover:text-blue-900 underline decoration-blue-200 decoration-1 underline-offset-2"
                  href={`#${s.id}`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="flex flex-col gap-10 text-[15px] leading-relaxed text-blue-800/90">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2
                className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 leading-snug"
                style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
              >
                {s.title}
              </h2>
              <div className="flex flex-col gap-3">{s.body}</div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-6 border-t border-blue-100 text-center text-xs text-blue-400 tracking-wide">
          © {new Date().getFullYear()} Locket Security LLC · All rights
          reserved.
        </div>
      </div>
    </main>
  );
}
