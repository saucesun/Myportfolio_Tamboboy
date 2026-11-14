import PageHeader from './PageHeader.jsx';
import { SKILL_GROUPS } from '../data.js';

export default function Skills({ active, onNavigate }) {
  return (
    <section id="skills" className={`section${active ? ' active' : ''}`}>
      <PageHeader title="SKILLS & TOOLS" tag="// TOOLKIT_OVERVIEW" onNavigate={onNavigate} />
      <p className="skills-intro">
        A quick overview of my computer-related skills and the AI / coding tools I use to learn, build, and create.
      </p>
      <div className="skills-tools-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
