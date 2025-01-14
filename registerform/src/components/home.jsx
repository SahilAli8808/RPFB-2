import React from "react";
import logo from "./images/img1.jpg";

export default function Home() {
  return (
    <div>
      {/* <div classNameName="container-fluid text-light">
        "Not all of us can do great things. But we can do small things with
        great love."
      </div> */}
      <div className="row mt-5 mx-auto">
        <div className="ms-lg-5 mt-lg-5 ms-xs-3 ms-md-3 mt-xs-3 mt-md-3 ps-3 col-lg-6  my-auto">
          <figure>
            <blockquote className="blockquote mb-4">
              <p>
                <i className="fas fa-quote-left fa-lg text-warning mb-5"></i>
                <span className="font-italic display-5 text-light">
                  Not all of us can do great things. But we can do small things
                  with great love.
                </span>
                <i className="fas fa-quote-right fa-lg text-warning mb-5"></i>
              </p>
            </blockquote>
            <figcaption className="row text-light ml-auto">
              <span className="col-6"></span>
              <span className="mr-0 block col-6">-Mother Terressa</span>
            </figcaption>
          </figure>
        </div>
      {/* icons */}
        
      </div>
      <div className="mx-2 ">
        <p align="center ">
<a href="#" className="">
  <img height="40" src="https://user-images.githubusercontent.com/46517096/166973395-19676cd8-f8ec-4abf-83ff-da8243505b82.png"/>
</a>
<a href="#">
  <img height="40" src="https://user-images.githubusercontent.com/46517096/166974271-91dfa250-d70b-4cb9-8707-f1bda1b708c3.png"/>
</a>
<span>
<a href="https://www.instagram.com/thebluebookfoundationindia/">
  <img height="40" src="https://user-images.githubusercontent.com/46517096/166974368-9798f39f-1f46-499c-b14e-81f0a3f83a06.png"/>
</a>
</span>
</p>
        </div>

        
    </div>
  );
}
