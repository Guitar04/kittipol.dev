import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import { profile, site } from "@/data/site";

const facts: { label: string; value: React.ReactNode }[] = [
  { label: "Name", value: site.name },
  { label: "Nickname", value: profile.nickname },
  { label: "Age", value: String(profile.age) },
  {
    label: "Education",
    value: (
      <>
        <span className="block">{profile.education.program}</span>
        <span className="mt-1 block text-faint">
          {profile.education.faculty}, {profile.education.university}
        </span>
      </>
    ),
  },
  { label: "Role", value: site.role },
];

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <Reveal>
        <p className="max-w-[54ch] text-[0.95rem] leading-[1.75] text-dim">
          I studied Information and Communication Technology at Ubon
          Ratchathani University and have worked as a full stack developer
          since, building web applications for public sector and commercial
          clients.
        </p>

        <dl className="mt-9 divide-y divide-line border-t border-line">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-wrap gap-x-5 gap-y-1 py-4"
            >
              <dt className="label w-24 shrink-0 pt-0.5">{fact.label}</dt>
              <dd className="min-w-0 text-[0.9rem] leading-relaxed text-dim">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
