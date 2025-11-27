import banner from "@/assets/Banner.png";

const Hero = () => {
  return (
    <section className="w-full h-[60vh] overflow-hidden">
      <img
        src={banner}
        alt="Banner Passoia"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Hero;
