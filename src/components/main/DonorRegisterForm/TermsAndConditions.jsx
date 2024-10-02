import React from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Terms and Conditions</h1>
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
              <p>
                Welcome to our blood donation platform. By accessing or using our services, you agree to be bound by these terms and conditions.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-2">2. Eligibility</h2>
              <p>
                To become a blood donor, you must be at least 18 years old and meet the health requirements set by our organization.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-2">3. Donor Responsibilities</h2>
              <p>
                As a donor, you agree to provide accurate and truthful information about your health and donation history. You also agree to follow the guidelines provided by our organization.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-2">4. Privacy</h2>
              <p>
                We are committed to protecting your privacy. Your personal information will be used solely for the purpose of facilitating blood donations and will not be shared with third parties without your consent.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-2">5. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated terms.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-2">6. Contact Us</h2>
              <p>
                If you have any questions or concerns about these terms and conditions, please contact us at support@example.com.
              </p>
            </section>
          </div>
          <div className='flex justify-center items-center mt-3'>
          <Button type="submit" className="w-full lg:w-48 mt-2" >
              <Link href="/donor/register">Back Register Page</Link>
            </Button>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default TermsAndConditions;
