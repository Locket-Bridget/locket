import { useState } from "react";

interface ConsultationFormProps {
  serviceName: string;
}

export default function ConsultationForm({ serviceName }: ConsultationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");  // New state for Instagram handle

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit, send data somewhere

    console.log({ name, email, instagram, serviceName });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Instagram Handle (optional)"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        className="border p-2 rounded"
      />
      {/* Add your newsletter opt-in checkbox here if you want */}

      <button
        type="submit"
        className="bg-blue-800 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
