import backgroundImage from "../assets/samu.jpg";
import samImage from "../assets/samu1.jpg";
const About = () => {
  return (
    <div className="min-h-screen relative bg-center py-20 sm:px-20 px-0" id="about">
      <div className="container text-white mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-gray-500">Meet the</span>
              <span className="gradient-text font-caveat block">
                {" "}
                Artist ✨
              </span>
            </h2>

            <div className="space-y-6 text-white text-lg text-gray-600 leading-relaxed">
              <p>
                Hey there! 👋 I'm a passionate creator who believes that art has
                the power to capture emotions, tell stories, and create lasting
                memories.
              </p>

              <p>
                From whimsical illustrations that spark joy to heartfelt
                portraits that preserve precious moments, I pour my soul into
                every single piece. Whether it's a custom gift for someone
                special or a personal artwork that speaks to your heart, I'm
                here to bring your vision to life.
              </p>

              <p>
                My style blends modern aesthetics with a touch of dreamy magic
                ✨ Because life's too short for boring art!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-6 py-3 rounded-full font-semibold">
                🎨 Digital Art
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full font-semibold">
                ✏️ Custom Portraits
              </span>
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full font-semibold">
                🎁 Gift Design
              </span>
            </div>
          </div>

          <div className="relative">
            <div className=" rounded-3xl p-8 ">
              <div className=" rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 overflow-hidden rounded-2xl bg-cover">
                  <img className="w-full h-full object-cover" src={samImage} />
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-gray-400 mb-2">
                  Creating Magic Since 2020
                </p>
                <p className="text-gray-400">500+ Happy Clients Worldwide 🌍</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-300 rounded-full opacity-60 float-animation"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-60 float-animation"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
