'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LoginPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Extract the URL search parameters directly from the window location
    const searchParams = new URLSearchParams(window.location.search);
    const success = searchParams.get('success');
    const error = searchParams.get('error');

    // Set messages based on query parameters
    if (success) {
      setMessage(decodeURIComponent(success));
    } else if (error) {
      setMessage(decodeURIComponent(error));
    }
  }, []);
  return (
    <main className="flex text-black min-h-screen flex-col h-screen items-left p-14 bg-white">
      <Link href={"/"}>
      <img src="LaSuperAgence.png" alt="icon" className="h-8" />
      </Link>
      <nav className="flex justify-end">
		<ul className="flex space-x-5 mx-auto -mt-5 mr-4" id="menu">
			<li><Link href={"tarif"}>Tarifs</Link></li>
			<li><Link href={"https://inbound.lasuperagence.com/blog"}>Blog</Link></li>
			<li><Link href={"login"}>Connexion</Link></li>
	  </ul>
		</nav>
    <div>
    <h1 className="text-4xl font-semibold text-center py-7"> Support Superia,</h1>
    <iframe src="https://websim.ai/c/LffHvg8ObYMR9tOiQ?embed=true" class="h-screen w-screen" ></iframe>
    </div>
    </main>
  );
};

export default LoginPage;