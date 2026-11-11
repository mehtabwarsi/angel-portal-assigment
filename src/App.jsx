import { useEffect, useState } from 'react'
import './App.css'

const MEDIA = '/assets/'

const memberLogos = [
  ['CEFDG', '2022/11/logo_CEFDG-1.webp'],
  ['EFMD Global Member', '2022/11/00-efmd-member-l-a.webp'],
  ['AACSB Member', '2022/11/00-aacsb-member-l-a.webp'],
  ['BGA Member', '2022/11/00-bga-member-l-a.webp'],
  ['BSIS Impact', '2022/11/BSIS-Partners-001-abs.webp'],
  ['Erasmus+', '2022/11/erasmus-p-001-abs.webp'],
]

const partnerLogos = [
  ['Auchan', '2023/01/auchan-logo.png'],
  ['AXA', '2023/01/axa-logo.png'],
  ['La Poste', '2023/01/la-poste-logo.png'],
  ['LCL', '2023/01/lcl-logo.png'],
  ['L’Oréal', '2023/01/loreal-logo.png'],
  ['SNCF', '2023/01/sncf-logo.png'],
  ['Société Générale', '2023/01/societe-generale-logo.png'],
  ['Vinci', '2023/01/vinci-logo.png'],
]

const campuses = [
  {
    name: 'Paris La Défense',
    location: 'Puteaux · au cœur du premier quartier d’affaires européen',
    description:
      'Étudiez au pied de la Grande Arche, au rythme d’un quartier où les idées, les entreprises et les ambitions se rencontrent.',
    image: `${MEDIA}2022/11/campus-paris-la-defense-m.jpg`,
  },
  {
    name: 'Évry',
    location: 'Évry-Courcouronnes · un campus au cœur de la ville',
    description:
      'Un campus accessible et vivant, à proximité des transports, des lieux culturels et d’un tissu économique dynamique.',
    image: `${MEDIA}2022/11/Ascencia-7-1-1024x683.jpg`,
  },
  {
    name: 'Marne-la-Vallée',
    location: 'Lognes · l’énergie d’un territoire en mouvement',
    description:
      'Un environnement ouvert sur les entreprises et les nouveaux métiers, pour apprendre au plus près du terrain.',
    image: `${MEDIA}2022/11/campus-marne-la-vallee-min.jpg`,
  },
  {
    name: 'Saint-Quentin-en-Yvelines',
    location: 'Montigny-le-Bretonneux · apprendre et entreprendre',
    description:
      'Un campus ancré dans un bassin d’activité innovant, avec de l’espace pour construire la suite de votre parcours.',
    image: `${MEDIA}2022/11/campus-saint-quentin-min.jpg`,
  },
]

const events = [
  {
    day: '28',
    month: 'NOV',
    kind: 'Salon Étudiant',
    title: 'Retrouvez Ascencia au Salon de l’Étudiant de Massy',
    place: 'Massy',
  },
  {
    day: '19',
    month: 'NOV',
    kind: 'Soirée portes ouvertes',
    title: 'Journées portes ouvertes et soirées portes ouvertes 2026-2027 : découvrez Ascencia Business School !',
    place: 'Tous nos campus',
  },
  {
    day: '17',
    month: 'OCT',
    kind: 'Salon',
    title: 'Ascencia à la rencontre des futurs étudiants : rendez-vous sur les prochains salons',
    place: 'Île-de-France',
  },
]

const fields = [
  ['01', 'Ressources humaines', 'Les talents font la différence.'],
  ['02', 'Stratégie d’entreprise', 'Donnez une direction aux idées.'],
  ['03', 'Marketing & communication', 'Racontez ce qui fait avancer.'],
  ['04', 'Management & gestion', 'Faites grandir les projets.'],
  ['05', 'Achats & logistique', 'Reliez les enjeux au terrain.'],
  ['06', 'Commerce & vente', 'Créez des relations durables.'],
  ['07', 'Formations par niveau', 'Du bac au bac+5, trouvez votre voie.'],
]

const students = [
  {
    name: 'Moniqua',
    program: 'Mastère Ressources humaines',
    image: `${MEDIA}2022/12/portrait-moniqua-hp.jpg`,
    url: 'https://www.ascencia-business-school.com/actualites/interview-moniqua-etudiante-ms-ressources-humaines/',
  },
  {
    name: 'Stéphanie',
    program: 'Mastère Ressources humaines',
    image: `${MEDIA}2022/12/portrait-stephanie-ms.jpg`,
    url: 'https://www.ascencia-business-school.com/actualites/interview-stephanie-etudiante-ms1-ressources-humaines/',
  },
  {
    name: 'Kilian',
    program: 'Bachelor Marketing & communication',
    image: `${MEDIA}2022/12/portrait-kilian-b3.jpg`,
    url: 'https://www.ascencia-business-school.com/actualites/interview-kilian-etudiant-b3-marketing-communication/',
  },
]

const articles = [
  {
    category: 'Conseils & orientation',
    date: '04.11.2026',
    title: 'Comment choisir son école de commerce : titres RNCP, labels et classements',
    image: `${MEDIA}2026/11/comment-choisir-ecole-de-commerce-1024x572.webp`,
    url: 'https://www.ascencia-business-school.com/actualites/choisir-ecole-de-commerce-titres-rncp-labels-classements/',
  },
  {
    category: 'Vie étudiante',
    date: '03.11.2026',
    title: 'Retrouvez Ascencia Business School au Salon de l’Étudiant de Massy !',
    image: `${MEDIA}2022/11/offres-alternance-ban.jpg`,
    url: 'https://www.ascencia-business-school.com/actualites/retrouvez-ascencia-business-school-au-salon-de-letudiant-de-massy/',
  },
  {
    category: 'Métiers & formations',
    date: '02.11.2026',
    title: 'Travailler dans la finance d’entreprise : métiers et perspectives',
    image: `${MEDIA}2026/11/metiers-finance-entreprise-1024x572.webp`,
    url: 'https://www.ascencia-business-school.com/actualites/finance-entreprise-metiers-formations-perspectives/',
  },
]

const socialLinks = [
  ['Instagram', 'https://www.instagram.com/ascenciabs/'],
  ['LinkedIn', 'https://www.linkedin.com/school/ascencia-business-school/'],
  ['YouTube', 'https://www.youtube.com/channel/UC_BfZlWwGzV43aQWfsHK14Q/videos'],
  ['TikTok', 'https://www.tiktok.com/@ascenciabs'],
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function Brand({ footer = false, onClick }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="/" aria-label="Ascencia Business School, accueil" onClick={onClick}>
      <img
        alt="Ascencia Business School"
        className="brand-logo"
        src={`${MEDIA}2022/11/Ascencia-Business-School-Logo.svg`}
      />
    </a>
  )
}

function SectionLabel({ children, light = false }) {
  return <p className={`section-label${light ? ' section-label-light' : ''}`}><span />{children}</p>
}

function SiteHeader({ pathname, menuOpen, setMenuOpen }) {
  const homePage = pathname === '/'
  const sectionHref = (id) => homePage ? `#${id}` : `/#${id}`
  const aboutPage = pathname === '/presentation' || pathname === '/about-us' || pathname === '/about'
  const contactPage = pathname === '/contact'
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="topline">
        <span>École de commerce et de management</span>
        <a href={sectionHref('events')}>Prochaines portes ouvertes · 19 novembre <Arrow diagonal /></a>
      </div>
      <header className="site-header">
        <Brand onClick={closeMenu} />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span /><span />
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
          <a className={aboutPage ? 'is-current' : ''} href="/presentation/" onClick={closeMenu}>À propos</a>
          <a href={sectionHref('formations')} onClick={closeMenu}>Formations</a>
          <a href={sectionHref('campus')} onClick={closeMenu}>Nos campus</a>
          <a href={sectionHref('etudiants')} onClick={closeMenu}>Vie étudiante</a>
          <a className={contactPage ? 'is-current' : ''} href="/contact/" onClick={closeMenu}>Contact</a>
          <a className="nav-apply" href="https://www.ascencia-business-school.com/admission/" onClick={closeMenu}>Admission <Arrow diagonal /></a>
        </nav>
        <a className="header-docs" href="https://www.ascencia-business-school.com/documentation-preinscription/">Documentation <Arrow diagonal /></a>
      </header>
    </>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Brand footer />
          <p>École de commerce et de management<br />4 campus en Île-de-France</p>
        </div>
        <div className="footer-links">
          <div><span className="footer-heading">Explorer</span><a href="/presentation/">À propos</a><a href="/#formations">Nos formations</a><a href="/#campus">Les campus</a><a href="/#alternance">L’alternance</a></div>
          <div><span className="footer-heading">Vous accompagner</span><a href="/#events">Événements</a><a href="https://www.ascencia-business-school.com/documentation-preinscription/">Documentation</a><a href="/contact/">Contact & admissions</a></div>
          <div className="footer-social"><span className="footer-heading">Suivez-nous</span>{socialLinks.map(([name, url]) => <a href={url} key={name} rel="noreferrer" target="_blank">{name} <Arrow diagonal /></a>)}</div>
        </div>
      </div>
      <div className="footer-members" aria-label="Réseaux et labels">
        {memberLogos.map(([name, path]) => <img alt={name} key={name} src={`${MEDIA}${path}`} />)}
      </div>
      <div className="footer-bottom">
        <span>© Ascencia Business School · École de commerce et de management</span>
        <div><a href="https://www.ascencia-business-school.com/mentions-legales/">Mentions légales</a><a href="https://www.ascencia-business-school.com/politique-de-confidentialite/">Confidentialité</a></div>
        <a href="#top">Retour en haut ↑</a>
      </div>
      <p className="footer-affiliation">Ascencia Business School est un établissement d’enseignement supérieur privé membre d’Ed’Learn, le pôle Formation d’UNIFY GROUP.</p>
    </footer>
  )
}

function AboutPage() {
  return (
    <main className="inner-page about-page">
      <section className="page-intro about-intro">
        <SectionLabel>Ascencia Business School</SectionLabel>
        <h1>Hisser les apprenants<br /><em>plus haut et plus loin.</em></h1>
        <p>Réaliser votre potentiel d’ascension, c’est l’ambition d’Ascencia. Grâce à un suivi individualisé, nos équipes se mettent au service de votre avenir : venez nous présenter vos projets, et construisons ensemble les moyens de les concrétiser.</p>
        <a className="button button-pink" href="/contact/">Échangez avec notre équipe <Arrow diagonal /></a>
        <span className="page-side-note">UNE ÉCOLE · QUATRE CAMPUS · VOTRE AVENIR</span>
      </section>

      <section className="leadership-section">
        <div
          className="leadership-photo"
          role="img"
          aria-label="Une équipe échange autour d'un projet"
          style={{ backgroundImage: `url("${MEDIA}2023/09/A090511-1024x640.jpg")` }}
        />
        <div className="leadership-copy">
          <SectionLabel>Un mot de la direction</SectionLabel>
          <h2>Un même élan.<br /><em>Des parcours singuliers.</em></h2>
          <p>Bienvenue à Ascencia Business School. Notre réseau de quatre campus — Paris La Défense, Évry, Marne-la-Vallée et Saint-Quentin-en-Yvelines — nous ancre au cœur des territoires franciliens et de leurs écosystèmes professionnels.</p>
          <p>Sur chaque campus, nous cultivons la même exigence académique, la proximité avec les entreprises et une expérience étudiante riche. Notre ambition : vous accompagner tout au long de votre parcours et vous donner les moyens d’agir dans un monde en constante évolution.</p>
          <p>L’alternance, les projets concrets et les expériences internationales ouvrent des perspectives pour apprendre, prendre confiance et préparer la suite. Ensemble, faisons grandir vos projets.</p>
          <span className="signature">La direction d’Ascencia Business School</span>
        </div>
      </section>

      <section className="values-section">
        <div className="values-heading">
          <SectionLabel>Nos valeurs</SectionLabel>
          <h2>L’excellence,<br /><em>une priorité</em> pour Ascencia.</h2>
        </div>
        <div className="values-grid">
          <article className="value-card">
            <span>01 / EXIGENCE</span><b>01</b>
            <h3>Viser plus haut</h3>
            <p>Des objectifs ambitieux, un accompagnement attentif et des compétences solides pour progresser à chaque étape.</p>
          </article>
          <article className="value-card">
            <span>02 / PROXIMITÉ</span><b>02</b>
            <h3>Avancer ensemble</h3>
            <p>Des équipes à l’écoute, des intervenants professionnels et des relations durables avec les entreprises de nos territoires.</p>
          </article>
          <article className="value-card">
            <span>03 / OUVERTURE</span><b>03</b>
            <h3>Rester en mouvement</h3>
            <p>Des expériences concrètes et des perspectives internationales pour aborder les changements avec curiosité et confiance.</p>
          </article>
        </div>
      </section>

      <section className="pedagogy-section">
        <div
          className="pedagogy-image"
          role="img"
          aria-label="Étudiants apprenant ensemble dans une salle lumineuse"
          style={{ backgroundImage: `url("${MEDIA}2022/11/Ascencia-15-1024x683.jpg")` }}
        />
        <div className="pedagogy-copy">
          <SectionLabel>À propos</SectionLabel>
          <h2>Une pédagogie<br /><em>participative</em><br />et innovante.</h2>
          <p>Les formations en commerce et management s’appuient sur l’échange entre apprenants et professionnels expérimentés. Les réalités de l’entreprise nourrissent les enseignements et les projets.</p>
          <p>Cette approche personnalisée aide chacun à repérer ses forces, à développer son potentiel et à faire émerger ses ambitions de manager et d’entrepreneur.</p>
          <a className="line-link" href="/#formations">Explorer les formations <Arrow diagonal /></a>
        </div>
      </section>

      <section className="about-campus-section">
        <div className="section-heading">
          <div><SectionLabel>4 campus en Île-de-France</SectionLabel><h2>Un ancrage local.<br /><em>De nouvelles perspectives.</em></h2></div>
          <p>Nos campus se situent dans des zones d’activité dynamiques, au plus près des entreprises, des stages et des contrats en alternance.</p>
        </div>
        <div className="about-campus-grid">
          {campuses.map((campus, index) => (
            <a className="about-campus-card" href="/#campus" key={campus.name}>
              <div className="about-campus-photo" style={{ backgroundImage: `url("${campus.image}")` }} />
              <span>0{index + 1} · ÎLE-DE-FRANCE</span>
              <strong>{campus.name}</strong>
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </section>

      <section className="access-section">
        <div className="access-number">OUVERTE<br />À TOUTES<br />LES AMBITIONS</div>
        <div>
          <SectionLabel light>Pour toutes et tous</SectionLabel>
          <h2>Un établissement<br /><em>accessible.</em></h2>
          <p>Ascencia est une école ouverte à celles et ceux qui souhaitent s’élever académiquement et professionnellement. L’alternance peut permettre une prise en charge de la formation par l’entreprise. Des solutions de financement et des rythmes adaptés existent également pour accompagner votre projet.</p>
          <a className="button button-white" href="https://www.ascencia-business-school.com/alternance/formations-en-alternance/">Découvrir l’alternance <Arrow diagonal /></a>
        </div>
      </section>

      <section className="about-certification-section">
        <img
          alt="France Compétences"
          className="about-certification-seal"
          src={`${MEDIA}2022/11/France-Competences-Logo.png`}
        />
        <div><SectionLabel>Des compétences reconnues</SectionLabel><h2>Certifications<br /><em>professionnelles.</em></h2><p>Les titres professionnels certifient les compétences et savoir-faire liés à un métier. Les certifications enregistrées au Répertoire national des certifications professionnelles (RNCP) sont reconnues par l’État.</p><a className="line-link" href="https://www.ascencia-business-school.com/certifications-professionnelles/">En savoir plus sur les certifications <Arrow diagonal /></a></div>
      </section>

      <section className="partners-section">
        <SectionLabel>Construire des liens durables</SectionLabel>
        <h2>Des partenaires<br /><em>à nos côtés.</em></h2>
        <p>Les entreprises et acteurs de nos territoires participent à la vie de l’école : interventions, projets, alternance et accompagnement vers l’emploi.</p>
        <div className="partner-list" aria-label="Exemples de partenaires professionnels">
          {partnerLogos.map(([name, path]) => <img alt={name} key={name} src={`${MEDIA}${path}`} />)}
        </div>
      </section>

      <section className="page-cta">
        <div><SectionLabel light>Rejoignez-nous</SectionLabel><h2>Votre prochain chapitre<br /><em>commence ici.</em></h2></div>
        <p>Vous souhaitez rejoindre la communauté Ascencia ? Parlons de votre projet et découvrons ensemble la suite.</p>
        <a className="button button-pink" href="/contact/">Je prends contact <Arrow diagonal /></a>
      </section>
    </main>
  )
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function acknowledgeDemoForm(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="inner-page contact-page">
      <section className="page-intro contact-intro">
        <SectionLabel>Ascencia Business School</SectionLabel>
        <h1>Contactez<br /><em>Ascencia.</em></h1>
        <p>Une question sur nos campus, nos programmes ou votre projet ? Retrouvez le formulaire officiel pour transmettre votre demande à notre équipe.</p>
        <a className="contact-intro-link" href="#contact-form">Écrivez-nous <span>↓</span></a>
        <span className="contact-orbit" aria-hidden="true"><i /><i /><b>À VOTRE ÉCOUTE</b></span>
      </section>

      <section className="contact-content" id="contact-form">
        <div className="contact-aside">
          <SectionLabel>Parlons de votre projet</SectionLabel>
          <h2>Comment<br /><em>vous aider ?</em></h2>
          <p>Ce formulaire de démonstration ne transmet pas et ne conserve vos données. Pour envoyer votre demande, utilisez le formulaire officiel d’Ascencia.</p>
          <div className="contact-campus-list">
            <span className="micro-label">NOS CAMPUS</span>
            {campuses.map((campus) => <a href="/#campus" key={campus.name}>{campus.name}<Arrow diagonal /></a>)}
          </div>
          <div className="contact-other">
            <span className="micro-label">VOUS PRÉFÉREZ ?</span>
            <a href="https://www.ascencia-business-school.com/documentation-preinscription/">Recevoir la documentation <Arrow diagonal /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={acknowledgeDemoForm}>
          <p className="form-note"><span>*</span> Champs obligatoires</p>
          <div className="form-grid">
            <label>Nom <span>*</span><input autoComplete="family-name" name="lastName" placeholder="Votre nom" required /></label>
            <label>Prénom <span>*</span><input autoComplete="given-name" name="firstName" placeholder="Votre prénom" required /></label>
            <label>E-mail <span>*</span><input autoComplete="email" name="email" placeholder="vous@exemple.fr" required type="email" /></label>
            <label>Téléphone<input autoComplete="tel" name="phone" placeholder="Votre numéro" type="tel" /></label>
            <label className="form-wide">Campus lié à votre demande <span>*</span>
              <select defaultValue="" name="campus" required>
                <option disabled value="">Choisir un campus</option>
                <option>Évry</option>
                <option>Marne-la-Vallée</option>
                <option>Paris La Défense</option>
                <option>Saint-Quentin-en-Yvelines</option>
              </select>
            </label>
            <label className="form-wide">Objet <span>*</span><input name="subject" placeholder="Le sujet de votre demande" required /></label>
            <label className="form-wide">Votre message <span>*</span><textarea name="message" placeholder="Présentez-nous votre projet ou votre question..." required rows="5" /></label>
          </div>
          <label className="consent-row"><input name="consent" required type="checkbox" /><span>Je comprends que ce prototype ne transmet pas mes informations. Pour toute demande, je poursuivrai sur le formulaire officiel et sa <a href="https://www.ascencia-business-school.com/politique-de-confidentialite/">politique de confidentialité</a>. <b>*</b></span></label>
          <div className="form-submit-row">
            <button className="button button-pink" type="submit">Voir le formulaire officiel <Arrow diagonal /></button>
            <span>Les champs marqués d’un * sont obligatoires.</span>
          </div>
          {submitted && (
            <p className="form-success" role="status">
              Vos champs sont valides, mais n’ont pas été envoyés. <a href="https://www.ascencia-business-school.com/contact/">Ouvrez le formulaire officiel pour transmettre votre demande.</a>
            </p>
          )}
        </form>
      </section>

      <section className="contact-bottom">
        <SectionLabel light>À bientôt chez Ascencia</SectionLabel>
        <h2>Un campus près de vous.<br /><em>Une équipe à votre écoute.</em></h2>
        <a className="button button-white" href="/#campus">Découvrir nos campus <Arrow diagonal /></a>
      </section>
    </main>
  )
}

function HomePage() {
  const [campusIndex, setCampusIndex] = useState(0)
  const campus = campuses[campusIndex]

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-photo" role="img" aria-label="Étudiants réunis sur le campus" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <SectionLabel light>Votre avenir commence ici</SectionLabel>
          <h1>Réalisez votre<br /><em>potentiel</em><br />d’ascension.</h1>
          <p>Une école de commerce à taille humaine, des formations concrètes et quatre campus pour donner de l’élan à vos projets.</p>
          <div className="hero-links">
            <a className="button button-pink" href="#formations">Découvrez nos formations <Arrow /></a>
            <a className="hero-secondary" href="#campus">La vie à Ascencia <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span>Ascencia Business School</span><span>48°51′ N · Paris, France</span></div>
        <div className="hero-index"><strong>01</strong><span>—</span><span>09</span></div>
        <div className="hero-bottomline"><span>APPRENDRE</span><i /><span>ENTREPRENDRE</span><i /><span>S’ÉLEVER</span></div>
      </section>

      <section className="campus-section" id="campus">
        <div className="section-heading campus-heading">
          <div>
            <SectionLabel>Étudier près de chez vous</SectionLabel>
            <h2>Quatre campus.<br /><em>Mille façons</em> d’avancer.</h2>
          </div>
          <p>Ascencia vous accueille sur quatre campus en Île-de-France. Choisissez un environnement qui vous ressemble et construisez votre parcours au plus près des entreprises.</p>
        </div>
        <div className="campus-explorer">
          <div className="campus-tabs" role="tablist" aria-label="Choisir un campus">
            {campuses.map((item, index) => (
              <button
                aria-selected={campusIndex === index}
                className={`campus-tab${campusIndex === index ? ' is-active' : ''}`}
                id={`campus-tab-${index}`}
                key={item.name}
                onClick={() => setCampusIndex(index)}
                role="tab"
                type="button"
              >
                <span>0{index + 1}</span>{item.name}<Arrow diagonal />
              </button>
            ))}
          </div>
          <article className="campus-feature" role="tabpanel" aria-labelledby={`campus-tab-${campusIndex}`}>
            <div className="campus-image" style={{ backgroundImage: `url("${campus.image}")` }} role="img" aria-label={`Campus ${campus.name}`} />
            <div className="campus-details">
              <span className="micro-label">ASCENCIA · ÎLE-DE-FRANCE</span>
              <h3>{campus.name}</h3>
              <p className="campus-location">{campus.location}</p>
              <p>{campus.description}</p>
              <a className="line-link" href="https://www.ascencia-business-school.com/campus/">Découvrir le campus <Arrow diagonal /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="section-heading events-heading">
          <div>
            <SectionLabel light>À noter dans votre agenda</SectionLabel>
            <h2>On se rencontre<br /><em>bientôt ?</em></h2>
          </div>
          <a className="line-link line-link-light" href="https://www.ascencia-business-school.com/actualites/">Tous les événements <Arrow diagonal /></a>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event-row" key={`${event.day}-${event.title}`}>
              <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
              <span className="event-kind">{event.kind}</span>
              <div className="event-description"><h3>{event.title}</h3><span>{event.place}</span></div>
              <a className="event-arrow" href="https://www.ascencia-business-school.com/actualites/" aria-label={`En savoir plus : ${event.title}`}><Arrow diagonal /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="formations-section" id="formations">
        <div className="section-heading formation-heading">
          <div>
            <SectionLabel>Des parcours qui ouvrent des portes</SectionLabel>
            <h2>À chacun son<br /><em>domaine</em> d’avenir.</h2>
          </div>
          <div className="formation-intro">
            <p>Du bac à bac+5, nos formations en management et commerce associent enseignements solides, mises en pratique et accompagnement.</p>
            <a className="line-link" href="https://www.ascencia-business-school.com/formations/">Voir toutes les formations <Arrow diagonal /></a>
          </div>
        </div>
        <div className="field-grid">
          {fields.map(([number, title, caption], index) => (
            <a className={`field-card field-card-${index + 1}`} href="https://www.ascencia-business-school.com/formations/" key={number}>
              <span className="field-number">{number} / FORMATIONS</span>
              <span className="field-mark" aria-hidden="true">{['↗', '✳', '◉', '⌘', '⌁', '＋', '↗'][index]}</span>
              <span className="field-card-bottom"><span><strong>{title}</strong><small>{caption}</small></span><Arrow diagonal /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="certification-section">
        <img
          alt="France Compétences"
          className="certification-mark"
          src={`${MEDIA}2022/11/France-Competences-Logo.png`}
        />
        <div className="certification-copy">
          <SectionLabel>Des compétences reconnues</SectionLabel>
          <h2>Un diplôme qui<br /><em>vous emmène</em><br />plus loin.</h2>
          <p>Nos titres professionnels certifient des compétences et savoir-faire liés aux métiers. Les formations certifiantes sont enregistrées au RNCP et reconnues par l’État.</p>
          <a className="button button-outline" href="https://www.ascencia-business-school.com/certifications-professionnelles/">Comprendre les certifications <Arrow diagonal /></a>
        </div>
        <div className="certification-photo" role="img" aria-label="Étudiante en formation" />
      </section>

      <section className="alternance-section" id="alternance">
        <div className="alternance-photo" role="img" aria-label="Étudiants en apprentissage travaillant sur un projet" />
        <div className="alternance-copy">
          <SectionLabel light>Apprendre en faisant</SectionLabel>
          <span className="alternance-kicker">L’ALTERNANCE CHEZ ASCENCIA</span>
          <h2>La théorie<br />rencontre <em>le terrain.</em></h2>
          <p>En contrat d’apprentissage ou de professionnalisation, avancez dans vos études tout en développant votre expérience en entreprise. Nos équipes vous accompagnent dans votre recherche.</p>
          <a className="button button-white" href="https://www.ascencia-business-school.com/alternance/formations-en-alternance/">Découvrir l’alternance <Arrow diagonal /></a>
        </div>
      </section>

      <section className="students-section" id="etudiants">
        <div className="section-heading student-heading">
          <div>
            <SectionLabel>Nos étudiants, leurs mots</SectionLabel>
            <h2>Chaque parcours<br />a son <em>histoire.</em></h2>
          </div>
          <p>Projets, formations, ambitions : découvrez les expériences de celles et ceux qui font vivre Ascencia au quotidien.</p>
        </div>
        <div className="student-grid">
          {students.map((student, index) => (
            <a className="student-card" href={student.url} key={student.name} rel="noreferrer" target="_blank">
              <div className="student-image" style={{ backgroundImage: `url("${student.image}")` }} role="img" aria-label={`Portrait de ${student.name}`} />
              <span className="student-number">0{index + 1} — TÉMOIGNAGE</span>
              <div className="student-info"><span><strong>{student.name}</strong><small>{student.program}</small></span><Arrow diagonal /></div>
            </a>
          ))}
        </div>
        <a className="line-link student-more" href="https://www.ascencia-business-school.com/actualites/#parcours-detudiants">Tous les parcours étudiants <Arrow diagonal /></a>
      </section>

      <section className="key-figures">
        <div className="key-figure-intro"><SectionLabel light>Ascencia en bref</SectionLabel><p>Un cadre pour apprendre, se professionnaliser et tracer sa voie.</p></div>
        <div className="key-figure"><strong>04</strong><span>campus en<br />Île-de-France</span></div>
        <div className="key-figure"><strong>Bac<span>→</span>5</strong><span>des formations<br />du bac au bac+5</span></div>
        <div className="key-figure"><strong>RNCP</strong><span>des compétences<br />professionnelles reconnues</span></div>
        <span className="figure-footnote">ASCENCIA BUSINESS SCHOOL · DEPUIS 2006</span>
      </section>

      <section className="news-section" id="actualites">
        <div className="section-heading news-heading">
          <div>
            <SectionLabel>Le journal Ascencia</SectionLabel>
            <h2>La vie de l’école,<br /><em>en mouvement.</em></h2>
          </div>
          <a className="line-link" href="https://www.ascencia-business-school.com/actualites/">Toutes les actualités <Arrow diagonal /></a>
        </div>
        <div className="news-grid">
          {articles.map((article, index) => (
            <a className="news-card" href={article.url} key={article.title} rel="noreferrer" target="_blank">
              <div className="news-image" style={{ backgroundImage: `url("${article.image}")` }}>
                <span>0{index + 1}</span>
              </div>
              <div className="news-meta"><span>{article.category}</span><time>{article.date}</time></div>
              <h3>{article.title}</h3>
              <span className="news-read">Lire l’article <Arrow diagonal /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="join-section" id="admission">
        <div className="join-orbit" aria-hidden="true"><span>ASCENCIA</span><span>À VOUS DE JOUER</span></div>
        <div className="join-copy">
          <SectionLabel light>À vous de jouer</SectionLabel>
          <h2>La prochaine<br />histoire, c’est <em>la vôtre.</em></h2>
          <p>Vous souhaitez rejoindre la communauté Ascencia ? Contactez nos équipes pour échanger sur votre projet et découvrir les prochaines étapes.</p>
          <a className="button button-pink" href="https://www.ascencia-business-school.com/contact/">Parlons de votre projet <Arrow diagonal /></a>
        </div>
      </section>

    </main>
  )
}

function App() {
  const [pathname] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/')
  const aboutPage = pathname === '/presentation' || pathname === '/about-us' || pathname === '/about'
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.title = aboutPage
      ? 'À propos — Ascencia Business School'
      : pathname === '/contact'
        ? 'Contact — Ascencia Business School'
        : 'Ascencia Business School — École de commerce et de management'
  }, [aboutPage, pathname])

  const page = aboutPage
    ? <AboutPage />
    : pathname === '/contact'
      ? <ContactPage />
      : <HomePage />

  return (
    <div id="top">
      <SiteHeader pathname={pathname} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {page}
      <SiteFooter />
    </div>
  )
}

export default App
