import Card from './Card.jsx';

export default function App() {
  return (
    <main className="resume-page">
      <header className="resume-header">
        <a className="wordmark" href="#top"><span className="wordmark-icon">s</span> simple<span className="wordmark-dot">.</span></a>
        <span>ЛИЧНОЕ РЕЗЮМЕ</span>
      </header>
      <section className="resume-layout" id="top">
        <div className="resume-intro">
          <span className="intro-eyebrow"><i /> КРАТКО ОБО МНЕ</span>
          <h2>Давайте<br /><em>знакомиться.</em></h2>
          <p>Несколько слов о моём опыте, навыках и интересе к новым проектам.</p>
        </div>
        <Card />
      </section>
      <footer className="resume-footer"><span>Простое резюме на React</span><span>© 2025</span></footer>
    </main>
  );
}
