import React from 'react';

const doctorsList = [
  {
    name: 'Dr. Omprakash Todakari',
    specialization: 'General Physician Doctors',
    image: '/dr_omprakash_todakari.jpeg', 
  },
  {
    name: 'Dr. Ashwini Todakari',
    specialization: 'Ayurvedic General Physician',
    image: '/dr_ashwini_todakari.jpeg', 
  },
  {
    name: 'Dr. Gajanan Cheke',
    qualification: '(MD Pediatrics)',
    specialization: 'Child Specialist',
    image: '/dr_cheke_dummy.png',
  },
  {
    name: 'Dr. Madhuri Todkari',
    qualification: '(MD Ayu)',
    specialization: 'Ayurvedic Consultant & Panchkarma Specialist',
    image: '/dr_todkari_dummy.png',
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Doctors in Bhavani Hospital</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsList.map((doctor, index) => (
            <div 
              key={index}
              className={`w-full group ${!doctor.image ? 'bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-center' : ''}`}
            >
              {/* Doctor Image (Conditional) */}
              {doctor.image && (
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0d47a1&color=fff&size=512`;
                    }}
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
