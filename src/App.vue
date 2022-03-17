<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: url("@/assets/fundoLogin.jpg");
  height: 100vh;
  font-family: sans-serif;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

body {
  background-size: cover;
}

#particles-js {
  height: 100%;
}

.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  min-height: 200px;
  background: #ffffff;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
}

.user {
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
}

h3 {
  margin: 0;
  padding: 0 0 20px;
  color: #1e418b;
  text-align: center;
}

.loginBox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
  border: none;
  border-bottom: 2px solid #262626;
  outline: none;
  height: 40px;
  color: black;
  background: transparent;
  font-size: 16px;
  padding-left: 20px;
  box-sizing: border-box;
}

.loginBox input[type="text"]:hover,
.loginBox input[type="password"]:hover {
  color: #004b25;
  border: 1px solid #004b25;
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.3), 0 0 10px rgba(0, 255, 0, 0.2),
    0 0 15px rgba(0, 255, 0, 0.1), 0 2px 0 black;
}

.loginBox input[type="text"]:focus,
.loginBox input[type="password"]:focus {
  border-bottom: 2px solid #00794a;
}

.inputBox {
  position: relative;
}

.inputBox span {
  position: absolute;
  top: 10px;
  color: #262626;
}

.loginBox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  background: #009218;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

.loginBox a {
  color: #262626;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: block;
}

a:hover {
  color: #00ffff;
}

* {
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  font-family: Hack, monospace;
}
div {
  color: #727272;
  text-align: center;
}
p {
  margin: 16px;
  color: #ffffff;
  text-transform: uppercase;
  transition: all 1s ease-in-out;
  position: relative;
  font-size: 80px;
}
p::before {
  content: attr(data-item);
  transition: all 1s ease-in-out;
  color: #2c3532;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  overflow: hidden;
}
p:hover::before {
  width: 100%;
}
nav {
  margin: 25px;
  background: #f9f9f9;
  padding: 16px;
}
nav .menuItems {
  list-style: none;
  display: flex;
}
nav .menuItems li {
  margin: 50px;
}
nav .menuItems li a {
  text-decoration: none;
  color: #2c3532;
  font-size: 24px;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;
}
nav .menuItems li a::before {
  content: attr(data-item);
  transition: 0.5s;
  color: #7fb414;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  overflow: hidden;
}
nav .menuItems li a:hover::before {
  width: 100%;
  transition: all 0.5s ease-in-out;
}

.body_404 {
  background-image: url("@/assets/broccoli1.gif");;
  background-repeat: no-repeat;
  background-size: 40%;
  background-color: #b5fff5;
}

.h1_404 {
  font-size: 100px;
  margin-bottom: 35%;
}

h4 {
  margin: 0;
  padding: 0 0 20px;
  color: #026826;
  text-align: center;
  font-family: sans-serif;
  font-size: 11px;
}
/* 
    codigo imagem footer */
.scroll {
  position: fixed;
  animation-name: across;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: linear;
  bottom: 5px;
  right: -210px;
}
@keyframes across {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(-1700px, 0px);
  }
}

/* footer */

@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400);

.footer #button {
  width: 35px;
  height: 35px;
  border: #727172 12px solid;
  border-radius: 35px;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.footer #button:hover {
  width: 35px;
  height: 35px;
  border: #3a3a3a 8px solid;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
}
.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 2em;
  overflow: hidden;
  margin: 0 auto;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 999;
}
.footer:hover {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  height: 10em;
}
.footer #container {
  margin-top: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: #609dec;
}
.footer #cont {
  position: relative;
  top: -45px;
  right: 190px;
  width: 150px;
  height: auto;
  margin: 0 auto;
}
.footer_center {
  width: 500px;
  float: left;
  text-align: center;
}
</style>
