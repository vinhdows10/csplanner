import "../css/Home.css";
import AddCourses from "../components/AddCourses";
import YearlySchedule from "../components/YearlySchedule";

function Home() {
	return (
		<div className="main">
			<div className="add-courses">
				<AddCourses />
			</div>

			<div className="schedule-wrapper">
				<div className="schedule">
					<YearlySchedule year="Freshman" />
					<YearlySchedule year="Sophomore" />
					<YearlySchedule year="Junior" />
					<YearlySchedule year="Senior" />
				</div>
			</div>
		</div>
	);
}

export default Home;