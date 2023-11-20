import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <p className="text-base font-medium">
        I am passionate about creating innovative and user-friendly software
        solutions. I am eager to learn new technologies and expand my skillset
        to tackle complex programming challenges. With a strong foundation in
        programming fundamentals and a knack for problem-solving, I am committed
        to delivering high-quality work that meets the needs of my clients. I am
        actively seeking opportunities to gain hands-on experience and
        collaborate with experienced developers to enhance my skills and
        contribute to meaningful projects. I am confident in my ability to
        quickly adapt to new environments and learn from every experience.
      </p>
      <div className="mt-4">

      <span className="font-bold">Technologies I mostly use:</span>
      <ol>
        <li className="font-medium">NextJS</li>
        <li className="font-medium">TypeScript</li>
        <li className="font-medium">TailwindCSS</li>
        <li className="font-medium">Firebase</li>
      </ol>
      </div>
    </div>
  );
};
export default About;
