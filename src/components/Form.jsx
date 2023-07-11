import React from "react";

const Form = () => {
  return (
    <section className="bg-slate-200 container mx-auto p-10">
      <h3 className=" text-center mb-10">Ask a questions</h3>
      <form>
        <input
          className=" block mx-auto w-5/6 md:w-2/3 sm:w-1/2 p-3 rounded-lg"
          type="email"
          placeholder=" Your E-mail "
        />

        <textarea
          className=" block mx-auto w-5/6 md:w-2/3 sm:w-1/2 mt-5 p-3 rounded-lg"
          placeholder=" Write someting..."
          rows="5"></textarea>
      </form>
      <button className=" bg-indigo-600 text-white p-3 text-lg m-8 rounded-full text-center transition-all hover:bg-[#F65023]">
        Submit my think{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline-block">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>{" "}
      </button>
    </section>
  );
};

export default Form;
