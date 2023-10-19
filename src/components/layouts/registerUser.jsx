import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../main'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css'

function RegisterUser () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user

        if (user) {
          await addDoc(collection(db, 'users'), {
            email: user.email,
            username: '',
            joinedLobbies: []
          })

          navigate('/lobbies')
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        switch (errorCode) {
          case 'auth/email-already-in-use':
            toast.error('Email already in use')
            break
          case 'auth/weak-password':
            toast.error('Password should be at least 6 characters')
            break
          default:
            toast.error(errorMessage)
            console.log(errorMessage)
        }
      })
  }

  return (
    <section className="">
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="flex items-center justify-center mb-2">
          <img src="src\assets\rl-temp-white.png" width="240px" alt="" />
        </div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">Register</h2>
            <form onSubmit={handleSubmit}>
              <label className="label text-xs" htmlFor="email">Email</label>
              <input className="input input-bordered w-full max-w-xs" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
              <label className="label text-xs" htmlFor="password">Password</label>
              <input className="input input-bordered w-full max-w-xs" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
              <div className="flex justify-between">
                <input type="button" className="btn btn-active btn-accent mt-2" onClick={goBack} value="Back" />
                <input className="btn btn-primary mt-2" type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterUser
