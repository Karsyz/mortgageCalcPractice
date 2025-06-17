import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface FetchedData {
  msg: number;
  data: string[];
}

interface ErrorResponse {
  message: string;
}

const Index = () => {
  const [fetchedData, setFetchedData] = useState<FetchedData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      // Replace with your backend API endpoint
      const response = await axios.get<FetchedData>(
        'https://backendfunctions.up.railway.app/'
      );
      setFetchedData(response.data);
      setLoading(false);
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      setError(
        axiosError.response?.data?.message || 'Failed to fetch user data'
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Render error state

  return (
    <div className="p-10 flex flex-col gap-10">
      <h1 className="font-bold text-blue-500 text-3xl">Happy Coding!</h1>
      <div className="bg-amber-300 rounded-md p-8 flex flex-col gap-3">
        <h3 className="font-bold  text-slate-700 text-2xl">Moar Headline!</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          necessitatibus. Eius esse dolorem placeat? Fugit dicta eaque quam
          pariatur tempore ipsam optio nobis consectetur quod commodi, sit illum
          ab illo rem, debitis architecto quas? Unde dignissimos esse pariatur
          quia animi.
        </p>

        {error ? (
          <div className="flex justify-center items-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Some Text from BackendFunctions
            </h1>
            <div className="space-y-2">
              <p className="text-gray-600">
                {loading ? 'Loading...' : fetchedData?.msg}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {fetchedData?.data?.map((line) => {
                  return (
                    <li className="flex items-start">
                      <span className="min-w-2 min-h-2 w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      {line}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
