import './App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {

  const handleClickLogin = (values) => console.log
  
  const validationLogin = yup.object().shape({
    email: yup 
    .string()
    .email("Não é Email")
    .required("Este campo é obrogatório"),
    password : yup
    .string()
    .min(8)
    .required("Este campo é obrigatório"),
  });


  return (
    <div className="container">
     <h1>Login</h1>
     <Formik initialValues={{}}
     onSubmit = {handleClickLogin}
     validationSchema = {validationLogin}
     >
        <Form className = 'login-form'>
          <div className = 'login-form-group'>
            <Field name = 'email' className = 'form-field'
            placeHolder="Email"/>

            <ErrorMessage
            component = 'Span'
            name = 'email'
            className = 'form-error'
            />
         </div> 
         
         <div className = 'login-form-group'>
            <Field name = 'password' className = 'form-field'
            placeHolder="Senha"/>

            <ErrorMessage
            component = 'Span'
            name = 'password'
            className = 'form-error'
            />
         </div>

         <button 
         className = 'button'
         type = 'submit'
         >
           Login
         </button>
       </Form>   
      </Formik>
    </div>
  );
}

export default App;
