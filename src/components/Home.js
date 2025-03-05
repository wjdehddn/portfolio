import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const [isTypingComplete, setIsTypingComplete] = useState(false); // 코드 입력 완료 여부
    const [isExpanded, setIsExpanded] = useState(false); // 화면 확대 여부
    const [showOutput, setShowOutput] = useState(false); // 결과 컨테이너 표시 여부
    const [hoveredFolder, setHoveredFolder] = useState(""); // 마우스가 올라간 폴더 상태

    useEffect(() => {
        if (isTypingComplete) {
            setTimeout(() => setIsExpanded(true), 1000); // 화면 확대
            setTimeout(() => setShowOutput(true), 2000); // 1초 후 결과 출력 시작
        }
    }, [isTypingComplete]);

    return (
        <div className="home-container">
            {/* VSCode 스타일의 코드 입력 창 */}
            <div className={`vscode-window ${isExpanded ? "expanded" : ""}`}>
                {!isExpanded && ( // 화면이 커진 후 헤더 제거
                    <div className="vscode-header">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                )}
                <div className="vscode-content">
                    {!isExpanded && ( // 화면이 커지기 전 코드 입력
                        <TypeAnimation
                            sequence={[
                                "const message = 'HELLO, WORLD!';", 1000,
                                "const message = 'HELLO, WORLD!';\nconst portfolio = 'JDW PORTFOLIO';", 1000,
                                "const message = 'HELLO, WORLD!';\nconst portfolio = 'JDW PORTFOLIO';\nconsole.log(message);", 1000,
                                "const message = 'HELLO, WORLD!';\nconst portfolio = 'JDW PORTFOLIO';\nconsole.log(message);\nconsole.log(portfolio);", 1000,
                                () => setIsTypingComplete(true) // 타이핑 완료 후 상태 변경
                            ]}
                            wrapper="pre"
                            speed={50}
                            repeat={0}
                            cursor={true}
                        />
                    )}

                    {/* 화면이 커진 후 실행 결과 출력 (타이핑 애니메이션 적용) */}
                    {showOutput && (
                        <div className="output-container">
                            <TypeAnimation
                                sequence={[
                                    "HELLO, WORLD!", 1000,
                                    "HELLO, WORLD!\nJDW PORTFOLIO", 1000,
                                ]}
                                wrapper="pre"
                                speed={50}
                                repeat={0}
                                cursor={true}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* 원래 있던 개요 및 네비게이션 섹션 유지 */}
            <section className="about-section">
                <h2>OVERVIEW</h2>
                <p>
                    Project 페이지에는 진행한 프로젝트의 결과가 담겨 있습니다. 이 과정에서 고민했던 점, 해결 방법, 관련 공부 기록, 그리고 구현한 기능들을 통해 저의 기술 스택과 문제 해결 능력을 확인하실 수 있습니다. About 페이지에서는 제 경험과 가치관, 그리고 앞으로 프론트엔드 개발자로서 나아가고 싶은 방향을 소개하고 있습니다.
                </p>
            </section>

            {/* 📌 프로젝트 & About 페이지 이동 버튼 (폴더 형태) */}
            <section className="navigation-section">
                <div 
                    className={`folder-container`}
                    onMouseEnter={() => setHoveredFolder("projects")}
                    onMouseLeave={() => setHoveredFolder("")}
                >
                    <Link to="/projects">
                        <img 
                            src={hoveredFolder === "projects" ? "/images/folder-open.png" : "/images/folder-closed.png"} 
                            alt="Projects Folder" 
                            className="folder-icon"
                        />
                        <p className="folder-text">Projects</p>
                    </Link>
                </div>

                <div 
                    className={`folder-container`}
                    onMouseEnter={() => setHoveredFolder("about")}
                    onMouseLeave={() => setHoveredFolder("")}
                >
                    <Link to="/about">
                        <img 
                            src={hoveredFolder === "about" ? "/images/folder-open.png" : "/images/folder-closed.png"} 
                            alt="About Folder" 
                            className="folder-icon"
                        />
                        <p className="folder-text">About</p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;