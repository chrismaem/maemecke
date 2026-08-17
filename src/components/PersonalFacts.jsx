import Section from "./Section";

export default function PersonalFacts() {
  const facts = [
    {
      label: "Experience",
      value: "5+ years"
    },
    {
      label: "Originally from",
      value: "Germany"
    },
    {
      label: "Currently at",
      value: "Accenture Song",
      bold: true
    },
    {
      label: "Based in",
      value: "Amsterdam"
    }
  ];

  return (
    <Section id="personal-facts">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {facts.map((fact, idx) => (
          <div key={idx} className="rounded-xl bg-light-card dark:bg-dark-card p-8 shadow-sm">
            <div className="text-lg text-neutral-600 dark:text-neutral-300 mb-2 font-normal">{fact.label}</div>
            <div className="text-2xl text-neutral-900 dark:text-neutral-100 font-bold">
              {fact.bold ? <span className="font-bold">{fact.value}</span> : fact.value}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
