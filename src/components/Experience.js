import React from "react";
import "./style.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2>Project Experience</h2>
      <ul>
        <li>
          <strong>HidGemsIndo</strong> - Web Developer
          <p> May 2023 - June 2023</p>
          <p>
            Proyek yang saya buat ini adalah proyek website yang bertujuan untuk
            memperkenalkan 11 destinasi wisata di Indonesia yang belum banyak
            orang lain ketahui. Di projek ini, saya mengatur bagian display
            website tersebut seperti menyusun nama wisata, deskripsi singkat,
            gambar, serta video referensi yang di embed dari youtube.
          </p>
        </li>
        <li>
          <strong>Game Tahu Bulat</strong> - Web Designer
          <p> March 2023 - April 2023</p>
          <p>
            Di game tahu bulat ini, saya bertugas untuk merapikan design game
            yaitu berupa CSS dari game tersebut supaya terlihat lebih rapi dan
            indah untuk dimainkan oleh user. Yang saya lakukan juga adalah
            dengan menghias design about us dari website itu dan memberikan
            design kepada game Tahu Bulat itu sendiri supaya terlihat lebih
            menarik.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
