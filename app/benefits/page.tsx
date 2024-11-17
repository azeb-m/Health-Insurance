// app/benefits/page.tsx
export default function BenefitsPage() {
  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 leading-tight">
        Plan Benefits
      </h1>
      <ul className="mt-8 list-disc list-inside space-y-6 text-lg text-gray-800">
        <li>
          <span className="font-semibold text-blue-700">
            Hospital Coverage:
          </span>
          Our plans cover a wide range of hospital services, ensuring you get
          the care you need without the financial stress.
        </li>
        <li>
          <span className="font-semibold text-blue-700">
            Prescription Discounts:
          </span>
          Save on your medications with our comprehensive prescription discount
          program, making your healthcare more affordable.
        </li>
        <li>
          <span className="font-semibold text-blue-700">
            Annual Health Check-ups:
          </span>
          Stay on top of your health with regular check-ups that are covered
          under our plans, promoting preventive care and early detection.
        </li>
      </ul>
      <div className="mt-8 text-center">
        <a
          href="/contact"
          className="inline-block bg-yellow-500 text-blue-700 font-bold py-2 px-4 rounded shadow hover:bg-yellow-400"
        >
          Contact Us for More Information
        </a>
      </div>
    </div>
  );
}
