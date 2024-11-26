import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold">About TestDash</h1>
                <p className="mt-2 text-lg">
                    Learn more about our mission, features, and team.
                </p>
            </header>

            {/* Content */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold">What is TestDash?</h2>
                <p className="mt-4">
                    TestDash is an enterprise platform designed to help developers analyze and visualize firmware test results efficiently.
                </p>
            </section>

            {/* Features Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold">Key Features</h2>
                <ul className="mt-4 space-y-3">
                    <li>Visualize test results with interactive charts</li>
                    <li>Analyze test performance trends over different versions</li>
                    <li>Review firmware performance over different products</li>
                </ul>
            </section>

            {/* Team Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold">Our Team</h2>
                <p className="mt-4">
                    The TestDash team is dedicated to creating powerful and user-friendly tools for firmware testing.
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-5">
                    <li>Ty Runner</li>
                    <li>Md. Faisal Hossain</li>
                    <li>Jiya Santosh Rathi</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer className="mt-16 text-center">
                <p>&copy; 2024 TestDash. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
