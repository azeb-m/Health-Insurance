// app/page.tsx
export default function HomePage() {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 leading-tight">
        Welcome to Our Health Insurance Company
      </h1>
      <p className="mt-4 text-2xl text-center text-gray-700">
        Choose the best plan for you and your family. We are here to provide you with comprehensive and affordable health insurance coverage.
      </p>
      <div className="mt-8">
        <ul className="list-disc list-inside text-lg text-gray-800">
          <li><span className="font-semibold text-blue-700">Affordable premiums:</span> Quality healthcare should be accessible to everyone.</li>
          <li><span className="font-semibold text-blue-700">Wide network of providers:</span> Access to a vast array of healthcare professionals.</li>
          <li><span className="font-semibold text-blue-700">Comprehensive coverage:</span> Covering your needs from regular check-ups to emergencies.</li>
        </ul>
      </div>
      <div className="mt-8 text-center">
        <a href="/plans" className="inline-block bg-yellow-500 text-blue-700 font-bold py-2 px-4 rounded shadow hover:bg-yellow-400">
          Explore Our Plans
        </a>
      </div>
    </div>
  );
}
