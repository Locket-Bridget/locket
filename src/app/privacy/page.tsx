import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Locket Security",
  description:
    "How Locket Security collects, uses, shares, and protects your personal information.",
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
    id: "intro",
    title: "1. Introduction",
    body: (
      <>
        <p>
          This Privacy Policy explains how{" "}
          <strong>Locket Security LLC</strong> (&ldquo;Locket,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
          uses, shares, and protects information about you when you visit{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="https://locketsecurity.com"
          >
            locketsecurity.com
          </a>{" "}
          (the &ldquo;Site&rdquo;), book a consultation, subscribe to our
          newsletter, fill out a form, or purchase any of our services
          (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          By using the Site or Services, you agree to the practices described
          here. This Policy is incorporated by reference into our{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="/terms"
          >
            Terms of Service
          </a>
          . If you do not agree, please do not use the Site or Services.
        </p>
      </>
    ),
  },
  {
    id: "who",
    title: "2. Who We Are",
    body: (
      <>
        <p>
          Locket Security LLC is a Delaware limited liability company with its
          principal place of business in New York. We provide personal brand
          protection and digital-presence security services to creators,
          influencers, and small businesses.
        </p>
        <p>
          We are the &ldquo;data controller&rdquo; (under EU/UK terminology) or
          &ldquo;business&rdquo; (under California terminology) responsible for
          the personal information processed through the Site and Services.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "3. Information We Collect",
    body: (
      <>
        <p>We collect personal information in three ways:</p>
        <p className="font-semibold text-blue-900 mt-3">
          a. Information you give us.
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Contact &amp; consultation forms:</strong> your name, email
            address, the Service you&rsquo;re interested in, and any notes you
            include.
          </li>
          <li>
            <strong>Newsletter signup:</strong> your email address.
          </li>
          <li>
            <strong>Survey responses:</strong> answers you provide if you choose
            to participate in our research surveys.
          </li>
          <li>
            <strong>Bookings:</strong> the name, email, and any scheduling
            details you enter when you book a consultation through Calendly.
          </li>
          <li>
            <strong>Payment information:</strong> billing name and email,
            country, and the last four digits and brand of your payment card.
            Full card numbers are handled by Stripe and never stored by Locket.
          </li>
          <li>
            <strong>Service delivery information:</strong> the details you
            choose to share so we can perform your audit or monitoring — such
            as social handles, account emails, recovery emails, phone numbers,
            past breach history, screenshots, and (where you grant supervised
            access) temporary credentials, two-factor codes, or business-manager
            invitations.
          </li>
          <li>
            <strong>Direct communications:</strong> the contents of emails,
            messages, and other communications you send to us.
          </li>
        </ul>
        <p className="font-semibold text-blue-900 mt-3">
          b. Information we collect automatically.
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Device &amp; usage data:</strong> IP address, browser type,
            operating system, referring URLs, pages viewed, time on page, and
            approximate location derived from IP.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> see{" "}
            <a className="underline decoration-blue-300" href="#cookies">
              Section 8
            </a>
            .
          </li>
        </ul>
        <p className="font-semibold text-blue-900 mt-3">
          c. Information from third parties.
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Payment processor:</strong> Stripe sends us limited
            information about your transaction (status, amount, last four
            digits) so we can fulfill your order.
          </li>
          <li>
            <strong>Breach and dark-web data providers:</strong> as part of our
            monitoring services, we query third-party data providers using
            identifiers you provide (such as email addresses or usernames) and
            receive back information about whether those identifiers appear in
            known breaches, dark-web marketplaces, or impersonation campaigns.
          </li>
          <li>
            <strong>Public sources:</strong> publicly available information
            about your accounts and online presence that we review as part of
            your audit (for example, what your public profile reveals).
          </li>
        </ul>
        <p className="mt-3 italic text-blue-700/70">
          We do not knowingly collect Social Security numbers, government IDs,
          financial-account numbers, biometric identifiers, or precise
          geolocation, and we ask that you do not send them to us unless we
          specifically request them.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            Provide, operate, and improve the Site and Services — including
            performing audits, dark-web and breach monitoring, impersonation
            detection, and reporting;
          </li>
          <li>
            Process payments, manage subscriptions, send receipts, and prevent
            fraud;
          </li>
          <li>
            Communicate with you about your account, bookings, support
            requests, and service updates;
          </li>
          <li>
            Send marketing communications, newsletters, and product updates if
            you have opted in (you can opt out at any time — see{" "}
            <a className="underline decoration-blue-300" href="#your-rights">
              Section 10
            </a>
            );
          </li>
          <li>
            Personalize the Site and tailor our recommendations to your
            situation;
          </li>
          <li>
            Maintain the security of the Site, detect abuse, and enforce our
            Terms;
          </li>
          <li>
            Comply with legal obligations, respond to lawful requests, and
            establish or defend legal claims;
          </li>
          <li>
            Review aggregated server logs to understand how the Site is used
            and improve our offerings (we do not currently run analytics or
            behavioral tracking — see{" "}
            <a className="underline decoration-blue-300" href="#cookies">
              Section 8
            </a>
            ).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "5. Legal Bases for Processing (EEA/UK Users)",
    body: (
      <>
        <p>
          If you are in the European Economic Area or the United Kingdom, we
          rely on the following legal bases under the GDPR / UK GDPR:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Contract:</strong> to provide the Services you have
            requested and to process payments.
          </li>
          <li>
            <strong>Legitimate interests:</strong> to operate and improve our
            business, to maintain Site security, and to communicate with you
            about Services you have purchased — provided those interests are
            not overridden by your rights.
          </li>
          <li>
            <strong>Consent:</strong> for marketing emails, optional cookies,
            and any sensitive data you choose to share. You can withdraw
            consent at any time.
          </li>
          <li>
            <strong>Legal obligation:</strong> to comply with applicable laws,
            tax obligations, and lawful requests.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. How We Share Information",
    body: (
      <>
        <p>
          We do <strong>not</strong> sell your personal information, and we do
          not share it for cross-context behavioral advertising. We share
          information only as described below:
        </p>
        <p className="font-semibold text-blue-900 mt-3">a. Service providers.</p>
        <p>
          We use trusted third-party vendors to operate the Site and Services
          under contracts that limit their use of your data to the purposes we
          authorize. These include:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Stripe</strong> — payment processing and billing;
          </li>
          <li>
            <strong>Resend</strong> — transactional email delivery (such as
            consultation requests);
          </li>
          <li>
            <strong>Formspree</strong> — newsletter signup form submission;
          </li>
          <li>
            <strong>Calendly</strong> — consultation scheduling;
          </li>
          <li>
            <strong>Typeform</strong> — research surveys, where applicable;
          </li>
          <li>
            <strong>Hosting &amp; infrastructure providers</strong> (for
            example, Vercel) — to host the Site and store operational data;
          </li>
          <li>
            <strong>Breach and dark-web data providers</strong> — to perform
            monitoring on the identifiers you authorize us to monitor;
          </li>
          <li>
            <strong>Communications tools</strong> — such as Slack or shared
            inboxes used to deliver priority support on Protected Princess.
          </li>
        </ul>
        <p className="font-semibold text-blue-900 mt-3">
          b. Legal and safety.
        </p>
        <p>
          We may disclose information when we believe in good faith that
          disclosure is necessary to comply with a law, regulation, subpoena,
          court order, or other legal process; to protect the rights, property,
          or safety of Locket, our users, or others; to investigate fraud,
          security, or technical issues; or to enforce our Terms.
        </p>
        <p className="font-semibold text-blue-900 mt-3">
          c. Business transfers.
        </p>
        <p>
          If Locket is involved in a merger, acquisition, financing, or sale of
          assets, your information may be transferred as part of that
          transaction. We will notify you (for example, by email and/or by a
          notice on the Site) of any change in ownership or material change in
          how your information is handled.
        </p>
        <p className="font-semibold text-blue-900 mt-3">
          d. With your consent.
        </p>
        <p>
          We will share information for any other purpose with your direction
          or consent — for example, if you ask us to coordinate with your
          manager, agency, or lawyer.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "7. How Long We Keep Information",
    body: (
      <>
        <p>
          We keep personal information only as long as we need it for the
          purposes described in this Policy, including to deliver the Services,
          comply with legal obligations (such as tax and accounting), resolve
          disputes, and enforce our agreements. Typical retention windows:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Account &amp; billing records:</strong> for the life of
            your relationship with Locket plus up to seven (7) years after, to
            satisfy tax and accounting requirements.
          </li>
          <li>
            <strong>Audit deliverables and monitoring data:</strong> for the
            duration of your subscription plus up to twelve (12) months after
            cancellation, then deleted or anonymized.
          </li>
          <li>
            <strong>Temporary credentials you share for service delivery:</strong>{" "}
            destroyed promptly after the work is complete and in no event held
            longer than reasonably necessary.
          </li>
          <li>
            <strong>Marketing list (newsletter):</strong> until you unsubscribe.
          </li>
          <li>
            <strong>Server logs:</strong> typically retained for up to 24
            months. We do not currently run analytics or behavioral tracking.
          </li>
        </ul>
        <p>
          When information is no longer needed, we delete it or de-identify it
          so it can no longer be associated with you.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking Technologies",
    body: (
      <>
        <p>
          <strong>
            Locket does not currently use cookies or similar technologies for
            analytics, advertising, or behavioral tracking.
          </strong>{" "}
          We do not run Google Analytics, pixels, or any cross-site tracking on
          the Site.
        </p>
        <p>
          When you use third-party features embedded on the Site — for
          example, <strong>Stripe Checkout</strong> for payments,{" "}
          <strong>Calendly</strong> for booking consultations,{" "}
          <strong>Typeform</strong> for surveys, or{" "}
          <strong>Formspree</strong> for the newsletter signup — those
          providers may set their own cookies under their own privacy policies
          while you interact with their tools. We do not control those cookies.
        </p>
        <p>
          You can control cookies through your browser settings, and most
          browsers let you block or delete them. Disabling cookies set by
          payment or scheduling tools may prevent those features from working
          (for example, you may not be able to check out).
        </p>
        <p>
          If we add analytics or tracking technologies in the future, we will
          update this section and, where required by law, ask for your consent
          before doing so.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "9. How We Protect Information",
    body: (
      <>
        <p>
          We take reasonable administrative, technical, and physical safeguards
          designed to protect your information against loss, theft, misuse, and
          unauthorized access — including TLS encryption in transit, vetted
          third-party processors, access controls based on least privilege,
          two-factor authentication on internal accounts, and prompt deletion
          of credentials we no longer need.
        </p>
        <p>
          No system is perfectly secure. Cybersecurity is an ongoing practice,
          and while we work hard to protect your information, we cannot
          guarantee its absolute security. Please use a strong, unique password
          and enable two-factor authentication wherever it&rsquo;s available.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "10. Your Choices & Rights",
    body: (
      <>
        <p>You can:</p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            <strong>Unsubscribe from marketing emails</strong> by clicking the
            unsubscribe link in any marketing message, or by emailing{" "}
            <a
              className="underline decoration-blue-300 hover:text-blue-900"
              href="mailto:hello@locketsecurity.com"
            >
              hello@locketsecurity.com
            </a>
            . We will still send you transactional messages (receipts, security
            alerts, account notices).
          </li>
          <li>
            <strong>Access, correct, delete, or export</strong> the personal
            information we hold about you. To make a request, email{" "}
            <a
              className="underline decoration-blue-300 hover:text-blue-900"
              href="mailto:hello@locketsecurity.com"
            >
              hello@locketsecurity.com
            </a>{" "}
            with the subject line &ldquo;Privacy Request.&rdquo;
          </li>
          <li>
            <strong>Withdraw consent</strong> at any time for processing that
            we base on consent. Withdrawal does not affect processing already
            performed.
          </li>
          <li>
            <strong>Object or restrict processing</strong> where we rely on
            legitimate interests.
          </li>
          <li>
            <strong>Lodge a complaint</strong> with your local data-protection
            authority if you believe our processing violates the law.
          </li>
        </ul>
        <p>
          We will verify your identity before fulfilling a request and will
          respond within the timeframe required by applicable law (generally
          30–45 days). We do not discriminate against you for exercising your
          rights.
        </p>
      </>
    ),
  },
  {
    id: "california",
    title: "11. California Residents (CCPA / CPRA)",
    body: (
      <>
        <p>
          If you are a California resident, you have additional rights under
          the California Consumer Privacy Act, as amended by the CPRA:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-2 text-blue-700/80">
          <li>
            The right to <strong>know</strong> what personal information we
            collect, use, disclose, and (if applicable) sell or share;
          </li>
          <li>
            The right to <strong>delete</strong> personal information we have
            collected;
          </li>
          <li>
            The right to <strong>correct</strong> inaccurate personal
            information;
          </li>
          <li>
            The right to <strong>opt out</strong> of the &ldquo;sale&rdquo; or
            &ldquo;sharing&rdquo; of personal information for cross-context
            behavioral advertising — we do <strong>not</strong> sell or share
            personal information in this sense;
          </li>
          <li>
            The right to <strong>limit</strong> the use of sensitive personal
            information — we do not use sensitive information for purposes
            outside what is described here;
          </li>
          <li>
            The right to <strong>non-discrimination</strong> for exercising
            these rights.
          </li>
        </ul>
        <p>
          Submit a request by emailing{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="mailto:hello@locketsecurity.com"
          >
            hello@locketsecurity.com
          </a>{" "}
          with the subject line &ldquo;California Privacy Request.&rdquo; You
          may designate an authorized agent to act on your behalf.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "12. International Transfers",
    body: (
      <>
        <p>
          Locket is based in the United States, and the service providers we
          use may process information in the U.S. and other countries. If you
          access the Site from outside the U.S., your information will be
          transferred to, stored, and processed in the U.S., where data
          protection laws may differ from those in your country.
        </p>
        <p>
          When we transfer personal information out of the EEA or UK, we rely
          on appropriate safeguards — such as Standard Contractual Clauses —
          to protect that information.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "13. Children's Privacy",
    body: (
      <>
        <p>
          The Site and Services are intended for adults. We do not knowingly
          collect personal information from anyone under 18. If you believe a
          minor has provided us with personal information, contact us at{" "}
          <a
            className="underline decoration-blue-300 hover:text-blue-900"
            href="mailto:hello@locketsecurity.com"
          >
            hello@locketsecurity.com
          </a>{" "}
          and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "14. Third-Party Links & Platforms",
    body: (
      <>
        <p>
          The Site may link to third-party websites, social media platforms, or
          tools (for example, Instagram, TikTok, YouTube, X, Pinterest, news
          publications). Those services have their own privacy practices, and
          we are not responsible for their content or how they handle your
          information. Please review their policies before sharing personal
          information.
        </p>
      </>
    ),
  },
  {
    id: "automated",
    title: "15. Automated Decision-Making",
    body: (
      <>
        <p>
          We do not make solely automated decisions that produce legal or
          similarly significant effects about you. A human reviews every audit,
          report, and recommendation we deliver.
        </p>
      </>
    ),
  },
  {
    id: "do-not-track",
    title: "16. &ldquo;Do Not Track&rdquo; Signals",
    body: (
      <>
        <p>
          Some browsers transmit a &ldquo;Do Not Track&rdquo; signal. Because
          there is no industry-wide standard for honoring those signals, we do
          not currently respond to them. We do, however, honor opt-out requests
          submitted through this Policy and applicable Global Privacy Control
          (GPC) signals where required by law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "17. Changes to This Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. If we make a
          material change, we will update the &ldquo;Last updated&rdquo; date
          at the top, post a notice on the Site, and — where required by law
          — notify you by email at least 14 days before the change takes
          effect. Your continued use of the Site or Services after the change
          takes effect constitutes acceptance of the updated Policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "18. Contact Us",
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, please contact us:
        </p>
        <ul className="list-none space-y-1 mt-2 text-blue-700/80">
          <li>
            <strong>Locket Security LLC</strong>
          </li>
          <li>
            Privacy inquiries:{" "}
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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-10 sm:py-16">
      {/* Page header */}
      <div className="text-center mb-10 sm:mb-14">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-4"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ★ &nbsp; your data, your rules
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Privacy Policy
        </h1>
        <p
          className="mt-3 text-blue-700/70 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          What we collect, why we collect it, and what you can do about it ✦
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

        {/* Quick-glance summary */}
        <div className="mb-10 rounded-2xl border border-blue-200 bg-white/60 p-5 sm:p-6">
          <h2
            className="text-sm font-semibold text-blue-900 tracking-[0.12em] uppercase mb-3"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            The short version
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-blue-700/80">
            <li className="flex items-start gap-3">
              <span className="text-[#C8553D] mt-0.5">★</span>
              <span>
                We collect what we need to deliver your Service — and nothing
                more.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C8553D] mt-0.5">★</span>
              <span>
                We <strong>never sell</strong> your personal information.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C8553D] mt-0.5">★</span>
              <span>
                Stripe handles payments. Resend, Formspree, Calendly, and
                Typeform handle specific forms.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C8553D] mt-0.5">★</span>
              <span>
                You can email us anytime to access, correct, or delete your
                info.
              </span>
            </li>
          </ul>
        </div>

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
