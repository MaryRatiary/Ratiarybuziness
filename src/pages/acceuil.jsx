import React, { useEffect, useState } from 'react'
import ImageTrail from '../components/ImageTrail'

const servicesData = [
	{
		id: 'assistant',
		title: 'Assistant virtuel',
		subtitle: 'Automatisation & support',
		description:
			'Assistant virtuel intelligent pour automatiser tâches et améliorer la productivité.',
		avatar: '/photo/photo-assistant.jpg',
		video: '/video/video-assistant.mp4',
		highlights: [
			'Automatisation des process',
			'Support 24/7',
			'Intégration API',
		],
	},
	{
		id: 'dev',
		title: 'Développement web',
		subtitle: 'Sites & applications',
		description:
			'Création de sites et applications web modernes, performants et accessibles.',
		avatar: '/photo/photo-codage.jpg',
		video: '/video/video-codage.mp4',
		highlights: ['Frontend moderne', 'Backends scalables', 'Design responsive'],
	},
	{
		id: 'montage',
		title: 'Montage vidéo',
		subtitle: 'Cut & post-production',
		description:
			'Montage professionnel pour contenus marketing, tutoriels et promos.',
		avatar: '/photo/photo-montage.jpg',
		video: '/video/video-montage.mp4',
		highlights: [
			'Color grading',
			'Motion graphics',
			'Optimisation formats web',
		],
	},
]

export default function Accueil() {
	const [index, setIndex] = useState(0)
	const [trailActive, setTrailActive] = useState(null)

	// small image sets per service (public/photo)
	const trailMap = {
		assistant: [
			'/photo/photo-assistant.jpg',
			'/photo/photo-design.jpg',
			'/photo/photo-design2.jpg',
			'/photo/photo-codage.jpg',
		],
		dev: [
			'/photo/photo-codage.jpg',
			'/photo/photo-codage1.jpg',
			'/photo/photo-codage2.jpg',
			'/photo/code3.jpg',
			'/photo/photo-design2.jpg',
		],
		montage: [
			'/photo/photo-montage.jpg',
			'/photo/photo-montage2.jpg',
			'/photo/photo-design.jpg',
		],
	}

	function goPrev() {
		setIndex((i) => (i - 1 + servicesData.length) % servicesData.length)
	}

	function goNext() {
		setIndex((i) => (i + 1) % servicesData.length)
	}

	function goTo(i) {
		setIndex(i % servicesData.length)
	}

	// keyboard navigation
	useEffect(() => {
		function onKey(e) {
			if (e.key === 'ArrowLeft') goPrev()
			if (e.key === 'ArrowRight') goNext()
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	return (
		<>
			{/* page-specific fixed background for Accueil: very dark gradient + subtle radial glow */}
			<div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-b from-[#00060a] via-[#001121] to-[#000000]" />
				<div className="absolute left-[-10%] top-10 w-[60%] h-[60%] rounded-full bg-gradient-to-r from-violet-700/6 via-cyan-400/6 to-transparent blur-3xl transform -translate-y-8" />
			</div>

			<div
				className="carousel-page relative z-10 mb-8"
				style={{ position: 'relative', minHeight: '90vh' }}
			>
				<div className="carousel-container">
					{servicesData.map((s, i) => {
						const active = i === index
						return (
							<section
								key={s.id}
								className={`carousel-slide ${
									active ? 'active' : ''
								}`}
								aria-hidden={!active}
							>
								{/* populated centered rectangle overlapping sidebar and media
                <div className="top-rect" aria-hidden={false}>
                  <div className="rect-inner">
                    <div className="rect-left">
                      <div className="rect-kv">{s.subtitle}</div>
                      <div className="rect-title">{s.title}</div>
                    </div>
                    <div className="rect-right">
                      <button className="rect-cta">Contactez-nous</button>
                    </div>
                  </div>
                </div> */}

								<aside className="slide-sidebar rounded-2xl">
									<div className="sidebar-inner ">
										<div className="sidebar-top">
											<div className="badge">0{i + 1}</div>
										</div>

										<div className="title-block">
											<h2 className="title-vertical">{s.title}</h2>
											<div className="title-right">
												<div className="subtitle">{s.subtitle}</div>
												<div className="sidebar-photo-inline">
													<img
														src={s.avatar}
														alt={s.title}
														className="avatar-inline "
													/>
												</div>
											</div>
										</div>

										{/* bottom area: description + CTA */}
										<div className="sidebar-bottom">
											<div className="meta-card">
												<p className="desc">{s.description}</p>
											</div>

											<div className="sidebar-footer">
												<button className="btn-ghost">
													En savoir plus
												</button>
											</div>
										</div>
									</div>
								</aside>

								<main className="slide-media">
									<div className="media-inner">
										{/* vertical side texts (left & right) - decorative, not in center */}
										<div className="side-vertical left" aria-hidden>
											<div className="vertical-text">{s.subtitle}</div>
										</div>
										<div className="side-vertical right" aria-hidden>
											<div className="vertical-text">
												{s.highlights[0]}
											</div>
										</div>

										<div className="media-header">
											<h3 className="media-title">
												 {s.title}
											</h3>
											<p className="media-lead">
												{s.subtitle} • solutions sur mesure
											</p>
											<ul className="media-highlights">
												{s.highlights.map((h, idx) => (
													<li
														key={idx}
														className="media-highlight"
													>
														{h}
													</li>
												))}
											</ul>
										</div>

										<video
											key={s.video}
											src={encodeURI(s.video)}
											muted
											autoPlay
											loop
											playsInline
											preload="metadata"
											className="media-video"
										/>

										<div className="media-overlay-controls">
											<div className="media-overlay-top">
												{/* placeholder for icons */}
											</div>
											<div className="media-overlay-bottom">
												<button
													onClick={goPrev}
													aria-label="Précédent"
													className="nav-btn"
												>
													‹
												</button>
												<button
													onClick={goNext}
													aria-label="Suivant"
													className="nav-btn"
												>
													›
												</button>
											</div>
										</div>
									</div>
								</main>
							</section>
						)
					})}
				</div>

				<div className="carousel-dots">
					{servicesData.map((_, i) => (
						<button
							key={i}
							onClick={() => goTo(i)}
							className={`dot ${
								i === index ? 'active' : ''
							}`}
							aria-label={`Aller à ${i + 1}`}
						></button>
					))}
				</div>
			</div>
		</>
	)
}
