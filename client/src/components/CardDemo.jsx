import { Card } from 'flowbite-react';

const CardDemo = () => {
    return (
        <Card className="max-w-sm mx-auto hover:bg-slate-400" imgSrc="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    );
};

export default CardDemo;