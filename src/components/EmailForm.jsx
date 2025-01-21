
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const PROJECT_URL = import.meta.env.VITE_PROJECT_URL;
const ANON_KEY = import.meta.env.VITE_ANON_KEY;
const supabase = createClient(PROJECT_URL, ANON_KEY);

export default function EmailForm({setSuccessMessage}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const email = formData.get("email");
  
    try {
      // Check if the email already exists in the database
      const { data: existingEmails, error: queryError } = await supabase
        .from('emails')
        .select('*')
        .eq('email', email);
  
      if (queryError) {
        console.error("Error querying the database:", queryError);
        return;
      }
  
      if (existingEmails.length > 0) {
        // Email already exists
        setSuccessMessage("Email is already subscribed!");
        return;
      }
  
      // Insert the email into the database
      const { data, error } = await supabase
        .from('emails')
        .insert([{ email: email }])
        .select();
  
      if (error) {
        console.error("Error inserting email:", error);
      } else {
        setSuccessMessage("Email subscribed successfully!");
      }
  
      console.log(data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="mt-8 sm:flex flex md:flex-row flex-col items-center justify-center">
      <input
        type="email"
        name="email"
        required
        className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="mt-3 w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
      >
        Notify me
      </button>
      
    </form>
  );
}
