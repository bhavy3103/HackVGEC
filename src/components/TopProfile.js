import "./topprofile.css";
import cvData from "./cvdata.json";

export default function TopProfile() {
  return (
    <div className="top-profile">
      <div className="profile-img-div">
        <img
          className="img222"
          src={cvData["userData"].imageURL}
          alt="your img"
        />
      </div>
      <div className="profile-intro">
        <p className="profile-name">{cvData["userData"].name}</p>
        <p className="profile-college">{cvData["userData"].college}</p>

        <p className="text-black text-sl font-bold">{cvData["userData"].email}</p>
      </div>
    </div>
  );
}
