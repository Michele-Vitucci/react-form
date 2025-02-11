function UncontrollLogin() {
    const handleSubmit = (event) => {
      event.preventDefault(); // Blocca l'invio del form
  
      const form = event.target;
      console.log("Dati inviati:", {
        username: form.username.value,
        password: form.password.value,
        session: form.session.checked,
      });
    };
  
    const loginWithFormData = (event) => {
      const formData = new FormData(event.target.form); // Corretto per accedere al form
      console.log("Dati con FormData:", Object.fromEntries(formData.entries()));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input name="session" type="checkbox" />
        
        <button type="submit">Login</button>
        <button type="button" onClick={loginWithFormData}>Login con FormData</button>
      </form>
    );
  }
  
  export default UncontrollLogin;
  