import {useState} from 'react';

const Formulario = () => {
    
    const [input, setInput] = useState({
        username: '',
        email:'',
        password: '',
        confirmPassword: ''
      });
     
      const [error, setError] = useState({
        username: '',
        email:'',
        password: '',
        confirmPassword: ''
      })
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
            case "username":
              if (!value) {
                stateObj[name] = "Please enter Username.";
              }
              break;
            
            case "email":
                if (!value) {
                  stateObj[name] = "Please enter Email.";
                }
            break;

          

            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
     
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
     
    
    
          }
     
          return stateObj;
        });
      };
     
    
    return (
        <>
            <form className="formulario">
             
            
                <div className="form-group" >
                   
                    <input className="conten"
                    type="text"
                    name="username"
                    placeholder='Enter Username'
                    value={input.username}
                    onChange={onInputChange}
                    onBlur={validateInput}></input> 
                    
                </div>
                <div className="form-group">
                 
                    <input className="conten"
                  type="text"
                  name="email"
                  placeholder='Enter Email'
                  value={input.email}
                  onChange={onInputChange}
                  onBlur={validateInput}></input>
        
                </div>
                <div className="form-group">
                
                    <input className="conten"
                    type="password"
                    name="password"
                    placeholder='Enter Password'
                    value={input.password}
                    onChange={onInputChange}
                    onBlur={validateInput}></input>
                   
                </div>
                <div className="form-group">
               
                    <input className="conten"
                    type="password"
                    name="confirmPassword"
                    placeholder='Enter Confirm Password'
               
                    onChange={onInputChange}
                    onBlur={validateInput}
                    value={input.confirmPassword}></input>
    
                </div>
             

                  <button  className="btn" type="submit" className="btn btn-primary">Registrarse</button>
            
            </form>

        </>

    );
}

export default Formulario;