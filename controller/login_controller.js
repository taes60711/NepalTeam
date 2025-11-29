  document.querySelector('.loginButton').addEventListener('click', () => {

    /// ID 要素の値を取得
    const idValue = document.querySelector('input[placeholder="ID"]').value;
    /// Password 要素の値を取得
    const passwordValue = document.querySelector('input[placeholder="Password"]').value;

    /// print to console
    console.log('ID:', idValue);
    console.log('Password:', passwordValue);

    if(idValue != "" && passwordValue != ""){
        alert("Login Successful!");
        window.location.href = "/NepalTeam/";
    } else {
        alert("Invalid ID or Password. Please try again.");
    }
  });