import Link from "next/link";
import { services } from "./servicesData";




export default function ServicesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 w-full max-w-6xl text-center border-4 border-blue-800">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="flex-1 bg-white rounded-lg shadow-md p-8 border border-blue-800 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">{svc.name}</h2>
                <p>{svc.tagline}</p>
              </div>

              <Link
                href={`/services/${svc.slug}`}
                className="mt-6 px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition"
              >
                Get&nbsp;Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
