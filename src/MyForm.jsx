import React, { useState } from 'react';

function SimpleForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last Name is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="pace-y-4" id="myForm">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                 <div class="flex-1">
                    <label className="block mb-1 text-gray-100">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className={`w-full p-2 rounded-md border ${
                        errors.firstName ? 'border-red-500' : 'border-gray-600'
                        }`}
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                 </div>

                  <div>
                        <label className="block mb-1 text-gray-100">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className={`w-full p-2 rounded-md border ${
                            errors.lastName ? 'border-red-500' : 'border-gray-600'
                            }`}
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
            </div>
 
                <div>
                        <label for="i-want-to" className="block text-sm font-medium text-gray-400">I Want to</label>
                        <select id="i-want-to" name="i-want-to" className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500">
                            <option>Buy Property</option>
                            <option>Sell Property</option>
                            <option>Rent Property</option>
                        </select>
                 </div>
                 
                 <div>
                    <label for="notes" className="block text-sm font-medium text-gray-400">Notes</label>
                    <textarea id="notes" name="notes" rows="6" className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder=""></textarea>
                </div>


                 <div>
                    <button type="submit" class="mt-3 w-auto px-6 py-2 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition duration-300">Submit</button>
                 </div>
      
     
         </form>
    
      
      </>
  );
}

export default SimpleForm;
