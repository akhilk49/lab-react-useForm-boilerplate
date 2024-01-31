import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitted } } = useForm();


    const handleSubmitForm = (data) => {
        console.log(data)
    }


    console.log(isSubmitSuccessful)

    return (
        <>
            <div className="parent-container">
                <form onSubmit={handleSubmit(handleSubmitForm)}>

                    { isSubmitSuccessful && <p>Registration is Successful!</p>}

                    <label htmlFor="firstname">enter firstname : </label>
                    <input type="text" placeholder="firstname"
                        {...register("firstname", {
                            required: "firstname is required"
                        })}
                    />
                    {errors.firstname && <p>{errors.firstname.message}</p>}
                        <br />
                    <label htmlFor="lastname">enter lastname : </label>
                    <input type="text" placeholder="lastname"
                        {...register("lastname", {
                            required: "lastname is required"
                        })}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                    <br />
                    <label htmlFor="email">enter email : </label>
                    <input type="email" placeholder="enter email"
                        {...register("email", {
                            required: "email is required",
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,}/,
                                message: "should have a character or Number. Missing '@', '.' symbol."
                            }
                        })}

                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <br />
                    <label htmlFor="password">enter password : </label>
                    <input type="password" placeholder="enter password"
                        {...register("password", {
                            required: "password is required",
                            minLength: {
                                value: 5,
                                message: "minimum length should be 5 or more than that"
                            },
                            pattern: {
                                value : /[a-z]+[0-9]+[A-Z]+[@#$%&]/, //add your own expression
                                message: "should have atleast one capital letter. should have atleast one number. should have atleast one special character"
                            }
                        })}

                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <br />
                    <input type="submit" id="submit" value={"Register"} />
                </form>
            </div>

        </>
    )
}

export default Form;