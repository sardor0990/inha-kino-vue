<template>
    <div>
        <div class="container">
          <footer>
              <div class="footer__body">
              <div class="footer__content">
                  <ul class="socials">
                      <li><a href="#"><i class="fab fa-vk"></i></a></li>
                      <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fab fa-telegram"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                  </ul>
              </div>
              <div class="footer__text mt-1">
                  <ul>
                      <li><a href="">Вакансии</a></li>
                      <li><a href="">Реклама</a></li>
                      <li><a href="">Соглашение</a></li>
                      <li><a href="">Справка</a></li>
                      <li><a href="">Участие в исследованиях</a></li>
                      <li><a href="">Предложения</a></li>
                  </ul>
              </div>

              <div class="footer__store mt-3">
                  <div style="max-width:145px;">
                      <img src="../assets/footer-img/aivalable-on-the-app-store-2.svg" alt="" style="width: 100%;">
                  </div>

                  <div style="max-width:145px;">
                      <img src="../assets/footer-img/aivalable-on-the-app-store-2.svg" alt="" style="width: 100%;">
                  </div>

                  <div style="max-width:145px;">
                      <img src="../assets/footer-img/aivalable-on-the-app-store-2.svg" alt="" style="width: 100%;">
                  </div>
              </div>

              <div class="footer__bottom">
                  <div>
                  <p>© 2003 – 2021,КиноПоиск18+</p>
                  </div>
                  <div>
                  <p>
                      Телепрограмма Музыка Афиша
                  </p>
                  </div>
                  <div>
                  <p>Проект компании
                      Ташкент</p>
                  </div>
              </div>
              </div>
          </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
      background: #0c0c0c;
      height: auto;
      width: 100%;
      font-family: 'Roboto', sans-serif;
      padding-top: 40px;
      color: #fff;
  }
    .footer__body{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .socials{
        display: flex;
        list-style: none;
    }

  .socials li{
      margin: 0 20px;
  }

  .socials li a{
      font-size: 25px;
      color: #ffffff;
      opacity: 0.5;
  }

  .socials li a:hover{
      opacity: 1;
  }

    .footer__text ul{
        display: flex;
        list-style: none;
    }

  .footer__text ul li{
      margin: 0 29px;
  }

  .footer__text ul li a{
      font-size: 14px;
      text-decoration: none;
      color: #ffffff;
      opacity: 0.5;

  }

  .footer__text ul li a:hover{
      opacity: 1;
  }

    .footer__store{
        display: flex;
    }

    .footer__store div{
        margin: 0 20px;
        text-align: center;
        padding-bottom: 30px;
    }

  .footer__store div img{
      opacity: 0.5;
  }

    .footer__bottom{
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;
        margin-top: 50px;
    }

    .footer__bottom p{
        margin: 0 60px;
        font-size: 13px;
        color: #5e5e5e;
    }

    .container{
        max-width: 1310px!important;
        width: 100%;
    }
</style>
