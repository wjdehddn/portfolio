import "./About.css";

const About = () => {
  return (
    <div className="home-container">
      {/* 프론트엔드 개발을 하게 된 이유 */}
      <section className="about-section">
        <h2>Why Frontend?</h2> 
        <p>대학교에서 회로 설계 관련 과목을 수강하며, 아두이노 코딩을 활용한 프로젝트를 진행한 적이 있습니다. 이 경험을 통해 처음으로 코딩을 접하게 되었고, 내가 작성한 코드가 직접적인 결과로 이어지는 과정에서 큰 흥미를 느꼈습니다. 코드 한 줄에 따라 동작이 변화하고, 예상치 못한 오류를 수정하며 문제를 해결하는 과정이 매우 매력적으로 다가왔습니다.
        이러한 경험을 바탕으로 논리적인 사고와 창의성을 모두 활용할 수 있는 개발 분야에 관심을 가지게 되었고, 졸업 후 본격적으로 프론트엔드 개발을 배우기 시작했습니다. 특히, 프론트엔드는 사용자의 경험과 직접적으로 맞닿아 있어, 내가 만든 화면과 기능이 실제 사용자에게 영향을 미친다는 점에서 더욱 흥미를 느꼈습니다. 이러한 이유로 프론트엔드 개발자의 길을 걷게 되었으며, 사용자에게 더 나은 경험을 제공하는 개발자가 되기 위해 지속적으로 성장해 나가고 있습니다.</p>
      </section>

      {/* 내 소개 */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>프론트엔드 개발은 단순히 UI를 만드는 것이 아니라, 사용자가 더 쉽고 편하게 서비스를 이용할 수 있도록 돕는 과정이라고 생각합니다. 저는 대학교에서 아두이노 코딩을 경험하며 "내가 작성한 코드가 직접적인 결과로 이어지는 것" 에 큰 매력을 느꼈고, 이를 계기로 개발에 관심을 갖게 되었습니다.
        현재는 React와 JavaScript를 중심으로 웹 애플리케이션을 개발하며, "어떻게 하면 사용자에게 더 나은 경험을 제공할 수 있을까?" 라는 고민을 끊임없이 합니다. 단순한 기능 구현에 그치는 것이 아니라, 더 직관적인 UI, 더 빠른 성능, 더 나은 사용자 경험을 목표로 성장하고 있습니다.
        앞으로도 새로운 기술을 적극적으로 학습하며, 사용자와 개발자 모두가 만족할 수 있는 프론트엔드 개발자가 되기 위해 노력하겠습니다.</p>
      </section>

      {/* 기술 스택 소개 */}
      <section className="about-section">
        <h2>🛠 Tech Stack & Tools</h2>
        <div className="tech-stack">
          <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
          <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
          <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white" alt="Axios" />
          <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
          <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Express" />
          <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white" alt="Prisma" />
          <img src="https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white" alt="SQLite" />
          <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white" alt="OpenAI" />
          <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
          <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white" alt="Notion" />
        </div>
      </section>

      {/* 이메일 보내기 버튼 */}
      <section className="about-section">
        <h2>📩 Contact</h2>
        <a href="mailto:wjdehddn30@gmail.com" className="email-button">
          <img
            src={`/images/gmail.png`}
            alt="gmail"
          />
          <p>이메일 보내기</p>
          </a>
      </section>
    </div>
  );
};

export default About;