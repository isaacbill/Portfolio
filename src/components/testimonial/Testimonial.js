import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { quote } from '../../assets';
import { db, storage, ref, uploadBytes, getDownloadURL, collection, addDoc, getDocs } from '../../components/firebase/Firebase';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-full text-xl text-gray-400 flex justify-center items-center absolute top-1/2 right-2 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-full text-xl text-gray-400 flex justify-center items-center absolute top-1/2 left-2 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const TestimonialsComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    company: '',
    feedback: '',
    project: '',
    date: '',
    rating: 0,
    img: null,
  });
  const [dotActive, setDotActive] = React.useState(0);

  const currentDate = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imgUrl = '';
      if (form.img) {
        const imageRef = ref(storage, `images/${form.img.name}`);
        await uploadBytes(imageRef, form.img);
        imgUrl = await getDownloadURL(imageRef);
      }

      const newTestimonial = {
        ...form,
        id: Date.now(),
        img: imgUrl,
      };

      await addDoc(collection(db, 'testimonials'), newTestimonial);
      setForm({
        name: '',
        title: '',
        company: '',
        feedback: '',
        project: '',
        date: '',
        rating: 0,
        img: null,
      });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
    setFormSubmitted(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div style={{ borderRadius: '10px', padding: '10px' }}>
        <ul style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? { width: '12px', height: '12px', background: '#ff014f', borderRadius: '50%', cursor: 'pointer' }
            : { width: '12px', height: '12px', background: 'gray', borderRadius: '50%', cursor: 'pointer' }
        }
      />
    ),
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'));
        const testimonialsData = querySnapshot.docs.map((doc) => doc.data());
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const projects = [
    { id: '1', title: '3-BEDROOM BUNGALOW' },
    { id: '2', title: 'PROPOSED 3-BEDROOM BUNGALOW' },
    { id: '3', title: '3 BEDROOM COMPLETE PROJECT' },
    { id: '4', title: 'SPACIOUS 3 BEROOM HIDDED ROOF BUNGALOW' },
    { id: '5', title: '4 BEDROOM BUNGALOW' },
    { id: '6', title: 'CONCEPT UPCOMINGT' },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-10">
        <h2 className="text-2xl font-bold text-center mb-6">Submit Your Testimonial</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne"
        >
          {/* Form Fields */}
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Company */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Feedback */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="feedback">Feedback</label>
            <textarea
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          {/* Project */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="project">Project</label>
            <select
              name="project"
              value={form.project}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.title}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>
          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min={currentDate}
              max={currentDate}
            />
          </div>
          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="rating">Rating</label>
            <input
              type="number"
              name="rating"
              value={form.rating}
              onChange={handleChange}
              min="0"
              max="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Image */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="img">Upload Image</label>
            <input
              type="file"
              name="img"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
          {formSubmitted && (
        <div className="mt-4 text-green-500 font-bold">
          Success! Your testimonial has been submitted.
        </div>
      )}
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-4">WHAT CLIENTS SAY</h2>
        <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
        {testimonials.length > 0 ? (
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                  <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                    <img
                      className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                      src={testimonial.img}
                      alt={`testimonial-${testimonial.id}`}
                    />
                    <div className="w-full flex flex-col justify-end">
                      <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                        {testimonial.company}
                      </p>
                      <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                      <p className="text-base tracking-wide text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                    <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                    <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                      <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                        <div>
                          <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                            {testimonial.project}
                          </h3>
                          <p className="text-base text-gray-400 mt-3">
                            {new Date(testimonial.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-yellow-500 flex gap-1">
                          {[...Array(5)].map((star, index) => (
                            <RiStarFill
                              key={index}
                              className={index < testimonial.rating ? "text-yellow-500" : "text-gray-400"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No testimonials available.</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialsComponent;
