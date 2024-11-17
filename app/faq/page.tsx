// app/faq/page.tsx
export default function FAQPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-green-700">
            What does the basic plan cover?
          </h2>
          <p className="mt-2 text-gray-700">Coverage details...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700">
            Are pre-existing conditions covered?
          </h2>
          <p className="mt-2 text-gray-700">Coverage details...</p>
        </div>
      </div>
    </div>
  );
}
