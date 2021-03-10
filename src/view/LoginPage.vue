<template>
    <div >
        <div class="container mt-5" style="background: url('../assets/dUyCkp.jpg')">
            <div class="row" style="background: url('../assets/dUyCkp.jpg'); position: relative">
                <img src="../assets/dUyCkp.jpg" alt="" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0;">
                <div class="col-sm-4 mx-auto" style="border: 1px solid black;background: black; border-radius: 5px; z-index: 999;">
                    <form @submit.prevent="handleSubmit" style="padding: 25px;">
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label" >Логин</label>
                            <input type="text" v-model="form.name" class="form-control" id="exampleInputName" aria-describedby="emailHelp"
                                   placeholder="Введите свой логин">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label" >Email</label>
                            <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="Введите свой email">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label" >Пароль</label>
                            <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" placeholder="Введите свой пароль">
                        </div>
                        <button type="submit" class="btn btn-primary" @click="sendForm">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // http://192.168.4.125:8000/api/v1
    import axios from "axios"

    export default {
        name: 'LoginPage',
        props: {
            msg: String
        },
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    password: "",
                }
            };
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('login',{
                    userName: this.userName, password: this.password}
                );
                localStorage('token', response.data.token);
            },

            sendForm(){
                axios.post("http://192.168.4.125:8000/api/v1",
                    {
                        name: this.form.name,
                        email: this.form.email,
                        password: this.form.password
                    },
                ).then((response) => {
                    console.log(response);
                })
            }
            // Login() {
            //   axios.post('http://192.168.4.125:8000/api/v1',
            //       {userName: this.userName, password: this.password},
            //   ).then((response)=>{
            //     console.log(response)
            //   });
            //
            // },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        height: 200px;
    }
    .row{
        background: url("../assets/dUyCkp.jpg");
        z-index: 111;
    }


</style>