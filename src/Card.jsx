import './Card.css';

export default function Card() {
  return (
    <article className="resume-card">
      <div className="resume-topline">
        <span className="resume-mark">РЕЗЮМЕ</span>
        <span className="resume-availability"><i /> ОТКРЫТ(А) К ПРЕДЛОЖЕНИЯМ</span>
      </div>

      <div className="resume-profile">
        <div className="resume-avatar" aria-hidden="true">ЖА</div>
        <div>
          <p className="resume-kicker">СТУДЕНТ</p>
          <h1>Жомартов Алдияр</h1>
          <p className="resume-role">Начинающий веб-разработчик</p>
        </div>
      </div>

      <section className="resume-section">
        <h2>Обо мне</h2>
        <p>Я учусь создавать сайты и веб-приложения. Сейчас изучаю React, JavaScript и основы веб-дизайна. Хочу развиваться в программировании и работать над интересными проектами.</p>
      </section>

      <section className="resume-section">
        <h2>Навыки</h2>
        <ul className="skill-list">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>React basics</li><li>Git basics</li>
        </ul>
      </section>

      <div className="resume-bottom">
        <div><span className="resume-label">ОПЫТ</span><strong>Учебные проекты</strong></div>
        <div><span className="resume-label">ЦЕЛЬ</span><strong>Найти стажировку</strong></div>
        <a href="mailto:aldiyar@example.com" className="resume-contact">Связаться <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}
