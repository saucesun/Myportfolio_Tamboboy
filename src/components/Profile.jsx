import PageHeader from './PageHeader.jsx';
import { PROFILE_FIELDS } from '../data.js';

export default function Profile({ active, onNavigate }) {
  return (
    <section id="home" className={`section${active ? ' active' : ''}`}>
      <PageHeader title="MY PROFILE" tag="// USER_DATA_01" onNavigate={onNavigate} />
      <div className="profile-grid">
        <div className="photo-card">
          <img src={`${import.meta.env.BASE_URL}images/transparent-port.png`} alt="My Profile Photo" className="profile-photo" />
          <div className="scan-line"></div>
        </div>
        <div className="details-card">
          <h3>My Details</h3>
          <div className="details-boxes">
            {PROFILE_FIELDS.map((f) => (
              <div className={`detail-field${f.full ? ' full' : ''}`} key={f.label}>
                <label>{f.label}</label>
                <p className="detail-value">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
