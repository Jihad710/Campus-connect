

import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const College = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCollegeId, setSelectedCollegeId] = useState(null);

  useEffect(() => {
    // Fetch data from the server
    fetch('https://campus-connect-server-eta.vercel.app/college')
      .then(res => res.json())
      .then(data => {
        setColleges(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleDetailsClick = (collegeId) => {
    setSelectedCollegeId(prevId => prevId === collegeId ? null : collegeId);
  };

  const handleApplyNowClick = (collegeId) => {
    console.log(`Apply Now clicked for college with ID: ${collegeId}`);
    // You can add logic to handle the "Apply Now" button click here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (colleges.length === 0) {
    return <div>No colleges found.</div>;
  }

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
          {colleges.map((college) => (
            <Fade cascade key={college._id}>
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  college.seats === 0 ? 'opacity-50' : ''
                }`}
              >
                <img className="h-64 w-full object-cover" src={college.image} alt={college.name} />
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold">{college.name}</h2>
                  {selectedCollegeId === college._id ? (
                    <div>
                      <p className="mb-2"><span className="font-bold">Admission Date:</span> {college.admission_date}</p>
                      <p className="mb-2"><span className="font-bold">Events:</span> {college.events.join(', ')}</p>
                      <p className="mb-2"><span className="font-bold">Research Areas:</span> {college.research.join(', ')}</p>
                      <p className="mb-2"><span className="font-bold">Sports: </span>{college.sports.join(', ')}</p>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
                        onClick={() => handleDetailsClick(college._id)}
                      >
                        Hide Details
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
                        onClick={() => handleApplyNowClick(college._id)}
                      >
                        Apply Now
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-2"><span className="font-bold">Admission Date:</span> {college.admission_date}</p>
                      <p className="mb-2"><span className="font-bold">Events:</span> {college.events.join(', ')}</p>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
                        onClick={() => handleDetailsClick(college._id)}
                      >
                        Details
                      </button>
                      <Link to="/admission">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
                          onClick={() => handleApplyNowClick(college._id)}
                        >
                          Admission
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
