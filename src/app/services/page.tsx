import Link from "next/link";
import { services } from "./servicesData";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-[rgb(219,234,254)]">
      <div className="bg-[#fff8ea] border-4 border-blue-800 rounded-xl shadow-lg p-8 md:p-12 max-w-6xl w-full flex flex-col text-center text-blue-800">
        <h1 className="text-4xl font-locket-header mb-6 text-blue-900">Our Services</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Everything you need to secure, recover, or reboot your online presence. Choose a service that fits your situation best.
        </p>

        <div className="flex flex-row gap-6 justify-center flex-wrap">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="bg-white border border-blue-800 rounded-lg p-6 shadow-sm flex-1 min-w-[250px] max-w-xs flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2">{svc.name}</h2>
              <p className="text-sm mb-4">{svc.tagline}</p>
              <Link
                href={`/services/${svc.slug}`}
                className="inline-block px-5 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition self-center"
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

