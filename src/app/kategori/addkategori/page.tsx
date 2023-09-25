"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const addkategori = () => {
  const [username, setUsername] = useState("")
  const [nama_kategori, setNamakategori] = useState("")
  const [budget, setBudget] = useState("")
  const [id_kategori, setId] = useState("") // This will be a string initially
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    // Convert id_kategori to a number
    const id_kategoriNumber = parseInt(id_kategori, 10); // Assuming it's an integer
    const budgetNumber = parseInt(budget, 10); // Assuming it's an integer
    
    try {
      const res = await fetch("/api/kategoris", {
        body: JSON.stringify({
          nama_kategori,
          budget: budgetNumber,
          id_kategori: id_kategoriNumber, // Use the converted number here
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
  
      if (res.ok) {
        // Handle success
        console.log("Request successful");
      } else {
        // Handle non-successful response
        console.error("Request failed:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    setIsLoading(false);
    router.push("/kategori");
  };

  return (
    <div className="container py-5 px-5 m-5 w-50 mx-auto text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" value={username}  id="form5Example12" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <input  onChange={(e) => setId(e.target.value)} placeholder="budget" type="number" value={id_kategori} id="form5Example22" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <input  onChange={(e) => setBudget(e.target.value)} placeholder="budget" type="number" value={budget} id="form5Example22" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <input  onChange={(e) => setNamakategori(e.target.value)} placeholder="nama kategori" type="text" value={nama_kategori} id="form5Example2" className="form-control" />
        </div>
        <button disabled={isLoading} type="submit" className="btn btn-primary">{isLoading ? "Loading..." : "Submit Kategori"}</button>
      </form>
    </div>
  )
}

export default addkategori
