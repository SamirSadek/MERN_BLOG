import { Card } from 'flowbite-react';

const CardDemothree = () => {
    return (
        <Card
      className="max-w-sm mx-auto"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlt4llssu9pARSQB9zRT4T-H1evB4azhUQA&usqp=CAU"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    );
};

export default CardDemothree;