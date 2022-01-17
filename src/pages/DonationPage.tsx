import React from "react";

import Navbar from "custom-components/Navbar";
import Images from "assets/images.export";

import "./pages.scss";

export default function DonationPage() {
  return (
    <>
      <div className="sections-centered">
        <Navbar />
        <section className="section">
          <div className="image-holder">
            <img
              src={Images.ExampleFRImage}
              className="donation-image"
              alt=""
            />
          </div>
          <div className="donation-main-information">
            <h2 className="donation-title">
              Ali needs your help to fight tumour
            </h2>
            <p className="time-left">26 days left for surgery</p>

            <div className="amount-flex">
              <div>
                <p>Raised</p>
                <p>150,000</p>
              </div>

              <div>
                <p>Goal Amount</p>
                <p>500,000</p>
              </div>
            </div>

            <div className="donate-buttons">
              <button className="donate-button">Donate</button>

              <div className="side-by-side">
                <button className="read-buttons">Check Documents</button>
                <button className="read-buttons">Read Story</button>
              </div>
            </div>
          </div>
        </section>

        <section className="donation-details">
          <h3 className="about-donation-heading">About the donation</h3>
          <div className="donation-about">
            What goes on in a mother’s mind when any time she visits the
            hospital with her son, she is informed that his cancer has relapsed?
            Having faced that situation thrice, I pray to God none of the
            parents ever have the ill fortune to witness their own child
            suffering from cancer from time and again.
            <br />
            My family's happiness lies in Abir. Him being the youngest member of
            my family of four, all of us are accustomed to his joyous and
            playful. When he became extremely sick the first time, he was scared
            and sad. Yet he tried to cheer all of us up as much as he could.
            2014-2017 In April 2014, I was given the worst news any mother could
            receive.
            <br />
            It was the first time Abir was diagnosed with Leukemia. Abir was in
            and out of hospital stays for three long years. He spent much of his
            early childhood getting poked by needles, giving blood, sleeping in
            hospital beds and receiving harsh chemotherapy.
            <br />
            He not only lost all his hair, his body weight also decreased
            drastically. Finally, in June 2017, I finally received news my heart
            was aching to hear. After 3 years of painful treatments, Abir had
            finally beat cancer. He could finally live his life like a normal
            child. However, fate had other plans.
          </div>
        </section>
      </div>
    </>
  );
}
