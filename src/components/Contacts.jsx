import PageHeader from './PageHeader.jsx';
import { SOCIALS } from '../data.js';

export default function Contacts({ active, onNavigate }) {
  return (
    <section id="contacts" className={`section${active ? ' active' : ''}`}>
      <PageHeader title="CONTACTS" tag="// ESTABLISH_LINK" onNavigate={onNavigate} />
      <h3 className="socials-heading">MY SOCIALS</h3>
      <p className="socials-note">Click a card to open your social link</p>
      <div className="socials-grid">
        {SOCIALS.map((s) => (
          <a href={s.url} className="social-card" target="_blank" rel="noreferrer" key={s.name}>
            <h4>{s.name}</h4>
            <span className="social-url">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
