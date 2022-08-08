import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
// import SearchBox from '@/components/common/search-box'
import { HeaderWrapper } from './style'

const FoodSearch = () => {
  const navigate = useNavigate()
  // const [query, setQuery] = useState('')

  // const handleQuery = (q) => {
  //   setQuery(q)
  // }

  return (
    <>
      <HeaderWrapper>
        <i 
          className='iconfont icon-fanhui'
          onClick={() => navigate('/food')}
        ></i>
        <span>商品搜索</span>
      </HeaderWrapper>
      {/* <SearchBox
        newQuery={query}
        handleQuery={handleQuery}>
      </SearchBox>
      <span onClick={() => navigate(-1)}>取消</span> */}
    </>
  )
}

export default FoodSearch
