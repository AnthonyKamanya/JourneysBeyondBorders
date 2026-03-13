import placeholder from '../assets/map.jpg';
const WelcomePage = () => {
  return (
    <>
      <header className="header">
        <h4>Journey Beyond Borders</h4>
        <h4>Tasks</h4>
        <h4>Task Details</h4>
        <h4>Dashboard</h4>
        <h4>Profile</h4>
      </header>
      <div className="hero">
        <div className="text">
          <h1>Welcome to UK your new home. </h1>
          <h3>
            our mission is to help your integrate and understand the system in a
            seamless and easy beginner friendly way
          </h3>
        </div>
        <div className="ImageWrapper">
          <img src={placeholder}></img>
        </div>
      </div>
      <div>
        <h3>Start your journey here</h3>
      </div>
    </>
  );
};
export default WelcomePage;
