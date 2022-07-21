export default function Footer() {
  return (
    <div className="relative inset-x-0 bottom-0 w-full">
      <footer className="">
        <div className="text-white text-center p-4 bg-zinc-600 text-xl">
          Nicholas Lane © 2022
          <br />
          Built using Next.js and Tailwind css.
          <br />
          <br/>
          <a className="text-sky-600 underline"
            href="https://www.flaticon.com/free-icons/korean"
            title="korean icons"
          >
            Hobby Icons by Freepik @ Flaticon
          </a>
          <br />
          <a className="text-sky-600 underline" href="https://freeicons.io/profile/3">
            Skill Icons by icon king1 and by Pixel perfect @ freeicons.io
          </a>
        </div>
      </footer>
    </div>
  );
}
