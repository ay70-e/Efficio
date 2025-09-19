import React from "react";
import Navbar from "../components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#FAFAD2] min-h-screen flex flex-col">
      
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-0">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left side: Title + Desc */}
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Contact Us</h1>
            <p className="text-xl font-medium text-gray-700 mb-0">
              If you face any issues, contact us via email or phone.
            </p>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center">
            <img
              src="..\imges\IllustrationTeamWork.svg"
              alt="Team working"
              className="w-full max-w-[450px] h-auto"
            />
          </div>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Email Card */}
          <Card className="shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-95">
            <CardHeader className="flex flex-col items-center gap-3 text-center">
              <div className="bg-pink-200 p-3 rounded-full">
                <Mail className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                If you face any problem, send us an email.
              </p>
              <a
                href="mailto:support@officio.com"
                className="inline-block bg-yellow-200 text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
              >
                support@officio.com
              </a>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-95">
            <CardHeader className="flex flex-col items-center gap-3 text-center">
              <div className="bg-green-200 p-3 rounded-full">
                <Phone className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle>Call</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                If your issue is urgent, please call us.
              </p>
              <a
                href="tel:+9647xxxxxxxxx"
                className="inline-block bg-yellow-200 text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
              >
                +964 7xx xxx xxxx
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;


