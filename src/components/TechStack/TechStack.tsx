import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import StackPanel from "@/components/TechStack/StackPanel";

export default function TechStack() {
  return (
    <Section id="stack" index="03" label="Stack">
      <Reveal>
        <StackPanel />
      </Reveal>
    </Section>
  );
}
