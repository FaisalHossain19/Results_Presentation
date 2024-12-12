"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // ShadCN button
import { Input } from "@/components/ui/input";   // ShadCN input
import { Textarea } from "@/components/ui/textarea"; // ShadCN textarea
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init("ROH5YxC5KNX_1s094");
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSendEmail = async (e: React.FormEvent) => {

        e.preventDefault();
        const { name, email, message } = formData;

        // Simple form validation
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        setError(null);

        setLoading(true);

        const serviceId = "test_dash";
        const templateId = "template_wqj7t1y";
        try {
            await emailjs.send(serviceId, templateId, {
                name: name,
                recipient: email,
                message: message,
            });
            alert("Email successfully sent! Check your inbox.");
            setFormData({ name: "", email: "", message: "" }); // Reset the form
        } catch (error) {
            console.error("Failed to send email:", error);
            setError("Failed to send the email. Please try again.");
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            {/* Main Title */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-lg text-gray-600">
                    We&apos;d love to hear from you! Fill out the form below.
                </p>
            </header>

            {/* Form Section */}
            <section className="space-y-6">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                {/* Error Display */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Send Button */}
                <div className="text-center">
                    <Button onClick={handleSendEmail} className="bg-gradient-to-r from-sky-400 to-blue-500">
                        Send
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
