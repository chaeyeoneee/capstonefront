import React from 'react';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer_content'>
                <div className='logo'>
                    <img src={ require('./images/footerlogo.png') } alt="좋아하는그림"/>
                </div>
                <div className='info'>
                    <p className='info_content'>
                        동국대학교 정보통신공학과 캡스톤디자인 1조<br />
                        2017112165 김성민 2017112185 양명모 2018112100 김승범<br />
                        2017111751 김수빈 2019113586 정채연
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer