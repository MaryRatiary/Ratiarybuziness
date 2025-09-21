import React, { useEffect } from 'react'
import ImageTrail from '../components/ImageTrail'
import './Services.css'

export default function Services() {
  // local images from public/photo
  const localItems = [
    '/photo/photo-assistant.jpg',
    '/photo/photo-codage.jpg',
    '/photo/photo-codage1.jpg',
    '/photo/photo-codage2.jpg',
    '/photo/photo-code3.jpg',
    '/photo/photo-design.jpg',
    '/photo/photo-design2.jpg',
    '/photo/photo-montage.jpg',
    '/photo/photo-montage2.jpg'
  ]

  // decorative items
  const httpsItems = [
    'https://picsum.photos/seed/picsum1/400/300',
    'https://picsum.photos/seed/picsum2/400/300',
    'https://picsum.photos/seed/picsum3/400/300'
  ]

  const trailItems = [...localItems, ...httpsItems]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.18 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    document.querySelectorAll('.service-card').forEach((el) => observer.observe(el))
    document.querySelectorAll('.testimonial-card').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* page-specific fixed background */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010a12] via-[#0b1120] to-[#000000]" />
        <div className="absolute -right-24 -top-20 w-2/3 h-2/3 rounded-full bg-gradient-to-r from-cyan-400/20 to-violet-500/10 blur-3xl animate-pulse" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-violet-600/10 to-cyan-400/10 blur-3xl animate-pulse" />
      </div>

      <div className="services-page relative z-10 px-6 py-16 lg:py-24 text-white max-w-7xl mx-auto">
        {/* Modern hero */}
        <header className="mb-20" data-animate>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 w-max backdrop-blur-sm border border-white/10">
                <span className="text-xs text-cyan-300 font-medium">Nos services</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Services modernes pour entreprises ambitieuses
              </h1>

              <p className="text-lg text-gray-300 max-w-xl">
                Assistant virtuel, développement web et montage vidéo. Nous concevons des expériences digitales rapides, scalables et prêtes pour le futur.
              </p>

              <div className="flex gap-4 mt-6">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-gray-900 font-semibold shadow-lg hover:shadow-cyan-400/30 transition">
                  Demander un devis
                </button>
                <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                  Voir nos réalisations
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-400 text-sm">
                <div>⚡ Consultation</div>
                <div>🎨 Design & prototype</div>
                <div>🚀 Déploiement</div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-[520px] h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-white/5 to-transparent border border-white/10 backdrop-blur-lg" data-animate>
                <ImageTrail items={trailItems} variant={1} />
              </div>
            </div>
          </div>
        </header>

        {/* Services grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" data-animate>
          {[
            {
              title: 'Assistant virtuel',
              desc: 'Automatisation intelligente, chatbots et intégrations sur-mesure.',
              img: '/photo/photo-assistant.jpg',
              items: ['Automatisation des process', 'Support 24/7', 'Intégration API']
            },
            {
              title: 'Développement web',
              desc: 'Sites et apps modernes, rapides et maintenables.',
              img: '/photo/photo-codage.jpg',
              items: ['Frontend moderne', 'Backends scalables', 'Design responsive']
            },
            {
              title: 'Montage vidéo',
              desc: 'Post-production, motion design et optimisation multi-format.',
              img: '/photo/photo-montage.jpg',
              items: ['Color grading', 'Motion graphics', 'Optimisation formats web']
            }
          ].map((service, i) => (
            <article
              key={i}
              className="service-card p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <img src={service.img} alt={service.title} className="w-16 h-16 rounded-xl object-cover ring-2 ring-cyan-400/40" />
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{service.desc}</p>
                </div>
              </div>
              <ul className="mt-5 text-sm text-gray-400 space-y-2 ml-2">
                {service.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Approach */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20" data-animate>
          <div className="lg:col-span-2 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
            <h2 className="text-3xl font-bold mb-3 text-white">Notre approche</h2>
            <p className="text-gray-300">
              Nous associons stratégie produit, design d’expérience et ingénierie pour livrer des solutions robustes et scalables. De l’atelier produit au déploiement, nous restons agiles et orientés résultats.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-tr from-cyan-400/10 to-violet-500/10 border border-white/10 shadow-lg backdrop-blur-md">
            <h4 className="font-semibold mb-3 text-white">Process rapide</h4>
            <ol className="text-gray-300 list-decimal ml-5 space-y-2">
              <li>Discovery</li>
              <li>Prototype</li>
              <li>Build & ship</li>
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20" data-animate>
          <h2 className="text-3xl font-bold mb-10 text-white">Ils nous font confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: '« L’assistant virtuel développé par Tik-Tech a réduit notre volume de tickets de 42% et a amélioré la satisfaction client. »',
                author: '— R. Valentino , CEO'
              },
              {
                text: '« Très pro. Le nouveau site a augmenté notre taux de conversion et la performance côté mobile. »',
                author: '— R. Mario, Co-CEO'
              },
              {
                text: '« Livraison rapide et respect du brief — le montage vidéo était parfait pour notre campagne. »',
                author: '— R. Ivan, Producteur'
              }
            ].map((t, i) => (
              <div
                key={i}
                className="testimonial-card p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-violet-500/20 transition-all duration-500"
              >
                <p className="text-gray-200 italic">{t.text}</p>
                <footer className="text-gray-400 mt-4 font-medium">{t.author}</footer>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 pb-6 border-t border-white/10 text-sm text-gray-400 backdrop-blur-lg" data-animate>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 max-w-7xl mx-auto">
            <div>
              <div className="font-extrabold text-xl text-white">Tik-Tech</div>
              <div className="text-gray-400 mt-1">Agence digitale — développement, IA & vidéo</div>
            </div>

            <div className="flex gap-10">
              <div>
                <h4 className="font-semibold text-white">Services</h4>
                <ul className="mt-2 space-y-1">
                  <li>Assistant virtuel</li>
                  <li>Développement web</li>
                  <li>Montage vidéo</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Contact</h4>
                <div className="mt-2">contact@tiktech.example</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
