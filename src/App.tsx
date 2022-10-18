import "./App.css";
import Header from "./components/header/Header";
import profilePicture from "./assets/IMG/JinProfile.jpg";
import TimelineSection from "./components/timeline/Timeline";

import {
    mySQL,
    postGreSQL,
    express,
    reactjs,
    c,
    css,
    html,
    javascript,
    python,
    sql,
    typescript,
} from "./assets/IMG/";
function App() {
    return (
        <div>
            <Header />
            {/* Intro*/}
            <img
                src={profilePicture}
                width={200}
                height={150}
                alt="JinsProfilePicture"
            />
            <h1>Daniel Jin Wodke - Computer Science Student</h1>
            <p>
                Dedicated, teamoriented and creative CS student at Technical
                University Berlin with korean german roots. Fascinated by the
                field of data science, number theory and machine learning.
            </p>
            {/* Skills*/}
            <h1> Skills</h1>
			<section className="skills">
            <div className="languages">
                <img src={c} alt="c" />
                <img src={css} alt="css" />
                <img src={html} alt="html" />
                <img src={javascript} alt="javascript" />
                <img src={python} alt="python" />
                <img src={sql} alt="sql" />
                <img src={typescript} alt="typescript" />
            </div>

            <div className="frameworks">
                <img src={reactjs} alt="React" />
                <img src={express} alt="express" />
            </div>

            <div className="database">
                <img src={mySQL} alt="mySQL" />
                <img src={postGreSQL} alt="postGreSQL" />
            </div>
			</section>

            <img src="" alt="" />
            {/* Timeline*/}

            <TimelineSection />

            {/* Fooder*/}
        </div>
    );
}

export default App;
