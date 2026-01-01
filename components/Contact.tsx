
import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import SectionWrapper from './SectionWrapper';
import { MailIcon, LinkedinIcon, PhoneIcon } from './icons/ContactIcons';

const Contact: React.FC = () => {
    const sectionRef = useFadeIn();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        let tempErrors = { name: '', email: '', message: '' };
        let isValid = true;
        if (!formData.name) {
            tempErrors.name = 'Name is required.';
            isValid = false;
        }
        if (!formData.email) {
            tempErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is not valid.';
            isValid = false;
        }
        if (!formData.message) {
            tempErrors.message = 'Message is required.';
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Here you would typically send the form data to a backend service
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <SectionWrapper id="contact" title="Get In Touch" ref={sectionRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <p className="text-text-muted">
                        I'm currently open to new opportunities. Feel free to reach out via email, phone, or the contact form. I'll get back to you as soon as possible.
                    </p>
                    <a href="mailto:ipsvamsi57@gmail.com" className="flex items-center text-text-muted hover:text-accent transition-colors">
                        <MailIcon /> <span className="ml-3">ipsvamsi57@gmail.com</span>
                    </a>
                    <a href="tel:+917997025735" className="flex items-center text-text-muted hover:text-accent transition-colors">
                        <PhoneIcon /> <span className="ml-3">+91 7997025735</span>
                    </a>
                    <a href="#" className="flex items-center text-text-muted hover:text-accent transition-colors">
                        <LinkedinIcon /> <span className="ml-3">LinkedIn Profile</span>
                    </a>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`w-full bg-bg-secondary border ${errors.name ? 'border-red-500' : 'border-slate-700'} rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent`} />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`w-full bg-bg-secondary border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent`} />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} className={`w-full bg-bg-secondary border ${errors.message ? 'border-red-500' : 'border-slate-700'} rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent`}></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-accent text-bg-secondary font-bold py-3 px-6 rounded-md hover:bg-accent/90 transition-colors">Send Message</button>
                    {isSubmitted && <p className="text-green-400 mt-2 text-center">Thank you! Your message has been sent.</p>}
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
