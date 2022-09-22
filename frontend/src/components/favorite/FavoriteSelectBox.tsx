import { FC, useState, useEffect } from 'react';
import FavoriteCard from './FavoriteCard';
import GotoSelectionButton from './GotoSelection';
import { useNavigate } from 'react-router-dom'
interface SelectBoxProps {
  optionList: string[];
}

const businessData: { [key: string]: string } = {
  m: '대형마트',
  s: '슈퍼마켓',
  o: '온라인',
};

const EmptySelectBox: FC<SelectBoxProps> = props => {
  const navigate = useNavigate();

  const optionList = ['m', 's', 'o'];
  const [optionState, setOption] = useState<string>('m');
  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value)
  };

  return (
    <>
      <select
        onChange={handleSelection}
        // 여기 props 로 받아와야함.
        // defaultValue="m"
        name="selectBox"
        className="form-select form-select-sm
    m-3
    block
    max-w-[25vw]
    rounded
    border
    border-solid
    border-gray-300
    bg-white bg-clip-padding bg-no-repeat
    px-2 py-1 text-xs
    font-normal
    text-gray-700
    transition
    ease-in-out
    focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
        aria-label=".form-select-sm example"
      >
        {optionList.map((option, index) => (
          <option value={option} key={index}>
            {businessData[option]}
          </option>
        ))}
      </select>
      <div className="flex w-full flex-col items-center justify-center p-0">
        <FavoriteCard
          img={'img'}
          goodsName={businessData[optionState]}
          priceGap={0}
          goodsPrice={0}
        />
        <FavoriteCard img={'img'} goodsName={'고양이'} priceGap={0} goodsPrice={0} />
        <FavoriteCard img={'img'} goodsName={'사자'} priceGap={0} goodsPrice={0} />
        <FavoriteCard img={'img'} goodsName={'호랑이'} priceGap={0} goodsPrice={0} />
        <div onClick={()=>{navigate('/favorite/selection')}}>
        <GotoSelectionButton />
        </div>
      </div>
    </>
  );
};

export default EmptySelectBox;
