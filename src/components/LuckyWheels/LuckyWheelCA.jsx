import style from './LuckyWheelCA.module.css';

function LuckyWheelCA() {
  const rotateFunction1 = () => {
    var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box1').style.transform = "rotate("+deg+"deg)";
  var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);
  }

  return (<>
    <div id="mainbox" className={style.mainbox}>
    <div id="box1" className={style.box}>
      <div className={style.box1}>
        <span className={style.span1}><b>Infinix Y1 Plus Neo</b></span>
        <span className={style.span2}><b>Infinix INBook Y1</b></span>
        <span className={style.span3}><b>Wings Nuvobook S1</b></span>
        <span className={style.span4}><b>HP 255 G9 840T7PA </b></span>
      </div>
      <div className={style.box2}>
        <span className={style.span1}><b>HP 255 G9</b></span>
        <span className={style.span2}><b>HP 841w6pa 255 g9</b></span>
        <span className={style.span3}><b>Acer One</b></span>
        <span className={style.span4}><b>Acer Aspire 3</b></span>
      </div>
    </div> 
    <button className={style.spin} onClick={() => rotateFunction1()}>SPIN</button>
  </div></>
  )
}

export default LuckyWheelCA
