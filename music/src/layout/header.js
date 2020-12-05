import React from 'react'
import { Radio } from 'antd';

const Header = ({ language, changeLanguage }) => {

    const onChange = (e) => {
        changeLanguage(e.target.value)
    }

    return (
        <div className="header">
            <h2>{language.title}</h2>
            <Radio.Group className="radioLanguage" buttonStyle="solid" onChange={onChange} defaultValue={language.language}>
                <Radio.Button value="EN">EN</Radio.Button>
                <Radio.Button value="VN">VN</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default Header