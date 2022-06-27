import './App.css';

const Login = () =>{
  return (
    <div className="App">
      
      <div className='backtext'> 
        <div style ={{display:'flex', flexDirection:'column'}}>
          
          <div>
            <div className='headtext'>Fresch Sushi</div>
            <div className='subtext'>Login Page</div>
          </div>

          <div><form>
            <div class="container">
              <label for="usn"><b>Username </b></label>
              <input type="text" id="usn" name="usn" placeholder="Enter Username" required></input><br></br>
            
              <label for="pwd"><b>Password </b></label>
              <input type="password" id="pwd" name="pwd" placeholder="Enter Password" required></input><br></br>
            
              <label for="chb"> Remember Me </label>
              <input type="checkbox" checked="checked" id="chb" name="chb"></input><br></br>

              <button type="submit"> Log In </button>


              <div class="container2">
                <span class="forgotpsw">Forgot password?</span>
              </div>

            </div>
          </form></div>

        </div>
      </div>
      
    </div>
    
  );
}

export default Login;
