import "./App.css";
import Header from "./components/header/Header";
import profilePicture from './assets/IMG/JinProfile.jpg'
import TimelineSection from "./components/timeline/Timeline";
function App() {
    return (
        <div>
            <Header />
			{/* Intro*/}
			<img src={profilePicture} width={200} height={150} alt="JinsProfilePicture" />
			<h1>
				Daniel Jin Wodke - Computer Science Student
			</h1>
			<p>
			Dedicated, teamoriented and creative CS student at 
			Technical University Berlin with korean german roots. 
			Fascinated by the field of data science, 
			number theory and machine learning. 
			</p>
			{/* Skills*/}
			<h1> Skills</h1>
			<img src="" alt="" />
			{/* Timeline*/}
			<TimelineSection/>

        </div>
    );
}

export default App;
