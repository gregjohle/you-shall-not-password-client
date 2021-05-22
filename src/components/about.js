import React from "react";
import Ysnp from "./images/ysnp.jpg";
import "./about.css";

export default function About() {
  return (
    <div className='about'>
      <h2>About This App</h2>
      <p>
        In this increasingly digital world, it can be difficult to keep track of
        all the passwords we use in daily life. This website is meant to stand
        in the lone path between you and the unrelenting tide of information and
        intrigue. It is a bastion of hope in a world of digital tidal waves.
        Like Gandalf holding back the Balrog, This app will hold fast against
        this force of nature and declare to the world,{" "}
        <b>"You shall not pass... word."</b>
      </p>
      <img
        src={Ysnp}
        alt='art by Mark Lone, image found at https://sleeplessthought.wordpress.com/2013/08/14/gandalf-vs-balrog-art-you-shall-not-pass/'
      />
      <p>
        This app utilizes secure technologies to protect the passwords you store
        here. Each login password is hashed, and each stored password is
        encrypted to ensure that even in the event of a data breach, your
        information is secure.
      </p>
    </div>
  );
}
