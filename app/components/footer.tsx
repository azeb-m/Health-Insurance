// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Health Insurance Co. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="#" className="hover:text-yellow-500">
            Social Media
          </a>
        </p>
      </div>
    </footer>
  );
}
