import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    return (

      <div className='head'>
  <section className=" text-center container ">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Welcome to My Portfolio Website</h1>
        <div className="p">As a passionate Frontend Developer with two years of experience, I am skilled in creating intuitive, user-friendly interfaces using HTML, CSS, Bootstrap, JavaScript, and React. I can seamlessly integrate REST APIs in React. I have experience collaborating with designers, back-end developers, and project managers to ensure seamless integration of all components. I am also passionate about staying up-to-date with the latest trends and best practices in web development, and regularly attend conferences and workshops to expand my knowledge. I can add immense value with skills and capacities while experiencing personal and professional growth.</div>
        <p>
          <a href="/blog" className="btn btn-secondary my-2">My Projects</a>
        </p>
      </div>
    </div>
  </section>
        </div>

      
       
  
            
          
        
            
    );
}

export default Home;
