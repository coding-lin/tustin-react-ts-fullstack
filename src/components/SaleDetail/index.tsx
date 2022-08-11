import React, { memo } from 'react'
import { Wrapper } from './style' 

interface DetailProps {
  detailList: any[];
}

const SaleDetail: React.FC<DetailProps> = (props) => {
  const { detailList } = props

  const renderInfo = () => {
    return detailList.map(item => (
      <div key={item.id}>
        <a onClick={() => scrollToAnchor(item.id)}>
          <span>{item.name}</span>
        </a>
      </div>
    ))
  }

  const scrollToAnchor = (anchorName: any) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName)
      if (anchorElement) {
        anchorElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  }

  const renderSaleSlide = () => {
    return detailList.map((item) => {
      return (
        <div className="menu-box-detail" key={item.id}>
          <div className="menu-top">
            <div className="top-title" id={item.id}>
              {item.name}
            </div>
          </div>
          <div className="menu-box">
            {
              item.foods.map((element: any) => {
                return (
                  <div key={element.id} className="menu-detail" >
                    <div className="menu-detail-box">
                      <div className="menu-item" key={element.id}>
                        <div className="img-box">
                          <img className="sale-img" src={element.img} />
                        </div>
                        <section>
                          <p className="food-name">
                            <span>{element.name}</span>
                          </p>
                          <p className="food-info">
                            <span>{element.info}</span>
                          </p>
                          <span className="food-price">
                            <span>￥{element.price}</span>
                          </span>
                          <div className="food-btn">
                            <span>+</span>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>   
                )
              })
            }
          </div>
        </div>
      )
    })
  }

  return (
    <Wrapper>
      <div className="sale-box">
        <div className="sale-main">
          <div className="sale-left">
            <ul>
              { renderInfo() }
            </ul>
          </div>
          <div className="sale-detail-box">
            <div className="sale-detail">
              { renderSaleSlide() }
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default memo(SaleDetail)