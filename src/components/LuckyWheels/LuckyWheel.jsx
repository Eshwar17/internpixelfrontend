import styled from './LuckyWheel.module.css';

function LuckyWheel() {
  const rotateFunction = () => {
    var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);
  }

  return (
    <div id="mainbox" className={styled.mainbox}>
    <div id="box" className={styled.box}>
      <div className={styled.box1}>
        <span className={styled.span1}><b>realme Techlife Buds T100</b></span>
        <span className={styled.span2}><b>POCO C51</b></span>
        <span className={styled.span3}><b>OPPO Enco Buds 2</b></span>
        <span className={styled.span4}><b>MOTOROLA g14</b></span>
      </div>
      <div className={styled.box2}>
        <span className={styled.span1}><b>MI Smart TV</b></span>
        <span className={styled.span2}><b>MOTOROLA tab g20</b></span>
        <span className={styled.span3}><b>Noise Buds VS102</b></span>
        <span className={styled.span4}><b>boAt Airdopes 161</b></span>
      </div>
    </div> 
    <button className={styled.spin} onClick={() => rotateFunction()}>SPIN</button>
  </div>
  )
}

export default LuckyWheel
