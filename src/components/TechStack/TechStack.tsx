import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import StackMarquee from "@/components/TechStack/variants/StackMarquee";

export default function TechStack() {
  return (
    <Section id="stack" index="02" label="Stack">
      <Reveal>
        {/* Swap this for another entry in ./variants to change the treatment. */}
        <StackMarquee />
      </Reveal>
    </Section>
  );
}
