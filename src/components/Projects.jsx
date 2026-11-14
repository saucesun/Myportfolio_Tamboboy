import PageHeader from './PageHeader.jsx';
import { PROJECTS } from '../data.js';

export default function Projects({ active, onNavigate }) {
  return (
    <section id="projects" className={`section${active ? ' active' : ''}`}>
      <PageHeader title="PROJECTS" tag="// DEPLOYED_BUILDS" onNavigate={onNavigate} />
      <div className="cards-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" data-prj={p.id} key={p.id}>
            <div className="project-image">
              <img src={p.image} alt={p.alt} />
            </div>
            <h4 className="project-title">{p.title}</h4>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
