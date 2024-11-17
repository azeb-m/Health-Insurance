// app/plans/page.tsx
export default function PlansPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Our Health Insurance Plans
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-700">Basic Plan</h2>
          <p className="mt-2 text-gray-700">Coverage details...</p>
          <p className="mt-1 text-yellow-700">Starting at $100/month</p>
        </div>
        {/* Add more plans similarly */}
      </div>
    </div>
  );
}
