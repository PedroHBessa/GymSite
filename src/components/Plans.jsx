function Plans() {
  const cssinline = {
    color: "white",
  };
  return (
    <div className="plans-main">
      <div className="plans-main-title">
        <span style={cssinline}>ESCOLHA</span> SEU PLANO
      </div>
      <div className="plans">
        <div className="plan">
          <div className="plan-title">
            <p>PLANO 1</p>
          </div>
          <div className="plan-text">
            <p>text</p>
          </div>
        </div>
        <div className="plan">
          <div className="plan-title">
            <p>PLANO 2</p>
          </div>
          <div className="plan-text">
            <p>text</p>
          </div>
        </div>
        <div className="plan">
          <div className="plan-title">
            <p>PLANO 3</p>
          </div>
          <div className="plan-text">
            <p>text</p>
          </div>
        </div>
        <div className="plan">
          <div className="plan-title">
            <p>PLANO 4</p>
          </div>
          <div className="plan-text">
            <p>text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
