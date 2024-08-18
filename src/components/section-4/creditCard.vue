

<template>
      <div class="container creditCaard" ref="container">
        <div class="card front-face">
          <header>
            <span class="logo">
              <img src="../../assets/img/logo-credit.png" alt="" />
              <h5>Master Card</h5>
            </span>
            <img src="../../assets/img/chip.png" alt="" class="chip" />
          </header>

          <div class="card-details">
            <div class="name-number">
              <h6>Card Number</h6>
              <h5 class="number">4063 2020 3070 5000</h5>
              <h5 class="name">Hussain Panahy</h5>
            </div>

            <div class="valid-date">
              <h6>Valid Thru</h6>
              <h5>08/27</h5>
            </div>
          </div>
        </div>

        <div class="card back-face">
          <h6>
            For customer service call +977 4343 4693 or email at
            mastercard@gmail.com
          </h6>
          <span class="magnetic-strip"></span>
          <div class="signature"><i>005</i></div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et quis magni magnam nihil temporibus? Facere consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 325px;
  width: 575px;
  z-index: 100;
  transition: 0.6s;
  transform-style: preserve-3d;
}

.container .card {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 25px;
  border-radius: 25px;
  backdrop-filter: blur(25px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backface-visibility: hidden;
}
.front-face header,
.front-face .logo {
  display: flex;
  align-items: center;
}
.front-face header {
  justify-content: space-between;
}
.front-face .logo img {
  width: 62px;
  margin-right: 10px;
}
h5 {
  font-size: 26px;
  font-weight: 400;
}
.front-face .chip {
  width: 60px;
}
.front-face .card-details {
  display: flex;
  margin-top: 80px;
  align-items: flex-end;
  justify-content: space-between;
}
h6 {
  font-size: 14px;
  font-weight: 400;
}
h5.number {
  font-size: 30px;
  letter-spacing: 1px;
}
h5.name {
  margin-top: 20px;
}
.card.back-face {
  border: none;
  padding: 15px 25px 25px 25px;
  transform: rotateY(180deg);
}
.card.back-face h6 {
  font-size: 8px;
}
.card.back-face .magnetic-strip {
  position: absolute;
  top: 40px;
  left: 0;
  height: 60px;
  width: 100%;
  background: #000;
}
.card.back-face .signature {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
  height: 45px;
  width: 85%;
  border-radius: 6px;
  background: repeating-linear-gradient(
    #fff,
    #fff 3px,
    #efefef 0px,
    #efefef 9px
  );
}
.signature i {
  color: #000;
  font-size: 16px;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: #fff;
  margin-right: -35px;
  z-index: -1;
}
.card.back-face h5 {
  font-size: 12px;
  margin-top: 15px;
}

</style>