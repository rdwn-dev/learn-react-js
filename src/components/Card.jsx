import myPhoto from "../assets/images/profile.webp";

function Card() {
  let profile = {
    img: myPhoto,
    name: "Ridwan Nur Faizin",
    job: "Web Developer",
    desc: "Iam veri enthusiastic beginner web programmer",
  };

  return (
    <div className="profile-card">
      <img className="img-profile" src={profile.img} alt="" />
      <h1>{profile.name}</h1>
      <p>
        <b>{profile.job}</b>
      </p>
      <p>{profile.desc}</p>
    </div>
  );
}

export default Card;
