<template>
    <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input placeholder="请输入用户名" v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input placeholder="请输入密码" v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="phonecode">
                <el-input placeholder="请输入验证码" v-model="user.phonecode">
                    <el-button type="primary" slot="append" icon="el-icon-s-promotion" @click="getPhoneCode">{{ codeText }}</el-button>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login"> 登录 </el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    export default {
        name: 'Login',
        methods: {
            getPhoneCode () {
                this.timer();
            },
            timer () {
                let num = 60;
                let that = this;
                that.codeText = num + "秒后重新发送"
                let time = setInterval(function() {
                    if (num == 0) {
                        clearInterval(time);
                        time = null;
                        that.codeText = "发送验证码";
                    } else {
                        num--;
                        
                        that.codeText = num + "秒后重新发送";
                    }
                }, 1000);
            },
            login () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        if (this.user.name === 'admin' && this.user.pass === '123') {
                            this.$notify({
                                type: 'success',
                                message: '欢迎你,' + this.user.name + '!',
                                duration: 3000 
                            })
                            this.$router.replace('/a')
                        } else {
                            this.$message({
                                type: 'error',
                                message: '用户名或密码错误',
                                showClose: true
                            })
                        }
                        console.log(this.user);
                    }
                    else {
                        return false
                    }
                })
            }
        },
        data () {
            return {
                codeText: '发送验证码',
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ],
                    phonecode: [
                        {required: true, message: '验证码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>
