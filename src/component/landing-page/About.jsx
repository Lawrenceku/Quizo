const AboutSection = () => {
    return (
      <section id="about" className="py-16 pb-32">
        <div className="container mx-auto ">
          <p className="mb-4 text-center font-bold text-2xl text-green-800">
            About Quizo
          </p>
          <img className="w-80 mx-auto" src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1736426683~exp=1736430283~hmac=bdd1086496aca08dd7ef81e034cedcf47be70f812a45d64fe6ba6362f11512a3&w=826" alt="" />
          <p className="mx-auto px-8 md:px-0 max-w-3xl">
          Quizo is an innovative quiz application that brings competitiveness and fun to 
          learning and assessments. Perfect for educational purposes, recruitment, or entertainment, 
          Quizo allows users to create and share quizzes while tracking top performers through a dynamic 
          leaderboard. With its interactive and engaging features, Quizo transforms the way you experience quizzes.          
          <br/>Quizo isn’t just an app, it’s a community. Our goal is to bring learning to life through the power of play and competition. Whether you're a student preparing for exams, a teacher looking for an engaging classroom tool, or an HR manager creating team-building activities, Quizo is your perfect partner.
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutSection;