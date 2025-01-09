import React from 'react';

const Leaderboard = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Leaderboard</h2>
      <div className="w-full bg-white rounded-md shadow overflow-hidden">
        <table className="min-w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 font-semibold border-b">Rank</th>
              <th className="px-4 py-2 font-semibold border-b">Name</th>
              <th className="px-4 py-2 font-semibold border-b">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((player, index) => (
                <tr
                  key={player.id || index}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{player.name}</td>
                  <td className="px-4 py-2 border-b">{player.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center text-gray-500 px-4 py-6"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
