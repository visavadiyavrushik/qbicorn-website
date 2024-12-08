'use client';
import CommonButton from '@/components/CommonButton/CommonButton';
import ContactCard from '@/components/ContactCard/ContactCard';
import Image from 'next/image';
import { useState } from 'react';

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted: ', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="mt-[100px] lg:mt-[200px] ">
      <div className="container mx-auto px-5  xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <div className="h-full">
            <div className="mb-[35px]  2xl:mb-[75px]">
              <div className="bg-[#131313] max-w-[200px] rounded-[130px] border border-[#FFF] mb-7 px-5 py-3 flex items-center justify-center text-[18px] sm:text-[20px]">
                <Image
                  src="/assets/svg/phone.svg"
                  alt="Contact Us"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <p>Contact Us</p>
              </div>
              <h2 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[43px] font-medium">
                Get in Touch with Us
              </h2>
              <p className="text-[#606060] text-[20px] mt-3 2xl:mt-4">
                Do you have a question? Contact us directly
              </p>
            </div>

            {/* Contact Cards */}
            <ContactCard
              iconSrc="/assets/svg/message.svg"
              title="You can email us here"
              description="hello@qbicorn.me"
              onClick={() => (window.location.href = 'mailto:hello@qbicorn.me')}
            />
            <ContactCard
              iconSrc="/assets/svg/contactphone.svg"
              title="Or give us a call"
              description="Book a Call"
              onClick={() => {}}
            />
            <ContactCard
              iconSrc="/assets/svg/location.svg"
              title="Locations"
              description="Get Directions"
              classname="mb-0"
              onClick={() => {}}
            />
          </div>

          {/* Right Section */}
          <div className="h-full">
            <div className="bg-[#191919] p-8 2xl:p-12 rounded-3xl h-full">
              <div className="mb-6">
                <h4 className="text-[21px] font-medium">Send Us a Message</h4>
                <p className="text-[18px] sm:text-[20px] font-normal text-[#666]">
                  Use our convenient contact form to reach out with questions,
                  feedback, or collaboration inquiries.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-[#131313] text-white border border-[#333]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-[#131313] text-white border border-[#333]"
                    required
                  />
                </div>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-[#131313] text-white border border-[#333]"
                  required
                />
                <CommonButton className="w-full">Send Message</CommonButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
