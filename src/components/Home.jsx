import React from "react";
import vg from "../assets/2.png";
import { IoFootstepsSharp } from "react-icons/io5";
import { IoIosBody } from "react-icons/io";
import { GiLungs } from "react-icons/gi";
import { GiStomach } from "react-icons/gi";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Join Along</h1>
          <p>The initiative by Sneha Kasera</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Know Your Instructor!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Batches</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <IoFootstepsSharp />
              <p>Aarambh</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <GiLungs />
              <p>Swaas</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <GiStomach />
              <p>Fat Loss</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <IoIosBody />
              <p>Sampoorna</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
