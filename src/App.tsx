import React, { useState } from 'react';
import { Video, Pill, Phone, Clock, Shield, ChevronRight, AlertCircle, Stethoscope, ChevronFirst as FirstAid } from 'lucide-react';

type PatientInfo = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  pharmacy: string;
  pharmacyAddress: string;
  chiefComplaint: string;
};

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    pharmacy: '',
    pharmacyAddress: '',
    chiefComplaint: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to backend
    console.log(patientInfo);
    alert('Thank you! A dental professional will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPatientInfo({
      ...patientInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-red-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FirstAid className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">My Live Dentists</span>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Get Emergency Care Now
            </button>
          </div>
        </nav>
      </header>

      <main>
        {!showForm ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-red-100 to-red-50 border-l-4 border-red-600 p-6 mb-12 rounded-r-lg shadow-sm">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <p className="text-red-700 font-medium text-lg">
                  Experiencing dental pain? Get immediate care from licensed dentists.
                </p>
              </div>
            </div>

            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Immediate Dental Care When You Need It Most
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with emergency dental professionals in minutes. Get prescriptions for pain relief and antibiotics sent directly to your pharmacy.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Emergency Consultation <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-50">
                <h2 className="text-2xl font-bold mb-6">Common Emergency Cases We Handle:</h2>
                <ul className="space-y-6">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <Stethoscope className="h-8 w-8 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Severe Tooth Pain</h3>
                      <p className="text-gray-600">Immediate pain management and antibiotic prescriptions if needed</p>
                    </div>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <Stethoscope className="h-8 w-8 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Dental Infections</h3>
                      <p className="text-gray-600">Quick assessment and necessary antibiotic treatment</p>
                    </div>
                  </li>
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <Stethoscope className="h-8 w-8 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Lost Fillings or Crowns</h3>
                      <p className="text-gray-600">Guidance for temporary solutions and urgent care planning</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-16">How My Live Dentists Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-50 transform transition-all duration-300 hover:-translate-y-2">
                  <Video className="h-12 w-12 text-red-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-3">1. Connect Instantly</h3>
                  <p className="text-gray-600">Join a secure video call with an emergency dental professional within minutes</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-50 transform transition-all duration-300 hover:-translate-y-2">
                  <Pill className="h-12 w-12 text-red-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-3">2. Get Treatment</h3>
                  <p className="text-gray-600">Receive prescriptions for antibiotics and pain medication sent to your pharmacy</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-50 transform transition-all duration-300 hover:-translate-y-2">
                  <Clock className="h-12 w-12 text-red-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-3">3. Follow-up Care</h3>
                  <p className="text-gray-600">Get referrals and guidance for necessary in-person treatment</p>
                </div>
              </div>
            </div>

            {/* Warning Section */}
            <div className="mb-20 bg-gradient-to-br from-red-50 to-white p-12 rounded-3xl shadow-xl border border-red-100">
              <h2 className="text-4xl font-bold text-center mb-8">Why Dental Infections Need Immediate Attention</h2>
              <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                Untreated dental infections can lead to serious health complications. Don't wait until it's too late.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                    alt="Person holding jaw in pain" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-800">Severe Pain</h3>
                    <p className="text-gray-600">
                      Dental infections can cause excruciating pain that affects your ability to eat, speak, and sleep.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=800&q=80" 
                    alt="Medical emergency concept" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-800">Spread of Infection</h3>
                    <p className="text-gray-600">
                      Without treatment, infections can spread to your jaw, neck, and other parts of your body.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1631815589968-fdb09a223b3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Medical monitoring equipment" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-800">Serious Complications</h3>
                    <p className="text-gray-600">
                      In rare cases, dental infections can lead to sepsis, a life-threatening condition requiring immediate medical attention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Emergency Care Now <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-gradient-to-br from-white to-red-50 p-12 rounded-2xl shadow-xl border border-red-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Shield className="h-16 w-16 text-red-600 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Licensed & Secure Emergency Care</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our network of emergency dental professionals is available 24/7. All consultations are protected by end-to-end encryption, and prescriptions are sent securely to your pharmacy.
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6">Why Choose My Live Dentists?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2">
                      <Clock className="h-6 w-6 text-red-600 mr-3" />
                      <span className="text-lg">24/7 availability</span>
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2">
                      <Pill className="h-6 w-6 text-red-600 mr-3" />
                      <span className="text-lg">Immediate prescription services</span>
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2">
                      <Shield className="h-6 w-6 text-red-600 mr-3" />
                      <span className="text-lg">Licensed emergency dentists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Consultation Form */
          <div className="max-w-2xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Start Your Emergency Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={patientInfo.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={patientInfo.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={patientInfo.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={patientInfo.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={patientInfo.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Pharmacy</label>
                <input
                  type="text"
                  name="pharmacy"
                  required
                  value={patientInfo.pharmacy}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pharmacy Address</label>
                <input
                  type="text"
                  name="pharmacyAddress"
                  required
                  value={patientInfo.pharmacyAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Describe your emergency dental situation
                </label>
                <textarea
                  name="chiefComplaint"
                  required
                  value={patientInfo.chiefComplaint}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                  placeholder="Please describe your symptoms, pain level, and how long you've been experiencing them..."
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Emergency Consultation
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;