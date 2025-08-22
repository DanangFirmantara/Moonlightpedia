import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
        console.log('About component mounted');
    }, []);

  return (
    <div className="container mt-5">
      <h1>About Moonlightpedia</h1>
      <p>
        Moonlightpedia is a modern web application built with React and Spring Boot. This page provides information about the project, its purpose, and its creators.
      </p>
    </div>
  );
}

export default About;
