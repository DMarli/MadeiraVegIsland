<template>
  <div class="loginBox">
    <img
      class="user"
      src="~@/assets/MadeiraVegIsland.png"
      alt="Login MadeiraVegIsland"
      width="10%"
    />
    <form action="login.html" method="post">
      <div class="inputBox">
        <input
          id="uname"
          type="text"
          name="Utilizador"
          placeholder="Utilizador"
        />
        <input
          id="pass"
          type="password"
          name="Password"
          placeholder="Password"
        />
        <input type="submit" name="" value="Login" />
      </div>
    </form>
    <a href="registo.html">
      <input
        type="submit"
        name=""
        value="Criar conta"
        style="background-color: #7fb414"
    /></a>

    <a href="esquecerPass.html">Esqueci-me da Password<br /></a>
  </div>
</template>