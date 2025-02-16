import Landing from "./home/Landing/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow">
        {/* Include Landing component */}
        <Landing />
      </div>
    </div>
  );
}
