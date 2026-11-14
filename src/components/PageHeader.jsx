export default function PageHeader({ title, tag, onNavigate }) {
  return (
    <header className="page-header">
      <button className="back-btn" onClick={() => onNavigate('landing')}>
        &larr; Home
      </button>
      <h2>{title}</h2>
      <span className="header-tag">{tag}</span>
    </header>
  );
}
