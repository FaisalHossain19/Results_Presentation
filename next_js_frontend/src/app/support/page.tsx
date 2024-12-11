"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // ShadCN button
import { Input } from "@/components/ui/input";   // ShadCN input
import { Textarea } from "@/components/ui/textarea"; // ShadCN textarea

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendEmail = () => {
        const { name, email, message } = formData;

        // Simple form validation
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        setError(null);

        // Constructing the mailto link
        const subject = encodeURIComponent("Contact Us Form Submission");
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
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
