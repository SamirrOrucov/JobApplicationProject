import React from "react";
import "./profile.scss";

function Profile() {
  return (
    <div>
      <div id="profile">
        <div className="container">
          {/* {decode ? (
            <> */}
            
          <div className="container_left">
            <div className="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU"
                alt=""
              />
              <h1>malik</h1>
              <h3>MIT</h3>
              <p>Information technologies</p>
            </div>

          </div>

          <div className="info">
            <div className="name">
              <h3>Name</h3>
              <p>Malik</p>
            </div>
            <div className="name">
              <h3>kurs</h3>
              <p>3-cu kurs</p>
            </div>
            <div className="name">
              <h3>ixtisas</h3>
              <p>information technologies</p>
            </div>
            <div className="name">
              <h3>Soft-skills</h3>
              <p>Soft-skills</p>
            </div>
            <div className="name">
              <h3>Military-qualifications</h3>
              <p>Military-qualifications</p>
            </div>
            <div className="name">
              <h3>Marital status</h3>
              <p>Marital status</p>
            </div>
            <div className="name">
              <h3>Languages/level</h3>
              <p>Englis/B1</p>
            </div>
            <div className="name">
              <h3>Gender</h3>
              <p>Man</p>
            </div>
            <div className="name">
              <h3>Employment-status</h3>
              <p>Employment-status</p>
            </div>
            <div className="name">
              <h3>Education level</h3>
              <p>Education level</p>
            </div>
          </div>
          {/* </>
          ) : (
            navigate("/")
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
