import Navigation from "../navigation";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full flex px-20 space-x-14 mt-9 dark:bg-[#1F1F1F]">
      <Navigation />
      <div className="flex-1 h-full overflow-y-auto">{children}</div>
    </main>
  );
};

export default HomeLayout;
