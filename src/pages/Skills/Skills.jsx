import { useState,useEffect,useRef } from 'react'
import './Skills.scss'
import Card from '../../components/Card/Card'
import SkillCard2 from '../../components/SkillCard2/SkillCard2'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import { code1, code2, code3 } from './codes';
// import 'highlight.js/styles/default.css';
// import 'highlight.js/styles/tomorrow-night-blue.css';
// import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
// import 'highlight.js/styles/night-owl.css';
// import 'highlight.js/styles/tokyo-night-dark.css';
// h
export function Skills() {
    const code1Ref = useRef(null);
    const code2Ref = useRef(null);
    const code3Ref = useRef(null);
    useEffect(() => {
      let scrollTop = 0;
      const interval = setInterval(() => {
        if (code1Ref.current) {
          code1Ref.current.scrollTop = scrollTop;
          scrollTop += 48;
  
          // Reset scrollTop to 0 if it reaches the bottom
          if (scrollTop >= code1Ref.current.scrollHeight - code1Ref.current.clientHeight) {
            scrollTop = 0;
          }
        } else {
          clearInterval(interval);
        }
      }, 300);
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      let startIndex = 1;
      const interval2 = setInterval(() => {
        startIndex = startIndex + 3;
        setHighlightedCode2(hljs.highlight(
          code2.substring(0,startIndex),
          { language: 'javascript' }
        ).value);
        code2Ref.current.scrollTop = code2Ref.current.scrollHeight;
        if (startIndex >= code2.length) {startIndex = 0;}
      }, 100);
    
      return () => clearInterval(interval2);
    }, []);

    useEffect(() => {
      let scrollTop = 0;
      const interval3 = setInterval(() => {
        if (code3Ref.current) {
          code3Ref.current.scrollTop = scrollTop;
          scrollTop += 1;
  
          // Reset scrollTop to 0 if it reaches the bottom
          if (scrollTop >= code3Ref.current.scrollHeight - code3Ref.current.clientHeight) {
            scrollTop = 0;
          }
        } else {
          clearInterval(interval3);
        }
      }, 10);
  
      return () => clearInterval(interval3);
    }, []);

    function SkillCard(props) {
        return (
            <div className='skill-card'>
                {props.children}
            </div>
        )
    }
    
    // const highlightedCode1 = Prism.highlight(code1, Prism.languages.javascript, 'javascript');
    // const [highlightedCode2, setHighlightedCode2] = useState(Prism.highlight(code2, Prism.languages.javascript, 'javascript'));
    // const [highlightedCode3, setHighlightedCode3] = useState('');
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('python', python);
    const [highlightedCode1, setHighlightedCode1] = useState(hljs.highlight(
      code1,
      { language: 'javascript' }
    ).value);

    const [highlightedCode2, setHighlightedCode2] = useState(hljs.highlight(
      code2,
      { language: 'javascript' }
    ).value);

    const [highlightedCode3, setHighlightedCode3] = useState(hljs.highlight(
      code3,
      { language: 'python' }
    ).value);

    console.log(highlightedCode1)
    return (
        <div className='skills-parent'>
            <div className="cell">
                <p className='skills-title'>Core Skills</p>
                <div className='skills-body'>
                    <SkillCard>
                        <i className="devicon-react-original colored skill-pic"></i>
                        <div className="skill-name">
                            React
                        </div>
                    </SkillCard>

                    <SkillCard>
                        <i className="devicon-nodejs-plain-wordmark colored skill-pic"></i>
                        <div className="skill-name">
                            Node.js
                        </div>
                    </SkillCard>

                    <SkillCard>
                        <i className="devicon-express-original-wordmark skill-pic"></i>
                        <div className="skill-name">
                            Express.js
                        </div>
                    </SkillCard>

                    <SkillCard>
                        <i className="devicon-postgresql-plain colored skill-pic"></i>
                        <div className="skill-name">
                            PostgreSQL
                        </div>
                    </SkillCard>

                    <SkillCard>
                        <i className="devicon-sass-original colored skill-pic"></i>
                        <div className="skill-name">
                            Sass
                        </div>
                    </SkillCard>    

                </div>

                <p style={{marginBottom: "0.3rem"}} className='skills-title'>Other Skills</p>
                <div className="skills-body">
                    <SkillCard2 className="devicon-javascript-plain colored colored" name="JavaScript" /> 
                    {/* <SkillCard2 className="devicon-jquery-plain colored" name="Jquery" />  */}
                    <SkillCard2 className="devicon-php-plain colored" name="php" /> 
                    <SkillCard2 className="devicon-mysql-original" name="MySQL" /> 
                    <SkillCard2 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                                name="C++" /> 
                    <SkillCard2 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                                name="Python" /> 
                    <SkillCard2 className="devicon-visualbasic-plain colored colored" name="VB.Net" />
                    
                </div>
            </div>
            <div className="cell">
                <div ref={code1Ref} className="code Code">
                    <pre>
                        <code className="language-javascript" dangerouslySetInnerHTML={{ __html: highlightedCode1 }} />
                    </pre>
                </div>
                <div ref={code2Ref} className="code">
                  <pre>
                    <code className="language-javascript" dangerouslySetInnerHTML={{ __html: highlightedCode2 }} />
                  </pre>
                </div>
                <div ref={code3Ref} className="code">
                  <pre>
                    <code className="language-python" dangerouslySetInnerHTML={{ __html: highlightedCode3 }} />
                  </pre>
                </div>
            </div>
        </div>
    )
}

export function SkillsR() {
    return (
        <div className='skills-parent center'>
            <img className='profile-pic' src="eng_team.svg" alt="" />
        </div>
    )
}

export default Skills;