<template>
    <div>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo"><a href="#">КиноПоиск</a></label>
            <ul>
                <li><i class="fas fa-play"></i><a href="#">Онлайн-кинотеатр</a></li>
                <li><i class="fas fa-desktop"></i><a href="#">Установить на ТВ</a></li>
                <li style="position:relative;"><input type="text" placeholder="Фильмы,сериалы,персоны"><i class="fas fa-search"></i></li>
                <li class="Registration__button"><a href="#"><router-link to="/login">Войти</router-link></a></li>
            </ul>
            <router-view />
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}
    nav{
        background: #1f1f1f;
        height: 80px;
        width: 100%;
    }
    label.logo a{
        color: white;
        font-size: 35px;
        line-height: 80px;
        padding: 0 100px;
        font-weight: bold;
        text-decoration: none;
    }

    nav ul{
        float: right;
        margin-right: 20px;
    }

    nav ul li{
        display: inline-block;
        line-height: 80px;
        margin: 0 10px;
    }

    nav ul li a{
        color: #ffffff;
        font-size: 17px;
        text-decoration: none;
        font-weight: 600;
    }

    a.active, a:hover{
        color: #f60;
        transition: 0.5s;
    }

    .checkbtn{
        font-size: 30px;
        color: white;
        float: right;
        line-height: 80px;
        margin-right: 40px;
        cursor: pointer;
        display: none;
    }
    #check{
        display: none;
    }

    ul li input{
        padding: 10px;
        min-width: 300px;
        text-overline: none;
        border-radius: 5px;
        border: none;
        outline : none;
        background-color: #4c4c4c;
        color: #fff;
        max-height: 40px;
        margin-right: 50px;
    }

    ul li input::placeholder{
    color: #9e9e9e;
    }

     .fa-search{
        position: absolute;
        right: 60px;
         top: 34px;
         color: #ffffff;
    }

     .fa-play{
         padding-right: 10px;
         color: #ffffff;
     }

     .fa-desktop{
         color: #ffffff;
         padding-right: 10px;
     }

     nav ul .Registration__button a{
         padding: 10px;
         border: 1px solid #fff;
         border-radius: 5px;
         background: linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #4bcfdd 100%);
     }

    @media (max-width: 510px){
        label.logo a{
            padding: 0;
        }
    }
    @media (max-width: 952px){
        label.logo{
            font-size: 30px;
            padding-left: 50px;
        }

        nav ul li a{
            font-size: 16px;
        }
    }

    @media (max-width: 1278px){
        ul{
            display: none;
        }

        .checkbtn{
            display: block;
        }

    }
    @media (max-width: 1279px){


        ul{
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #2c3e50;
            top: 80px;
            left: -100%;
            text-align: center;
            transition: all 0.5s;
            display: block;
        }

        nav ul li{
            display: block;
            margin: 50px 0;
            line-height: 30px;
        }

        nav ul li a{
            font-size: 20px;
        }

        #check:checked ~ ul{
            left: 0;
        }
    }
</style>
