import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://asadmddn.onrender.com/static/media/My_pic2.f530d88f2b9a758b1619.jpg"
            alt="contactus"
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              borderRadius: "10%",
              marginLeft: "25%",
            }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            I am Asad Moinuddin, a motivated web developer pursuing B.E. in
            Computer Science Engineering from Lords Institute of Engineering and
            Technology. My expertise lies in the MERN stack, and I specialize in
            building interactive web applications using HTML, CSS, JavaScript,
            ReactJS, NodeJS, ExpressJS, and MongoDB. I am a quick learner,
            detail-oriented, and possess excellent communication and
            collaboration skills. I am constantly seeking new challenges to
            enhance my skills and grow as a web developer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
