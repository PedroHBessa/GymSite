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
            <div className="modal-text">
              <p className="modal-text-tittle">TITTLE</p>
              <p className="modal-text-description">
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
              </p>
              <a href="/" className="modal-btn">
                Saiba mais
              </a>
            </div>
          </div>
          <div className="modal">
            <figure className="modal-figure">
              <img src={gym} alt="" />
            </figure>
            <div className="modal-text">
              <p className="modal-text-tittle">TITTLE</p>
              <p className="modal-text-description">
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
              </p>
              <a href="/" className="modal-btn">
                Saiba mais
              </a>
            </div>
          </div>
          <div className="modal">
            <figure className="modal-figure">
              <img src={run} alt="" />
            </figure>
            <div className="modal-text">
              <p className="modal-text-tittle">TITTLE</p>
              <p className="modal-text-description">
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
              </p>
              <a href="/" className="modal-btn">
                Saiba mais
              </a>
            </div>
          </div>
          <div className="modal">
            <figure className="modal-figure">
              <img src={cross} alt="" />
            </figure>
            <div className="modal-text">
              <p className="modal-text-tittle">TITTLE</p>
              <p className="modal-text-description">
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
                description
                <br />
              </p>
              <a href="/" className="modal-btn">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalities;
