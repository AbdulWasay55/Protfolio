import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="overflow-hidden" id="about">
        <h1  data-aos="fade-up" className="text-3xl sm:text-5xl font-bold ml-3 mt-[250px] ">
          About Me:
        </h1>
        <div className="mx-3 text-justify mt-3 ">
          <p data-aos="fade-left">
            My Name is Abdul Wasay, a dedicated and passionate programmer
            specializing in TypeScript, Next.js, and web development. Currently
            pursuing my education in computer science, I have honed my skills
            through various hands-on projects and challenges. My portfolio
            includes interactive web applications such as countdown timers,
            weather widgets, and resume builders, showcasing my ability to solve
            problems and deliver efficient solutions.
          </p>

          <p data-aos="fade-right" className="mt-2">
            I have participated in hackathons and project challenges,
            consistently pushing my boundaries in both front-end and back-end
            development. My proficiency extends to data analysis, where I
            leverage tools like MS Excel for creating pivot tables,
            visualizations, and formulas to drive actionable insights.
          </p>
          <p data-aos="fade-left" className="mt-2">
            In addition to my technical expertise, I am constantly learning new
            technologies, and I am eager to contribute to innovative teams and
            projects. I am looking for internship opportunities to further
            develop my skills and gain industry experience.
          </p>
          <p data-aos="fade-right" className="mt-2">
            Outside of coding, I am also a problem-solver at heart, always
            looking for ways to optimize processes and create impactful digital
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
