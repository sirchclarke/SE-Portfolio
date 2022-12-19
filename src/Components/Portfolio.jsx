/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Portpic.jpg";

const imageAltText = "portfolio Picture";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Go Outside Right Now",
    description:
      "An app developed to increase peoples resources when finding places to go and spend time in the outdoors.",
    url: "https://go-rn-app.herokuapp.com/",
  },
  {
    title: "The Fault In Our Stars",
    description:
      "A social app where A user can rate and review an experince whether dating or casual encounters based on zodiac signs.",
    url: "https://starz-app.herokuapp.com/",
  },
  {
    title: "IntDev Transcripts",
    description:
      "A directory service which enables students and educational instituitons to view transcripts from the past and present through a 3rd party directory.",
    url: "https://intdev.herokuapp.com/",
  },
  {
    title: "CJA Amusement Park Guide",
    description:
      "An app designed to allow users to get live info on Amusement park rides, food and attractions.",
    url: "https://cja-guide.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
