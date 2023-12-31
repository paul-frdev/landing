import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from '../ui/Button'

type Inputs = {
  email: string
}


export const ContactForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("email")) // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='Enter Your Email Address'
        className={errors.email && 'errors'}
        {...register("email", {
          required: 'This field is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
      />
      {errors.email && <span className='errors'>This field is required</span>}
      <Button type="submit" onClick={() => { }}>Get the Hottest offers</Button>
    </form>
  )
}
