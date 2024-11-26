"use client";

const SupportPage = () => {
    const handleContactClick = () => {
        window.location.href = "mailto:support@domain.com";
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold">Support</h1>
                <p className="mt-2 text-lg">
                    Need help? We're here to assist you!
                </p>
            </header>

            {/* FAQ Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                <ul className="mt-4 space-y-3">
                    <li><strong>How do I contact support?</strong> You can reach us by email, using the "Contact Us" button below.</li>
                    <li><strong>Where can I find documentation?</strong> You can find our documentation in the "Resources" section of our website.</li>
                    <li><strong>What is your refund policy?</strong> For refund inquiries, please refer to the "Refunds" section on our website.</li>
                </ul>
            </section>

            {/* Contact Us Section */}
            <section className="mb-12 text-center">
                <h2 className="text-2xl font-semibold">Need More Help?</h2>
                <p className="mt-4">
                    If you have any other questions, feel free to reach out to our team.
                </p>
                <button
                    onClick={handleContactClick}
                    className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                    Contact Us
                </button>
            </section>

            {/* Footer Section */}
            <footer className="mt-16 text-center">
                <p>&copy; 2024 TestDash. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SupportPage;
