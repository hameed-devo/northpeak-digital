import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Everything you need to know before starting your project. Can't find what you're looking for? Reach out directly."
        />

        <div className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  )
}
