import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle form submission logic here (e.g., send data to API)
      console.log('Form Data:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission Error:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      rating: 0,
      comments: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-blue-400">Feedback Form</h2>
            
            <div className="form-group">
              <label className="block text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              />
            </div>

            <div className="form-group">
              <label className="block text-gray-300 mb-2">Rating</label>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <span 
                    key={star} 
                    onClick={() => handleRatingChange(star)}
                    className={`text-2xl cursor-pointer ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-500'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="block text-gray-300 mb-2">Comments</label>
              <textarea 
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 text-white rounded h-24"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">We appreciate your feedback.</p>
            <button 
              onClick={resetForm}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Another Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
