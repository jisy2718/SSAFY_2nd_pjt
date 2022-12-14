import { FC } from 'react';

const GotoCheckListSelectionButton: FC = () => {
  return (
    <button className="mouse bg-red-0 h-12 w-12 rounded-full p-0 shadow transition duration-200 ease-in focus:outline-none active:shadow-lg">
      <svg viewBox="0 0 20 20" className="inline-block h-6 w-6">
        <path
          fill="#000000"
          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
        />
      </svg>
    </button>
  );
};

export default GotoCheckListSelectionButton;
