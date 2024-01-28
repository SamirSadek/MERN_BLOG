import { Accordion } from "flowbite-react";
import { Avatar, Blockquote } from "flowbite-react";
import CardDemo from "../components/CardDemo";
import CardDemoTwo from "../components/CardDemoTwo";
import CardDemothree from "../components/CardDemothree";
import Ratings from "../components/Ratings";

const Home = () => {
  return (
    <div className="font-mono">
      <Accordion
        collapseAll
        className="m-5 border-0 max-w-6xl mx-auto font-mono"
      >
        <Accordion.Panel>
          <Accordion.Title className="hover:text-red-600">
            What is Flowbite?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between Flowbite and Tailwind UI?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <figure className="mx-auto max-w-4xl my-10 bg-gray-200 p-5 rounded hover:mt-[-5px] hover:bg-red-300  font-extrabold text-center ">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <p className="text-2xl  text-gray-900 dark:text-white">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <Avatar
            rounded
            size="xs"
            img="/images/people/profile-picture-5.jpg"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              Micheal Gough
            </cite>
            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO at Google
            </cite>
          </div>
        </figcaption>
      </figure>
      <div className="bg-slate-400 max-w-full py-32">
      <div className="grid grid-cols-1  lg:grid-cols-2 max-w-6xl my-10 mx-auto sm:mx-auto gap-5">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 max-w-6xl mx-auto gap-5">
        <CardDemoTwo />
        <CardDemoTwo />
        <CardDemoTwo />
        <CardDemoTwo />
        <CardDemoTwo />
      </div>
      <div className="bg-slate-400 max-w-full py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 max-w-6xl mx-auto gap-5 ">
          <CardDemothree />
          <CardDemothree />
          <CardDemothree />
          <CardDemothree />
          <CardDemothree />
          <CardDemothree />
          
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 max-w-6xl my-10 mx-auto sm:mx-auto gap-5">
        <div>
          hi
        </div>
      <div>
      <Ratings/>
      </div>
      </div>
    </div>
  );
};

export default Home;
