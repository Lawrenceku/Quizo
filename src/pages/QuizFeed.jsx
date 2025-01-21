import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../utils";

const QuizFeed = () => {
  // Static quiz data
  const quizzes = [
    { id: 1, title: "Software Engineering Basics", description: "Test your knowledge of software engineering fundamentals" },
  ];

  return (
    <section className="bg-gray-100 min-h-screen">
    <Navbar />
    <div className="max-w-4xl mx-auto p-4 h-screen">
      <h1 className="text-3xl font-bold mb-6 mt-6">Public quizes</h1>
      <div className="grid gap-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
            <p className="text-gray-600 mb-4">{quiz.description}</p>
            <div className="flex justify-end">
              <Link
                to={`/quiz`}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Take Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default QuizFeed;
