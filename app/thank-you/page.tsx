import Link from 'next/link';
import { CheckCircle, Home, Phone, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Dwarka Expressway',
  description: 'Thank you for your inquiry. Our team will contact you shortly.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Your inquiry has been received successfully. Our real estate experts will contact you within 24 hours to assist you with your property search.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">What happens next?</h2>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                <span>Our team will review your requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                <span>You will receive a call from our property expert</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                <span>We will schedule site visits as per your convenience</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
            >
              Browse Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-gray-500 mb-2">Need immediate assistance?</p>
            <a 
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <Phone className="w-4 h-4" />
              +91 99999 99999
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
