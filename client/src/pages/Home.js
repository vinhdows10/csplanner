import "../css/Home.css";
import AddCourses from "../components/AddCourses";
import YearlySchedule from "../components/YearlySchedule";

const data = [
	{courseTitle: 'group 1', courses: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5', 'Course 6']}
]

function Home() {
	return (
		<div className="main">
			<div className="add-courses">
				<AddCourses />
			</div>

			<div className="schedule-wrapper">
				<div className="schedule">
					<YearlySchedule year="Freshman" data={data} />
					<YearlySchedule year="Sophomore" data={data} />
					<YearlySchedule year="Junior" data={data} />
					<YearlySchedule year="Senior" data={data} />
				</div>
			</div>
		</div>
	);
}

export default Home;