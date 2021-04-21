import modalHero from "../assets/imgs/modal-hero-edit.jpg";
import pool from "../assets/imgs/pool.jpg";
import gym from "../assets/imgs/gym.jpg";
import run from "../assets/imgs/run.jpg";
import cross from "../assets/imgs/cross.jpg";

function Modalities() {
  return (
    <div className="modal-main">
      <figure className="modal-hero">
        <img src={modalHero} alt="modal-img" className="modal-hero-img" />
        <figcaption>MODALIDADES</figcaption>
      </figure>
      <div className="modal-content">
        <div className="modals">
          <div className="modal">
            <figure className="modal-figure">
              <img src={pool} alt="" />
            </figure>
            <p className="modal-text">TEXT</p>
          </div>
          <div className="modal">
            <figure className="modal-figure">
              <img src={gym} alt="" />
            </figure>
            <p className="modal-text">TEXT</p>
          </div>
          <div className="modal">
            <figure className="modal-figure">
              <img src={run} alt="" />
            </figure>
            <p className="modal-text">TEXT</p>
          </div>
          <div className="modal">
            <figure className="modal-figure">
              <img src={cross} alt="" />
            </figure>
            <p className="modal-text">TEXT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalities;
