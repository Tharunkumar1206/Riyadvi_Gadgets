import React from 'react';

const Form = () => {
  return (
    <section className="bg-zinc-900 py-24 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Don’t Miss Our News</h2>
      <form className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Your Email Address *"
          className="w-full sm:flex-1 p-4 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-md"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default Form;
