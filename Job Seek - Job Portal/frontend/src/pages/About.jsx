import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          About Us
Welcome to Job Seek, where opportunities meet talent, and careers take flight. We understand the challenges both job seekers and companies face in the dynamic landscape of the professional world. Our platform is designed to bridge the gap, making the job-seeking process seamless, efficient, and rewarding.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        Our Mission
At Job Seek, our mission is to empower individuals to achieve their career aspirations while providing companies with the tools to discover top-tier talent. We believe that the right job can transform lives, and the right talent can drive businesses to new heights. We are committed to creating a space where both job seekers and companies thrive.

What Sets Us Apart
Comprehensive Job Matching:
We go beyond the traditional job search by utilizing advanced algorithms to match job seekers with opportunities that align with their skills, experiences, and aspirations. Our goal is to ensure that every match is meaningful and mutually beneficial.

User-Centric Approach:
We prioritize the user experience. Our platform is designed with simplicity and intuitiveness in mind, making it easy for job seekers to navigate, apply for jobs, and manage their profiles. Likewise, companies can seamlessly post openings, review applications, and connect with potential candidates.

Diverse Opportunities:
Whether you're an entry-level professional, a seasoned executive, or a company of any size, Job Seek provides a diverse range of opportunities and talent. We embrace diversity and inclusion, recognizing that unique perspectives drive innovation and success.

Join Our Community
Whether you are embarking on a new career journey or searching for the perfect candidate to join your team, Job Seek is here to support you. Join our growing community of job seekers and companies who believe in the power of meaningful connections.

Discover your next opportunity or find the perfect candidate today
         </p>
      </div>
    </div>
  );
};

export default About;
