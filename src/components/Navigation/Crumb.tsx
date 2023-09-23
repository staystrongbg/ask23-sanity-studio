const Crumb = ({
  url,
  disabled,
  snippet,
  idx,
}: {
  url: string;
  disabled: number;
  snippet: string;
  idx: number;
}) => {
  return (
    <div>
      <span className="mr-2">/</span>{' '}
      <span className={` ${disabled === idx ? 'text-orange-900  ' : ''} `}>
        {snippet}
      </span>
    </div>
  );
};

export default Crumb;
