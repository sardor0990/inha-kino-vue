<template>
    <div>
        <div class="container">

            <!--LEFT CONTENT-->

            <div class="left-cont">
                <div class="pl-2">
                    <img :src="movie.poster"
                         alt="" class="img-fluid">
                    <div style="border-radius: 10px; overflow: hidden; z-index: 1; margin-top: 10px;">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/XnuDetmX9lU" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <!--RIGHT CONTENT-->

            <div class="right-cont">
                <div class="right__cont__inner" style="padding-top: 40px;">

                    <div class="name__movie">
                        {{ movie.title }}
                    </div>

                    <div class="name__age__info">
                        Raya and the Last Dragon 6+
                    </div>

                    <p class="before__full__detail">О фильме</p>

                    <!--FULL DETAIL-->

                    <div class="full__detail">
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Страна</p>      <span>США</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Жанр</p>        <span>мультфильм, фэнтези, боевик, комедия, приключения, семейный</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Слоган</p>      <span>-</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Режиссер</p>    <span>Дон Холл, Карлос Лопес Эстрада, Пол Бриггс, ...</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Сценарий</p>    <span>Ки Нгуйен, Аделе Лим, Пол Бриггс, ...</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Продюсер</p>    <span>Джаред Буш, Нэйтан Кертис, Питер Дель Вечо, ...</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Композитор</p>  <span>Джеймс Ньютон Ховард</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Художник</p>  <span>Хелен Минцзюэ Чэнь, Пол А. Феликс, Кори Лофтис</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Монтаж</p>  <span>Фабьен Роули, Шеннон Стейн</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Премьера в Росcии</p>  <span>4 марта 2021, «Дисней Студиос»</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Премьера в мире</p>  <span>3 марта 2021, ...</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Возраст</p>  <span style="border: 1px solid black;">6+</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Рейтинг MPAA</p>  <span style="border: 1px solid black;">PG</span>
                        </div>
                        <div style="border-bottom: 1px solid #ccc;" class="d-flex">
                            <p>Время</p>  <span>107 мин. / 01:47</span>
                        </div>
                    </div>


                    <!--TEXT-->

                    <div class="more__detail mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid, amet animi assumenda delectus dolorum earum esse facilis harum iste, iusto laboriosam laudantium, maiores maxime minima nulla perferendis soluta veniam!
                    </div>


                    <!--RATING MOVIE-->

                    <div class="Rating__movie" style="margin-top: 80px; position:relative; margin-bottom: 80px;">

                        <p>Рейтинг фильма</p>

                        <div class="Rating__movie__inner" style="max-width: 300px;">
                            <div class="rate">
                                <input type="radio" id="star5" name="rate" value="5"/>
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4"/>
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3"/>
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2"/>
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1"/>
                                <label for="star1" title="text">1 star</label>
                            </div>
                            <br>
                            <br>
                            <span style="position:absolute; left: 0;top: 60px;"><b>1</b><b>2</b><b>3</b><b>4</b><b>5</b></span>
                        </div>

                        <div style="position:absolute; right: 0; top:0;">
                            <img src="https://www.indiewire.com/wp-content/uploads/2020/08/ultimate-summer-movie-season.jpg?w=780"
                                 alt="" style="max-width: 300px;">
                        </div>
                    </div>
                </div>


                <!--<div class="Form__div">-->
                <!--<p>Написать рецензию</p>-->

                <!--<div  style="max-width: 100px; height: 100px;border-radius:50%; overflow: hidden;">-->
                <!--<img src="https://imgcdn.zigwheels.ph/medium/gallery/exterior/73/953/honda-xr150l-slant-front-view-full-image-209679.jpg" alt="" s>-->
                <!--</div>-->

                <!--<div class="Form__div__inner">-->

                <!--<form action="">-->
                <!--<div class="form-row">-->
                <!--<div class="input-data">-->
                <!--<select name="cars" id="cars">-->
                <!--<option value="volvo">Volvo</option>-->
                <!--<option value="saab">Saab</option>-->
                <!--<option value="opel">Opel</option>-->
                <!--<option value="audi">Audi</option>-->
                <!--</select>-->
                <!--</div>-->
                <!--<div class="input-data">-->
                <!--<input type="text">-->
                <!--<label>First Name</label>-->
                <!--</div>-->
                <!--<div class="input-data">-->
                <!--<input type="text">-->
                <!--<label>Last Name</label>-->
                <!--</div>-->
                <!--<div class="input-data textarea">-->
                <!--<textarea name="" id="" cols="30" rows="10"></textarea>-->
                <!--</div>-->
                <!--<div class="input-data submit__btn">-->
                <!--<div class="inner"></div>-->
                <!--<input type="submit" value="submit">-->
                <!--</div>-->
                <!--</div>-->
                <!--</form>-->
                <!--</div>-->
                <!--</div>-->





















                <!--Birinchi ishlatilgan forma-->


                <!--<div class="wrapper mt-5 pt-5">-->
                    <!--<div class="contact__container">-->
                        <!--<div class="contact__title">-->
                            <!--<h2>Contact us-->
                                <!--<hr>-->
                            <!--</h2>-->

                        <!--</div>-->
                        <!--<form class="contact__form">-->
                            <!--<p>Name</p>-->
                            <!--<input v-model="form.name" class="contact__form-input" type="text">-->

                            <!--<p>Email</p>-->
                            <!--<input v-model="form.email" class="contact__form-input" type="text">-->

                            <!--<p>Message</p>-->
                            <!--<textarea v-model="form.message" class="contact__form-textarea" type="text"></textarea>-->

                            <!--<div class="submit1" @click="sendForm">Send message</div>-->
                        <!--</form>-->
                    <!--</div>-->
                <!--</div>-->












                <div class="comment__part" style="max-width: 400px;  margin: 50px auto; border: 1px solid #ccc; padding: 20px; border-radius: 5px; margin-top: 144px;">
                    <div class="comment__first__row d-flex justify-content-between" style="margin-bottom: 30px;">
                        <div>
                            <p style="color: blue; font-weight: 600; font-size: 16px; padding:0; margin:0;">Nodirbek <br> Nematullayev</p>
                            <span style="font-size: 15px;">Выйти</span>
                        </div>

                        <div>
                            <p style="font-size: 12px;">Перед публикацией рецензии <br> ознакомтесь с правилами </p>
                        </div>
                    </div>

                    <form action="">
                        <div>
                            <select name="" id="" style="width: 100%; border: 1px solid #ccc; padding: 10px;">
                                <option value="volvo">1</option>
                                <option value="saab">2</option>
                                <option value="opel">3</option>
                                <option value="audi">4</option>
                            </select>
                        </div>

                        <div class="mt-2">
                            <input type="text" placeholder="Заголовок" style="border: 1px solid #ccc; width: 100%; padding: 10px">
                        </div>

                        <div class="mt-2">
                            <textarea name="" cols="30" rows="10" style="border: 1px solid #ccc; width: 100%; padding: 10px;" placeholder="Собщения"></textarea>
                        </div>

                        <div class="mt-2" style="border: 1px solid orange; background: orange; color: #ffffff; font-weight: bold; text-align: center; padding: 10px;">Send message</div>

                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                movie: {},
                form: {
                    name: "",
                    email: "",
                    message: "",
                }
            }
        },
        created() {
            this.getMovie(1)
        },
        methods: {
            getMovie(id) {
                axios.get(`http://192.168.4.125:8000/api/v1/movie/${id}`).then((response) => {
                    this.movie = response.data.movie
                    console.log(this.movie)
                })
            },
            sendForm() {
                console.log(this.form.message)
                axios.post("http://192.168.4.125:8000/api/v1/reviews/",
                    {
                        type: 2,
                        header: this.form.message,
                        text: this.form.message,
                        movie: 1
                    },
                ).then((response) => {
                    console.log(response);
                })
            }
        },
    }
</script>

<style scoped>
    .left-cont {
        padding-top: 40px;
        max-width: 300px;
        width: 100%;
    }

    .container {
        max-width: 1280px;
        width: 100%;
        background-color: white;
        display: flex;
    }

    .right-cont {
        max-width: 900px;
        width: 100%;
        padding-left: 40px;
    }

    .left-cont div img {
        width: 100%;
        border-radius: 10px;
    }

    .right-cont {
        border-left: 1px solid #ccc;
        margin-left: 20px;
    }

    .name__movie {
        font-size: 36px;
        font-weight: 700;
        line-height: normal;
    }

    .name__age__info {
        color: rgba(31, 31, 31, .6);
        font-size: 18px;
        font-weight: 400;
        line-height: 50px;
        text-size-adjust: 100%;
    }

    .right__cont__inner .before__full__detail {
        font-size: 18px;
        font-weight: 700;
        padding-top: 30px;
    }

    .full__detail div p {
        color: rgba(31, 31, 31, 0.5);
        font-size: 15px;
        line-height: 40px;
    }

    .full__detail div span {
        color: #342f90;
        font-size: 15px;
        margin: 10px 0 10px 200px;
        padding: 2px;

    }

    .full__detail p, span {
        padding: 0;
        margin: 0;
    }

    /*.full__detail span{*/
    /*margin-left: 200px;*/
    /*}*/

    /* STAR */
    .rate {
        float: left;
        height: 100px;
        padding: 0 10px;
    }

    .rate:not(:checked) > input {
        position: absolute;
        top: -9999px;
    }

    .rate:not(:checked) > label {
        float: right;
        width: 1em;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 30px;
        color: #ccc;
    }

    .rate:not(:checked) > label:before {
        content: '★ ';
    }

    .rate > input:checked ~ label {
        color: #ffc700;
    }

    .rate:not(:checked) > label:hover,
    .rate:not(:checked) > label:hover ~ label {
        color: #deb217;
    }

    .rate > input:checked + label:hover,
    .rate > input:checked + label:hover ~ label,
    .rate > input:checked ~ label:hover,
    .rate > input:checked ~ label:hover ~ label,
    .rate > label:hover ~ input:checked ~ label {
        color: #c59b08;
    }

    .Rating__movie__inner label {
        font-size: 50px;
    }

    .Rating__movie__inner {
        position: relative;
    }

    .Rating__movie__inner b {
        padding: 0 20px;
        font-weight: 100;
    }

    .Rating__movie__inner span {
        padding-left: 10px;
    }

    #app > div > div > div:nth-child(2) > div > div.right-cont > div > div.Rating__movie > div > div > label:nth-child(n) {
        font-size: 50px;
    }

    /* END */

    /*.Rating__movie p{*/
    /*font-size: 24px;*/
    /*font-weight: 600;*/
    /*padding-left: 10px;*/
    /*}*/

    /*.Form__div__inner{*/
    /*box-shadow: 0px 0px 10px rgba(0,0,0,0.1);*/
    /*padding: 25px 40px 10px 40px;*/
    /*background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);*/
    /*}*/

    /*.Form__div form{*/
    /*padding: 30px 0 0 0;*/
    /*}*/

    /*.form-row{*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*}*/

    /*.input-data input,*/
    /*.textarea textarea{*/
    /*display: block;*/
    /*height: 100%;*/
    /*width: 100%;*/
    /*border: none;*/
    /*font-size: 17px;*/
    /*border-bottom: 2px solid rgba(0,0,0,0.12);*/
    /*}*/

    /*.input-data label{*/

    /*bottom: 10px;*/
    /*font-size: 16px;*/
    /*}*/

    /*.textarea textarea{*/
    /*resize: none;*/
    /*}*/


























    /*.contact__container {*/
        /*display: block;*/
        /*border: 10px solid #62B6CB;*/
        /*border-radius: 10px;*/
        /*margin: 0 auto;*/
        /*padding: 0 0 10px 10px;*/
        /*max-width: 330px;*/
        /*background-color: #62B6CB;*/
    /*}*/

    /*.contact__title {*/
        /*display: inline-block;*/
    /*}*/

    /*.contact__title h2 {*/
        /*padding: 0 10px 0 0px;*/
        /*margin: 5px 0;*/
        /*color: #FBFBFB;*/
    /*}*/

    /*.contact__form {*/
        /*padding: 10px 10px 0 0;*/
    /*}*/

    /*hr {*/
        /*width: 100%;*/
        /*display: block;*/
        /*margin: 5px 0;*/
        /*height: 5px;*/
        /*border: 0;*/
        /*background-color: #FBFBFB;*/
    /*}*/

    /*input,*/
    /*textarea {*/
        /*width: 100%;*/
        /*border: 5px solid #FFFFFF;*/
        /*border-radius: 5px;*/
        /*resize: none;*/
        /*padding: 0 5px;*/
        /*box-sizing: border-box;*/
        /*font-size: 18px;*/
        /*color: #25606f;*/
    /*}*/

    /*input[type="text"] {*/
        /*padding: 0;*/
        /*height: 40px;*/
    /*}*/

    /*input:focus,*/
    /*textarea:focus {*/
        /*outline: none;*/
    /*}*/

    /*.contact__form-input {*/
        /*margin: 5px 0 10px 0;*/
    /*}*/

    /*.contact__form-textarea {*/
        /*margin: 5px 0;*/
        /*width: 100%;*/
        /*height: 100px;*/
    /*}*/

    /*.submit1 {*/
        /*width: 100%;*/
        /*height: 50px;*/
        /*background-color: #25606f;*/
        /*color: #FBFBFB;*/
        /*border: 1px solid #25606f;*/
        /*border-radius: 5px;*/
        /*margin: 10px 0 0 0;*/
        /*font-size: 22px;*/
        /*text-align: center;*/
        /*cursor: pointer;*/
    /*}*/

    /*.submit1:hover {*/
        /*background-color: #368da2;*/
        /*border: #368da2;*/
    /*}*/
</style>
