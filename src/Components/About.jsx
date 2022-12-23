/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/coding.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am React Front-End web developer with a background in full-stack web development.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "CSS Web-styling",
  "Front-End React.js",
  "Javascript",
  "SQL",
  "Express",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. My background in Design helps me implement outside perspectives into my front-end development projects. Finding every avenue for success helps me open new worlds of opportunity and overcome daunting challenges";

  const downloadResume = "";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
       
        
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
     
          <a
            href="https://docs.google.com/document/d/1ljFytvYXPUjRtMpzOcboS-j-28A5qSqngFqpLu_b-VY/edit?usp=sharing"
            download="ChrisCG-resume"
          >
            Download Resume
          </a>

          <p className="inline-block text-lg px-8 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
            {downloadResume}
          </p>
      </div>
    </section>
  );
};

export default About;
