import { useState } from 'react';

function RequestDemoForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-5 rounded-xl shadow-2xl bg-white text-primary">
      <h2 className="text-2xl font-medium mb-4 text-primary">Request a Demo</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="block text-slate-800 text-sm font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input w-full border-b p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-800 text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-full border-b p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-slate-800 text-sm font-medium mb-1">Company</label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input w-full border-b p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-slate-800 text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input w-full border-b p-1"
            required
          />
        </div>
        <button type="submit" className="btn bg-white border border-primary text-primary font-medium py-2 px-4 rounded hover:bg-primary hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RequestDemoForm;
