import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mt-4 mb-4">
            Page Not Found
          </h2>
          <p className="text-secondary-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Go to Homepage (EN)
            </Link>
            <Link
              href="/fr"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Aller à l&apos;accueil (FR)
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
