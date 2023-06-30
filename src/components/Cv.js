import react from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import AchievementCard from "./AchievementCard";
import "./cvstyle.css";
import cardData from "./cvdata.json";
import TopProfile from "./TopProfile";

export default function CV() {
  const tempImgURL = "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
  const [projectAPI, setProjectAPI] = react.useState([]);
  const handleProject = async () => {
    fetch("http://localhost:5000/getproject")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjectAPI(data);
      });
  };
  react.useEffect(() => handleProject(), []);

  const styles = {
    marginBottom: "20px",
  };
  return (
    <div className="cv">
      <main>
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <TopProfile />
          <h1 class="text-5xl font-extrabold cv-heading">Experience</h1>
          <div className="cv-components">
            {cardData["experience"].map((item) => {
              return (
                <ExperienceCard
                  imageURL={item.imageURL}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  durationfrom={item.durationfrom}
                  durationto={item.durationto}
                  styles={styles}
                />
              );
            })}
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-extrabold cv-heading">Projects</h1>
          <div className="cv-components">
            {projectAPI.map((item) => {
              return (
                <ProjectCard
                  imageURL={tempImgURL}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  styles={styles}
                />
              );
            })}
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-extrabold cv-heading">Achievements</h1>
          <div className="cv-components">
            {cardData["achievement"].map((item) => {
              return (
                <AchievementCard
                  imageURL={item.imageURL}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  styles={styles}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
