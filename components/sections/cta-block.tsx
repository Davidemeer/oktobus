import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { Body } from '@/components/ui/body';
import { Button } from '@/components/ui/button';
import { RiseIn } from '@/components/motion/rise-in';

type CTAAction = { label: string; href: string };

type CTABlockProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary: CTAAction;
  secondary?: CTAAction;
};

export function CTABlock({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: CTABlockProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <RiseIn>
          <div className="flex items-center gap-4 mb-10 sm:mb-14">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Hairline className="flex-1" />
          </div>
        </RiseIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <RiseIn delay={0.05}>
              <Display size="md" as="h2">
                {title}
              </Display>
            </RiseIn>
            {description ? (
              <RiseIn delay={0.15}>
                <Body className="mt-5 max-w-[480px]">{description}</Body>
              </RiseIn>
            ) : null}
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
            <Button
              href={primary.href}
              size="lg"
              endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
            >
              {primary.label}
            </Button>
            {secondary ? (
              <Button
                href={secondary.href}
                variant="ghost"
                size="lg"
                endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
