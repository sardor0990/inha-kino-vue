<template>
    <div>
        <div class="container" style="height: 100vh">
            <div class="left-cont pr-5">
                <div style="padding: 0 10px; max-width: 180px; width: 100%">
                  <div>
                    <ul>
                        <li class="first__title"><a href="#" style="text-align: left">МЕДИА</a></li>
                        <li><a href="#">Все материалы</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Статьи</a></li>
                        <li><a href="#">Видео</a></li>
                        <li><a href="#">Тесты</a></li>
                        <li class="last__text"><a href="#">Подкасты</a></li>
                    </ul>

                      <ul>
                          <li class="first__title"><a href="#" style="text-align: left">МЕДИА</a></li>
                          <li><a href="#">Все материалы</a></li>
                          <li><a href="#">Новости</a></li>
                          <li><a href="#">Статьи</a></li>
                          <li><a href="#">Видео</a></li>
                          <li><a href="#">Тесты</a></li>
                          <li class="last__text"><a href="#">Подкасты</a></li>
                      </ul>

                      <ul>
                          <li class="first__title"><a href="#" style="text-align: left">МЕДИА</a></li>
                          <li><a href="#">Все материалы</a></li>
                          <li><a href="#">Новости</a></li>
                          <li><a href="#">Статьи</a></li>
                          <li><a href="#">Видео</a></li>
                          <li><a href="#">Тесты</a></li>
                          <li class="last__text"><a href="#">Подкасты</a></li>
                      </ul>
                  </div>
                </div>
            </div>

            <div class="right-cont d-flex">

                <div v-for="(item, index) in movies" :key="index" class="movie__div mt-3">
                    <div style="position:relative;">
                        <a href="">
                            <img :src="item.poster" alt="" class="image1">
                            <span style="borde: 1px solid green; background: green; padding: 10px; color: #ffffff;">5</span>
                            <p class="name_movie">{{ item.title }}</p>
                            <p class="date_movie">{{ item.published_date }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                movies: [],
            }
        },
        created() {

            axios.get("http://192.168.4.125:8000/api/v1/").then((response) => {
                this.movies = response.data.movie
                console.log(this.movies)
            })
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      .left-cont{
          padding-top: 40px;
      }

      .left-cont ul li{
          list-style: none;
      }

    .container {
        max-width: 1280px;
        width: 100%;
        background-color: white;
        display: flex;
    }

    .right-cont{
        max-width: 990px;
        width: 100%;
        margin-top: 30px;
        padding-left: 40px;
    }

    .movie__div{
        max-width: 150px;
        width: 100%;
        margin-right: 20px;
    }

    .movie__div img{
        width: 100%;
    }

    .image1{
        border-radius: 5px; /* image border radius */

    }

    .name_movie{
        color: #ffffff;
        padding: 0;
        margin: 0;
    }

    .date_movie{
        color: #ccc;
        padding: 0;
        margin: 0;
    }

    .movie__div a{
        text-decoration: none;
    }

    .right-cont{
        background-color: #141414;
    }

    .right-cont{
        flex-wrap: wrap;
    }

    /* left content dizayn  */
      .left-cont ul li a{
          font-size: 15px;
          color: rgba(31,31,31,0.9);
          padding: 5px;
          border-radius: 5px;
          line-height: 16px;
      }

      .left-cont ul li a:hover{
          color: #f60;
          background-color: #f2f2f2;
          text-decoration: none;
          transition: all 0.2s;
      }


    ul .first__title a{
        color: #ff5100 !important;
        font-size: 10px!important;
        letter-spacing: 2px;
        font-weight: 600;
        pointer-events: none;
        cursor: default;
        text-decoration: none;
    }

      .left-cont ul li{
          line-height: 30px;
      }
</style>
