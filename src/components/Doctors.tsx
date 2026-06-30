import React from 'react';

const doctorsList = [
  {
    name: 'Dr. Omprakash Todakari',
    specialization: 'General Physician Doctors',
    image: '/Dr cabin.png', 
  },
  {
    name: 'Dr. Omprakash Todakari',
    specialization: 'Ayurvedic General Physician',
    image: '/A.png', 
  },
  {
    name: 'Dr. Gajanan Cheke',
    qualification: '(MD Pediatrics)',
    specialization: 'Child Specialist',
  },
  {
    name: 'Dr. Madhuri Todkari',
    qualification: '(MD Ayu)',
    specialization: 'Ayurvedic Consultant & Panchkarma Specialist',
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Doctors in Bhavani Hospital</h2>

        <div className="flex flex-wrap gap-8">
          {doctorsList.map((doctor, index) => (
            <div 
              key={index}
              className={`w-full sm:w-72 group ${!doctor.image ? 'bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-center' : ''}`}
            >
              {/* Doctor Image (Conditional) */}
              {doctor.image && (
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Doctor Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                {doctor.qualification && (
                  <p className="text-primary font-medium text-sm mb-1">{doctor.qualification}</p>
                )}
                <p className="text-gray-500 text-sm">{doctor.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
