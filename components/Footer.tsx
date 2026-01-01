
import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-secondary/50 mt-20 py-8">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-text-muted">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" aria-label="GitHub Profile" className="hover:text-accent transition-colors">
                        <GithubIcon />
                    </a>
                    <a href="#" aria-label="LinkedIn Profile" className="hover:text-accent transition-colors">
                        <LinkedinIcon />
                    </a>
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} Surya Vamsi Karaka. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
