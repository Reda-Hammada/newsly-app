import Button from "./Button";

function HeroSection() {
  return (
    <section className="w-full mt-28">
      <div className="w-[32%] pb-6 mr-auto ml-auto border-b-8 border-solid border-red-500 ">
        <h1 className="main-text-color text-center font-bold text-3xl">
          GET INFROMED
          <br />
          READ WORLDWIDE NEWS FROM ONE PLACE
        </h1>
      </div>
      <div className="w-full text-center mt-12">
        <Button
          bgColor="red-500"
          text="Get started"
          bgColorHover="red-600"
          textColor="text-white"
        />
      </div>
    </section>
  );
}

export default HeroSection;
