import fb from "./../assets/imgs/fb-icon.png";
import ig from "./../assets/imgs/ig-icon.png";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-content">
        <div className="footer-logo">LOGO</div>
        <div className="footer-menu">
          <ul>
            <li>
              <a href="/">INSTITUCIONAL</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">SOBRE</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">FALE CONOSCO</a>
            </li>
          </ul>
        </div>
        <div className="footer-smedia">
          <div className="fb">
            <img src={fb} alt="" />
          </div>
          <div className="ig">
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
