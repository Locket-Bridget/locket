//This is why the scroll down stats and image cards are rendered

import StatSection from "../components/StatSection";

export default function LandingPageSections() {
  const stats = [
    {
      title: "1 in 4 accounts are hacked.",
      text: "Social media breaches are skyrocketing. More than 25% of users experience an account takeover, often without even knowing it happened.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "$3.2B in annual losses.",
      text: "Social media–based scams cost individuals and businesses billions each year — often through phishing, impersonation, or ransomware.",
      image: "https://images.unsplash.com/photo-1556742400-b5de1ef1f3c6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "61% of victims never recover access.",
      text: "Most users don’t know where to start when their accounts are breached. Recovery is slow, stressful, and often impossible without help.",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="landing-page-sections" className="py-24">
      {stats.map((stat, index) => (
        <StatSection
          key={index}
          title={stat.title}
          text={stat.text}
          image={stat.image}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}
