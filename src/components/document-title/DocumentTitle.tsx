import { useState, useEffect } from 'react';

const DocumentTitle = () => {
  const [title, setTitle] = useState('🎂 Lambdas');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const titles = [
      '🚀 Lambdas',
      '🌟 Lambdas',
      '🎉 Lambdas',
      '🎊 Lambdas',
    ];

    const intervalId = setInterval(() => {
      setTitle(titles[index]);
      setIndex((index + 1) % titles.length);
    }, 700);

    document.title = title;

    return () => clearInterval(intervalId);
  }, [index, title]);

  return null;
};

export default DocumentTitle;