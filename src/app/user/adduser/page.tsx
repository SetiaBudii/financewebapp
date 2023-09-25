"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"


const addUser = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    const res = await fetch("/api/users", {
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    })

    setIsLoading(false)
    router.push("/user")
  }

  return (
    <div className="container py-5 px-5 m-5 w-50 mx-auto text-center">
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" value={username}  id="form5Example1" className="form-control" />
      </div>
      <div className="form-outline mb-4">
        <input  onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} id="form5Example2" className="form-control" />
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="form5Example3" checked />
        <label className="form-check-label" htmlFor="form5Example3">
          I have read and agree to the terms
        </label>
      </div>
      <button disabled={isLoading} type="submit" className="btn btn-primary">{isLoading ? "Loading..." : "Register"}</button>
    </form>
  </div>
  )
}

export default addUser