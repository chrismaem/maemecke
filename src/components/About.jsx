import Section, { AboutSkeleton } from './Section'

export default function About() {
  return (
    <Section id="about" skeleton={<AboutSkeleton />}>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-light-card dark:bg-dark-card flex items-center justify-center overflow-hidden">
            <img
              src="https://maemecke.net/wp-content/uploads/2023/11/Chris6-3-2048x2048.jpg"
              alt="Christoph Mämecke"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-6 lowercase">
            About Me
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            As an experienced Commerce Consultant and Product Owner with a Master&apos;s degree in Digital Business
            and Innovation from VU Amsterdam, I bring a proven track record of delivering value in diverse digital
            projects. At Accenture Song, I have played a pivotal role in helping clients build innovative digital
            commerce experiences, demonstrating my expertise in product management, stakeholder management,
            and agile implementation.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            I am motivated to leverage my skills and experience in new and exciting opportunities within related
            digital domains, specifically roles in payments and services. My commitment to continuous learning and
            growth is complemented by analytical skills, a proactive approach and emotional intelligence. I thrive in
            dynamic, collaborative teams and bring a passion for translating complex concepts into delightful user
            experiences.
          </p>
        </div>
      </div>
    </Section>
  )
}





